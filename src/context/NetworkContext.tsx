"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Network } from '@capacitor/network';

interface NetworkContextType {
  isOnline: boolean;
  downloadedHymns: string[];
  downloadHymn: (id: string) => void;
  isHymnDownloaded: (id: string) => boolean;
}

const NetworkContext = createContext<NetworkContextType>({
  isOnline: true,
  downloadedHymns: [],
  downloadHymn: () => {},
  isHymnDownloaded: () => false,
});

const STORAGE_KEY = 'hymn_downloads_v1';

export function NetworkProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(true);
  const [downloadedHymns, setDownloadedHymns] = useState<string[]>([]);

  // Initialize network status & local storage downloads
  useEffect(() => {
    // Load downloaded hymns from localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setDownloadedHymns(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load downloaded hymns', error);
    }

    // Check initial network status
    const checkInitialStatus = async () => {
      try {
        const status = await Network.getStatus();
        setIsOnline(status.connected);
      } catch (error) {
        console.error('Failed to get initial network status', error);
      }
    };
    checkInitialStatus();

    // Listen for network changes
    const listener = Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed:', status.connected ? 'Online' : 'Offline');
      setIsOnline(status.connected);
    });

    return () => {
      listener.then(l => l.remove());
    };
  }, []);

  const downloadHymn = (id: string) => {
    setDownloadedHymns(prev => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to save downloaded hymn to storage', error);
      }
      return updated;
    });
  };

  const isHymnDownloaded = (id: string) => {
    return downloadedHymns.includes(id);
  };

  return (
    <NetworkContext.Provider value={{ isOnline, downloadedHymns, downloadHymn, isHymnDownloaded }}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useAppNetwork() {
  return useContext(NetworkContext);
}
