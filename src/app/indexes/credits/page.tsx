"use client";

import React from "react";
import IndexTabs from "@/components/IndexTabs";
import { Award, Heart, Sparkles, Code, BookOpen } from "lucide-react";

export default function CreditsIndexPage() {
  return (
    <div className="flex-1 flex flex-col w-full bg-[#FAF9F6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-fadeIn">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Ki Nongshna & Burom (Credits & Dedication)
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
            Ka jingai burom ia kiba la trei shitom ban pynbit pynbiang bad pynneh pynsah ia kane ka kot jingrwai.
          </p>
        </div>

        {/* Shared Index Tabs */}
        <IndexTabs />

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn">
          {/* Main Developer Credit Card */}
          <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-amber-700/30">
            <div className="absolute inset-0 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs font-semibold tracking-wide">
                <Code className="w-3.5 h-3.5 animate-pulse" />
                <span>Nongshna Website (Lead Developer)</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 font-extrabold">Eddie</span>
              </h2>

              <p className="text-amber-100/90 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
                La shna bad pynbit pynbiang da U Eddie na bynta ka burom jong U Blei bad ban pynsuk ia ki para bangeit ha ka jingmane shimet bad ka jingmane balang.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-amber-200/80 font-medium border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-300" /> Khasi Hymnbook Digitalization
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-400 fill-red-400" /> La shna da ka jingieit
                </span>
              </div>
            </div>
          </section>

          {/* Acknowledgements & Church Heritage */}
          <section className="bg-white border border-stone-200/80 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shadow-2xs flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Ka Jingnguh Bad Ka Jingburom
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 leading-relaxed text-base">
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-800" /> Ki Nongpynkylla Hyndai
                </h4>
                <p>
                  Ngi ai khublei bad burom ia ki Pastor, ki tymmen basan, ki missionary, bad ki nongrwai hyndai kiba la pynkylla bad shna ia kine ki jingrwai kiba kordor. Ka jingtrei shitom jong ki ka la long ka mawnongrim ia ka jingngeit jong ngi mynta.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-800" /> Ka Balang U Khrist
                </h4>
                <p>
                  Kane ka digital hymnal ka long kaba la pynkhreh kyrpang ban pynneh pynsah ia ka sur bad ki kyntien Khasi ba shisha ha ki jingrwai mane Blei, khnang ba ki pateng ban dang wan kin ioh ban rwai bad pyndonburom ia U Trai.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F6] border border-stone-200/60 rounded-2xl p-6 text-center space-y-2">
              <p className="text-sm font-medium text-stone-800 italic">
                &ldquo;To rwai ha U Trai ka jingrwai kaba thymmai; to rwai ha U Trai, ko pyrthei baroh.&rdquo;
              </p>
              <p className="text-xs font-semibold text-amber-800">— Salm 96:1</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
