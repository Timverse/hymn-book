import React from "react";
import Link from "next/link";
import { BookOpen, Sparkles, CheckCircle, Heart, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Canticle Archive",
  description: "Learn about the mission, editorial standards, and technological excellence behind the Canticle Hymnal Archive.",
};

export default function AboutPage() {
  const features = [
    {
      title: "Timeless Editorial Integrity",
      description: "Every hymn is transcribed to preserve original poetic structures and verses without compromise.",
    },
    {
      title: "Universal Readability",
      description: "Designed with elegant serif and sans-serif typography, customizable reading modes (Light, Sepia, Dark), and adjustable font sizing for congregational use.",
    },
    {
      title: "Universal Search Engine",
      description: "Instantly locate any hymn by searching for its title, song number, or exact phrases within the lyrics.",
    },
    {
      title: "Blazing Fast Performance",
      description: "Engineered with Next.js and Tailwind CSS for instant load times under 2 seconds, ensuring seamless access even on slower cellular connections.",
    },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Hero Section */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wide shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span>Our Sacred Mission</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
          Preserving the Heritage of <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900">
            Christian Hymnody
          </span>
        </h1>
        <p className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
          Canticle was born out of a profound reverence for the rich history of sacred music. Our platform bridges timeless theological poetry with modern, accessible digital design.
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
            The Heart Behind the Archive
          </h2>
          <p>
            For centuries, hymns have served as the theological bedrock of Christian worship. From the quiet monastic chants of the early church to the fervent revival anthems of the 18th century, these songs have offered solace in suffering, courage in trial, and exuberant joy in celebration.
          </p>
          <p>
            However, many modern digital representations of these classic works are cluttered with distracting advertisements, poor typography, and sluggish interfaces. Canticle was crafted to provide an elevated, distraction-free sanctuary. Every detail—from the gentle cream background tones to the carefully adjusted line heights—has been optimized for pure reverence and readability.
          </p>
          <blockquote className="border-l-4 border-amber-700 pl-6 py-2 my-8 italic text-stone-900 font-semibold text-lg sm:text-xl bg-amber-50/50 rounded-r-xl">
            &ldquo;Next to the Word of God, the noble art of music is the greatest treasure in the world.&rdquo;
            <span className="block text-xs font-sans font-bold text-amber-800 mt-2 not-italic">— Martin Luther</span>
          </blockquote>
          <p>
            Whether you are a worship leader planning Sunday liturgy, a choir director seeking classic lyrics, or an individual seeking quiet morning devotion, Canticle is designed to be your faithful companion.
          </p>
        </div>
      </section>

      {/* CTA */}
      <footer className="text-center max-w-2xl mx-auto space-y-6 pt-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 text-white flex items-center justify-center mx-auto shadow-md shadow-amber-900/10">
          <BookOpen className="w-8 h-8 animate-pulse" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Begin Your Worship Journey</h3>
        <p className="text-stone-600 text-base leading-relaxed max-w-lg mx-auto">
          Explore our complete catalog of hymns or create your personal collection of favorites today.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Explore the Hymnal</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
