"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { HYMNS } from "@/data/hymns";
import IndexTabs from "@/components/IndexTabs";
import { Search, ArrowRight } from "lucide-react";

const topicalData = [
  {
    topic: "Jingïaroh (Praise)",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19, 25, 26, 34, 55, 63, 66, 76, 91, 109, 118, 156, 177, 179, 341, 350]
  },
  {
    topic: "Jingmane (Worship)",
    numbers: [19, 20, 21, 22, 27, 28, 29, 35, 38, 39, 41, 43, 47, 53, 54, 56, 57, 59, 60, 61, 62, 64, 65, 69, 70, 71, 72, 73, 74, 78, 82, 85, 86, 87, 88, 90, 94, 95, 96, 97, 98, 100, 101, 103, 104, 105, 107, 108, 111, 112, 113, 114, 115, 116, 117, 119, 120, 121, 123, 124, 125, 126, 129, 130, 133, 134, 137, 139, 140, 141, 142, 144, 145, 147, 149, 150, 154, 158, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 171, 173, 174, 175, 176, 180, 262, 263, 264, 294, 304, 306, 309, 310, 342, 343, 344, 345, 349]
  },
  {
    topic: "Jingkhot Sha Ka Jingkylla (Call to Repentance / Invitation)",
    numbers: [131, 138, 155, 172, 182, 183, 184, 185, 186, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 229, 232, 233, 241]
  },
  {
    topic: "Jingpynbaptis (Baptism)",
    numbers: [122, 153, 157, 207, 208, 209, 227, 230, 321]
  },
  {
    topic: "Jingpynim (Salvation)",
    numbers: [16, 23, 45, 77, 136, 143]
  },
  {
    topic: "Jingwan Arsien (Second Coming)",
    numbers: [52, 249, 250, 251, 252, 253, 254, 255, 256]
  },
  {
    topic: "Jingduwai (Prayer)",
    numbers: [31, 51, 106, 127, 132, 159, 178, 285]
  },
  {
    topic: "Jingkyrkhu / Jingsngewnguh (Blessings / Thankfulness)",
    numbers: [83, 84, 93, 128]
  },
  {
    topic: "Jingieit (Love)",
    numbers: [24, 32, 33, 46, 49, 50, 67, 68, 75, 89, 102, 135, 146, 344]
  },
  {
    topic: "Ka Bneng (Heaven)",
    numbers: [265, 266, 289, 292, 293, 300, 305, 307, 308, 311, 312, 313, 314, 315, 316, 317]
  },
  {
    topic: "Jingrwai Khristmas (Christmas Songs)",
    numbers: [267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279]
  },
  {
    topic: "Jingrwai Kyntiew Kurim (Wedding Songs)",
    numbers: [257, 258, 259, 260]
  },
  {
    topic: "Jingkhawai U Trai (The Lord's Supper / Communion)",
    numbers: [234, 235, 236, 237, 238, 239, 240, 242, 243, 244, 245, 246, 247, 248]
  },
  {
    topic: "Jingrwai Khynnah (Children's Songs)",
    numbers: [351, 352, 353, 354]
  },
  {
    topic: "Jingshakri / Nongtrei (Service / Ministry / Workers)",
    numbers: [181, 187, 286, 287]
  },
  {
    topic: "Mynsiem Bakhuid (Holy Spirit)",
    numbers: [79, 80, 81]
  },
  {
    topic: "Jingngeit (Faith)",
    numbers: [15, 44, 88]
  },
  {
    topic: "Jingainguh (Offerings / Giving / Gratitude)",
    numbers: [148, 170, 228, 281, 288]
  },
  {
    topic: "Jingjop (Victory)",
    numbers: [40, 99, 110]
  },
  {
    topic: "Jingpyntngen (Comfort / Consolation)",
    numbers: [36, 37, 151, 152, 261, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340]
  },
  {
    topic: "Jingmihpat (Resurrection)",
    numbers: [290, 291]
  },
  {
    topic: "Snem Thymmai (New Year)",
    numbers: [282, 283]
  },
  {
    topic: "Jingrwai Khublei (Farewell / Parting Songs)",
    numbers: [280, 284, 295, 296, 297, 298, 299, 301, 302, 303]
  },
  {
    topic: "Jingkohnguh (Obedience)",
    numbers: []
  },
  {
    topic: "Jingsuk (Peace)",
    numbers: []
  },
  {
    topic: "Ka Pop (Sin)",
    numbers: []
  },
  {
    topic: "Jingrwai Khoros (Chorus Short Songs)",
    numbers: [381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405]
  },
  {
    topic: "Jingrwai Praise (Praise & Worship Choruses)",
    numbers: [406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450]
  }
];

