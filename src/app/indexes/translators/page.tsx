"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { HYMNS } from "@/data/hymns";
import IndexTabs from "@/components/IndexTabs";
import { Search, ArrowRight, User } from "lucide-react";

const translatorsData = [
  {
    name: "Pastor R. M. Kharkongngor (Late)",
    numbers: [4, 12, 15, 16, 23, 36, 37, 42, 43, 44, 45, 56, 62, 65, 66, 67, 79, 81, 83, 84, 85, 86, 90, 93, 94, 98, 104, 105, 106, 111, 113, 119, 122, 124, 127, 131, 132, 136, 137, 138, 139, 145, 153, 158, 162, 177, 180, 181, 183, 184, 198, 200, 203, 204, 205, 207, 208, 210, 211, 212, 213, 217, 221, 222, 226, 230, 232, 233, 235, 239, 241, 245, 253, 254, 255, 265, 268, 269, 289, 295, 296, 297, 298, 305, 310, 311, 326, 330, 331, 332, 337, 338, 339, 365, 369]
  },
  {
    name: "B. M. Syiem",
    numbers: [2, 3, 7, 9, 11, 13, 14, 18, 24, 29, 30, 38, 40, 41, 57, 60, 69, 70, 71, 73, 74, 75, 76, 77, 82, 87, 89, 96, 97, 99, 112, 120, 129, 130, 133, 134, 140, 142, 159, 160, 163, 166, 168, 173, 174, 175, 179, 186, 188, 195, 196, 197, 199, 201, 206, 219, 224, 236, 240, 243, 244, 247, 249, 257, 263, 270, 278, 294, 299, 304, 306, 308, 312, 313, 314, 315, 316, 318, 321, 322, 333, 342, 343, 344, 345, 346, 347, 352, 356, 359, 360, 361, 362, 364, 367, 368, 373, 374, 375, 377, 378, 379, 380]
  },
  {
    name: "Sister M. Fairbrother (Late)",
    numbers: [8, 25, 32, 54, 58, 61, 63, 78, 88, 101, 102, 108, 142, 152, 155, 157, 165, 178, 187, 209, 215, 228, 234, 238, 266, 267, 273, 274, 275, 276, 283, 290, 291, 325, 328, 341, 349, 350, 351, 353, 354, 371, 372]
  },
  {
    name: "Chesterfield Khongwir",
    numbers: [1, 5, 6, 20, 21, 27, 28, 31, 39, 46, 47, 49, 50, 51, 52, 59, 64, 72, 92, 114, 115, 116, 117, 118, 260, 277, 279, 280, 281, 282, 284, 285, 287, 288, 293, 300, 301, 302, 303, 340, 381, 382, 383, 388, 392]
  },
  {
    name: "B. G. M. Syiem (Late)",
    numbers: [10, 17, 35, 68, 121, 125, 126, 156, 161, 172, 185, 256, 324, 329]
  },
  {
    name: "Bah Sobestel (Late)",
    numbers: [100, 135, 146, 148, 149, 150, 151, 167, 169, 170, 171, 261, 363, 370, 371]
  },
  {
    name: "Bah Dires Sohkhlet",
    numbers: [103, 107, 123, 147, 154, 216, 252, 292, 372]
  },
  {
    name: "S. R. Nongrum & Bah Dhon (Late)",
    numbers: [55, 91, 141, 190, 202, 220, 358, 366]
  },
  {
    name: "P. R. Upadhya (Late)",
    numbers: [48, 193, 271, 317, 334, 357]
  },
  {
    name: "K. Sing (Late)",
    numbers: [109, 250, 262, 272, 307, 309, 320]
  },
  {
    name: "E. Dhorom (Late)",
    numbers: [128, 229, 319, 355, 336]
  },
  {
    name: "Homiwell Kharlukhi (Late)",
    numbers: [80, 189, 191, 194]
  },
  {
    name: "Harrison (Late)",
    numbers: [182, 237]
  },
  {
    name: "Dishington Sohkhlet (Late)",
    numbers: [164]
  },
  {
    name: "L. D. Blah (Late)",
    numbers: [384]
  },
  {
    name: "Bah Pen (Late)",
    numbers: [53]
  },
  {
    name: "Kong S. Mawthoh",
    numbers: [286]
  },
  {
    name: "Bym Lah Ban Ithuh (Unknown / Unidentified)",
    numbers: [19, 22, 33, 34, 61, 110, 113, 144, 176, 192, 214, 218, 223, 225, 231, 242, 246, 251, 258, 259, 264, 323, 376]
  }
];

