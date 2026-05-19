import { registerPlugin } from '@capacitor/core';
import { Capacitor } from '@capacitor/core';

export interface UnityAdsPlugin {
  initialize(options: { gameId: string; testMode: boolean }): Promise<void>;
  loadAd(options: { placementId: string }): Promise<void>;
  showAd(options: { placementId: string }): Promise<{ completed: boolean }>;
  showBanner(options: { placementId: string }): Promise<void>;
  hideBanner(): Promise<void>;
}

const UnityAdsNative = registerPlugin<UnityAdsPlugin>('UnityAds');

// Unity Ads Game ID and Placement IDs
// Replace with your actual production IDs from the Unity Dashboard
const GAME_ID = '6118159'; // Production Android Game ID from Unity Dashboard
const BANNER_PLACEMENT_ID = 'Banner_Android';
const REWARDED_PLACEMENT_ID = 'Rewarded_Android';

class UnityAdsServiceImpl {
  private isInitialized = false;

  async initialize(): Promise<void> {
    if (!Capacitor.isNativePlatform() || this.isInitialized) return;

    try {
      await UnityAdsNative.initialize({
        gameId: GAME_ID,
        testMode: true, // Set to true for development testing to ensure guaranteed ad fill
      });
      this.isInitialized = true;
      console.log('Unity Ads initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Unity Ads', error);
    }
  }

  async showBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      if (!this.isInitialized) await this.initialize();

      await UnityAdsNative.showBanner({
        placementId: BANNER_PLACEMENT_ID,
      });
      console.log('Unity Ads banner displayed');
    } catch (error) {
      console.error('Failed to show Unity Ads banner', error);
    }
  }

  async hideBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      await UnityAdsNative.hideBanner();
    } catch (error) {
      console.error('Failed to hide Unity Ads banner', error);
    }
  }

  async showRewardedAd(onSuccess: () => void, onError: (err: string) => void): Promise<void> {
    if (!Capacitor.isNativePlatform()) {
      // On web/desktop development, instantly simulate successful ad reward
      console.log('Web environment: Simulating Unity rewarded ad success');
      onSuccess();
      return;
    }

    try {
      if (!this.isInitialized) await this.initialize();

      // First load the rewarded ad
      await UnityAdsNative.loadAd({ placementId: REWARDED_PLACEMENT_ID });

      // Then show the rewarded ad
      const result = await UnityAdsNative.showAd({ placementId: REWARDED_PLACEMENT_ID });
      if (result.completed) {
        console.log('Unity rewarded ad completed successfully');
        onSuccess();
      } else {
        console.log('Unity rewarded ad was skipped or dismissed early');
        onError('Ad was skipped. Please watch the full ad to download the song.');
      }
    } catch (error: unknown) {
      console.warn('Unity Ads network load failed, gracefully falling back to allow song download:', error);
      // Gracefully allow the user to download the hymn even if the ad network fails to load
      onSuccess();
    }
  }
}

export const UnityAdsService = new UnityAdsServiceImpl();
