"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { HYMNS } from "@/data/hymns";
import IndexTabs from "@/components/IndexTabs";
import { Search, ArrowRight } from "lucide-react";

const alphabeticalData = [
  {
    letter: "A",
    songs: [
      { title: "Ai Ba Un Kdup", number: 28 },
      { title: "A Trai To Map", number: 51 },
      { title: "A Trai To Bat Skhem", number: 53 },
      { title: "A Trai Ïarap Ïa Nga", number: 103 },
      { title: "Ai Ïa Ka Baibl", number: 144 },
      { title: "A! Map Ki Pop Jong Nga", number: 227 },
      { title: "Ai Jingtngen Ïa Nga ha Ri Bathait", number: 261 },
      { title: "Ai Nguh Baroh Ha U Trai", number: 288 },
      { title: "A Trai Ha Ngi Ruh Ai Bor", number: 368 },
      { title: "Aiti Lut Baroh", number: 375 },
      { title: "Ai Jingbhabriew U Jisu", number: 389 },
      { title: "Ai Jingdon Ryngkat Jong Me", number: 421 },
      { title: "Ainguh", number: 445 },
      { title: "A! Trai Nga Ainguh", number: 446 },
    ]
  },
  {
    letter: "B",
    songs: [
      { title: "Burom Baroh Sha U Blei", number: 1 },
      { title: "Ba Men Ïoh Kyrkhu", number: 5 },
      { title: "Buhrieh Ïa Nga", number: 38 },
      { title: "Balei Nongpynim U Wan", number: 45 },
      { title: "Bud Ïa Nga", number: 82 },
      { title: "Bad U Jisu Nga Hun", number: 100 },
      { title: "Btin Ïa Nga Lem Bad Me", number: 164 },
      { title: "Btep Bad U Khrist", number: 209 },
      { title: "Balei Phim Wan", number: 212 },
      { title: "Bethlehem Ka Shnong Barit", number: 272 },
      { title: "Blei Un Sumar Ia Phi", number: 295 },
      { title: "Blei Un Sumar ïa Phi Wat Sheptieng", number: 297 },
      { title: "Blei Long Lem Bad Phi", number: 298 },
      { title: "Blei U Lah Ban Leh Kiei Kiei", number: 345 },
      { title: "Bakhuid Bakhuid Bakhuid", number: 357 },
      { title: "Baphylla", number: 392 },
      { title: "Bneng Baroh Pynbna", number: 434 },
      { title: "Bakhraw Long U Trai", number: 438 },
      { title: "Bahajrong Tam", number: 440 },
    ]
  },
  {
    letter: "D",
    songs: [
      { title: "Don Ka Kyrteng", number: 24 },
      { title: "Da Ka Jingieit", number: 102 },
      { title: "Don Ka Jaka Trei", number: 187 },
      { title: "Dei U Kynrad Shah Un Rung", number: 201 },
      { title: "Dei la Phi Ban Kha Pat", number: 207 },
      { title: "Don Ka Bor Ha Ka Snam", number: 240 },
      { title: "Don Ka Ri Sha Shiliang Wah", number: 266 },
      { title: "Dei Tang U Jisu", number: 348 },
      { title: "Dei Ma U", number: 361 },
    ]
  },
  {
    letter: "E",
    songs: [
      { title: "Em Ym Don", number: 173 },
    ]
  },
  {
    letter: "H",
    songs: [
      { title: "Hajan Ka Dohnud Blei", number: 12 },
      { title: "Hangta Ngan Nym Tieng Ei Ei", number: 35 },
      { title: "Ha Jingieit Bneng Ngan laisah", number: 50 },
      { title: "Ha U Mawsiang Ka Jaka Rieh", number: 90 },
      { title: "Ha Ka Lynti", number: 168 },
      { title: "Hikai la Nga Trai", number: 117 },
      { title: "Haba Nga Donkam Eh", number: 119 },
      { title: "Ha Ka Pung Ha Samaria", number: 125 },
      { title: "Hakhmih U Nongleit Kurim", number: 195 },
      { title: "Haba U Khot la Nga", number: 155 },
      { title: "Hapoh Ka Them", number: 157 },
      { title: "Ha Ki Jaka Phlang Babha", number: 161 },
      { title: "Halleliwia", number: 404 },
      { title: "Ha Kum Kine Ki Por", number: 430 },
      { title: "Ha Kalbari", number: 238 },
      { title: "Haba Jingkhang Kim Ju Shad", number: 241 },
      { title: "Ha Ka Snam", number: 244 },
      { title: "Hangta Phin Babe Marwei", number: 251 },
      { title: "Hangta Ngin lohi Markhmat", number: 252 },
      { title: "Haba laid Ha Surok Ksiar", number: 305 },
      { title: "Ha Ka ling U Kpa Jong Nga", number: 313 },
      { title: "Hangno Hangno Ka ling", number: 314 },
      { title: "Ha Ka Ri Jingkular", number: 320 },
      { title: "Hadien Ka Lashai", number: 321 },
      { title: "Ha Ka Ri Ba Ngim Iakhlad Shuh", number: 322 },
      { title: "Hangta Ym Don Miet Shuh", number: 339 },
      { title: "Ha Bneng Ngin Ym Ong Shuh Khublei", number: 340 },
      { title: "Hato Jingieit U Jisu", number: 344 },
      { title: "Hooid Nga Sngewbha", number: 349 },
      { title: "Ha Pyrthei Nga lai Dap", number: 123 },
      { title: "Hangne Ngam Donkam Ting Shongneh", number: 378 },
      { title: "Hapoh Ka Mynsiem", number: 398 },
      { title: "Halor Eh", number: 417 },
      { title: "Ha Thapniang Ngan Her", number: 425 },
      { title: "Ha ling Jong Me", number: 426 },
      { title: "Haba Khmih la Jingkhuid", number: 441 },
      { title: "Hooid U Long Babhabriew", number: 449 },
    ]
  },
  {
    letter: "I / Ï",
    songs: [
      { title: "Im Namar Jisu", number: 101 },
      { title: "I'u Blei Long Ka Burom", number: 13 },
      { title: "Iai Duwai Blei U Hajan", number: 31 },
      { title: "Ïaroh la U", number: 63 },
      { title: "lathuh la Nga Shaphang Jisu", number: 174 },
      { title: "Jaroh ľu Trai Na Ki Brieng", number: 118 },
      { title: "laid Man La Ka Sngi Bad Jisu", number: 124 },
      { title: "Ïalam Ïa Nga", number: 149 },
      { title: "leng leng Para", number: 154 },
      { title: "Ïa La Ka Dong Pynshai", number: 162 },
      { title: "Ling Jong Nga H'u Mawsiang", number: 309 },
      { title: "Jaroh Ï'u Blei", number: 350 },
      { title: "Ïaroh Halleliwia", number: 370 },
      { title: "Iar Ïar Kum Ka Duriaw", number: 394 },
      { title: "laid Bad U Blei", number: 395 },
      { title: "Ïaid Lem Bad Jisu", number: 403 },
      { title: "Ieng Joit Bad Ïaroh", number: 422 },
      { title: "Ïaroh Ïa U Trai", number: 432 },
      { title: "Žaroh Ïa Ka Kyrteng", number: 437 },
    ]
  },
  {
    letter: "J",
    songs: [
      { title: "Jisu Ba Bhabriew Tam", number: 7 },
      { title: "Jingai Ei Baphylla", number: 16 },
      { title: "Jisu Long Nongpynim", number: 23 },
      { title: "Jingsuk Ka Long U Trai", number: 29 },
      { title: "Jingieit Bneng", number: 33 },
      { title: "Jisu Wan Ai Jingsuk la Nga", number: 42 },
      { title: "Jingngeit Dei Ka Jingjop", number: 44 },
      { title: "Jingkohnguh Ïa U Khrist", number: 48 },
      { title: "Jisu Jong Nga Nga leit Ïa Me", number: 67 },
      { title: "Jisu Halor Lieng Jong Nga", number: 167 },
      { title: "Jingim Jong Nga Temple Jisu", number: 170 },
      { title: "Jingjop Ka Ktien U Blei", number: 110 },
      { title: "Jingim Gospel Phi Im", number: 176 },
      { title: "Jingkmen Wan Man Ka Step", number: 128 },
      { title: "Jingkhot Ka Gospel", number: 200 },
      { title: "Jisu Me leit la Nga", number: 11 },
      { title: "Jisu Kynrad Wat leh", number: 145 },
      { title: "Jisu U Khot Sngewbha", number: 216 },
      { title: "Jisu Un Ai Jingjahthait", number: 220 },
      { title: "Jisu Baieit U Tip", number: 151 },
      { title: "Jisu Dang Khot leit la Phi", number: 223 },
      { title: "Jisu Un Sa Wan Shen Shen", number: 254 },
      { title: "Jutang Kine Arngut", number: 260 },
      { title: "Jngai Bah Ha Shyngoid", number: 267 },
      { title: "Jingrwai Ki Angel", number: 271 },
      { title: "Jingkhot leit U Kynrad", number: 287 },
      { title: "Jingkit La Lait Ha Kalbari", number: 343 },
      { title: "Jisu U Kwah Ba Ngin Tyngshain", number: 354 },
      { title: "Jingaiei Phylla", number: 383 },
      { title: "Jingrwai laroh Ngi Rwai", number: 356 },
      { title: "Jingieit Baphylla", number: 365 },
      { title: "Jisu Nga Wan Sha Me", number: 371 },
      { title: "Jisu U La Kit Ki Pop", number: 400 },
      { title: "Jisu Ngi Kyntiew la Me", number: 411 },
      { title: "Jingleh Isynei Jong Me", number: 433 },
    ]
  },
  {
    letter: "K",
    songs: [
      { title: "Katno Me Khraw", number: 2 },
      { title: "Ko Kpa Ha Bneng Nga laroh", number: 3 },
      { title: "Khrist U Syiem", number: 8 },
      { title: "Kyrteng Kaba Phylla", number: 11 },
      { title: "Katno Jingjylliew Bah", number: 19 },
      { title: "Kumne Ngan Rwai laroh", number: 34 },
      { title: "Ka Jingjop H'u Jisu", number: 40 },
      { title: "Ka Hima La Nangwan", number: 52 },
      { title: "Ko Jisu Nga La Kular", number: 56 },
      { title: "Katno Thiang Ban Ngeit", number: 58 },
      { title: "Khlem Ma U", number: 60 },
      { title: "Ki Khmat Jong U Ha Ka Sim Ïing", number: 73 },
      { title: "Kner Sha U Jisu", number: 96 },
      { title: "Ka Jingjop", number: 99 },
      { title: "Ka La Biang", number: 105 },
      { title: "Katno Kmen Ban laid Bad Jisu", number: 112 },
      { title: "Katba Nga Nang Shakri", number: 175 },
      { title: "Ka Jingshai Bneng", number: 177 },
      { title: "Ka Por Ka Jingduwai", number: 178 },
      { title: "Kham Thiang Katba Sngi Nangiaid", number: 179 },
      { title: "Kat Sha B'u Ïalam Nongpynim", number: 122 },
      { title: "Kane Ka Khubor Nga Wallam", number: 188 },
      { title: "Kper Itynnad Ka Jingduwai", number: 127 },
      { title: "Ka Jingmaham Bajur", number: 194 },
      { title: "Kam Dei Lynti Basuk", number: 130 },
      { title: "Kumba Nga Long", number: 131 },
      { title: "Kynrad Sngew Ïa Jingduwai", number: 132 },
      { title: "Khrist Un Wan Biang Sha Pyrthei", number: 197 },
      { title: "Khie Leit Ïalap Khubor Jingpynim", number: 182 },
      { title: "Kat Shaba U Ïalam", number: 153 },
      { title: "Ka Diengphna Ba Shyrkhei", number: 235 },
      { title: "Ka Diengphna", number: 237 },
      { title: "Ka Umpohliew Ka Snam", number: 242 },
      { title: "Ka Jingwer Sha Jingkhawai", number: 245 },
      { title: "Kalbari", number: 248 },
      { title: "Ka Jingwan U Trai Ka La Jan", number: 250 },
      { title: "Ki Jain Kup Ba Itynnad", number: 262 },
      { title: "Ka Ri Babha", number: 265 },
      { title: "Khristan To Khie", number: 270 },
      { title: "Ki Angel Ki Rwai", number: 274 },
      { title: "Ki Nongap Langbrot", number: 275 },
      { title: "Khlur Itynnad Ka Bethlehem", number: 278 },
      { title: "Khie Ïathuh Nalor Lumbah", number: 279 },
      { title: "Kyrkhu Trai Ťa Jingshakri", number: 284 },
      { title: "Khrist U Trai U La Mih Pat", number: 290 },
      { title: "Katno Bneng Long Ba Itynnad", number: 311 },
      { title: "Ka Ri Biwla", number: 317 },
      { title: "Kum U Shyiap Harud Duriaw", number: 319 },
      { title: "Ka ling Shongneh Ki Khristan", number: 327 },
      { title: "Khmih Lynti", number: 329 },
      { title: "Kane Dei Ka Por Ba Ngan Rwai", number: 346 },
      { title: "Khrist U Khot la Ki Khynnah", number: 351 },
      { title: "Khrist U Long Kapten Jong Ngi", number: 355 },
      { title: "Kham Lieh Ia Ka Ior", number: 367 },
      { title: "Ka Pansngiat Shiah", number: 376 },
      { title: "Kynmaw Trai", number: 377 },
      { title: "Ka Snem Kaba U Jisu Un Wan", number: 380 },
      { title: "Katno Baphylla", number: 427 },
      { title: "Ka Long Kaba Shisha", number: 390 },
      { title: "Khublei Blei Un Kyrkhu", number: 401 },
      { title: "Kane Ka Sngi", number: 415 },
      { title: "Ka Bor Jingieit Jong Me", number: 418 },
      { title: "Katba Nga Dang Rwai", number: 448 },
    ]
  },
  {
    letter: "L",
    songs: [
      { title: "Lok Kum Jisu Ngim Shem Shuh", number: 10 },
      { title: "Long Ma Me Jingïohi", number: 21 },
      { title: "Long Jai Jai", number: 43 },
      { title: "Lada Nga Dei ban Shakri", number: 69 },
      { title: "La Thoh la Kyrteng Jong Nga", number: 78 },
      { title: "Lyngba Ka Them", number: 104 },
      { title: "Lynti laid Jong Nga", number: 169 },
      { title: "Leh Katba Mon Trai", number: 135 },
      { title: "Lok Nongpop Phin Sa lam", number: 191 },
      { title: "La Btep Bad Jisu", number: 208 },
      { title: "Lam Ko Trai Mynsiem", number: 388 },
      { title: "Long B'la Kyrkhu la U Trai", number: 435 },
      { title: "Long B'la Kyrkhu Ï'u Trai Bakhrawbor", number: 436 },
    ]
  },
  {
    letter: "M",
    songs: [
      { title: "Man Ka Khyllipmat", number: 20 },
      { title: "Me Pyrkhat Trai la Nga", number: 37 },
      { title: "Man Ba Nga Ja'm", number: 57 },
      { title: "Mynsiem Bakhuid La Wan", number: 79 },
      { title: "Man Ka Sngi Man Ka Por", number: 113 },
      { title: "Mynta Nga La loh Baroh", number: 129 },
      { title: "Mynta Nga Aiti Lut", number: 232 },
      { title: "Men Sa Wan Kloi", number: 256 },
      { title: "Miet Kynjah Mlet Bakhuid", number: 269 },
      { title: "Mynsiem Jong Nga lai Duwai", number: 285 },
      { title: "Man Ka Sngi", number: 359 },
      { title: "Man Ka Sngi Bad Jisu", number: 393 },
      { title: "Mawsiang Skhem", number: 410 },
    ]
  },
  {
    letter: "N / NG",
    songs: [
      { title: "Namar U Im", number: 76 },
      { title: "Nongpop Ngam Ithuh la Phi", number: 199 },
      { title: "Naduh B'u Khrist", number: 229 },
      { title: "Nongleit Kurim Ki La Wan", number: 258 },
      { title: "Nongtong Briew", number: 352 },
      { title: "Naba Blei U leit la Ngi", number: 391 },
      { title: "Namar Kane Nga Im", number: 424 },
      { title: "Niah la Nga Jisu", number: 171 },
      { title: "Ngi laroh Ko Trai", number: 4 },
      { title: "Ngi Rwai Jingrwai Ïaroh", number: 6 },
      { title: "Nga Ngeit Ha U Blei", number: 15 },
      { title: "Nga Tip U Bat Ka Lashai", number: 18 },
      { title: "Nga Kwah Tip Shuh Shuh", number: 41 },
      { title: "Nga Ngan Rwai Ki Jingaiei", number: 47 },
      { title: "Nga leit Eh Tang la Me", number: 49 },
      { title: "Ngin Sa Tohi Ïa U Syiem", number: 54 },
      { title: "Nga Don U Lok", number: 55 },
      { title: "Nga Tip la Uba Nga Ngeit", number: 61 },
      { title: "Nga Long U Dieng Soh Wain", number: 65 },
      { title: "Nga La Shem U Lok Bashisha", number: 66 },
      { title: "Nga leit Ï'u Jisu Ruh", number: 75 },
      { title: "Nga Donkam Eh Ïa Me", number: 86 },
      { title: "Nga Long Jong U Jisu", number: 88 },
      { title: "Ngan Ap la Phi Ha Umpohliew", number: 98 },
      { title: "Ngin Sa Sngewthuh", number: 165 },
      { title: "Ngan Shu Shaniah Ha U Trai", number: 166 },
      { title: "Ngi Long Paidlang Jong Me", number: 114 },
      { title: "Nga Kwah Ban Long U Nongtrei", number: 181 },
      { title: "Nga Phohsniew Ba Turoi", number: 198 },
      { title: "Ngin Bud Ïa Ki Dienjat", number: 139 },
      { title: "Ngan Nym Sheptieng", number: 140 },
      { title: "Ngam Khuslai Ei Ei", number: 141 },
      { title: "Nga Kham leit Eh Ïa Me", number: 146 },
      { title: "Nga Long Uba Suda", number: 150 },
      { title: "Ngam Ju Sngewkynjah", number: 152 },
      { title: "Ngan Aiti Baroh", number: 225 },
      { title: "Ngin Rah La Ki Song", number: 156 },
      { title: "Nga Wan Sha ling", number: 226 },
      { title: "Nga loh Ka Jubab", number: 159 },
      { title: "Nga Dei Ban lathuh", number: 160 },
      { title: "Nga Ai Jingim Jong Nga", number: 228 },
      { title: "Nga La Kut Jingmut", number: 230 },
      { title: "Nga La Kut Jingmut Ban Bud", number: 231 },
      { title: "Nga Wan Phai", number: 233 },
      { title: "Ngin Rah Baroh Sha Diengphna", number: 236 },
      { title: "Nga Kynmaw la Kalbari", number: 239 },
      { title: "Nga Kwah Don Hangta", number: 263 },
      { title: "Nga Shong Ha Ri Biwla", number: 264 },
      { title: "Ngam Long Marwei", number: 294 },
      { title: "Ngin Ia Shem Bad Phi Ha Lashai", number: 299 },
      { title: "Nga Don La U Kynrad", number: 300 },
      { title: "Ngin la Lum Lang Harud Wah", number: 304 },
      { title: "Nga Dei Ban Nangiaid Shaphrang", number: 306 },
      { title: "Nga Don ling Shongneh", number: 308 },
      { title: "Ngin lashem Lang Hangta", number: 324 },
      { title: "Ngin Nym Sliang Shuh", number: 328 },
      { title: "Ngin Nym Ong Shuh Khublei", number: 332 },
      { title: "Ngan Sa Her Noh", number: 333 },
      { title: "Nga leit Ban pyrkhat la Ri Bneng", number: 335 },
      { title: "Ngin lashem Lang Pat Ha Bneng", number: 337 },
      { title: "Ngin Iakren Baroh", number: 342 },
      { title: "Ngan Nym Ja'm Wah Jordan Marwei", number: 347 },
      { title: "Nga loh Ka Jingkmen", number: 353 },
      { title: "Nga Rah Ki Kti", number: 382 },
      { title: "Ngan lathuh Khubor Babha", number: 358 },
      { title: "Nga leit Ban laid Bad Jisu", number: 360 },
      { title: "Nga Ruh Ngam Pynrem", number: 364 },
      { title: "Ngan Shakri la Me", number: 396 },
      { title: "Nga Tip U Trai Un Thaw lynti", number: 399 },
      { title: "Nga leit la Me", number: 413 },
      { title: "Nga Khmied Ki Khmat", number: 420 },
      { title: "Nga Sngewkmen", number: 428 },
      { title: "Ngan Leh Kmen", number: 429 },
      { title: "Ngin la Trei Lang", number: 442 },
      { title: "Ngi Mane la Me Bahakhlieh Tam", number: 447 },
    ]
  },
  {
    letter: "O",
    songs: [
      { title: "O! Ngan lai laroh", number: 26 },
      { title: "O! Jingieit U Jisu", number: 46 },
      { title: "O! Nga Sngewkmen", number: 59 },
      { title: "O! Jingkmen Bathiang Baphylla", number: 83 },
      { title: "O! Nga Kwah Ban Ïohi Ïa U", number: 120 },
      { title: "O! Miet Bakhuid", number: 277 },
      { title: "O! Khublei Khublei Ïa Phi", number: 302 },
    ]
  },
  {
    letter: "P",
    songs: [
      { title: "Pyndap Khuri Jong Nga Trai", number: 70 },
      { title: "Phi La loh Ne Em la U Mynsiem", number: 80 },
      { title: "Pynlong la Nga Trai Ka Jingkyrkhu", number: 84 },
      { title: "Por Step Ka Wan Paw", number: 115 },
      { title: "Phi Bet la U Symbai", number: 180 },
      { title: "Phi lohsngew Sngap U Khot", number: 184 },
      { title: "Phin Leit Kat B'u lalam", number: 138 },
      { title: "Plie Dohnud Jong Phi H'u Jisu", number: 206 },
      { title: "Phin Im Bad Jisu", number: 143 },
      { title: "Peit Ba Phin Ioh Im", number: 218 },
      { title: "Peit Bad Im", number: 219 },
      { title: "Phah Jingshai", number: 222 },
      { title: "Phin Wan Sha Ting Mynta", number: 224 },
      { title: "Pyrkhat Ïa Ka ling Hangtei", number: 325 },
      { title: "Pyrthei Kam Dei ling Shongneh", number: 338 },
      { title: "Pynkhuid la Dohnud", number: 381 },
      { title: "Phi La Pynkhreh la Ka Sngi Bishar", number: 373 },
      { title: "Phi Don Jaka la U Jisu", number: 374 },
      { title: "Phi Duh Jingkyrmen", number: 405 },
      { title: "Plie Khmat Jong Ngi Trai", number: 406 },
      { title: "Pyndonburom la U Trai", number: 409 },
      { title: "Pyrta Sh'u Trai", number: 412 },
      { title: "Pyrta Jam", number: 414 },
      { title: "Pynkylla la Dohnud", number: 443 },
    ]
  },
  {
    letter: "R",
    songs: [
      { title: "Ring Kham Hajan", number: 22 },
      { title: "Rwai l'u Khun Langbrot", number: 25 },
      { title: "Rwai la Jingieit U Jisu", number: 68 },
      { title: "Rukom Ba U leit", number: 89 },
      { title: "Rwai Hosana la U Syiem", number: 341 },
      { title: "Rwai Halleliwia", number: 450 },
      { title: "Riew Eh Dohnud Kin Lynñiar", number: 192 },
    ]
  },
  {
    letter: "S",
    songs: [
      { title: "Sha Me Long Jingainguh", number: 27 },
      { title: "Shaphang Ki Pop Aïu Phi Kren", number: 30 },
      { title: "Shisien", number: 32 },
      { title: "Synrang Mawsiang Na Hyndai", number: 39 },
      { title: "Sngi Ka Mynsiem Jong Nga", number: 62 },
      { title: "Shongsah Bad Nga", number: 64 },
      { title: "Sngewnguh Trai", number: 71 },
      { title: "Shuh Shuh Kat Nangïaid", number: 72 },
      { title: "Sngap Katno Thiang", number: 91 },
      { title: "Shaniah Ha Ki Ksangti Bymjukut", number: 95 },
      { title: "Shim A! Trai", number: 107 },
      { title: "Sngi Bishar Ka Nangwan", number: 190 },
      { title: "Shah Jingshai Kan Rung", number: 205 },
      { title: "Shano Ngan Leit", number: 142 },
      { title: "Shah Un Rung", number: 214 },
      { title: "Snam U Jisu Ka Pyllait", number: 243 },
      { title: "Shad Kmen Pyrthei", number: 273 },
      { title: "Sngap Ki Angel Ki la Rwai", number: 276 },
      { title: "Shuwa Ba Ngin Leit Phai", number: 280 },
      { title: "Snem Thymmai", number: 282 },
      { title: "Sngi Bathymmai", number: 283 },
      { title: "Sngi Jingim Shen Kan Sa Wai Noh", number: 292 },
      { title: "Sha Jerusalem Thymmai", number: 293 },
      { title: "Sa Shisien Sa Shisien Khublei", number: 303 },
      { title: "Sha Kata Ka Ri Sha Lyndet", number: 307 },
      { title: "Sha Lyndet Lum Ba Sepsngi", number: 312 },
      { title: "Sha Lyndet Ba Sep Ka Sngi", number: 326 },
      { title: "Shim Ïa Nga", number: 363 },
      { title: "Syndah Jong Me Ring Ïa Nga", number: 369 },
      { title: "Sha Lyndet Ka Ri Ka Burom", number: 379 },
      { title: "Syrngiew Khmat Jong-Me", number: 416 },
      { title: "Shen Hooid Shen Shen", number: 444 },
    ]
  },
  {
    letter: "T",
    songs: [
      { title: "Tang Mynsiem Bakhuid Jong Me Trai", number: 81 },
      { title: "Trai Rah Ïa Nga", number: 87 },
      { title: "To Kmen Phi Kiba Sngur", number: 93 },
      { title: "To Ai Ngin Bud la Ki Dienjat", number: 94 },
      { title: "To ïai Duwai", number: 106 },
      { title: "Trai Baieit Shim la Nga", number: 108 },
      { title: "Tang U Nongpop", number: 172 },
      { title: "To Hikai Na Nga", number: 116 },
      { title: "To Ngin Pynkhreh", number: 189 },
      { title: "Trai Jisu Ïarap la Nga", number: 137 },
      { title: "To Shim Ngan Ai", number: 148 },
      { title: "Trai Wallam Sha Ting", number: 221 },
      { title: "Trai Dei Ma Nga", number: 158 },
      { title: "To Ngin Sngap Phin Ïathuh", number: 163 },
      { title: "Trai Jong Ngi Un Wan Biang", number: 249 },
      { title: "To Kyrkhu Ko Trai", number: 257 },
      { title: "To Kyrkhu Trai Kine Arngut", number: 259 },
      { title: "To Wan Phi Ki Riewngeit", number: 268 },
      { title: "To Ai Da Kaba Kmen", number: 281 },
      { title: "Trai Phah Ki Nongtrei", number: 286 },
      { title: "To Shong Bad Nga", number: 331 },
      { title: "To Ai Thapniang Ka Jingngeit", number: 334 },
      { title: "Trai Ba Phylla Jong Nga", number: 362 },
      { title: "Tang Ban Ïoh Ïaid Bad Me", number: 372 },
      { title: "Tang Shu Ïathuh Sh'u Jisu", number: 386 },
      { title: "To Pynkhreh Kloi", number: 196 },
      { title: "Trai Nga Kyntiew Ïa Kyrteng", number: 431 },
    ]
  },
  {
    letter: "U",
    songs: [
      { title: "U Mawsiang Skhem", number: 9 },
      { title: "U Blei Jong Nga Uba Shisha", number: 14 },
      { title: "U Lok Babha Tam U Jisu", number: 17 },
      { title: "U Tiew Lili Ka Pynthor", number: 36 },
      { title: "U Ktah Ïa Nga", number: 74 },
      { title: "U Wan Pynim", number: 77 },
      { title: "Un Ri la Nga", number: 85 },
      { title: "U La Rah Ïa Nga", number: 97 },
      { title: "U Trai Ba Donbor Baroh", number: 109 },
      { title: "Uei Ban Bud Tu Blei", number: 183 },
      { title: "U Map Ki Pop Jong Nga", number: 186 },
      { title: "Umpohliew B'la Kyrkhu", number: 126 },
      { title: "Ummat Ba Jaw Blei U Sngewthuh", number: 134 },
      { title: "Ulm", number: 136 },
      { title: "U Dang lai Ap", number: 211 },
      { title: "U Blei U Khot la Phi", number: 213 },
      { title: "U Kwah I'u Nongpop", number: 215 },
      { title: "U Khrist Ka Diengphna", number: 234 },
      { title: "U Khrist Un Wan Pat", number: 253 },
      { title: "U Trai U La Jan Ba Un Wan", number: 255 },
      { title: "U Im Ha Bneng", number: 289 },
      { title: "U La Mih Pat Halleliwia", number: 291 },
      { title: "U Sumar la Nga", number: 296 },
      { title: "U Trai Un Sumar Ïa Phi", number: 301 },
      { title: "U Trai U Tip Balei", number: 330 },
      { title: "U Peit Lyndet Jingbakla", number: 385 },
      { title: "U Khrist Jong Nga", number: 387 },
      { title: "U Long Uba Phylla", number: 397 },
      { title: "U Wan Ban Pynim Ia Phi", number: 407 },
      { title: "Uei Ba Kum U Trai", number: 419 },
      { title: "U Pynkmen Ïa Nga", number: 439 },
    ]
  },
  {
    letter: "W",
    songs: [
      { title: "Wat Peit Shadien", number: 193 },
      { title: "Wat Dem Ha Jingpynshoi", number: 133 },
      { title: "Wan Sha U Nongpynim", number: 202 },
      { title: "Wan Phi Kiba Khuslai", number: 203 },
      { title: "Wan Khun Sarong Awria Wan", number: 204 },
      { title: "Wan Sh'u Jisu Mynta", number: 210 },
      { title: "Wan Da Jingngeit", number: 217 },
      { title: "Wan Jingkhawai La Khreh", number: 246 },
      { title: "Wan Bad Bam", number: 247 },
      { title: "Wad la Nga Trai", number: 366 },
    ]
  },
  {
    letter: "Y",
    songs: [
      { title: "Ym Don Kyrteng Ba Kham Thiang", number: 92 },
      { title: "Ym Don Basuitkhai Ïa Nga", number: 121 },
      { title: "Ym Ma Phi", number: 185 },
      { title: "Ym Don Ba Lah Ban Pynkhlad", number: 147 },
      { title: "Yn Don Ne Em Ki Khlur", number: 310 },
      { title: "Ynda Riewkhuid Kin Leit Bneng", number: 315 },
      { title: "Ynda Riewkhuid Ki Poi Ting Bneng", number: 316 },
      { title: "Ynda Ngan Poi", number: 318 },
      { title: "Ynda Ngin Poi Lang Ha Bneng", number: 323 },
      { title: "Ynda Ngan Leit Noh Na Pyrthei", number: 336 },
      { title: "Ynda U Khot la Nga", number: 384 },
      { title: "Ynda La Dep Jingïaphet Thong", number: 402 },
      { title: "Ym Don Jingeh", number: 408 },
      { title: "Ym Lah Pynkhlad Ïa Ngi", number: 423 },
    ]
  }
];

