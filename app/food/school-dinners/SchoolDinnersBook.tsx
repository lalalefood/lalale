"use client";

import { Flipbook } from "@/app/components/Flipbook";

const DESKTOP_PAGES = 19;
const MOBILE_PAGES = 23;

const build = (kind: "desktop" | "mobile", count: number) =>
  Array.from(
    { length: count },
    (_, i) => `/assets/school-dinners/lalale/${kind}/${String(i + 1).padStart(2, "0")}.jpg`,
  );

const desktop = build("desktop", DESKTOP_PAGES);
const mobile = build("mobile", MOBILE_PAGES);

export function SchoolDinnersBook() {
  return <Flipbook pages={desktop} mobilePages={mobile} label="School Dinners – LALALE" />;
}
