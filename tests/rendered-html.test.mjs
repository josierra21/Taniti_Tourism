import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Taniti prototype includes the expected page structure", async () => {
  const [home, things, stays, food, faqs, transportation, siteData] =
    await Promise.all([
      readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/things-to-do/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/where-to-stay/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/food-drink/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/faqs/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/transportation/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/siteData.ts", import.meta.url), "utf8"),
    ]);

  assert.match(home, /Explore Taniti/);
  assert.match(things, /Things to Do/);
  assert.match(stays, /Lodging in Taniti/);
  assert.match(food, /Food & Drink/);
  assert.match(faqs, /FAQs/);
  assert.match(transportation, /Transportation/);
  assert.match(siteData, /Book Now|heroSlides|navItems/);
});

test("starter preview placeholder has been removed", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview|_sites-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
