package com.timverse.hymnbook;

import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.unity3d.ads.IUnityAdsInitializationListener;
import com.unity3d.ads.IUnityAdsLoadListener;
import com.unity3d.ads.IUnityAdsShowListener;
import com.unity3d.ads.UnityAds;
import com.unity3d.services.banners.BannerErrorInfo;
import com.unity3d.services.banners.BannerView;
import com.unity3d.services.banners.UnityBannerSize;

import java.util.Objects;

@CapacitorPlugin(name = "UnityAds")
public class UnityAdsPlugin extends Plugin {

    private BannerView bannerView;

    @PluginMethod
    public void initialize(PluginCall call) {
        String gameId = call.getString("gameId");
        Boolean testMode = call.getBoolean("testMode", true);

        if (gameId == null) {
            call.reject("Must provide a gameId");
            return;
        }

        getActivity().runOnUiThread(() -> {
            UnityAds.initialize(getActivity().getApplicationContext(), gameId, testMode != null && testMode, new IUnityAdsInitializationListener() {
                @Override
                public void onInitializationComplete() {
                    call.resolve();
                }

                @Override
                public void onInitializationFailed(UnityAds.UnityAdsInitializationError error, String message) {
                    call.reject("Initialization failed: " + message);
                }
            });
        });
    }

    @PluginMethod
    public void loadAd(PluginCall call) {
        String placementId = call.getString("placementId");
        if (placementId == null) {
            call.reject("Must provide a placementId");
            return;
        }

        getActivity().runOnUiThread(() -> {
            UnityAds.load(placementId, new IUnityAdsLoadListener() {
                @Override
                public void onUnityAdsAdLoaded(String placementId) {
                    call.resolve();
                }

                @Override
                public void onUnityAdsFailedToLoad(String placementId, UnityAds.UnityAdsLoadError error, String message) {
                    call.reject("Failed to load ad: " + message);
                }
            });
        });
    }

    @PluginMethod
    public void showAd(PluginCall call) {
        String placementId = call.getString("placementId");
        if (placementId == null) {
            call.reject("Must provide a placementId");
            return;
        }

        getActivity().runOnUiThread(() -> {
            UnityAds.show(getActivity(), placementId, new IUnityAdsShowListener() {
                @Override
                public void onUnityAdsShowFailure(String placementId, UnityAds.UnityAdsShowError error, String message) {
                    call.reject("Failed to show ad: " + message);
                }

                @Override
                public void onUnityAdsShowStart(String placementId) {}

                @Override
                public void onUnityAdsShowClick(String placementId) {}

                @Override
                public void onUnityAdsShowComplete(String placementId, UnityAds.UnityAdsShowCompletionState state) {
                    JSObject ret = new JSObject();
                    ret.put("completed", Objects.equals(state, UnityAds.UnityAdsShowCompletionState.COMPLETED));
                    call.resolve(ret);
                }
            });
        });
    }

    @PluginMethod
    public void showBanner(PluginCall call) {
        String placementId = call.getString("placementId");
        if (placementId == null) {
            call.reject("Must provide a placementId");
            return;
        }

        getActivity().runOnUiThread(() -> {
            if (bannerView != null) {
                hideBanner(null);
            }

            bannerView = new BannerView(getActivity(), placementId, new UnityBannerSize(320, 50));
            bannerView.setListener(new BannerView.IListener() {
                @Override
                public void onBannerLoaded(BannerView bannerView) {
                    call.resolve();
                }

                @Override
                public void onBannerShown(BannerView bannerView) {}

                @Override
                public void onBannerClick(BannerView bannerView) {}

                @Override
                public void onBannerFailedToLoad(BannerView bannerView, BannerErrorInfo bannerErrorInfo) {
                    call.reject("Banner failed to load: " + bannerErrorInfo.errorMessage);
                }

                @Override
                public void onBannerLeftApplication(BannerView bannerView) {}
            });

            FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.WRAP_CONTENT,
                FrameLayout.LayoutParams.WRAP_CONTENT
            );
            params.gravity = Gravity.TOP | Gravity.CENTER_HORIZONTAL;

            ViewGroup rootView = (ViewGroup) getActivity().getWindow().getDecorView().getRootView();
            rootView.addView(bannerView, params);
            bannerView.load();
        });
    }

    @PluginMethod
    public void hideBanner(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            if (bannerView != null) {
                ViewGroup rootView = (ViewGroup) getActivity().getWindow().getDecorView().getRootView();
                rootView.removeView(bannerView);
                bannerView.destroy();
                bannerView = null;
            }
            if (call != null) {
                call.resolve();
            }
        });
    }
}
