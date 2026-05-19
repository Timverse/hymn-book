"use client";

import React, { useState, useMemo } from "react";
import { HYMNS } from "@/data/hymns";
import HymnCard from "@/components/HymnCard";
import SearchBar from "@/components/SearchBar";
import DailyVerseHero from "@/components/DailyVerseHero";
import { BookOpen, Music, WifiOff, Download } from "lucide-react";
import { useAppNetwork } from "@/context/NetworkContext";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>("Baroh");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const { isOnline, downloadedHymns } = useAppNetwork();

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

    // Filter by offline downloads if not online
    if (!isOnline) {
      list = list.filter(h => downloadedHymns.includes(h.id));
    }

    if (selectedSection !== "Baroh") {
      if (selectedSection === "Ki Jingrwai") {
        list = list.filter(h => !h.section || h.section === "Ki Jingrwai" || h.section === "Hymns");
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
  }, [searchQuery, selectedSection, isOnline, downloadedHymns]);

  const totalPages = Math.ceil(filteredHymns.length / itemsPerPage);

  const displayedHymns = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredHymns.slice(start, start + itemsPerPage);
  }, [filteredHymns, currentPage]);

  const sectionLabels: Record<string, string> = {
    "Baroh": "All Hymns",
    "Ki Jingrwai": "Hymns",
    "Ki Jingrwai Khoros": "Choruses",
    "Ki Jingrwai Praise": "Praise Songs"
  };

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Daily Verse Hero Section */}
      <DailyVerseHero />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 md:py-16 flex-1 w-full space-y-8 sm:space-y-12">
        {/* Offline Warning Banner */}
        {!isOnline && (
          <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs animate-fadeIn">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <WifiOff className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-stone-900 tracking-tight">Offline Mode Active</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                  You are offline. Showing <strong className="text-stone-900">{downloadedHymns.length} downloaded songs</strong> available for offline worship.
                </p>
              </div>
            </div>
            <div className="bg-white/80 border border-amber-200 text-amber-900 text-xs font-semibold px-3.5 py-1.5 rounded-xl shadow-2xs whitespace-nowrap self-stretch sm:self-auto text-center">
              Internet Required for Full Catalog
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto w-full px-2 sm:px-0">
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-stone-200/80 pb-6 gap-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-amber-800 flex-shrink-0" />
            <span>Hymn Catalog</span>
            <span className="text-xs sm:text-sm font-sans font-medium px-3 py-1 rounded-full bg-stone-100 text-stone-600">
              {filteredHymns.length} {filteredHymns.length === 1 ? "Song" : "Songs"}
            </span>
          </h2>

          {/* Section Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 lg:pb-0 scrollbar-none w-full lg:w-auto justify-start lg:justify-end">
            {(["Baroh", "Ki Jingrwai", "Ki Jingrwai Khoros", "Ki Jingrwai Praise"] as const).map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => handleSectionChange(section)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 flex-shrink-0 ${
                  selectedSection === section
                    ? "bg-amber-800 text-white shadow-md shadow-amber-900/10"
                    : "bg-stone-100/80 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900"
                }`}
              >
                {sectionLabels[section]}
              </button>
            ))}
          </div>
        </div>

        {/* Hymn Grid */}
        {displayedHymns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 animate-fadeIn" role="list">
            {displayedHymns.map((hymn) => (
              <HymnCard key={hymn.id} hymn={hymn} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-stone-200/80 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-lg mx-auto space-y-4 shadow-xs animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mx-auto shadow-2xs">
              {!isOnline ? <Download className="w-8 h-8" /> : <Music className="w-8 h-8" />}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              {!isOnline ? "No Downloaded Songs Found" : "No Hymns Found"}
            </h3>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
              {!isOnline ? (
                "You haven't downloaded any songs yet, or none match your search. Connect to the internet to browse the full catalog and download songs for offline use."
              ) : (
                <>No hymns were found matching &ldquo;<strong className="text-stone-800">{searchQuery}</strong>&rdquo;.</>
              )}
            </p>
            {isOnline && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                className="mt-4 px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-md"
              >
                Search Again
              </button>
            )}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-stone-200/80 pt-8 mt-14 gap-4 sm:gap-0">
            <button
              type="button"
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-700 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-2xs text-center"
            >
              Previous
            </button>
            <span className="text-sm sm:text-base font-medium text-stone-600 order-first sm:order-none">
              Page <strong className="text-stone-900">{currentPage}</strong> of <strong className="text-stone-900">{totalPages}</strong>
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-700 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-2xs text-center"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
