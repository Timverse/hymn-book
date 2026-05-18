import { AdMob, BannerAdSize, BannerAdPosition, RewardAdPluginEvents } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

// Production AdMob Unit IDs provided by user
const BANNER_AD_ID = 'ca-app-pub-6661828329234893/4071186103';
const REWARDED_AD_ID = 'ca-app-pub-6661828329234893/6365194418';

class AdMobServiceImpl {
  private isInitialized = false;

  async initialize(): Promise<void> {
    if (!Capacitor.isNativePlatform() || this.isInitialized) return;

    try {
      await AdMob.initialize({
        initializeForTesting: false,
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully');
    } catch (error) {
      console.error('Failed to initialize AdMob', error);
    }
  }

  async showBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      if (!this.isInitialized) await this.initialize();

      await AdMob.showBanner({
        adId: BANNER_AD_ID,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.TOP_CENTER,
        margin: 56, // Position cleanly below the top app bar
        isTesting: false,
      });
      console.log('Banner ad displayed');
    } catch (error) {
      console.error('Failed to show banner ad', error);
    }
  }

  async hideBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      await AdMob.hideBanner();
    } catch (error) {
      console.error('Failed to hide banner ad', error);
    }
  }

  async showRewardedAd(onSuccess: () => void, onError: (err: string) => void): Promise<void> {
    if (!Capacitor.isNativePlatform()) {
      // On web/desktop development, instantly simulate successful ad reward
      console.log('Web environment: Simulating rewarded ad success');
      onSuccess();
      return;
    }

    try {
      if (!this.isInitialized) await this.initialize();

      // Listen for reward completion
      const rewardListener = AdMob.addListener(RewardAdPluginEvents.Rewarded, () => {
        console.log('Rewarded ad completed successfully');
        onSuccess();
        rewardListener.then(listener => listener.remove());
      });

      const dismissListener = AdMob.addListener(RewardAdPluginEvents.Dismissed, () => {
        console.log('Rewarded ad dismissed');
        dismissListener.then(listener => listener.remove());
      });

      const failListener = AdMob.addListener(RewardAdPluginEvents.FailedToLoad, (error) => {
        console.error('Rewarded ad failed to load', error);
        onError('Ad failed to load. Please check your internet connection.');
        failListener.then(listener => listener.remove());
      });

      await AdMob.prepareRewardVideoAd({
        adId: REWARDED_AD_ID,
        isTesting: false,
      });

      await AdMob.showRewardVideoAd();
    } catch (error: unknown) {
      console.error('Error showing rewarded ad', error);
      const msg = error instanceof Error ? error.message : String(error);
      onError(`Failed to display rewarded ad: ${msg}`);
    }
  }
}

export const AdMobService = new AdMobServiceImpl();
