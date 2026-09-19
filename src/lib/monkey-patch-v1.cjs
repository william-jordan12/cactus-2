const fs = require("fs");
const P = "src/lib/products.ts";
let t = fs.readFileSync(P, "utf8");
let w = false;
const S = [];
function ok(c, tag) { S.push(tag + ":" + (c ? "OK" : "FAIL")); return c; }
function cnt(s, sub) { let n = 0, i = -1; while ((i = s.indexOf(sub, i + 1)) >= 0) n++; return n; }

const A_TYPE = 'export type Category = "dogs" | "cats" | "rabbits" | "birds" | "aquatic" | "reptiles";';
const A_CAT_END = "  },\n];\n\nexport const speciesGroups";
const A_SG_END = "      {\n        label: \"Turtles & Tortoises\",\n        slugs: [\n          \"red-eared-slider\",\n          \"yellow-bellied-slider\",\n          \"eastern-box-turtle\",\n          \"russian-tortoise\",\n          \"hermanns-tortoise\",\n          \"sulcata-tortoise\",\n        ],\n      },\n    ],\n  ],\n};";
const A_GI_END = "  reptiles: [\n    \"photo-1548839140-29a749e1cf4d\",\n    \"photo-1546548970-71785318a17b\",\n    \"photo-1589829085413-56de8ae18c73\",\n  ],\n};";
const A_CD_END = "  reptiles: [\n    \"Captive-bred & vet-checked\",\n    \"Feeding & enclosure guide included\",\n    \"Free health certificate\",\n    \"Lifetime care support\",\n  ],\n};";
const A_STOCK = "  reptiles: 8,\n};";
const A_PROD_END = "  def(\"sulcata-tortoise\", \"Sulcata Tortoise\", \"reptiles\", 250, \"The African spurred tortoise — a charismatic giant that needs space and sunshine. Amazing for dedicated keepers.\"),\n];";

const T_TYPE = 'export type Category = "dogs" | "cats" | "rabbits" | "birds" | "aquatic" | "reptiles" | "monkeys";';

const C_MONKEY = '  {\n    slug: "monkeys",\n    name: "Monkeys",\n    description: "Playful, intelligent primates — charming companions and fascinating to watch.",\n  },\n';

const SG_MONKEY = '  monkeys: [\n    {\n      label: "Small New-World Monkeys",\n      slugs: ["pygmy-marmoset", "golden-lion-tamarin", "cotton-top-tamarin"],\n    },\n    {\n      label: "Capuchins",\n      slugs: ["white-faced-capuchin", "tufted-capuchin"],\n    },\n    {\n      label: "Spider & Hanging Apes",\n      slugs: ["black-handed-spider-monkey", "long-tailed-macaque"],\n    },\n  ],\n';

const GI_MONKEY = '  monkeys: [\n    "photo-1667147382221-061b512deae0",\n    "photo-1726165498985-893f324110e6",\n    "photo-1750101724698-42347d885f50",\n    "photo-1655981653307-4732d646c254",\n    "photo-1709519041427-9fda1b49550e",\n  ],\n';

const CD_MONKEY = '  monkeys: [\n    "Health-checked & vet examined",\n    "Socialized & handled daily",\n    "Care & habitat guide included",\n    "Lifetime care support",\n  ],\n';

const STOCK_MONKEY = "  monkeys: 6,\n";

const PROD_MONKEYS = '  def("pygmy-marmoset", "Pygmy Marmoset", "monkeys", 950, "The world\u2019s smallest true monkey — a tiny, featherlight pocket primate with huge eyes. Social, quick, and endlessly curious."),\n  def("golden-lion-tamarin", "Golden Lion Tamarin", "monkeys", 1500, "A flame-colored rain-forest gem with a glorious golden mane. Rare, vivacious, and deeply captive-bred."),\n  def("cotton-top-tamarin", "Cotton-Top Tamarin", "monkeys", 900, "A crest-topped acrobat with a shock of white hair. Energetic, intelligent, and great fun to watch."),\n  def("white-faced-capuchin", "White-Faced Capuchin", "monkeys", 1800, "The classic tool-using capuchin with a pale face and knowing eyes. Clever, playful, and famously curious."),\n  def("tufted-capuchin", "Tufted Capuchin", "monkeys", 2000, "A dark, robust capuchin with a distinctive forward-swept crest. Hardy, confident, and very trainable."),\n  def("black-handed-spider-monkey", "Black-Handed Spider Monkey", "monkeys", 2200, "A long-limbed acrobat that swings through the canopy using its fifth limb — a prehensile tail. Graceful, intelligent, and unforgettable."),\n  def("long-tailed-macaque", "Long-Tailed Macaque", "monkeys", 1200, "A sleek, adaptable macaque with a flirtatious tail and a cheeky grin. Social, smart, and endlessly entertaining."),\n';

const hasMonkeys = t.includes('category === "monkeys"') || t.includes('slug: "monkeys"') || t.includes("black-handed-spider-monkey");

const ck =
  ok(cnt(t, A_TYPE) === 1, "TY") && ok(cnt(t, A_CAT_END) === 1, "CE") &&
  ok(cnt(t, A_SG_END) === 1, "GE") && ok(cnt(t, A_GI_END) === 1, "IE") &&
  ok(cnt(t, A_CD_END) === 1, "DE") && ok(cnt(t, A_STOCK) === 1, "KE") &&
  ok(cnt(t, A_PROD_END) === 1, "PE") && ok(!hasMonkeys, "NP");

if (ck) {
  t = t.replace(A_TYPE, T_TYPE);
  t = t.replace(A_CAT_END, C_MONKEY + A_CAT_END);
  t = t.replace(A_SG_END, SG_MONKEY + "  ],\n};\n---SG---");
  t = t.replace("---SG---", "");
  t = t.replace(A_GI_END, GI_MONKEY + A_GI_END);
  t = t.replace(A_CD_END, CD_MONKEY + A_CD_END);
  t = t.replace(A_STOCK, STOCK_MONKEY + A_STOCK);
  t = t.replace(A_PROD_END, PROD_MONKEYS + A_PROD_END);
  fs.writeFileSync(P, t);
  w = true;
}

const v = fs.readFileSync(P, "utf8");
console.log(S.join(" "));
console.log("W:" + w);
console.log("V-TY:" + v.includes(T_TYPE));
console.log("V-CAT:" + cnt(v, 'slug: "monkeys"') === 1);
console.log("V-SG:" + v.includes("\"white-faced-capuchin\"" ) && v.includes("\"black-handed-spider-monkey\"") && v.includes("\"pygmy-marmoset\""));
console.log("V-GI:" + v.includes("\"photo-1667147382221-061b512deae0\""));
console.log("V-CD:" + v.includes("\"Socialized & handled daily\""));
console.log("V-ST:" + v.includes("monkeys: 6,"));
console.log("V-PR:" + cnt(v, "def(\"white-faced-capuchin\",") === 1 && cnt(v, "def(\"long-tailed-macaque\",") === 1);
console.log("V-ONCE-TY:" + cnt(v, '| "monkeys"') === 1);
