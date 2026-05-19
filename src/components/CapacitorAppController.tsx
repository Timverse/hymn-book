"use client";

import { useEffect } from 'react';
import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { useRouter, usePathname } from 'next/navigation';
import { UnityAdsService } from '@/services/UnityAdsService';
import { useAppNetwork } from '@/context/NetworkContext';

export default function CapacitorAppController() {
  const router = useRouter();
  const pathname = usePathname();
  const { isOnline } = useAppNetwork();

  // Initialize Unity Ads Banner when online
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      UnityAdsService.initialize().then(() => {
        if (isOnline) {
          UnityAdsService.showBanner();
        } else {
          UnityAdsService.hideBanner();
        }
      });
    }
  }, [isOnline]);

  // Handle native hardware back button
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    const handleBackButton = async ({ canGoBack }: { canGoBack: boolean }) => {
      // If we are not on the root screen, navigate back within the app history
      if (pathname !== '/') {
        router.back();
      } else {
        // If we are on the root screen, exit the app cleanly
        await CapacitorApp.exitApp();
      }
    };

    const listener = CapacitorApp.addListener('backButton', handleBackButton);

    return () => {
      listener.then(l => l.remove());
    };
  }, [pathname, router]);

  return null;
}