export default function TranslatorsIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const map = useMemo(() => {
    const m = new Map<number, { id: string; title: string }>();
    HYMNS.forEach(h => m.set(h.number, { id: h.id, title: h.title }));
    return m;
  }, []);

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return translatorsData;

    return translatorsData.map(group => {
      const matchesName = group.name.toLowerCase().includes(q);
      if (matchesName) return group;

      const filteredNumbers = group.numbers.filter(num => {
        const song = map.get(num);
        return num.toString() === q || (song && song.title.toLowerCase().includes(q));
      });

      return {
        ...group,
        numbers: filteredNumbers
      };
    }).filter(group => group.numbers.length > 0 || group.name.toLowerCase().includes(q));
  }, [searchQuery, map]);

  return (
    <div className="flex-1 flex flex-col w-full bg-[#FAF9F6] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="space-y-4 animate-fadeIn px-2">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15]">
            Ki Nongpynkylla & Nongshna (Translators & Authors)
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Ka thup kyrteng jong ki nongpynkylla bad ki nongshna jingrwai ryngkat bad ki nombor jingrwai ba ki la shna ne pynkylla.
          </p>
        </div>

        {/* Shared Index Tabs */}
        <IndexTabs />

        {/* Filter Input */}
        <div className="max-w-md relative animate-fadeIn w-full px-2 sm:px-0">
          <Search className="w-5 h-5 text-stone-400 absolute left-6 sm:left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Wad kyrteng nongshna, jingrwai ne nombor..."
            className="w-full pl-14 sm:pl-12 pr-4 py-3.5 sm:py-3 rounded-full border border-stone-200/80 bg-white text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all shadow-2xs"
          />
        </div>

        {/* Content */}
        {filteredData.length > 0 ? (
          <div className="space-y-12 sm:space-y-14 animate-fadeIn">
            {filteredData.map((group) => (
              <section key={group.name} className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 shadow-2xs hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-4 gap-3 sm:gap-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-3.5 leading-snug">
                    <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center shadow-2xs flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <span>{group.name}</span>
                  </h2>
                  <span className="text-xs sm:text-sm font-sans font-semibold px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 self-start sm:self-auto shadow-2xs flex-shrink-0">
                    {group.numbers.length} {group.numbers.length === 1 ? "Jingrwai" : "Jingrwai"}
                  </span>
                </div>

                {group.numbers.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {group.numbers.map((num) => {
                      const song = map.get(num);
                      const title = song ? song.title : `Jingrwai #${num}`;

                      const CardContent = (
                        <div className="flex items-center justify-between p-4 sm:p-5 rounded-3xl bg-[#FAF9F6] border border-stone-200/60 hover:border-amber-600/50 hover:bg-white hover:shadow-md transition-all duration-200 group">
                          <div className="flex items-center gap-3.5 overflow-hidden">
                            <span className="flex-shrink-0 w-11 h-11 rounded-2xl bg-amber-100/80 group-hover:bg-amber-600 text-amber-900 group-hover:text-white font-bold text-sm sm:text-base flex items-center justify-center transition-colors shadow-2xs">
                              {num}
                            </span>
                            <span className="font-serif font-medium text-stone-800 group-hover:text-stone-900 text-base sm:text-lg truncate transition-colors">
                              {title}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                        </div>
                      );

                      return song ? (
                        <Link key={num} href={`/hymn/${song.id}`} className="focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-3xl block">
                          {CardContent}
                        </Link>
                      ) : (
                        <div key={num} className="opacity-80 cursor-not-allowed">
                          {CardContent}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-stone-400 italic text-sm sm:text-base py-2">Ym pat don jingrwai ba la pynshisha.</p>
                )}
              </section>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-stone-200/80 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-lg mx-auto space-y-4 shadow-xs animate-fadeIn">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">Ym Shem Nongshna</h3>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
              Ngi ym shym la shem nongshna ne jingrwai ba iadei bad &ldquo;<strong className="text-stone-800">{searchQuery}</strong>&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-md"
            >
              Wad Biang
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
