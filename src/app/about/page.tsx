import React from "react";
import Link from "next/link";
import { BookOpen, Sparkles, CheckCircle, Heart, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaphang | Ka Kot Jingrwai",
  description: "Sngewthuh shaphang ka thong bad ka jingpynkhreh ia Ka Kot Jingrwai jong ka Balang U Khrist.",
};

export default function AboutPage() {
  const features = [
    {
      title: "Ka Jingpynkhreh Ba Pura",
      description: "Man la ka jingrwai la pynkhreh ban pynneh ia ki kyntien bad ki dkhot ba tynrai.",
    },
    {
      title: "Ka Jingpule Ba Shai",
      description: "La pynwandur da ki dak kiba shai, ki rukom pule ba lah ban pynkylla (Phngain, Stem, Dum), bad ka saiz dak ba lah ban pynheh pynrit na bynta ka jingmane balang.",
    },
    {
      title: "Ka Jingwad Ba Stet",
      description: "Wad stet ia kano kano ka jingrwai da kaba thoh ia ka kyrteng, u nombar, lane ki kyntien.",
    },
    {
      title: "Ka Jingtrei Kam Ba Stet",
      description: "La shna ban plie stet khlem da pynslem, ban pynsuk ia ka jingplie wat ha ki jaka ba tlot ka netwrok.",
    },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Hero Section */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wide shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span>Ka Thong Jong Ngi</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
          Pynneh Pynsah Ia Ki Jingrwai <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900">
            Balang U Khrist
          </span>
        </h1>
        <p className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
          Ka Kot Jingrwai la shna na bynta ka jingburom ia ka history jong ki jingrwai mane Blei. Ka rynsan jong ngi ka pyniasoh ia ki jingrwai tynrai bad ka juk shna kot digital ba mynta.
        </p>
      </header>

      {/* Core Values / Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="bg-white rounded-3xl border border-stone-200/80 p-8 shadow-xs hover:shadow-md transition-shadow space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shadow-2xs">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">{feat.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{feat.description}</p>
          </div>
        ))}
      </section>

      {/* Story Section */}
      <section className="bg-[#FAF9F6] border border-stone-200 rounded-3xl p-8 sm:p-12 md:p-16 space-y-8 shadow-2xs">
        <div className="max-w-3xl mx-auto space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed font-serif">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight text-center mb-8 not-italic">
            Ka Mynsiem Ha Lyndet Ka Kot Jingrwai
          </h2>
          <p>
            La bun spah snem, ki jingrwai ki la long ka nongrim jong ka jingmane Blei. Kine ki jingrwai ki la ai jingpyntngen ha ki jingjynjar, ka jingshlur ha ki jingtynjuh, bad ka jingkmen ha ki jingrakhe.
          </p>
          <p>
            Hynrei, bun ki application jingrwai mynta ki don ki jingpynthut bad ki advertisement. Ka Kot Jingrwai la shna kyrpang ban long ka jaka ba khuid bad ba shai. Man la i bynta la pynkhreh na bynta ka jingburom bad ka jingpule ba shai.
          </p>
          <blockquote className="border-l-4 border-amber-700 pl-6 py-2 my-8 italic text-stone-900 font-semibold text-lg sm:text-xl bg-amber-50/50 rounded-r-xl">
            &ldquo;Hadien ka Ktien U Blei, ka jingrwai ka long ka spah ba kordor tam ha ka pyrthei.&rdquo;
            <span className="block text-xs font-sans font-bold text-amber-800 mt-2 not-italic">— Martin Luther</span>
          </blockquote>
          <p>
            La phi long u nongialam jingmane, u nonghikai rwai, lane uba mane shimet, Ka Kot Jingrwai ka long ka paralok ba shaniah jong phi.
          </p>
        </div>
      </section>

      {/* CTA */}
      <footer className="text-center max-w-2xl mx-auto space-y-6 pt-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 text-white flex items-center justify-center mx-auto shadow-md shadow-amber-900/10">
          <BookOpen className="w-8 h-8 animate-pulse" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Sdang Ia Ka Jingmane Jong Phi</h3>
        <p className="text-stone-600 text-base leading-relaxed max-w-lg mx-auto">
          Wad ia ki jingrwai lane buh ia ki jingrwai ba phi jied tam mynta ka sngi.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Peit Ia Ki Jingrwai</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
