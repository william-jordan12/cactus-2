const fs = require("fs");
const P = "src/lib/products.ts";
let t = fs.readFileSync(P, "utf8");
let w = false;
const R = [];
function ok(c, tag) { R.push(tag + (c ? ":OK" : ":FAIL")); return c; }
function cnt(s, sub) { let n = 0, i = -1; while ((i = s.indexOf(sub, i + 1)) >= 0) n++; return n; }

const A_TYPE = 'export type Category = "dogs" | "cats" | "rabbits" | "birds" | "aquatic" | "reptiles";';
const N_TYPE = 'export type Category = "dogs" | "cats" | "rabbits" | "birds" | "aquatic" | "reptiles" | "monkeys";';

const A_CAT_LAST = '  {\n    slug: "reptiles",\n    name: "Reptiles",\n    description: "Fascinating lizards, snakes, turtles, and tortoises.",\n  },\n];';
const N_CAT_LAST = '  {\n    slug: "reptiles",\n    name: "Reptiles",\n    description: "Fascinating lizards, snakes, turtles, and tortoises.",\n  },\n  {\n    slug: "monkeys",\n    name: "Monkeys",\n    description: "Intelligent, playful primates from agile capuchins to expressive spider monkeys.",\n  },\n];';

const A_SG_LAST = '        "sulcata-tortoise",\n      ],\n    },\n  ],\n};';
const N_SG_LAST = '        "sulcata-tortoise",\n      ],\n    },\n  ],\n  monkeys: [\n    {\n      label: "Captive-bred for temperament",\n      slugs: ["common-marmoset", "cotton-top-tamarin", "golden-lion-tamarin"],\n    },\n    {\n      label: "Clear dispositions & vet-checked",\n      slugs: ["white-faced-capuchin", "tufted-capuchin"],\n    },\n    {\n      label: "Active & social primates",\n      slugs: ["common-squirrel-monkey", "black-handed-spider-monkey", "mantled-howler-monkey"],\n    },\n  ],\n};';

const A_GI_LAST = '  reptiles: [\n    "photo-1548839140-29a749e1cf4d",\n    "photo-1546548970-71785318a17b",\n    "photo-1589829085413-56de8ae18c73",\n  ],\n};';
const N_GI_LAST = '  reptiles: [\n    "photo-1548839140-29a749e1cf4d",\n    "photo-1546548970-71785318a17b",\n    "photo-1589829085413-56de8ae18c73",\n  ],\n  monkeys: [\n    "photo-1667147382221-061b512deae0",\n    "photo-1726165498985-893f324110e6",\n    "photo-1750101724698-42347d885f50",\n    "photo-1655981653307-4732d646c254",\n  ],\n};';

const A_CD_LAST = '  reptiles: [\n    "Captive-bred & vet-checked",\n    "Feeding & enclosure guide included",\n    "Free health certificate",\n    "Lifetime care support",\n  ],\n};';
const N_CD_LAST = '  reptiles: [\n    "Captive-bred & vet-checked",\n    "Feeding & enclosure guide included",\n    "Free health certificate",\n    "Lifetime care support",\n  ],\n  monkeys: [\n    "Socialized & handled regularly",\n    "Diet & enrichment plan included",\n    "Free vet health check",\n    "Lifetime primate care support",\n  ],\n};';

const A_STOCK = "  reptiles: 8,\n};";
const N_STOCK = "  reptiles: 8,\n  monkeys: 3,\n};";

const A_TAIL = "];\n\nexport function getProductBySlug";
const MONKEY_DEFS =
  '  def("common-marmoset", "Common Marmoset", "monkeys", 850, "A tiny, tufted-eared marmoset with owl-like eyes and endless curiosity. Charismatic, vocal, and surprisingly bold."),' +
  '  def("cotton-top-tamarin", "Cotton-Top Tamarin", "monkeys", 950, "A White Crested cousin with a magnificent shock of white hair. Social, intelligent, and a joy to watch."),' +
  '  def("golden-lion-tamarin", "Golden Lion Tamarin", "monkeys", 1200, "A flame-orange beauty from the Brazilian treetops. Rare, regal, and full of life.", { featured: true }),' +
  '  def("white-faced-capuchin", "White-Faced Capuchin", "monkeys", 1500, "The clever tool-user with a pale face and sharp mind. Playful, curious, and endlessly entertaining.", { featured: true }),' +
  '  def("tufted-capuchin", "Tufted Capuchin", "monkeys", 1300, "A sturdy, expressive capuchin with a neat crest. Bold, social, and quick to learn."),' +
  '  def("common-squirrel-monkey", "Common Squirrel Monkey", "monkeys", 900, "A bright-eyed, golden-backed gregarious acrobat. High-energy, affectionate, and full of personality."),' +
  '  def("black-handed-spider-monkey", "Black-Handed Spider Monkey", "monkeys", 1400, "Fearless acrobat with prehensile tail. Long-limbed, agile, and gracefully athletic."),' +
  '  def("mantled-howler-monkey", "Mantled Howler Monkey", "monkeys", 1100, "A deep-voiced, settled primate with a majestic black mane. Calm, deliberate, and unmistakably regal."),' +
  "\n";

if (
  ok(cnt(t, A_TYPE) === 1, "TY") &&
  ok(cnt(t, A_CAT_LAST) === 1, "CA") &&
  ok(cnt(t, A_SG_LAST) === 1, "SG") &&
  ok(cnt(t, A_GI_LAST) === 1, "GI") &&
  ok(cnt(t, A_CD_LAST) === 1, "CD") &&
  ok(cnt(t, A_STOCK) === 1, "ST") &&
  ok(cnt(t, A_TAIL) === 1, "TA")
) {
  t = t.replace(A_TYPE, N_TYPE);
  t = t.replace(A_CAT_LAST, N_CAT_LAST);
  t = t.replace(A_SG_LAST, N_SG_LAST);
  t = t.replace(A_GI_LAST, N_GI_LAST);
  t = t.replace(A_CD_LAST, N_CD_LAST);
  t = t.replace(A_STOCK, N_STOCK);
  t = t.replace(A_TAIL, MONKEY_DEFS + "];\n\nexport function getProductBySlug");
  fs.writeFileSync(P, t);
  w = true;
}

const v = fs.readFileSync(P, "utf8");
console.log(R.join(" "));
console.log("W:" + (w ? "WROTE" : "NO-WRITE"));
console.log("V-ACHE:" + cnt(v, A_TYPE) === 0);
console.log("V-TYPE:" + cnt(v, 'export type Category = "dogs" | "cats" | "rabbits" | "birds" | "aquatic" | "reptiles" | "monkeys";') === 1);
console.log("V-CAT:" + cnt(v, 'slug: "monkeys",') >= 1);
console.log("V-SG:" + v.includes('label: "Captive-bred for temperament"'));
console.log("V-GI:" + v.includes('"photo-1667147382221-061b512deae0"'));
console.log("V-CD:" + v.includes('"Lifetime primate care support"'));
console.log("V-ST:" + v.includes("  monkeys: 3,\n};\n"));
console.log("V-PR:" + cnt(v, 'def("common-marmoset"') === 1 && cnt(v, 'def("mantled-howler-monkey"') === 1);
console.log("V-ONCE:" + cnt(v, 'def("common-squirrel-monkey", "Common Squirrel Monkey"') === 1);
