"use client";

import React, { useState, useMemo } from "react";
import { HYMNS } from "@/data/hymns";
import HymnCard from "@/components/HymnCard";
import SearchBar from "@/components/SearchBar";
import { BookOpen, Sparkles, Music } from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>("Baroh");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    setCurrentPage(1);
  };

  const filteredHymns = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    let list = HYMNS;

    if (selectedSection !== "Baroh") {
      if (selectedSection === "Ki Jingrwai") {
        list = list.filter(h => !h.section || h.section === "Hymns");
      } else {
        list = list.filter(h => h.section === selectedSection);
      }
    }

    if (!query) return list;

    return list.filter((hymn) => {
      const matchesTitle = hymn.title.toLowerCase().includes(query);
      const matchesNumber = hymn.number.toString() === query || `#${hymn.number}` === query;
      const matchesLyrics = hymn.verses.some((verse) => verse.toLowerCase().includes(query)) ||
                            (hymn.chorus && hymn.chorus.toLowerCase().includes(query));

      return matchesTitle || matchesNumber || matchesLyrics;
    });
  }, [searchQuery, selectedSection]);

  const totalPages = Math.ceil(filteredHymns.length / itemsPerPage);

  const displayedHymns = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredHymns.slice(start, start + itemsPerPage);
  }, [filteredHymns, currentPage]);

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F4F3EE] to-[#FAF9F6] py-20 md:py-28 border-b border-stone-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(#E7E5DF_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wide shadow-2xs animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
            <span>Ka Kot Jingrwai - Balang U Khrist</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Ka Kot Jingrwai Jong Ka <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900">
              Balang U Khrist
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Wad bad rwai ia ki jingrwai mane Blei ba la pynkhreh pynjanai ryngkat ki kyntien ba pura bad ka jingwad ba stet.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-2xl mx-auto w-full">
            <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-1 w-full space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200/80 pb-6 gap-4">
          <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-amber-800" />
            <span>Ki Jingrwai</span>
            <span className="text-xs font-sans font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600">
              {filteredHymns.length} {filteredHymns.length === 1 ? "Jingrwai" : "Jingrwai"}
            </span>
          </h2>

          {/* Section Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {(["Baroh", "Ki Jingrwai", "Ki Jingrwai Khoros", "Ki Jingrwai Praise"] as const).map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => handleSectionChange(section)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                  selectedSection === section
                    ? "bg-amber-800 text-white shadow-xs"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Hymn Grid */}
        {displayedHymns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fadeIn" role="list">
            {displayedHymns.map((hymn) => (
              <HymnCard key={hymn.id} hymn={hymn} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-stone-200/80 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4 shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mx-auto shadow-2xs">
              <Music className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">Ym Shem Jingrwai</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Ngi ym shym la shem jingrwai ba iadei bad &ldquo;<strong className="text-stone-800">{searchQuery}</strong>&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => handleSearchChange("")}
              className="mt-2 px-6 py-2.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-xs"
            >
              Wad Biang
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-stone-200/80 pt-8 mt-12">
            <button
              type="button"
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-5 py-2.5 rounded-full border border-stone-200 bg-white text-stone-700 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-2xs"
            >
              Kaba Shuwa
            </button>
            <span className="text-sm font-medium text-stone-600">
              Sla <strong className="text-stone-900">{currentPage}</strong> na <strong className="text-stone-900">{totalPages}</strong>
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-5 py-2.5 rounded-full border border-stone-200 bg-white text-stone-700 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-2xs"
            >
              Kaba Bud
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
