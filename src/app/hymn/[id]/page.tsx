import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HYMNS } from "@/data/hymns";
import LyricsViewer from "@/components/LyricsViewer";
import { ArrowLeft, Bookmark } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const hymn = HYMNS.find((h) => h.id === resolvedParams.id);
  if (!hymn) {
    return { title: "Ym Shem Jingrwai | Ka Kot Jingrwai" };
  }
  return {
    title: `${hymn.title} (Jingrwai #${hymn.number}) | Ka Kot Jingrwai`,
    description: `Ki kyntien ba pura jong ka ${hymn.title} (Jingrwai #${hymn.number}).`,
    keywords: [hymn.title, "jingrwai", "balang u khrist", "khasi hymns", "worship"],
    openGraph: {
      title: `${hymn.title} - Jingrwai #${hymn.number}`,
      description: `Pule ia ki kyntien jong ka ${hymn.title}.`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return HYMNS.map((hymn) => ({
    id: hymn.id,
  }));
}

export default async function HymnDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const hymn = HYMNS.find((h) => h.id === resolvedParams.id);

  if (!hymn) {
    notFound();
  }

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-20 space-y-12 sm:space-y-16">
      {/* Top Navigation & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200/80 pb-6 gap-4 sm:gap-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors group p-1"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Hymns</span>
        </Link>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 font-mono text-xs sm:text-sm font-bold tracking-wider shadow-2xs">
            <Bookmark className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" /> #{hymn.number}
          </span>
        </div>
      </div>

      {/* Hymn Header */}
      <header className="space-y-4 text-center max-w-4xl mx-auto px-2">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight pt-2 leading-[1.15]">
          {hymn.title}
        </h1>
      </header>

      {/* Lyrics Viewer */}
      <section aria-label="Hymn Lyrics">
        <LyricsViewer verses={hymn.verses} chorus={hymn.chorus} />
      </section>
    </div>
  );
}