export default function TopicalIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const map = useMemo(() => {
    const m = new Map<number, { id: string; title: string }>();
    HYMNS.forEach(h => m.set(h.number, { id: h.id, title: h.title }));
    return m;
  }, []);

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return topicalData;

    return topicalData.map(group => {
      const matchesTopic = group.topic.toLowerCase().includes(q);
      if (matchesTopic) return group;

      const filteredNumbers = group.numbers.filter(num => {
        const song = map.get(num);
        return num.toString() === q || (song && song.title.toLowerCase().includes(q));
      });

      return {
        ...group,
        numbers: filteredNumbers
      };
    }).filter(group => group.numbers.length > 0 || group.topic.toLowerCase().includes(q));
  }, [searchQuery, map]);

  return (
    <div className="flex-1 flex flex-col w-full bg-[#FAF9F6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-fadeIn">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Kdew Lynnong (Topical Index)
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
            Wad ia ki jingrwai mane Blei da ki phang (categories) bad ki bynta ba iadei bad ka jingim Khristan.
          </p>
        </div>

        {/* Shared Index Tabs */}
        <IndexTabs />

        {/* Filter Input */}
        <div className="max-w-md relative animate-fadeIn">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Wad phang, kyrteng ne nombor..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-stone-200/80 bg-white text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all shadow-2xs"
          />
        </div>

        {/* Content */}
        {filteredData.length > 0 ? (
          <div className="space-y-12 animate-fadeIn">
            {filteredData.map((group) => (
              <section key={group.topic} className="bg-white border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xs hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">{group.topic}</h2>
                  <span className="text-xs font-sans font-semibold px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 self-start sm:self-auto">
                    {group.numbers.length} {group.numbers.length === 1 ? "Jingrwai" : "Jingrwai"}
                  </span>
                </div>

                {group.numbers.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.numbers.map((num) => {
                      const song = map.get(num);
                      const title = song ? song.title : `Jingrwai #${num}`;

                      const CardContent = (
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/60 hover:border-amber-600/50 hover:bg-white hover:shadow-sm transition-all duration-200 group">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-amber-100/80 group-hover:bg-amber-600 text-amber-900 group-hover:text-white font-bold text-sm flex items-center justify-center transition-colors shadow-2xs">
                              {num}
                            </span>
                            <span className="font-serif font-medium text-stone-800 group-hover:text-stone-900 text-base truncate transition-colors">
                              {title}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                        </div>
                      );

                      return song ? (
                        <Link key={num} href={`/hymn/${song.id}`} className="focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-2xl block">
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
                  <p className="text-stone-400 italic text-sm py-2">Ym pat don jingrwai ha kane ka phang.</p>
                )}
              </section>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-stone-200/80 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4 shadow-xs animate-fadeIn">
            <h3 className="font-serif text-xl font-bold text-stone-900">Ym Shem Phang</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Ngi ym shym la shem phang ne jingrwai ba iadei bad &ldquo;<strong className="text-stone-800">{searchQuery}</strong>&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-2 px-6 py-2.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-xs"
            >
              Wad Biang
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
