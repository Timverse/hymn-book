export interface Hymn {
  id: string;
  title: string;
  number: number;
  verses: string[];
  chorus?: string;
  section?: string;
}

import { songs1to40 } from "./Songs 1-40";
import { songs41to80 } from "./Songs 41-80";
import { songs81to137 } from "./81-137";
import { songs138to220 } from "./138-220";
import { songs221to285 } from "./221-285";
import { songs286to355 } from "./286-355";
import { songs356to380 } from "./356-380";
import { khorosSongs } from "./Ki Jingrwai Khoros";
import { praiseSongs } from "./Ki Jingrwai Praise";

export const HYMNS: Hymn[] = [
  ...songs1to40,
  ...songs41to80,
  ...songs81to137,
  ...songs138to220,
  ...songs221to285,
  ...songs286to355,
  ...songs356to380,
  ...khorosSongs,
  ...praiseSongs
];
