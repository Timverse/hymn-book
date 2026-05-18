"use client";

import React, { useState, useEffect, useCallback } from "react";
import { DAILY_VERSES, DailyVerse } from "@/data/dailyVerses";
import { Sparkles, Copy, Check, Share2, Bell, BellRing, RefreshCw } from "lucide-react";
import { LocalNotifications } from "@capacitor/local-notifications";

export default function DailyVerseHero() {
  const [verse, setVerse] = useState<DailyVerse>(DAILY_VERSES[0]);
  const [copied, setCopied] = useState(false);
  const [isReminderSet, setIsReminderSet] = useState(false);
  const [isNative, setIsNative] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const selectNextNonRepeatingVerse = useCallback(() => {
    if (typeof window === "undefined") return DAILY_VERSES[0];

    try {
      let usedIds: number[] = JSON.parse(localStorage.getItem("usedVerseIds") || "[]");
      let available = DAILY_VERSES.filter(v => !usedIds.includes(v.id));

      // If all verses have been used, reset the cycle
      if (available.length === 0) {
        usedIds = [];
        available = DAILY_VERSES;
      }

      // Pick a random verse from the unused pool
      const randomIndex = Math.floor(Math.random() * available.length);
      const selected = available[randomIndex];

      // Mark as used
      usedIds.push(selected.id);
      localStorage.setItem("usedVerseIds", JSON.stringify(usedIds));
      return selected;
    } catch (e) {
      console.error("Error managing used verses:", e);
      return DAILY_VERSES[Math.floor(Math.random() * DAILY_VERSES.length)];
    }
  }, []);

  useEffect(() => {
    // Check local storage for today's active verse or get a new non-repeating one
    const todayStr = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const savedDate = localStorage.getItem("dailyVerseDate");
    const savedVerseId = localStorage.getItem("dailyVerseId");

    if (savedDate === todayStr && savedVerseId) {
      const found = DAILY_VERSES.find(v => v.id === Number(savedVerseId));
      if (found) {
        setVerse(found);
      } else {
        const nextV = selectNextNonRepeatingVerse();
        setVerse(nextV);
        localStorage.setItem("dailyVerseDate", todayStr);
        localStorage.setItem("dailyVerseId", nextV.id.toString());
      }
    } else {
      const nextV = selectNextNonRepeatingVerse();
      setVerse(nextV);
      localStorage.setItem("dailyVerseDate", todayStr);
      localStorage.setItem("dailyVerseId", nextV.id.toString());
    }

    // Check if running in Capacitor native runtime
    if (typeof window !== "undefined" && (window as any).Capacitor?.isNative) {
      setIsNative(true);
      LocalNotifications.checkPermissions().then(perm => {
        if (perm.display === "granted") {
          setIsReminderSet(true);
        }
      }).catch(e => console.error("Permission check error:", e));
    }
  }, [selectNextNonRepeatingVerse]);

  const handleRefreshRandomVerse = () => {
    setIsRotating(true);
    setTimeout(() => {
      const nextV = selectNextNonRepeatingVerse();
      setVerse(nextV);
      // Update current active daily verse
      const todayStr = new Date().toISOString().split('T')[0];
      localStorage.setItem("dailyVerseDate", todayStr);
      localStorage.setItem("dailyVerseId", nextV.id.toString());
      setIsRotating(false);
    }, 300);
  };

  const handleCopy = async () => {
    const textToCopy = `${verse.reference}\n\nKhasi: ${verse.khasiText}\n\nEnglish: ${verse.englishText}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `Ka Dkhot Ba-Man-Ka-Sngi (${verse.reference})`,
      text: `${verse.reference}\n\nKhasi: ${verse.khasiText}\n\nEnglish: ${verse.englishText}\n\nKa Kot Jingrwai App`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        console.error("Share error:", e);
      }
    } else {
      handleCopy();
      alert("La copy ia ka dkhot ha clipboard!");
    }
  };

  const scheduleDailyNotifications = async () => {
    try {
      if (!isNative) {
        alert("Ka jingpyntip (Notification) ka treikam tang haba pyndonkam ha ka App (Android/iOS).");
        return;
      }

      const perm = await LocalNotifications.requestPermissions();
      if (perm.display !== "granted") {
        alert("Sngewbha plie ia ka jingbit (permissions) ban ioh jingpyntip man ka sngi.");
        return;
      }

      // Cancel any existing notifications
      const pending = await LocalNotifications.getPending();
      if (pending.notifications.length > 0) {
        await LocalNotifications.cancel({ notifications: pending.notifications });
      }

      const pendingList = [];
      const now = new Date();

      // Get unused pool for notifications
      let usedIds: number[] = JSON.parse(localStorage.getItem("usedVerseIds") || "[]");
      let available = DAILY_VERSES.filter(v => !usedIds.includes(v.id));

      // Schedule for the next 30 days
      for (let i = 0; i < 30; i++) {
        const scheduleDate = new Date();
        scheduleDate.setDate(now.getDate() + i);
        scheduleDate.setHours(8, 0, 0, 0); // 8:00 AM every morning

        if (i === 0 && now.getHours() >= 8) {
          continue;
        }

        if (available.length === 0) {
          available = DAILY_VERSES; // refill if exhausted
        }

        // Take next available
        const dailyVerse = available.shift() || DAILY_VERSES[0];

        pendingList.push({
          id: dailyVerse.id + (i * 100),
          title: `Ka Dkhot Ba-Man-Ka-Sngi (${dailyVerse.reference})`,
          body: `${dailyVerse.khasiText}\n\n${dailyVerse.englishText}`,
          schedule: { at: scheduleDate },
          extra: { reference: dailyVerse.reference }
        });
      }

      await LocalNotifications.schedule({ notifications: pendingList });
      setIsReminderSet(true);
      alert("La pynbeit ban phah jingpyntip (Notification) man ka step por 8:00 AM!");
    } catch (e) {
      console.error("Error scheduling notifications:", e);
      alert("Ym lah ban pynbeit ia ki notification.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white py-16 sm:py-20 md:py-28 border-b border-stone-800 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-8 sm:space-y-12 animate-fadeIn">
        {/* Top Badge & Refresh Button */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse flex-shrink-0" />
            <span>Ka Dkhot Ba-Man-Ka-Sngi (Daily Verse)</span>
          </div>

          <button
            type="button"
            onClick={handleRefreshRandomVerse}
            disabled={isRotating}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50"
            aria-label="Get another random verse"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${isRotating ? "animate-spin" : ""}`} />
            <span>Pynkylla Dkhot (New Verse)</span>
          </button>
        </div>

        {/* Verse Reference */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 tracking-tight leading-tight">
          {verse.reference}
        </h1>

        {/* Verse Text: Khasi & English */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-2 sm:px-4 text-left">
          {/* Khasi Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm space-y-3 shadow-lg hover:border-amber-500/30 transition-all group">
            <span className="text-xs font-mono font-bold text-amber-400/90 uppercase tracking-widest block border-b border-white/10 pb-2">
              Khasi Translation
            </span>
            <p className="font-serif text-base sm:text-lg md:text-xl font-normal italic leading-relaxed text-amber-50/95 tracking-wide">
              &ldquo;{verse.khasiText}&rdquo;
            </p>
          </div>

          {/* English Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm space-y-3 shadow-lg hover:border-amber-500/30 transition-all group">
            <span className="text-xs font-mono font-bold text-amber-400/90 uppercase tracking-widest block border-b border-white/10 pb-2">
              English Translation
            </span>
            <p className="font-serif text-base sm:text-lg md:text-xl font-normal italic leading-relaxed text-amber-50/95 tracking-wide">
              &ldquo;{verse.englishText}&rdquo;
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Copy Verse"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-amber-300" />}
            <span>{copied ? "La Copy" : "Copy"}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400 font-semibold"
            aria-label="Share Verse"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>

          {isNative && (
            <button
              type="button"
              onClick={scheduleDailyNotifications}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                isReminderSet
                  ? "bg-green-600/20 border-green-500/30 text-green-200 hover:bg-green-600/30"
                  : "bg-white/10 border-white/15 text-amber-200 hover:bg-white/20"
              }`}
              aria-label="Enable Daily Reminders"
            >
              {isReminderSet ? <BellRing className="w-4 h-4 text-green-400 animate-bounce" /> : <Bell className="w-4 h-4 text-amber-300" />}
              <span>{isReminderSet ? "Reminders Active (8 AM)" : "Set Daily Reminder"}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
