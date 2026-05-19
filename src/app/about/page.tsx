import React from "react";
import Link from "next/link";
import { BookOpen, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Hymn Book",
  description: "Learn about the mission, history, and features of The Hymn Book of the Church of Christ.",
};

export default function AboutPage() {
  const features = [
    {
      title: "Complete Hymn Collection",
      description: "Every hymn is carefully formatted to preserve its traditional verses, choruses, and numbering.",
    },
    {
      title: "Customizable Reading Experience",
      description: "Designed with clear typography, adjustable reading themes (Light, Sepia, Dark), and scalable font sizes for personal or congregational worship.",
    },
    {
      title: "Instant Search",
      description: "Quickly find any hymn by typing its title, number, or keywords from the lyrics.",
    },
    {
      title: "Offline First Architecture",
      description: "Built to load instantly and function smoothly even in areas with poor or no internet connectivity after downloading songs.",
    },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-16 animate-fadeIn">
      {/* Hero Section */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wide shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span>Our Mission</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
          Preserving the Hymns of the <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900">
            Church of Christ
          </span>
        </h1>
        <p className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
          The Hymn Book is designed to honor the rich heritage of Christian worship. Our platform bridges traditional hymns with modern digital convenience.
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
            The Spirit Behind The Hymn Book
          </h2>
          <p>
            For generations, hymns have formed the bedrock of Christian worship. These timeless songs provide comfort in trials, courage in testing, and joy in celebration.
          </p>
          <p>
            However, many modern hymn applications are cluttered with distracting interfaces. The Hymn Book is crafted specifically to provide a clean, distraction-free environment. Every element is designed to facilitate reverence and easy reading.
          </p>
          <blockquote className="border-l-4 border-amber-700 pl-6 py-2 my-8 italic text-stone-900 font-semibold text-lg sm:text-xl bg-amber-50/50 rounded-r-xl">
            &ldquo;Next to the Word of God, music deserves the highest praise.&rdquo;
            <span className="block text-xs font-sans font-bold text-amber-800 mt-2 not-italic">— Martin Luther</span>
          </blockquote>
          <p>
            Whether you are a worship leader, choir director, or seeking personal devotion, The Hymn Book is your trusted companion in worship.
          </p>
        </div>
      </section>

      {/* CTA */}
      <footer className="text-center max-w-2xl mx-auto space-y-6 pt-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 text-white flex items-center justify-center mx-auto shadow-md shadow-amber-900/10">
          <BookOpen className="w-8 h-8 animate-pulse" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Start Your Worship Experience</h3>
        <p className="text-stone-600 text-base leading-relaxed max-w-lg mx-auto">
          Explore the catalog or curate your personal favorite hymns today.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Browse All Hymns</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