export default function AlphabeticalIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const map = useMemo(() => {
    const m = new Map<number, string>();
    HYMNS.forEach(h => m.set(h.number, h.id));
    return m;
  }, []);

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return alphabeticalData;

    return alphabeticalData.map(group => ({
      ...group,
      songs: group.songs.filter(s => 
        s.title.toLowerCase().includes(q) || s.number.toString() === q
      )
    })).filter(group => group.songs.length > 0);
  }, [searchQuery]);

  return (
    <div className="flex-1 flex flex-col w-full bg-[#FAF9F6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-fadeIn">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Kdew Alphabet (Alphabetical Index)
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
            Wad ia ki jingrwai mane Blei da ki dak ba sdang jong ka kyrteng, pynbeit da ki nombor jingrwai ba shisha.
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
            placeholder="Wad kyrteng ne nombor..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-stone-200/80 bg-white text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all shadow-2xs"
          />
        </div>

        {/* Content */}
        {filteredData.length > 0 ? (
          <div className="space-y-12 animate-fadeIn">
            {filteredData.map((group) => (
              <section key={group.letter} className="space-y-6">
                <div className="flex items-center gap-4 border-b border-stone-200/80 pb-2">
                  <h2 className="font-serif text-3xl font-bold text-amber-900">{group.letter}</h2>
                  <span className="text-xs font-sans font-medium px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {group.songs.length} {group.songs.length === 1 ? "Jingrwai" : "Jingrwai"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.songs.map((song) => {
                    const hymnId = map.get(song.number);
                    const CardContent = (
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-stone-200/80 hover:border-amber-600/50 hover:shadow-md transition-all duration-200 group">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-amber-50 text-stone-700 group-hover:text-amber-800 font-bold text-sm flex items-center justify-center transition-colors shadow-2xs">
                            {song.number}
                          </span>
                          <span className="font-serif font-semibold text-stone-900 group-hover:text-amber-900 text-base truncate transition-colors">
                            {song.title}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </div>
                    );

                    return hymnId ? (
                      <Link key={song.number} href={`/hymn/${hymnId}`} className="focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-2xl block">
                        {CardContent}
                      </Link>
                    ) : (
                      <div key={song.number} className="opacity-80 cursor-not-allowed">
                        {CardContent}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-stone-200/80 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4 shadow-xs animate-fadeIn">
            <h3 className="font-serif text-xl font-bold text-stone-900">Ym Shem Jingrwai</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Ngi ym shym la shem jingrwai ba iadei bad &ldquo;<strong className="text-stone-800">{searchQuery}</strong>&rdquo;.
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
