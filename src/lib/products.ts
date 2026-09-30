export type Category = "dogs" | "cats" | "rabbits" | "birds" | "aquatic" | "reptiles" | "monkeys";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  species?: string;
  price: number;
  image: string;
  images?: string[];
  description: string;
  details: string[];
  featured?: boolean;
  stock: number;
  rating: number;
  reviews: number;
}

export const categories: { slug: Category; name: string; description: string }[] = [
  {
    slug: "dogs",
    name: "Dogs",
    description: "Loyal companions from working lines to lap dogs.",
  },
  {
    slug: "cats",
    name: "Cats",
    description: "Graceful, affectionate felines in every coat and temperament.",
  },
  {
    slug: "rabbits",
    name: "Rabbits",
    description: "Floppy-eared friends and cuddly house bunnies.",
  },
  {
    slug: "birds",
    name: "Birds",
    description: "Chatty parrots, gentle companions, and melodious finches.",
  },
  {
    slug: "aquatic",
    name: "Aquatic Animals",
    description: "Vibrant fish and fascinating invertebrates for your tank.",
  },
  {
    slug: "reptiles",
    name: "Reptiles",
    description: "Fascinating lizards, snakes, turtles, and tortoises.",
  },
  {
    slug: "monkeys",
    name: "Monkeys",
    description: "Intelligent, playful primates from agile capuchins to expressive spider monkeys.",
  },
];

export const speciesGroups: Record<Category, { label: string; slugs: string[] }[]> = {
  dogs: [
    {
      label: "Herding & Working",
      slugs: [
        "german-shepherd",
        "siberian-husky",
        "rottweiler",
        "doberman-pinscher",
        "belgian-malinois",
        "border-collie",
        "australian-shepherd",
      ],
    },
    {
      label: "Sporting & Retriever",
      slugs: [
        "golden-retriever",
        "labrador-retriever",
        "cocker-spaniel",
        "german-shorthaired-pointer",
        "english-setter",
      ],
    },
    {
      label: "Companion & Toy",
      slugs: [
        "french-bulldog",
        "standard-poodle",
        "miniature-poodle",
        "toy-poodle",
        "chihuahua",
        "dachshund",
        "beagle",
        "shih-tzu",
        "yorkshire-terrier",
        "pug",
        "pomeranian",
      ],
    },
  ],
  cats: [
    {
      label: "Longhair Breeds",
      slugs: ["maine-coon", "persian", "ragdoll", "norwegian-forest-cat", "birman", "himalayan"],
    },
    {
      label: "Shorthair Breeds",
      slugs: [
        "domestic-shorthair",
        "british-shorthair",
        "american-shorthair",
        "abyssinian",
        "burmese",
        "russian-blue",
      ],
    },
    {
      label: "Hybrid & Specialty Breeds",
      slugs: ["siamese", "bengal", "sphynx", "scottish-fold", "oriental-shorthair"],
    },
  ],
  rabbits: [
    {
      label: "Lop-Eared Breeds",
      slugs: ["holland-lop", "mini-lop", "english-lop", "french-lop"],
    },
    {
      label: "Dwarf Breeds",
      slugs: ["netherland-dwarf", "dwarf-hotot", "polish-rabbit"],
    },
    {
      label: "Fancy & Large Breeds",
      slugs: [
        "flemish-giant",
        "lionhead",
        "mini-rex",
        "dutch-rabbit",
        "english-angora",
        "californian",
        "new-zealand",
      ],
    },
  ],
  birds: [
    {
      label: "Small Parrots & Parakeets",
      slugs: ["budgerigar", "cockatiel", "lovebird", "parrotlet", "quaker-parakeet"],
    },
    {
      label: "Medium Parrots",
      slugs: [
        "green-cheeked-conure",
        "sun-conure",
        "indian-ringneck",
        "caique",
        "pionus",
      ],
    },
    {
      label: "Large Parrots",
      slugs: ["african-grey", "amazon-parrot", "blue-gold-macaw", "scarlet-macaw", "cockatoo"],
    },
    {
      label: "Songbirds & Finches",
      slugs: ["canary", "zebra-finch", "gouldian-finch", "society-finch"],
    },
  ],
  aquatic: [
    {
      label: "Freshwater Fish",
      slugs: [
        "betta",
        "goldfish",
        "neon-tetra",
        "guppy",
        "angelfish",
        "corydoras-catfish",
        "platy",
        "molly",
        "discus",
        "oscar",
      ],
    },
    {
      label: "Freshwater Invertebrates",
      slugs: [
        "mystery-snail",
        "nerite-snail",
        "cherry-shrimp",
        "ghost-shrimp",
        "amano-shrimp",
        "dwarf-crayfish",
      ],
    },
    {
      label: "Saltwater Fish",
      slugs: ["clownfish", "blue-tang", "yellow-tang", "damselfish", "royal-gramma", "blenny", "goby"],
    },
  ],
  reptiles: [
    {
      label: "Lizards",
      slugs: [
        "bearded-dragon",
        "leopard-gecko",
        "crested-gecko",
        "blue-tongued-skink",
        "veiled-chameleon",
        "green-anole",
      ],
    },
    {
      label: "Snakes",
      slugs: ["corn-snake", "ball-python", "milk-snake", "king-snake", "western-hognose"],
    },
    {
      label: "Turtles & Tortoises",
      slugs: [
        "red-eared-slider",
        "yellow-bellied-slider",
        "eastern-box-turtle",
        "russian-tortoise",
        "hermanns-tortoise",
        "sulcata-tortoise",
      ],
    },
  ],
  monkeys: [
    {
      label: "Captive-bred for temperament",
      slugs: ["common-marmoset", "cotton-top-tamarin", "golden-lion-tamarin"],
    },
    {
      label: "Clear dispositions & vet-checked",
      slugs: ["white-faced-capuchin", "tufted-capuchin"],
    },
    {
      label: "Active & social primates",
      slugs: ["common-squirrel-monkey", "black-handed-spider-monkey", "mantled-howler-monkey"],
    },
  ],
};

const groupImages: Record<Category, string[]> = {
  dogs: [
    "photo-1543466835-00a7907e9de1",
    "photo-1587300003388-59208cc962cb",
    "photo-1561037404-61cd46aa615b",
    "photo-1552053831-71594a27632d",
    "photo-1583511655857-d19b40a7a54e",
  ],
  cats: [
    "photo-1514888286974-6c03e2ca1dba",
    "photo-1573865526739-10659fec78a5",
    "photo-1533738363-b7f9aef128ce",
    "photo-1592194996308-7b43878e84a6",
    "photo-1574158622682-e40e69881006",
  ],
  rabbits: [
    "photo-1585110396000-c9ffd4e4b308",
    "photo-1518796745738-41048802f99a",
    "photo-1535241749838-299277b6305f",
  ],
  birds: [
    "photo-1452570053594-1b985d6ea890",
    "photo-1522926193341-e9ffd686c60f",
    "photo-1444464666168-49d633b86797",
    "photo-1552728089-57bdde30beb3",
  ],
  aquatic: [
    "photo-1522069169874-c58ec4b76be5",
    "photo-1544551763-46a013bb70d5",
    "photo-1535591273668-578e31182c4f",
    "photo-1570481662006-a3a1374699e8",
  ],
  reptiles: [
    "photo-1548839140-29a749e1cf4d",
    "photo-1546548970-71785318a17b",
    "photo-1589829085413-56de8ae18c73",
  ],
  monkeys: [
    "photo-1667147382221-061b512deae0",
    "photo-1726165498985-893f324110e6",
    "photo-1750101724698-42347d885f50",
    "photo-1655981653307-4732d646c254",
  ],
};

const imgUrl = (id: string) =>
  `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`;

const categoryDetails: Record<Category, string[]> = {
  dogs: [
    "Up-to-date vaccinations & deworming",
    "Health records and papers included",
    "Free puppy care starter guide",
    "Lifetime care support",
  ],
  cats: [
    "Vaccinated & dewormed",
    "Litter box trained",
    "Health records included",
    "Free kitten care starter guide",
  ],
  rabbits: [
    "Health-checked & dewormed",
    "House-rabbit friendly temperament",
    "Care sheet included",
    "Lifetime care support",
  ],
  birds: [
    "Health-checked by our avian vet",
    "Hand-raised & socialized where stated",
    "Care guide included",
    "Free health certificate",
  ],
  aquatic: [
    "Captive-bred & healthy",
    "Acclimation guide included",
    "Multi-layered shipping-safe packaging",
    "Free setup & care advice",
  ],
  reptiles: [
    "Captive-bred & vet-checked",
    "Feeding & enclosure guide included",
    "Free health certificate",
    "Lifetime care support",
  ],
  monkeys: [
    "Socialized & handled regularly",
    "Diet & enrichment plan included",
    "Free vet health check",
    "Lifetime primate care support",
  ],
};

const defaultStock: Record<Category, number> = {
  dogs: 4,
  cats: 5,
  rabbits: 8,
  birds: 6,
  aquatic: 20,
  reptiles: 8,
  monkeys: 3,
};

function imageFor(category: Category, slug: string): string {
  const pool = groupImages[category];
  let hash = 0;
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return imgUrl(pool[hash % pool.length]);
}

function def(
  slug: string,
  name: string,
  category: Category,
  price: number,
  description: string,
  opts: Partial<Product> = {}
): Product {
  let hash = 0;
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return {
    slug,
    name,
    category,
    price,
    image: imageFor(category, slug),
    description,
    details: categoryDetails[category],
    featured: false,
    stock: defaultStock[category],
    rating: Math.round((4.6 + (hash % 5) * 0.1) * 10) / 10,
    reviews: (hash % 90) + 5,
    ...opts,
  };
}

export const products: Product[] = [
  def("german-shepherd", "German Shepherd", "dogs", 850, "A loyal, intelligent, and versatile working dog. Confident and trainable, they excel as family protectors and companions.", { featured: true }),
  def("maine-coon", "Maine Coon", "cats", 900, "The gentle giant of the cat world. Large, fluffy, and dog-friendly, with tufted ears and a loving nature.", { featured: true }),
  def("holland-lop", "Holland Lop", "rabbits", 95, "A tiny, floppy-eared bunny with a baby-like face. Docile, gentle, and the most popular house rabbit breed.", { featured: true }),
  def("african-grey", "African Grey Parrot", "birds", 1500, "The most intelligent talking parrot, with extraordinary vocabulary. Sensitive, loyal, and undeniably special.", { featured: true }),
  def("cherry-shrimp", "Cherry Shrimp", "aquatic", 8, "A vivid red dwarf shrimp that adds life to any planted tank. Hardy, social, and easy to breed. ", { featured: true }),
  def("bearded-dragon", "Bearded Dragon", "reptiles", 120, "A friendly, easygoing lizard that loves to lounge and wave. The ultimate beginner reptile with a big personality.", { featured: true }),
  def("golden-lion-tamarin", "Golden Lion Tamarin", "monkeys", 1200, "A flame-orange beauty from the Brazilian treetops. Rare, regal, and full of life.", { featured: true }),

  def("orange-tiger-bearded-dragon", "Orange Tiger Bearded Dragon", "reptiles", 209.99, "A premium, captive-bred Orange Tiger Bearded Dragon, vet-checked and acclimated, ready for its new home.", {
    species: "bearded-dragon",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1310_bd49f909-4c7f-4d68-a2b7-79cafb787bcd.jpg?v=1789850803",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1310_bd49f909-4c7f-4d68-a2b7-79cafb787bcd.jpg?v=1789850803", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1312_7686956c-7cc3-4aa4-9d86-f1a9a5dbe32a.jpg?v=1789850803", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1313_8e11d90e-9934-4526-a711-e4ec0cb9451b.jpg?v=1789850803", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1314_01012b61-7fab-4830-83ea-7c5d06e63e77.jpg?v=1789850803", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1315_8c8a543c-ae40-4359-8820-62174ee5fae7.jpg?v=1789850803", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1317_ba5243db-6e25-4049-b731-07dbee57c82d.jpg?v=1789850803", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1318_bb823cae-11c9-400d-bf27-ab0c48707c31.jpg?v=1789850803"],
  }),

  def("hypo-citrus-tiger-leatherback-bearded-dragon", "Hypo Leatherback Citrus Tiger Bearded Dragon", "reptiles", 279.99, "A premium, captive-bred Hypo Leatherback Citrus Tiger Bearded Dragon, vet-checked and acclimated, ready for its new home.", {
    species: "bearded-dragon",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0808.jpg?v=1787955003",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0808.jpg?v=1787955003", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0811.jpg?v=1787955003", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0810.jpg?v=1787955003", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0813.jpg?v=1787955003", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0806.jpg?v=1787955003", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0807.jpg?v=1787955003", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0809.jpg?v=1787955003", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0812.jpg?v=1787955003"],
  }),

  def("leopard-gecko", "RAPTOR Leopard Gecko", "reptiles", 119.99, "A premium, captive-bred RAPTOR Leopard Gecko, vet-checked and acclimated, ready for its new home.", {
    species: "leopard-gecko",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1139.jpg?v=1789159913",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1139.jpg?v=1789159913", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1145_f4eecc96-d286-4dcc-8161-62ade3ef79d5.jpg?v=1789159913", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1144.jpg?v=1789159913", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1143.jpg?v=1789159914", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1142.jpg?v=1789159914", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1149_ae55e4f1-3c01-496e-a9af-7086c0657f22.jpg?v=1789159938"],
  }),

  def("leopard-gecko-2", "Tangerine Tornado Leopard Gecko", "reptiles", 149.99, "A premium, captive-bred Tangerine Tornado Leopard Gecko, vet-checked and acclimated, ready for its new home.", {
    species: "leopard-gecko",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1302.jpg?v=1789601165",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1302.jpg?v=1789601165", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1303.jpg?v=1789601165", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1304.jpg?v=1789601165", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1305.jpg?v=1789601165", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1306.jpg?v=1789601165", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1307.jpg?v=1789601165", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1308.jpg?v=1789601165"],
  }),

  def("crested-gecko", "Harlequin Crested Gecko", "reptiles", 199.99, "Beautiful red undertones on this male!", {
    species: "crested-gecko",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1547.jpg?v=1790449490",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1547.jpg?v=1790449490", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1544.jpg?v=1790449490", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1545.jpg?v=1790449490", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1546.jpg?v=1790449490", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1548.jpg?v=1790449490", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1549.jpg?v=1790449490"],
  }),

  def("crested-gecko-2", "Dalmatian Crested Gecko", "reptiles", 189.99, "A premium, captive-bred Dalmatian Crested Gecko, vet-checked and acclimated, ready for its new home.", {
    species: "crested-gecko",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1247.jpg?v=1789510437",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1247.jpg?v=1789510437", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1248.jpg?v=1789510437", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1249.jpg?v=1789510479", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1252.jpg?v=1789510437", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1254.jpg?v=1789510437", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1256.jpg?v=1789510437"],
  }),

  def("blue-tongued-skink", "CB Northern Blue Tongue Skink", "reptiles", 399.99, "A premium, captive-bred CB Northern Blue Tongue Skink, vet-checked and acclimated, ready for its new home.", {
    species: "blue-tongued-skink",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_2027_batch.jpg?v=1763657057",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_2027_batch.jpg?v=1763657057", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_2028_batch.jpg?v=1763657056", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_2029_batch.jpg?v=1763657057", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_2030_batch.jpg?v=1763657058", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_2031_batch.jpg?v=1763657060", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_2032_batch.jpg?v=1763657060", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_2026_batch.jpg?v=1763657062"],
  }),

  def("blue-tongued-skink-2", "Halmahera Blue Tongue Skink", "reptiles", 299.99, "A premium, captive-bred Halmahera Blue Tongue Skink, vet-checked and acclimated, ready for its new home.", {
    species: "blue-tongued-skink",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_6517_1.jpg?v=1761254094",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_6517_1.jpg?v=1761254094", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_6522_2_aef11501-5baf-41db-bca5-11aac22c1eb8.jpg?v=1761254094", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_6523_2.jpg?v=1761254095", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_6518_1_19b322a0-11d2-4bb2-af72-107554321c0d.jpg?v=1761254096", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_6525_2.jpg?v=1761254096"],
  }),

  def("veiled-chameleon", "Veiled Chameleon", "reptiles", 149.99, "Veiled chameleons are a medium to large size chameleon. They are very hardy and with the right environment can be very easy to keep. Out of all the chameleons, veileds are most popular for first time chameleon owners. Babies can be kept together but once maturity approaches, they must be housed individually or in an enclosure large enough that they can not see each other.", {
    species: "veiled-chameleon",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7951.jpg?v=1777675961",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7951.jpg?v=1777675961", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7941.jpg?v=1777675961", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7944.jpg?v=1777675961", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7945.jpg?v=1777675961", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7946.jpg?v=1777675961", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7947.jpg?v=1777675961", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7950.jpg?v=1777675961", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7952.jpg?v=1777675961", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_7953.jpg?v=1777675961"],
  }),

  def("veiled-chameleon-2", "Veiled Chameleon - Males", "reptiles", 149.99, "Veiled chameleons are a medium to large size chameleon. They are very hardy and with the right environment can be very easy to keep. Out of all the chameleons, veileds are most popular for first time chameleon owners. Babies can be kept together but once maturity approaches, they must be housed individually or in an enclosure large enough that they can not see each other. These are photos from the current group available. These males are currently a little bigger than these photos now! Sorry, but no individual photos will be provided.", {
    species: "veiled-chameleon",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7379_1_1_2.jpg?v=1750018664",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7379_1_1_2.jpg?v=1750018664", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7377_1_1_1_2.jpg?v=1757280489", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7376_1_1_1_2.jpg?v=1757280489", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7378_1_1_1_2.jpg?v=1750018664", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7381_1_1_2.jpg?v=1747349908", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7382_1_1_2.jpg?v=1747349908", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7385_1_1_2.jpg?v=1747349908", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7383_1_1_2.jpg?v=1747349908"],
  }),

  def("green-anole", "Green Anoles - Males", "reptiles", 29.99, "Green Anoles. Due to high turnover for these guys, we can not provide individual photos of them but the one pictured here is from the group that is available and all look very similar.", {
    species: "green-anole",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2587_2_1_5_2_8d01f89b-c11a-4f1f-a907-f0f931b7029d.jpg?v=1761254624",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2587_2_1_5_2_8d01f89b-c11a-4f1f-a907-f0f931b7029d.jpg?v=1761254624", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2589_2_1_5_2_29e9dc61-8d93-4113-b33e-6d7a3260b018.jpg?v=1761254623", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2586_2_1_5_2_86f3041e-4ea8-4c4a-901c-5761d98f2a0a.jpg?v=1761254624", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2590_2_1_5_2_5570607c-7566-4a02-859e-d0eb4697be15.jpg?v=1761254625", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2591_2_1_5_2.jpg?v=1761254627"],
  }),

  def("green-anole-2", "Green Anoles - Females", "reptiles", 34.99, "Green Anoles. Due to high turnover for these guys, we can not provide individual photos of them but the one pictured here is from the group that is available and all look very similar.", {
    species: "green-anole",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2587_2_1_5_1_70106bef-7d4d-4b2f-a32b-9747503f4a27.jpg?v=1761254618",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2587_2_1_5_1_70106bef-7d4d-4b2f-a32b-9747503f4a27.jpg?v=1761254618", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2589_2_1_5_1.jpg?v=1761254619", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2586_2_1_5_1.jpg?v=1761254619", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2590_2_1_5_1.jpg?v=1761254621", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_2591_2_1_5_1.jpg?v=1761254621"],
  }),

  def("corn-snake", "Classic Corn Snake", "reptiles", 89.99, "One of the very best beginner snakes! We have several classics available right now that are related. These are pictures of two from the current group and you will receive one from the same group. They all look almost identical! Sorry, but we are unable to provide individual or additional photos for this group. Specific sex is avialble by request only. If you have a preference please ensure you state your preferred sex in the comment section at check out.", {
    species: "corn-snake",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0438.jpg?v=1787011707",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0438.jpg?v=1787011707", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0437.jpg?v=1787011707", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0439.jpg?v=1787011707", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0440.jpg?v=1787011707", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0441.jpg?v=1787011707", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0443.jpg?v=1787011707"],
  }),

  def("corn-snake-2", "Striped Corn Snake", "reptiles", 109.99, "We have several Stripes available right now that are related. These are pictures of three from the current group and you will receive one from the same group. They all look almost identical! Sorry, but we are unable to provide individual or additional photos for this group. Specific sex is avialble by request only. If you have a preference please ensure you state your preferred sex in the comment section at check out.", {
    species: "corn-snake",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1328.jpg?v=1789679736",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1328.jpg?v=1789679736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1322.jpg?v=1789679736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1324.jpg?v=1789679736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1325.jpg?v=1789679736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1327.jpg?v=1789679736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1329.jpg?v=1789679736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1330.jpg?v=1789679736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1331.jpg?v=1789679736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1332.jpg?v=1789679736"],
  }),

  def("ball-python", "Pinstripe Ball Python", "reptiles", 129.99, "A premium, captive-bred Pinstripe Ball Python, vet-checked and acclimated, ready for its new home.", {
    species: "ball-python",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1451.jpg?v=1790273996",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1451.jpg?v=1790273996", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1452.jpg?v=1790273732", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1453.jpg?v=1790273732", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1454.jpg?v=1790273732", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1455.jpg?v=1790273736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1456.jpg?v=1790273732", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_1457.jpg?v=1790273733"],
  }),

  def("ball-python-2", "Pastel Clown Ball Python", "reptiles", 259.99, "A premium, captive-bred Pastel Clown Ball Python, vet-checked and acclimated, ready for its new home.", {
    species: "ball-python",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0876.jpg?v=1788221827",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0876.jpg?v=1788221827", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0871.jpg?v=1788221827", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0873.jpg?v=1788221827", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0877.jpg?v=1788221827", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0880.jpg?v=1788221827", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0881.jpg?v=1788221827", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0885.jpg?v=1788221827", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0886.jpg?v=1788221827", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0887.jpg?v=1788221827"],
  }),

  def("milk-snake", "Albino Nelson's Mexican Milksnake", "reptiles", 399.99, "A premium, captive-bred Albino Nelson's Mexican Milksnake, vet-checked and acclimated, ready for its new home.", {
    species: "milk-snake",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9587.jpg?v=1783543205",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9587.jpg?v=1783543205", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9592.jpg?v=1783543163", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9583.jpg?v=1783543163", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9584.jpg?v=1783543163", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9585.jpg?v=1783543163", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9586.jpg?v=1783543163", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9590.jpg?v=1783543162", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9591.jpg?v=1783543163"],
  }),

  def("milk-snake-2", "Albino Tangerine Honduran Milksnake", "reptiles", 349.99, "A premium, captive-bred Albino Tangerine Honduran Milksnake, vet-checked and acclimated, ready for its new home.", {
    species: "milk-snake",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9609.jpg?v=1783547429",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9609.jpg?v=1783547429", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9610.jpg?v=1783547429", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9611.jpg?v=1783547429", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9612.jpg?v=1783547429", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9613.jpg?v=1783547428", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9614.jpg?v=1783547429", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9615.jpg?v=1783547429"],
  }),

  def("king-snake", "Florida Kingsnake", "reptiles", 129.99, "A premium, captive-bred Florida Kingsnake, vet-checked and acclimated, ready for its new home.", {
    species: "king-snake",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0318_2ec62a12-b820-41a7-8534-10c269dee045.jpg?v=1786662320",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0318_2ec62a12-b820-41a7-8534-10c269dee045.jpg?v=1786662320", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0311.jpg?v=1786662296", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0312.jpg?v=1786662296", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0313.jpg?v=1786662296", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0314_5f35a0cb-00a1-4c97-92fb-2d9ca37dceb2.jpg?v=1786662296", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0315_30c913a1-ed93-44f3-aff4-9010b8d6ac3f.jpg?v=1786662296", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0316.jpg?v=1786662296", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0317_c56653da-c72f-40a9-89c6-52ba5e0b05b0.jpg?v=1786662296", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0319.jpg?v=1786662341"],
  }),

  def("king-snake-2", "Hypo Florida Kingsnake", "reptiles", 169.99, "A premium, captive-bred Hypo Florida Kingsnake, vet-checked and acclimated, ready for its new home.", {
    species: "king-snake",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0325_b800ab66-2aba-4fe2-9b78-cf69b0048c39.jpg?v=1786662538",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0325_b800ab66-2aba-4fe2-9b78-cf69b0048c39.jpg?v=1786662538", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0320.jpg?v=1786662538", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0321.jpg?v=1786662538", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0322.jpg?v=1786662538", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0323.jpg?v=1786662538", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0324.jpg?v=1786662538", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0326.jpg?v=1786662538"],
  }),

  def("western-hognose", "Western Hognose Snake", "reptiles", 289.99, "Currently feeding on frozen/thawed pinkies", {
    species: "western-hognose",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0852.jpg?v=1787955574",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0852.jpg?v=1787955574", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0854.jpg?v=1787955553", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0855.jpg?v=1787955554", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0856.jpg?v=1787955553", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0857.jpg?v=1787955554", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0858_ea5c2b60-00a2-4a8d-b080-3ed711d88b70.jpg?v=1787955553", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0859_0fdf1c6c-899e-4c8d-9075-74acc1a70233.jpg?v=1787955554"],
  }),

  def("western-hognose-2", "Anaconda Western Hognose Snake", "reptiles", 299.99, "All Western Hognoses are on f/t pinkies.", {
    species: "western-hognose",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0893_c8989b65-50fb-444e-a6e3-4c58ff785213.jpg?v=1788221986",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0893_c8989b65-50fb-444e-a6e3-4c58ff785213.jpg?v=1788221986", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0894_c3343b04-e094-44ee-bd7f-ff76cc525f16.jpg?v=1788221949", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0888.jpg?v=1788221949", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0889.jpg?v=1788221950", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0890.jpg?v=1788221949", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0891.jpg?v=1788221949", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0892_ecae09fc-c794-4933-9a4e-9bc69b9ffde5.jpg?v=1788221949"],
  }),

  def("red-eared-slider", "Adult Male Reeves Turtle", "reptiles", 399.99, "Adult Male Reeves Turtle - Mineral deposits on the shell will dissipate over time with the use of RO or softened water.", {
    species: "red-eared-slider",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9466.jpg?v=1761256369",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9466.jpg?v=1761256369", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9465.jpg?v=1761256371", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9467.jpg?v=1761256371", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9469.jpg?v=1761256373", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9468.jpg?v=1761256373"],
  }),

  def("red-eared-slider-2", "Yellow Pond Turtle", "reptiles", 799.99, "Yellow Pond Turtle - Adult Male", {
    species: "red-eared-slider",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7142_1_da8f2574-2310-449c-a82d-8a90f22f3212.jpg?v=1761254985",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7142_1_da8f2574-2310-449c-a82d-8a90f22f3212.jpg?v=1761254985", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7140_1.jpg?v=1761254986", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7141_1_aa447d71-eba2-463b-948a-94f61880a45c.jpg?v=1761254988", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7143.jpg?v=1761254988", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_7145.jpg?v=1761254990"],
  }),

  def("yellow-bellied-slider", "African Sideneck Mud Turtle", "reptiles", 399.99, "A premium, captive-bred African Sideneck Mud Turtle, vet-checked and acclimated, ready for its new home.", {
    species: "yellow-bellied-slider",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0328_36abcc37-ffef-418a-8ca8-72e1204b0fee.jpg?v=1761253825",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0328_36abcc37-ffef-418a-8ca8-72e1204b0fee.jpg?v=1761253825", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0327.jpg?v=1761253825", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0329.jpg?v=1761253826", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0330_8004f4dd-79d8-43da-8b5a-4cca04e4eaa9.jpg?v=1761253827"],
  }),

  def("yellow-bellied-slider-2", "Three Stripe Mud Turtle", "reptiles", 349.99, "Three Stripe Mud Turtle.", {
    species: "yellow-bellied-slider",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_5265_1_1_1_1_1.jpg?v=1761253985",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_5265_1_1_1_1_1.jpg?v=1761253985", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_5264_1_1_1_1_1.jpg?v=1761253985", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_5262_1_1_1_1_1_7ed6ab5a-1222-4a9a-bd73-ebb61433d5ea.jpg?v=1761253986", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_5267_1_1_1_1_1.jpg?v=1761253987", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_5266_1_1_1_1_1.jpg?v=1761253987"],
  }),

  def("eastern-box-turtle", "Three Toed Box Turtle", "reptiles", 449.99, "The three toed box turtle is a small, high domed turtle native to the south central U.S., known for its three toes on each hind foot. Its shell is typically brown or olive with yellow or orange markings, and adults reach about 4.5 to 6 inches in length. Omnivorous and fond of humid woodland habitats, they eat mainly fruits and insects. These turtles have hinged shells for protection and can live over 50 years. They require high quality UVB lighting and moderate heat. An ideal set up for them is a type of swampy half water half land habitat. They have a ton of personality and are a delight to keep as pets!", {
    species: "eastern-box-turtle",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5915_batch_6f042d5f-520c-4ae0-a818-7811e89e367a.jpg?v=1768610508",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5915_batch_6f042d5f-520c-4ae0-a818-7811e89e367a.jpg?v=1768610508", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5911_batch_c22f0811-a408-4049-806c-23378d8bc7e5.jpg?v=1768610508", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5912_batch_2e503162-9a0e-41af-947c-b0704c7cc41a.jpg?v=1768610508", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5913_batch_50d7459a-5b3b-4d66-bde2-80f8e054f902.jpg?v=1768610508", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5914_batch_fdb52174-eb39-4e95-9e18-24b9b72bac49.jpg?v=1768610508", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5916_batch_81bd8c0b-59df-4b12-9f03-da0ad4ec0301.jpg?v=1768610456", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5917_batch_cf5d1a68-336b-4e58-b4b1-d0ddcc743732.jpg?v=1768610456", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_5918_batch_e5b9aea4-3fce-49db-a77c-3e79c0f238f8.jpg?v=1768610456"],
  }),

  def("eastern-box-turtle-2", "Chinese Box Turtle", "reptiles", 549.99, "A premium, captive-bred Chinese Box Turtle, vet-checked and acclimated, ready for its new home.", {
    species: "eastern-box-turtle",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0984_745f10a8-dbbf-4d53-9c65-c2e849e32c17.jpg?v=1759426323",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0984_745f10a8-dbbf-4d53-9c65-c2e849e32c17.jpg?v=1759426323", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0988.jpg?v=1759426324", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0987.jpg?v=1759426324", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0989.jpg?v=1759426324", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0991_a5537af5-71a1-444a-a11e-556a13fb8010.jpg?v=1759426326", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0992.jpg?v=1759426326", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_0993.jpg?v=1759426327"],
  }),

  def("russian-tortoise", "Russian Tortoise", "reptiles", 649.99, "Are you looking for a tortoise that stays small and does not have high humidity requirements? Then the Russian tortoise is for you! This little cutie is literally cute as a button currently only measuring under 2 inch in shell length, they max out at 6-10\" shell length.", {
    species: "russian-tortoise",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_1204_1.jpg?v=1761254109",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_1204_1.jpg?v=1761254109", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_1205_1.jpg?v=1761254109", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_1206_1.jpg?v=1761254109", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_1207.jpg?v=1761254111", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_1209_2.jpg?v=1761254111", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/img_1208_2.jpg?v=1761254111"],
  }),

  def("russian-tortoise-2", "Black Greek Tortoise", "reptiles", 649.99, "A premium, captive-bred Black Greek Tortoise, vet-checked and acclimated, ready for its new home.", {
    species: "russian-tortoise",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9343.jpg?v=1761256253",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9343.jpg?v=1761256253", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9344.jpg?v=1761256254", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9345.jpg?v=1761256257", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9347.jpg?v=1761256257", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9349.jpg?v=1761256259", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9348.jpg?v=1761256259", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9346_2.jpg?v=1761256261"],
  }),

  def("hermanns-tortoise", "Hermann's Tortoise", "reptiles", 649.99, "A premium, captive-bred Hermann's Tortoise, vet-checked and acclimated, ready for its new home.", {
    species: "hermanns-tortoise",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_3675_batch_689b8b19-a2fe-4118-acb0-b549237fdb3e.jpg?v=1761255544",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_3675_batch_689b8b19-a2fe-4118-acb0-b549237fdb3e.jpg?v=1761255544", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_3676_batch_339c9e6c-cf46-4c28-8c83-bd808843eaba.jpg?v=1761255538", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_3678_batch_5a302249-2591-4c3f-9365-d9a3a9f5f1ec.jpg?v=1761255538", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_3668_batch_cbbaceef-07b2-4d68-84ce-63d51eca87e9.jpg?v=1761255540", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_3669_batch_7a0a686a-21e1-49f5-9a50-c769d8af3f2f.jpg?v=1761255540", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_3670_batch_bdd088c1-d3c0-425d-b076-5b17a6108eb2.jpg?v=1761255541", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_3673_batch_5e1e6baf-20d0-494b-9663-152572093ff6.jpg?v=1761255541"],
  }),

  def("hermanns-tortoise-2", "Marginated Tortoise", "reptiles", 649.99, "Marginated Tortoise - Yearling", {
    species: "hermanns-tortoise",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9356.jpg?v=1761256268",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9356.jpg?v=1761256268", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9357.jpg?v=1761256267", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9359.jpg?v=1761256269", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9358.jpg?v=1761256269", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9361.jpg?v=1761256271", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/batch_img_9360_1.jpg?v=1761256271"],
  }),

  def("sulcata-tortoise", "Leopard Tortoise", "reptiles", 699.99, "A premium, captive-bred Leopard Tortoise, vet-checked and acclimated, ready for its new home.", {
    species: "sulcata-tortoise",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9541.jpg?v=1783461358",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9541.jpg?v=1783461358", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9540.jpg?v=1783461332", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9537_5512559c-acb7-4d5c-9256-203d1c3c2bee.jpg?v=1783461332", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9538_cdf4aa8b-8e9e-4bc3-82ef-b2ebe3b1dd9a.jpg?v=1783461371", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9539.jpg?v=1783461332", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9542.jpg?v=1783461332", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9543.jpg?v=1783461386", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9544.jpg?v=1783461332", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_9545.jpg?v=1783461332"],
  }),

  def("sulcata-tortoise-2", "Indian Star Tortoise", "reptiles", 999.99, "A premium, captive-bred Indian Star Tortoise, vet-checked and acclimated, ready for its new home.", {
    species: "sulcata-tortoise",
    image: "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0911.jpg?v=1788469736",
    images: ["https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0911.jpg?v=1788469736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0913.jpg?v=1788469736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0914.jpg?v=1788469736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0915.jpg?v=1788469736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0916.jpg?v=1788469736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0917.jpg?v=1788469736", "https://cdn.shopify.com/s/files/1/0828/9245/6211/files/IMG_0918.jpg?v=1788469736"],
  }),

  def("german-shepherd-working-line", "German Shepherd Working Line Puppy", "dogs", 1499.99, "A confident, energetic working-line German Shepherd, raised with early socialization and handler-focused training foundations. Sharp, loyal, and ready for an active family or sport home.", { species: "german-shepherd", image: "https://images.unsplash.com/photo-1743617206502-6a4144e02fb1?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1743617206502-6a4144e02fb1?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1693507078013-b4256d9baf9f?w=800&q=80&auto=format&fit=crop"] }),
  def("german-shepherd-show-line", "German Shepherd Show Line Puppy", "dogs", 1699.99, "A striking show-line German Shepherd with a steady temperament and an elegant, sloping build. Calm at home, confident in public, and beautifully socialized from day one.", { species: "german-shepherd", image: "https://images.unsplash.com/photo-1693507078013-b4256d9baf9f?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1693507078013-b4256d9baf9f?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1743617206502-6a4144e02fb1?w=800&q=80&auto=format&fit=crop"] }),

  def("siberian-husky", "Siberian Husky Puppy", "dogs", 899.99, "A striking grey-and-white Siberian Husky with baby-blue eyes and a playful, outgoing personality. Bred for endurance, loves the cold, and adores a good run.", { species: "siberian-husky", image: "https://images.unsplash.com/photo-1574273443477-87bf272e5100?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1574273443477-87bf272e5100?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1558108721-14e0d2fd1dac?w=800&q=80&auto=format&fit=crop"] }),
  def("siberian-husky-2", "Red & White Siberian Husky Puppy", "dogs", 949.99, "A gorgeous red-and-white Siberian Husky with a thick double coat and a mischievous, affectionate streak. Eager to please and always ready for the next adventure.", { species: "siberian-husky", image: "https://images.unsplash.com/photo-1558108721-14e0d2fd1dac?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1558108721-14e0d2fd1dac?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1574273443477-87bf272e5100?w=800&q=80&auto=format&fit=crop"] }),

  def("rottweiler", "Rottweiler Puppy", "dogs", 1099.99, "A sturdy, confident Rottweiler puppy from health-tested parents. Protective by nature yet gentle with family, he trains beautifully and thrives on structure.", { species: "rottweiler", image: "https://images.unsplash.com/photo-1673474025690-eacc81e21daa?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1673474025690-eacc81e21daa?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1656138899262-1faa4ae4bef6?w=800&q=80&auto=format&fit=crop"] }),
  def("rottweiler-2", "German Lines Rottweiler Puppy", "dogs", 1199.99, "A powerful German-lines Rottweiler with excellent bone and a calm, watchful demeanor. Imprinting and leash training already underway.", { species: "rottweiler", image: "https://images.unsplash.com/photo-1656138899262-1faa4ae4bef6?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1656138899262-1faa4ae4bef6?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1673474025690-eacc81e21daa?w=800&q=80&auto=format&fit=crop"] }),

  def("doberman-pinscher", "Doberman Pinscher Puppy", "dogs", 1349.99, "A sleek, athletic Doberman puppy with a fearless heart and a devoted bond to his people. Early obedience and confidence-building are his strengths.", { species: "doberman-pinscher", image: "https://images.unsplash.com/photo-1536677412572-c277de11e458?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1536677412572-c277de11e458?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1599586477491-f86db60c0c1c?w=800&q=80&auto=format&fit=crop"] }),
  def("doberman-pinscher-2", "European Bloodline Doberman Puppy", "dogs", 1449.99, "A larger-framed, European-bloodline Doberman with a noble presence and an affectionate nature. Raised around children and other dogs.", { species: "doberman-pinscher", image: "https://images.unsplash.com/photo-1599586477491-f86db60c0c1c?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1599586477491-f86db60c0c1c?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1536677412572-c277de11e458?w=800&q=80&auto=format&fit=crop"] }),

  def("belgian-malinois", "Belgian Malinois Puppy", "dogs", 1549.99, "A sharp, high-drive Belgian Malinois from working parents, already showing strong ball drive and environmental confidence. A future sport or protection prospect.", { species: "belgian-malinois", image: "https://images.unsplash.com/photo-1579554600247-7dfe63989cac?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1579554600247-7dfe63989cac?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1505622382022-0eabe1d1bff9?w=800&q=80&auto=format&fit=crop"] }),
  def("belgian-malinois-2", "Malinois Sport Prospect Puppy", "dogs", 1649.99, "An athletic Malinois sport prospect with exceptional nerve and workability. Crate trained, socialized to loud environments, and eager to learn.", { species: "belgian-malinois", image: "https://images.unsplash.com/photo-1505622382022-0eabe1d1bff9?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1505622382022-0eabe1d1bff9?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1579554600247-7dfe63989cac?w=800&q=80&auto=format&fit=crop"] }),

  def("border-collie", "Border Collie Puppy", "dogs", 849.99, "A bright-eyed black-and-white Border Collie puppy with an off-the-charts intelligence and an instinctive herding drive. The perfect agility partner in the making.", { species: "border-collie", image: "https://images.unsplash.com/photo-1568393691080-d016376b767d?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1568393691080-d016376b767d?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1593270379182-fe1b1f6d67e5?w=800&q=80&auto=format&fit=crop"] }),
  def("border-collie-2", "Blue Merle Border Collie Puppy", "dogs", 949.99, "A gorgeous blue-merle Border Collie with striking marbled patterns and a sweet, biddable temperament. Quick to learn and quick to please.", { species: "border-collie", image: "https://images.unsplash.com/photo-1593270379182-fe1b1f6d67e5?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1593270379182-fe1b1f6d67e5?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1568393691080-d016376b767d?w=800&q=80&auto=format&fit=crop"] }),

  def("australian-shepherd", "Australian Shepherd Puppy", "dogs", 1049.99, "A friendly merle Australian Shepherd with a lively, people-loving personality. Bright, trainable, and happiest when there is a job to do.", { species: "australian-shepherd", image: "https://images.unsplash.com/photo-1705624980194-6325687bb1aa?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1705624980194-6325687bb1aa?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1613480188167-ac69cf8665e2?w=800&q=80&auto=format&fit=crop"] }),
  def("australian-shepherd-2", "Black Tri Australian Shepherd Puppy", "dogs", 1149.99, "A handsome black-tan-and-white Australian Shepherd with a steady temperament and endless enthusiasm. Great with kids and other pets.", { species: "australian-shepherd", image: "https://images.unsplash.com/photo-1613480188167-ac69cf8665e2?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1613480188167-ac69cf8665e2?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1705624980194-6325687bb1aa?w=800&q=80&auto=format&fit=crop"] }),

  def("golden-retriever", "Golden Retriever Puppy", "dogs", 949.99, "A warm, gentle Golden Retriever puppy with that classic butter-gold coat and a heart full of love. The ultimate family dog, fully socialized with kids.", { species: "golden-retriever", image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1595088716394-74b9cc33f18d?w=800&q=80&auto=format&fit=crop"] }),
  def("golden-retriever-2", "Light Cream Golden Retriever Puppy", "dogs", 999.99, "A soft cream-coated Golden Retriever puppy with an exceptionally calm disposition. Fetch-obsessed, housebroken in training, and endlessly affectionate.", { species: "golden-retriever", image: "https://images.unsplash.com/photo-1595088716394-74b9cc33f18d?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1595088716394-74b9cc33f18d?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&q=80&auto=format&fit=crop"] }),

  def("labrador-retriever", "Labrador Retriever Puppy", "dogs", 899.99, "A classic yellow Labrador with a blocky head and a famously friendly spirit. Food-driven, eager to please, and a natural swimmer.", { species: "labrador-retriever", image: "https://images.unsplash.com/photo-1574909812600-880872ef7d60?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1574909812600-880872ef7d60?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1589782455083-8c9fbf64d064?w=800&q=80&auto=format&fit=crop"] }),
  def("labrador-retriever-2", "Chocolate Labrador Puppy", "dogs", 949.99, "A rich chocolate Labrador with a soft, soulful expression and a comedic, lovable personality. Raised with cats and crate training underway.", { species: "labrador-retriever", image: "https://images.unsplash.com/photo-1589782455083-8c9fbf64d064?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1589782455083-8c9fbf64d064?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1574909812600-880872ef7d60?w=800&q=80&auto=format&fit=crop"] }),

  def("cocker-spaniel", "Cocker Spaniel Puppy", "dogs", 749.99, "A floppy-eared, feathery-coated Cocker Spaniel with a merry disposition and soulful dark eyes. Gentle, happy-go-lucky, and wonderful with children.", { species: "cocker-spaniel", image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1657088746570-0218626e8f55?w=800&q=80&auto=format&fit=crop"] }),
  def("cocker-spaniel-2", "Black Cocker Spaniel Puppy", "dogs", 799.99, "A glossy black Cocker Spaniel puppy with a silky coat and the sweetest temperament. Quick to learn and devoted to his people.", { species: "cocker-spaniel", image: "https://images.unsplash.com/photo-1657088746570-0218626e8f55?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1657088746570-0218626e8f55?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&q=80&auto=format&fit=crop"] }),

  def("german-shorthaired-pointer", "German Shorthaired Pointer Puppy", "dogs", 849.99, "An energetic liver-and-white GSP with boundless stamina and natural pointing instinct. A versatile hunting partner and a devoted family member.", { species: "german-shorthaired-pointer", image: "https://images.unsplash.com/photo-1547799867-841a6e8c2d4d?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1547799867-841a6e8c2d4d?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1632060503157-53d9f9f3831f?w=800&q=80&auto=format&fit=crop"] }),
  def("german-shorthaired-pointer-2", "Roan German Shorthaired Pointer Puppy", "dogs", 899.99, "A striking roan GSP puppy with intense drive and a soft mouth. Early bird exposure and fetch training already in progress.", { species: "german-shorthaired-pointer", image: "https://images.unsplash.com/photo-1632060503157-53d9f9f3831f?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1632060503157-53d9f9f3831f?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1547799867-841a6e8c2d4d?w=800&q=80&auto=format&fit=crop"] }),

  def("english-setter", "English Setter Puppy", "dogs", 899.99, "A graceful belton-patterned English Setter with a gentle, aristocratic air and a joyful bounce in her step. Loves birds, long walks, and laps.", { species: "english-setter", image: "https://images.unsplash.com/photo-1543403599-400cd6b823da?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1543403599-400cd6b823da?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1600431970487-2f0c0367fc7c?w=800&q=80&auto=format&fit=crop"] }),
  def("english-setter-2", "Orange Belton English Setter Puppy", "dogs", 949.99, "A warm orange-belton English Setter puppy with an easygoing nature and a feathering coat that turns heads. Excellent with children and other dogs.", { species: "english-setter", image: "https://images.unsplash.com/photo-1600431970487-2f0c0367fc7c?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1600431970487-2f0c0367fc7c?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1543403599-400cd6b823da?w=800&q=80&auto=format&fit=crop"] }),

  def("french-bulldog", "French Bulldog Puppy", "dogs", 2299.99, "A charming cream French Bulldog with bat ears, a squishy face, and a big personality in a small package. The perfect apartment companion.", { species: "french-bulldog", image: "https://images.unsplash.com/photo-1756780773084-47868308853d?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1756780773084-47868308853d?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1753475585393-64b7f2f50b6a?w=800&q=80&auto=format&fit=crop"] }),
  def("french-bulldog-2", "Brindle French Bulldog Puppy", "dogs", 2499.99, "A striking brindle French Bulldog with a stocky build and an affectionate, clownish nature. Health screened, vaccinated, and ready to be spoiled.", { species: "french-bulldog", image: "https://images.unsplash.com/photo-1753475585393-64b7f2f50b6a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1753475585393-64b7f2f50b6a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1756780773084-47868308853d?w=800&q=80&auto=format&fit=crop"] }),

  def("standard-poodle", "Standard Poodle Puppy", "dogs", 1249.99, "A regal black standard Poodle with a curly low-shed coat and a brilliant, trainable mind. Hypoallergenic-friendly and incredibly people-oriented.", { species: "standard-poodle", image: "https://images.unsplash.com/photo-1539191394261-c17ec4a3e451?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1539191394261-c17ec4a3e451?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1546421845-8134eb53c602?w=800&q=80&auto=format&fit=crop"] }),
  def("standard-poodle-2", "White Standard Poodle Puppy", "dogs", 1349.99, "A snow-white standard Poodle with a dignified gait and a playful glint in her eye. Obedient, low-allergen, and already crate trained.", { species: "standard-poodle", image: "https://images.unsplash.com/photo-1546421845-8134eb53c602?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1546421845-8134eb53c602?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1539191394261-c17ec4a3e451?w=800&q=80&auto=format&fit=crop"] }),

  def("miniature-poodle", "Miniature Poodle Puppy", "dogs", 1149.99, "A petite apricot miniature Poodle with a soft curly coat and a big, affectionate heart. Biddable, clever, and the ideal lap-sized companion.", { species: "miniature-poodle", image: "https://images.unsplash.com/photo-1513189643435-49f97650b367?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1513189643435-49f97650b367?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1707014047917-d9633a49d39e?w=800&q=80&auto=format&fit=crop"] }),
  def("miniature-poodle-2", "Black Miniature Poodle Puppy", "dogs", 1249.99, "A shiny black miniature Poodle with a cheerful disposition and a quick wit. Low-shed, travel-friendly, and ready for a life of adventures.", { species: "miniature-poodle", image: "https://images.unsplash.com/photo-1707014047917-d9633a49d39e?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1707014047917-d9633a49d39e?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1513189643435-49f97650b367?w=800&q=80&auto=format&fit=crop"] }),

  def("toy-poodle", "Toy Poodle Puppy", "dogs", 1049.99, "A pocket-sized white toy Poodle with a plush coat and the confidence of a much bigger dog. Smart, devoted, and utterly irresistible.", { species: "toy-poodle", image: "https://images.unsplash.com/photo-1549297161-14f79605a74c?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1549297161-14f79605a74c?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1597674078306-f1f3a5220ce3?w=800&q=80&auto=format&fit=crop"] }),
  def("toy-poodle-2", "Apricot Toy Poodle Puppy", "dogs", 1099.99, "A darling apricot toy Poodle with button eyes and a playful, snuggly personality. Fully housebroken in training and ready for cuddles.", { species: "toy-poodle", image: "https://images.unsplash.com/photo-1597674078306-f1f3a5220ce3?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1597674078306-f1f3a5220ce3?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1549297161-14f79605a74c?w=800&q=80&auto=format&fit=crop"] }),

  def("chihuahua", "Chihuahua Puppy", "dogs", 649.99, "A tiny apple-head Chihuahua with a huge personality and endless loyalty. Compact, portable, and fiercely devoted to her special person.", { species: "chihuahua", image: "https://images.unsplash.com/photo-1610041518868-f9284e7eecfe?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1610041518868-f9284e7eecfe?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1545326739-1917102eec27?w=800&q=80&auto=format&fit=crop"] }),
  def("chihuahua-2", "Long Coat Chihuahua Puppy", "dogs", 699.99, "A fluffy long-coat Chihuahua with silky fur and a sweet, alert nature. Content in a lap but spirited on a walk — the best of both worlds.", { species: "chihuahua", image: "https://images.unsplash.com/photo-1545326739-1917102eec27?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1545326739-1917102eec27?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1610041518868-f9284e7eecfe?w=800&q=80&auto=format&fit=crop"] }),

  def("dachshund", "Dachshund Puppy", "dogs", 749.99, "A classic red smooth-coat Dachshund with a long, low silhouette and a bold, curious personality. A big-hearted hunter in a little body.", { species: "dachshund", image: "https://images.unsplash.com/photo-1754295559534-327c271ba4a6?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1754295559534-327c271ba4a6?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1746034137968-d0c21ec8111e?w=800&q=80&auto=format&fit=crop"] }),
  def("dachshund-2", "Miniature Dachshund Puppy", "dogs", 799.99, "A chocolate-and-tan miniature Dachshund, small enough for city life but brave as can be. Snuggly, spunky, and full of charm.", { species: "dachshund", image: "https://images.unsplash.com/photo-1746034137968-d0c21ec8111e?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1746034137968-d0c21ec8111e?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1754295559534-327c271ba4a6?w=800&q=80&auto=format&fit=crop"] }),

  def("beagle", "Beagle Puppy", "dogs", 549.99, "A classic tri-color Beagle with an adorable howl and a nose that never rests. Happy-go-lucky, social, and wonderful with kids.", { species: "beagle", image: "https://images.unsplash.com/photo-1631048905843-88f82fba8fd4?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1631048905843-88f82fba8fd4?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1711297609855-d0ed2e926a18?w=800&q=80&auto=format&fit=crop"] }),
  def("beagle-2", "Lemon Beagle Puppy", "dogs", 599.99, "A rare lemon-and-white Beagle with big brown eyes and an even bigger love of the outdoors. Leash trained and crate trained in progress.", { species: "beagle", image: "https://images.unsplash.com/photo-1711297609855-d0ed2e926a18?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1711297609855-d0ed2e926a18?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1631048905843-88f82fba8fd4?w=800&q=80&auto=format&fit=crop"] }),

  def("shih-tzu", "Shih Tzu Puppy", "dogs", 699.99, "A precious gold-and-white Shih Tzu with a flowing coat and the sunniest attitude. A royal lapdog through and through, bred to be pampered.", { species: "shih-tzu", image: "https://images.unsplash.com/photo-1534628526458-a8de087b1123?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1534628526458-a8de087b1123?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1589210043112-d4835d91b37a?w=800&q=80&auto=format&fit=crop"] }),
  def("shih-tzu-2", "Black & White Shih Tzu Puppy", "dogs", 749.99, "A darling black-and-white Shih Tzu with a teddy-bear face and a soft, affectionate nature. Adaptable, quiet, and perfect for seniors.", { species: "shih-tzu", image: "https://images.unsplash.com/photo-1589210043112-d4835d91b37a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1589210043112-d4835d91b37a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1534628526458-a8de087b1123?w=800&q=80&auto=format&fit=crop"] }),

  def("yorkshire-terrier", "Yorkshire Terrier Puppy", "dogs", 1199.99, "A glamorous steel-and-gold Yorkie with a silky show coat and a feisty, confident spirit. A tiny package of pure personality.", { species: "yorkshire-terrier", image: "https://images.unsplash.com/photo-1547482354-89d4259dbc4b?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1547482354-89d4259dbc4b?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1591608971358-f93643d11763?w=800&q=80&auto=format&fit=crop"] }),
  def("yorkshire-terrier-2", "Parti Yorkie Puppy", "dogs", 1299.99, "A rare black-white-and-tan parti Yorkshire Terrier with a playful bounce and a loving heart. Pocket-sized and people-oriented.", { species: "yorkshire-terrier", image: "https://images.unsplash.com/photo-1591608971358-f93643d11763?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1591608971358-f93643d11763?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1547482354-89d4259dbc4b?w=800&q=80&auto=format&fit=crop"] }),

  def("pug", "Pug Puppy", "dogs", 1249.99, "A classic fawn Pug with a curly tail, wrinkled brow, and a world-class snore. Clownish, affectionate, and endlessly entertaining.", { species: "pug", image: "https://images.unsplash.com/photo-1512723185835-0700e5069a9a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1512723185835-0700e5069a9a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1529927066849-79b791a69825?w=800&q=80&auto=format&fit=crop"] }),
  def("pug-2", "Black Pug Puppy", "dogs", 1349.99, "A glossy black Pug with a sweet, easy temperament and a talent for making everyone smile. Low-energy, high-love, and crate trained.", { species: "pug", image: "https://images.unsplash.com/photo-1529927066849-79b791a69825?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1529927066849-79b791a69825?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1512723185835-0700e5069a9a?w=800&q=80&auto=format&fit=crop"] }),

  def("pomeranian", "Pomeranian Puppy", "dogs", 1499.99, "A fluffy little Pomeranian with a fox-like face and a larger-than-life attitude. Playful, bright, and fabulous in every sense.", { species: "pomeranian", image: "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1630766786510-85bc1c6f18d4?w=800&q=80&auto=format&fit=crop"] }),
  def("pomeranian-2", "Cream Pomeranian Puppy", "dogs", 1599.99, "A dreamy cream Pomeranian with a plush double coat and a sparkly, sociable personality. The perfect glamour pet for any home.", { species: "pomeranian", image: "https://images.unsplash.com/photo-1630766786510-85bc1c6f18d4?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1630766786510-85bc1c6f18d4?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=800&q=80&auto=format&fit=crop"] }),

  def("maine-coon-silver-tabby", "Maine Coon Silver Tabby Kitten", "cats", 1150, "A silver-tabby Maine Coon kitten with tufted ears and a majestic ruff. Playful now, an absolute gentle giant later.", { species: "maine-coon", image: "https://images.unsplash.com/photo-1778141112897-b3e91912ee73?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1778141112897-b3e91912ee73?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1468271973570-7c4af51a082a?w=800&q=80&auto=format&fit=crop"] }),
  def("maine-coon-black", "Maine Coon Black Kitten", "cats", 1250, "A deep-black Maine Coon kitten with a plush coat and a laid-back, dog-friendly temperament. Raised around children and other pets.", { species: "maine-coon", image: "https://images.unsplash.com/photo-1468271973570-7c4af51a082a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1468271973570-7c4af51a082a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1778141112897-b3e91912ee73?w=800&q=80&auto=format&fit=crop"] }),

  def("persian", "Persian Kitten", "cats", 899.99, "A flat-faced, luxuriously coated Persian kitten with a serene expression and a whisper-quiet meow. The classic companion for a calm home.", { species: "persian", image: "https://images.unsplash.com/photo-1516470544373-df3edeb89d80?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1516470544373-df3edeb89d80?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1546444521-26b600b9c749?w=800&q=80&auto=format&fit=crop"] }),
  def("persian-2", "White Persian Kitten", "cats", 949.99, "A snow-white Persian kitten with a doll-like face and the softest temperament. Groomed daily and already litter-box perfect.", { species: "persian", image: "https://images.unsplash.com/photo-1546444521-26b600b9c749?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1546444521-26b600b9c749?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1516470544373-df3edeb89d80?w=800&q=80&auto=format&fit=crop"] }),

  def("ragdoll", "Ragdoll Kitten", "cats", 1099.99, "A blue-point Ragdoll kitten with striking blue eyes and a famously floppy, go-with-the-flow personality. She melts in your arms.", { species: "ragdoll", image: "https://images.unsplash.com/photo-1749484047655-bfaf416fda02?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1749484047655-bfaf416fda02?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1668028741708-0705f83bfb69?w=800&q=80&auto=format&fit=crop"] }),
  def("ragdoll-2", "Show Quality Ragdoll Kitten", "cats", 1199.99, "A show-quality seal-point Ragdoll with a plush coat and a perfectly placid nature. The ultimate people-cat with zero aggression.", { species: "ragdoll", image: "https://images.unsplash.com/photo-1668028741708-0705f83bfb69?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1668028741708-0705f83bfb69?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1749484047655-bfaf416fda02?w=800&q=80&auto=format&fit=crop"] }),

  def("norwegian-forest-cat", "Norwegian Forest Cat Kitten", "cats", 1049.99, "A fluffy Norwegian Forest Cat kitten with a wild, rugged beauty and a supremely affectionate nature. Winter-proof coat included.", { species: "norwegian-forest-cat", image: "https://images.unsplash.com/photo-1652760563619-34a7486a0281?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1652760563619-34a7486a0281?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?w=800&q=80&auto=format&fit=crop"] }),
  def("norwegian-forest-cat-2", "Silver Norwegian Forest Cat Kitten", "cats", 1099.99, "A striking silver Norwegian Forest Cat with a majestic mane and gentle, playful energy. Loves heights, window perches, and long chats.", { species: "norwegian-forest-cat", image: "https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1652760563619-34a7486a0281?w=800&q=80&auto=format&fit=crop"] }),

  def("birman", "Birman Kitten", "cats", 999.99, "A creamy-point Birman kitten with sapphire eyes and white-gloved paws. Serene, sociable, and surprisingly dog-like in her loyalty.", { species: "birman", image: "https://images.unsplash.com/photo-1684801977295-76b724788420?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1684801977295-76b724788420?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1725332119616-b0e1ee997cec?w=800&q=80&auto=format&fit=crop"] }),
  def("birman-2", "Seal Point Birman Kitten", "cats", 1049.99, "A seal-point Birman kitten with an impossibly sweet face and a calm, undemanding temperament. Perfect for apartments and families alike.", { species: "birman", image: "https://images.unsplash.com/photo-1725332119616-b0e1ee997cec?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1725332119616-b0e1ee997cec?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1684801977295-76b724788420?w=800&q=80&auto=format&fit=crop"] }),

  def("himalayan", "Himalayan Kitten", "cats", 949.99, "A fluffy, pointed Himalayan kitten with a Persian-style coat and laid-back charm. Quiet, gentle, and happiest on a warm lap.", { species: "himalayan", image: "https://images.unsplash.com/photo-1563976432405-3f0ac00542df?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1563976432405-3f0ac00542df?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1460572894071-bde5697f7197?w=800&q=80&auto=format&fit=crop"] }),
  def("himalayan-2", "Flame Point Himalayan Kitten", "cats", 999.99, "A rare flame-point Himalayan with a cream body, amber-point tips, and a devoted, affectionate nature. A fluffy little cloud with a heart.", { species: "himalayan", image: "https://images.unsplash.com/photo-1460572894071-bde5697f7197?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1460572894071-bde5697f7197?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1563976432405-3f0ac00542df?w=800&q=80&auto=format&fit=crop"] }),

  def("domestic-shorthair", "Domestic Shorthair Kitten", "cats", 149.99, "A bright-eyed tabby domestic shorthair with a delightful purr and a healthy curiosity. The perfect first family pet.", { species: "domestic-shorthair", image: "https://images.unsplash.com/photo-1530153892876-56d69b38e5c1?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1530153892876-56d69b38e5c1?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1448698314110-8c1b903e0717?w=800&q=80&auto=format&fit=crop"] }),
  def("domestic-shorthair-2", "Tuxedo Domestic Shorthair Kitten", "cats", 169.99, "A dapper black-and-white tuxedo kitten with a confident strut and a mischievous streak. Socialized, vaccinated, and full of personality.", { species: "domestic-shorthair", image: "https://images.unsplash.com/photo-1448698314110-8c1b903e0717?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1448698314110-8c1b903e0717?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1530153892876-56d69b38e5c1?w=800&q=80&auto=format&fit=crop"] }),

  def("british-shorthair", "British Shorthair Kitten", "cats", 1150, "A plush, round-faced British Shorthair kitten with a teddy-bear look and a quiet, dignified manner. The ultimate low-key companion.", { species: "british-shorthair", image: "https://images.unsplash.com/photo-1766495487287-5b95e89850d9?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1766495487287-5b95e89850d9?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1758431151211-65e9f42ead7f?w=800&q=80&auto=format&fit=crop"] }),
  def("british-shorthair-2", "Blue British Shorthair Kitten", "cats", 1250, "A classic blue British Shorthair with copper eyes and a coat like velvet. Reserved at first, then endlessly devoted.", { species: "british-shorthair", image: "https://images.unsplash.com/photo-1758431151211-65e9f42ead7f?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1758431151211-65e9f42ead7f?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1766495487287-5b95e89850d9?w=800&q=80&auto=format&fit=crop"] }),

  def("american-shorthair", "American Shorthair Kitten", "cats", 649.99, "A sturdy, silver-brown tabby American Shorthair with a sunny disposition and legendary good health. A classic all-American cat.", { species: "american-shorthair", image: "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1610343952595-ec1ae135c562?w=800&q=80&auto=format&fit=crop"] }),
  def("american-shorthair-2", "Classic Tabby American Shorthair Kitten", "cats", 699.99, "A playful classic-tabby American Shorthair with expressive eyes and a love of interactive toys. Easy-going and endlessly charming.", { species: "american-shorthair", image: "https://images.unsplash.com/photo-1610343952595-ec1ae135c562?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1610343952595-ec1ae135c562?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?w=800&q=80&auto=format&fit=crop"] }),

  def("abyssinian", "Abyssinian Kitten", "cats", 949.99, "A warm ruddy Abyssinian with a ticked coat and an impossibly curious mind. Athletic, talkative, and always in the middle of things.", { species: "abyssinian", image: "https://images.unsplash.com/photo-1707067867902-cdce11de5cac?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1707067867902-cdce11de5cac?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1589642514007-7f37c9a2897d?w=800&q=80&auto=format&fit=crop"] }),
  def("abyssinian-2", "Blue Abyssinian Kitten", "cats", 999.99, "A rare blue-ticked Abyssinian with a shimmering coat and the energy of a kitten forever. Needs a home full of toys and attention.", { species: "abyssinian", image: "https://images.unsplash.com/photo-1589642514007-7f37c9a2897d?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1589642514007-7f37c9a2897d?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1707067867902-cdce11de5cac?w=800&q=80&auto=format&fit=crop"] }),

  def("burmese", "Burmese Kitten", "cats", 899.99, "A warm sable Burmese with silky fur and an outgoing, dog-friendly personality. Bold, social, and determined to be part of everything.", { species: "burmese", image: "https://images.unsplash.com/photo-1560934189-08abde3639d3?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1560934189-08abde3639d3?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1622150771091-cf33e470fd69?w=800&q=80&auto=format&fit=crop"] }),
  def("burmese-2", "Champagne Burmese Kitten", "cats", 949.99, "A champagne Burmese with golden eyes and a velvety coat. Chatters happily, follows you everywhere, and loves a good cuddle session.", { species: "burmese", image: "https://images.unsplash.com/photo-1622150771091-cf33e470fd69?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1622150771091-cf33e470fd69?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1560934189-08abde3639d3?w=800&q=80&auto=format&fit=crop"] }),

  def("russian-blue", "Russian Blue Kitten", "cats", 999.99, "A shimmering silver-blue Russian Blue with emerald eyes and a sweet, shy elegance. Quiet, tidy, and deeply loyal once she trusts you.", { species: "russian-blue", image: "https://images.unsplash.com/photo-1559436257-2660d12a8e3a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1559436257-2660d12a8e3a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1581031314358-823a730be9d1?w=800&q=80&auto=format&fit=crop"] }),
  def("russian-blue-2", "Platinum Russian Blue Kitten", "cats", 1049.99, "A light platinum Russian Blue with a double coat like rabbit fur and a gentle, watchful nature. The definition of graceful.", { species: "russian-blue", image: "https://images.unsplash.com/photo-1581031314358-823a730be9d1?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1581031314358-823a730be9d1?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1559436257-2660d12a8e3a?w=800&q=80&auto=format&fit=crop"] }),

  def("siamese", "Siamese Kitten", "cats", 749.99, "A striking seal-point Siamese with piercing blue eyes and an outspoken, affectionate personality. The original chatty floof.", { species: "siamese", image: "https://images.unsplash.com/photo-1787520019348-4f5b810be8d3?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1787520019348-4f5b810be8d3?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1751658363941-a1ff6889c511?w=800&q=80&auto=format&fit=crop"] }),
  def("siamese-2", "Chocolate Point Siamese Kitten", "cats", 799.99, "A chocolate-point Siamese with a warm milk-chocolate mask and a voice you will hear every day. Social, smart, and soulful.", { species: "siamese", image: "https://images.unsplash.com/photo-1751658363941-a1ff6889c511?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1751658363941-a1ff6889c511?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1787520019348-4f5b810be8d3?w=800&q=80&auto=format&fit=crop"] }),

  def("bengal", "Bengal Kitten", "cats", 1599.99, "A rosetted Bengal kitten with a leopard-print coat and a wild spirit. Athletic, intelligent, and utterly mesmerizing.", { species: "bengal", image: "https://images.unsplash.com/photo-1692382496182-05f3984391fc?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1692382496182-05f3984391fc?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1493536122405-24f67df95909?w=800&q=80&auto=format&fit=crop"] }),
  def("bengal-2", "Snow Bengal Kitten", "cats", 1699.99, "A stunning snow Bengal with icy-blue eyes and glittered, marbled markings. A miniature leopard who happens to love catnip.", { species: "bengal", image: "https://images.unsplash.com/photo-1493536122405-24f67df95909?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1493536122405-24f67df95909?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1692382496182-05f3984391fc?w=800&q=80&auto=format&fit=crop"] }),

  def("sphynx", "Sphynx Kitten", "cats", 1299.99, "A hairless, peach-fuzz Sphynx kitten with the soul of a clown and a heater of a body. Mischievous, affectionate, and impossible to resist.", { species: "sphynx", image: "https://images.unsplash.com/photo-1640134628492-c8e5ab36b226?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1640134628492-c8e5ab36b226?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1698133466680-1ef734d5d12d?w=800&q=80&auto=format&fit=crop"] }),
  def("sphynx-2", "Blue Sphynx Kitten", "cats", 1349.99, "A powder-blue Sphynx with a velvety skin texture and a need for warmth and attention. Bath-trained and full of personality.", { species: "sphynx", image: "https://images.unsplash.com/photo-1698133466680-1ef734d5d12d?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1698133466680-1ef734d5d12d?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1640134628492-c8e5ab36b226?w=800&q=80&auto=format&fit=crop"] }),

  def("scottish-fold", "Scottish Fold Kitten", "cats", 1149.99, "An adorable folded-ear Scottish Fold with owl-like eyes and a sweet, round face. Calm, companionable, and perpetually charming.", { species: "scottish-fold", image: "https://images.unsplash.com/photo-1558892017-e40deddf5eaa?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1558892017-e40deddf5eaa?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1744579706134-d44591e81e4b?w=800&q=80&auto=format&fit=crop"] }),
  def("scottish-fold-2", "White Scottish Fold Kitten", "cats", 1199.99, "A pure-white Scottish Fold with the softest plush coat and a serene, gentle disposition. Sits like a little teddy bear.", { species: "scottish-fold", image: "https://images.unsplash.com/photo-1744579706134-d44591e81e4b?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1744579706134-d44591e81e4b?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1558892017-e40deddf5eaa?w=800&q=80&auto=format&fit=crop"] }),

  def("oriental-shorthair", "Oriental Shorthair Kitten", "cats", 849.99, "A sleek ebony Oriental Shorthair with bat-like ears, a whip of a tail, and an endless supply of conversation. Elegant and opinionated.", { species: "oriental-shorthair", image: "https://images.unsplash.com/photo-1745668421054-a8c35d4d16ec?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1745668421054-a8c35d4d16ec?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1784427066848-97404fe6e115?w=800&q=80&auto=format&fit=crop"] }),
  def("oriental-shorthair-2", "Havana Oriental Shorthair Kitten", "cats", 899.99, "A warm Havana-brown Oriental Shorthair with emerald eyes and a velvety coat. Social, smart, and devoted to her human.", { species: "oriental-shorthair", image: "https://images.unsplash.com/photo-1784427066848-97404fe6e115?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1784427066848-97404fe6e115?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1745668421054-a8c35d4d16ec?w=800&q=80&auto=format&fit=crop"] }),

  def("holland-lop-sable", "Holland Lop Sable Buck", "rabbits", 115, "A chocolate-pointed Holland Lop buck with impossibly soft ears and a sunny, people-loving disposition. Litter trained and spoilt rotten.", { species: "holland-lop", image: "https://images.unsplash.com/photo-1695510864636-38ff5ba5a945?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1695510864636-38ff5ba5a945?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1589933767411-38a58367efd7?w=800&q=80&auto=format&fit=crop"] }),
  def("holland-lop-tort", "Holland Lop Tortoise Doe", "rabbits", 125, "A tortoise-shell Holland Lop doe with a baby face and the gentlest nature. Health-checked, dewormed, and ready for a forever home.", { species: "holland-lop", image: "https://images.unsplash.com/photo-1589933767411-38a58367efd7?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1589933767411-38a58367efd7?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1695510864636-38ff5ba5a945?w=800&q=80&auto=format&fit=crop"] }),

  def("mini-lop", "Mini Lop Bunny", "rabbits", 85, "A compact, floppy-eared Mini Lop with a curious nose and a cuddly personality. Perfect for children and apartment living alike.", { species: "mini-lop", image: "https://images.unsplash.com/photo-1555881421-f79a3858ebcf?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1555881421-f79a3858ebcf?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1609151354448-c4a53450c6e9?w=800&q=80&auto=format&fit=crop"] }),
  def("mini-lop-2", "Chocolate Mini Lop Bunny", "rabbits", 95, "A silky chocolate Mini Lop with a playfully curious personality and the softest fur you will ever pet. A truly gentle companion.", { species: "mini-lop", image: "https://images.unsplash.com/photo-1609151354448-c4a53450c6e9?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1609151354448-c4a53450c6e9?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1555881421-f79a3858ebcf?w=800&q=80&auto=format&fit=crop"] }),

  def("english-lop", "English Lop Bunny", "rabbits", 145, "A majestic English Lop with record-breaking ears that sweep the floor and a laid-back, affectionate temperament. A true showstopper.", { species: "english-lop", image: "https://images.unsplash.com/photo-1529040181623-e04ebc611e25?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1529040181623-e04ebc611e25?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1581872454565-822dac9367aa?w=800&q=80&auto=format&fit=crop"] }),
  def("english-lop-2", "Broken English Lop Bunny", "rabbits", 155, "A striking broken-pattern English Lop with enormous, velvety ears and a mellow, easygoing nature. Handled daily since birth.", { species: "english-lop", image: "https://images.unsplash.com/photo-1581872454565-822dac9367aa?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1581872454565-822dac9367aa?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1529040181623-e04ebc611e25?w=800&q=80&auto=format&fit=crop"] }),

  def("french-lop", "French Lop Bunny", "rabbits", 135, "A big-bodied, floppy-eared French Lop with a teddy-bear build and a sweet, mellow mood. More dog than rabbit in personality.", { species: "french-lop", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1617398881039-4c977f633b0e?w=800&q=80&auto=format&fit=crop"] }),
  def("french-lop-2", "Giant French Lop Bunny", "rabbits", 165, "A giant French Lop with a gentle heart and ears like silk fans. Calm, confident, and happiest sprawled next to his people.", { species: "french-lop", image: "https://images.unsplash.com/photo-1617398881039-4c977f633b0e?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1617398881039-4c977f633b0e?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&q=80&auto=format&fit=crop"] }),

  def("netherland-dwarf", "Netherland Dwarf Bunny", "rabbits", 105, "A pocket-sized Netherland Dwarf with an alert, twitchy nose and a surprisingly big personality. The classic tiny lap rabbit.", { species: "netherland-dwarf", image: "https://images.unsplash.com/photo-1664781211050-fa042bfc7709?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1664781211050-fa042bfc7709?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1622939337054-3be747b8d4f4?w=800&q=80&auto=format&fit=crop"] }),
  def("netherland-dwarf-2", "Siamese Netherland Dwarf Bunny", "rabbits", 115, "A rare siamese-pointed Netherland Dwarf with a rounded face and a perky, playful demeanor. A tiny companion with a huge character.", { species: "netherland-dwarf", image: "https://images.unsplash.com/photo-1622939337054-3be747b8d4f4?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1622939337054-3be747b8d4f4?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1664781211050-fa042bfc7709?w=800&q=80&auto=format&fit=crop"] }),

  def("dwarf-hotot", "Dwarf Hotot Bunny", "rabbits", 95, "A striking white Dwarf Hotot with thin black eyeliner rings around each eye. Compact, playful, and endlessly photogenic.", { species: "dwarf-hotot", image: "https://images.unsplash.com/photo-1433769747000-441481877caf?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1433769747000-441481877caf?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1468190919318-dda40b332156?w=800&q=80&auto=format&fit=crop"] }),
  def("dwarf-hotot-2", "Black Eyed Dwarf Hotot Bunny", "rabbits", 105, "A pure-white Dwarf Hotot with dramatic black eye bands and a sweet, curious nature. A pint-sized charmer through and through.", { species: "dwarf-hotot", image: "https://images.unsplash.com/photo-1468190919318-dda40b332156?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1468190919318-dda40b332156?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1433769747000-441481877caf?w=800&q=80&auto=format&fit=crop"] }),

  def("polish-rabbit", "Polish Rabbit", "rabbits", 85, "A dainty, rounded Polish rabbit with a glossy coat and a sweet, mild temperament. Small, delicate, and utterly adorable.", { species: "polish-rabbit", image: "https://images.unsplash.com/photo-1559214369-a6b1d7919865?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1559214369-a6b1d7919865?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1567633090480-f19f2f67c088?w=800&q=80&auto=format&fit=crop"] }),
  def("polish-rabbit-2", "Blue Polish Rabbit", "rabbits", 95, "A rare steel-blue Polish rabbit with a compact body and a gentle, affectionate spirit. Ideal for a first-time bunny owner.", { species: "polish-rabbit", image: "https://images.unsplash.com/photo-1567633090480-f19f2f67c088?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1567633090480-f19f2f67c088?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1559214369-a6b1d7919865?w=800&q=80&auto=format&fit=crop"] }),

  def("flemish-giant", "Flemish Giant Bunny", "rabbits", 175, "A gentle giant Flemish rabbit who will grow well past ten pounds of pure love. Calm, confident, and famously easygoing.", { species: "flemish-giant", image: "https://images.unsplash.com/photo-1623686070581-5d2eb8187fc2?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1623686070581-5d2eb8187fc2?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1718211766100-9306d11798a4?w=800&q=80&auto=format&fit=crop"] }),
  def("flemish-giant-2", "Light Grey Flemish Giant Bunny", "rabbits", 195, "A light-grey Flemish Giant whose dignified size is matched only by his gentle heart. A house-bunny that thinks he is a lap dog.", { species: "flemish-giant", image: "https://images.unsplash.com/photo-1718211766100-9306d11798a4?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1718211766100-9306d11798a4?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1623686070581-5d2eb8187fc2?w=800&q=80&auto=format&fit=crop"] }),

  def("lionhead", "Lionhead Bunny", "rabbits", 95, "A fuzzy Lionhead with a regal wool mane and a bouncy, cheerful personality. Stunning to look at, wonderful to hold.", { species: "lionhead", image: "https://images.unsplash.com/photo-1706533078738-2555456ff84a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1706533078738-2555456ff84a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1706533078719-f54b56bec366?w=800&q=80&auto=format&fit=crop"] }),
  def("lionhead-2", "Tortoise Lionhead Bunny", "rabbits", 105, "A tortoise-and-white Lionhead with a flowing mane and a soft, friendly nature. Litter trained and ready for a cozy home.", { species: "lionhead", image: "https://images.unsplash.com/photo-1706533078719-f54b56bec366?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1706533078719-f54b56bec366?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1706533078738-2555456ff84a?w=800&q=80&auto=format&fit=crop"] }),

  def("mini-rex", "Mini Rex Bunny", "rabbits", 85, "A velveteen Mini Rex with fur like crushed velvet and a playful, snuggly temperament. A tactile dream and a lovely companion.", { species: "mini-rex", image: "https://images.unsplash.com/photo-1707291076964-600730bffa9e?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1707291076964-600730bffa9e?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=800&q=80&auto=format&fit=crop"] }),
  def("mini-rex-2", "Chocolate Mini Rex Bunny", "rabbits", 95, "A chocolate-brown Mini Rex with a plush coat that begs to be petted and a calm, sociable personality. An absolute sweetheart.", { species: "mini-rex", image: "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1707291076964-600730bffa9e?w=800&q=80&auto=format&fit=crop"] }),

  def("dutch-rabbit", "Dutch Rabbit", "rabbits", 80, "A sharp little Dutch rabbit with a classic white blaze and a lively, outgoing personality. A bicolor beauty with a big heart.", { species: "dutch-rabbit", image: "https://images.unsplash.com/photo-1596982061417-3a686a450552?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1596982061417-3a686a450552?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1602557496847-11ea01879c87?w=800&q=80&auto=format&fit=crop"] }),
  def("dutch-rabbit-2", "Chocolate Dutch Rabbit", "rabbits", 90, "A chocolate-and-white Dutch rabbit with a neat saddle marking and a friendly, curious spirit. Hand-raised and handled daily.", { species: "dutch-rabbit", image: "https://images.unsplash.com/photo-1602557496847-11ea01879c87?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1602557496847-11ea01879c87?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1596982061417-3a686a450552?w=800&q=80&auto=format&fit=crop"] }),

  def("english-angora", "English Angora Bunny", "rabbits", 95, "A cloud of fluff known as an English Angora, with a silky coat that feels like spun silk. Calm, gentle, and utterly luxurious.", { species: "english-angora", image: "https://images.unsplash.com/photo-1706533078975-d40ebb6c1854?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1706533078975-d40ebb6c1854?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=800&q=80&auto=format&fit=crop"] }),
  def("english-angora-2", "White English Angora Bunny", "rabbits", 105, "A snow-white English Angora with fur like cotton candy and a serene, affectionate disposition. A living piece of art.", { species: "english-angora", image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1535241749838-299277b6305f?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1706533078975-d40ebb6c1854?w=800&q=80&auto=format&fit=crop"] }),

  def("californian", "Californian Rabbit", "rabbits", 75, "A classic white Californian with dark pointed ears, nose, and paws. Hardy, sweet-tempered, and wonderfully easy to care for.", { species: "californian", image: "https://images.unsplash.com/photo-1628852303716-6e27f03aa533?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1628852303716-6e27f03aa533?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1632978118231-f1c1d9728a5d?w=800&q=80&auto=format&fit=crop"] }),
  def("californian-2", "Broken Californian Rabbit", "rabbits", 85, "A distinctive broken-marked Californian with a friendly face and a relaxed personality. A superb family rabbit.", { species: "californian", image: "https://images.unsplash.com/photo-1632978118231-f1c1d9728a5d?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1632978118231-f1c1d9728a5d?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1628852303716-6e27f03aa533?w=800&q=80&auto=format&fit=crop"] }),

  def("new-zealand", "New Zealand Rabbit", "rabbits", 70, "A big, snowy New Zealand white rabbit with a plush coat and a sweet, dependable temperament. A true all-American breed.", { species: "new-zealand", image: "https://images.unsplash.com/photo-1707389572442-c7e751fedea2?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1707389572442-c7e751fedea2?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1668791627301-23690de58952?w=800&q=80&auto=format&fit=crop"] }),
  def("new-zealand-2", "New Zealand Red Rabbit", "rabbits", 80, "A warm red New Zealand rabbit with a robust frame and an easy, friendly manner. Great with children and other pets.", { species: "new-zealand", image: "https://images.unsplash.com/photo-1668791627301-23690de58952?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1668791627301-23690de58952?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1707389572442-c7e751fedea2?w=800&q=80&auto=format&fit=crop"] }),

  def("african-grey-congo", "Congo African Grey Parrot", "birds", 1650, "A Congo African Grey parrot with a slate-grey plumage, scarlet tail, and a vocabulary that keeps growing. Exceptionally intelligent and devoted to his person.", { species: "african-grey", image: "https://images.unsplash.com/photo-1779870507176-5a20b6d9f272?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1779870507176-5a20b6d9f272?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1599202355884-02378b1bc307?w=800&q=80&auto=format&fit=crop"] }),
  def("african-grey-2", "Baby African Grey Parrot", "birds", 1750, "A hand-fed baby African Grey with a calm, inquisitive nature and the promise of a lifelong bond. Health certified and fully vaccinated.", { species: "african-grey", image: "https://images.unsplash.com/photo-1599202355884-02378b1bc307?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1599202355884-02378b1bc307?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1779870507176-5a20b6d9f272?w=800&q=80&auto=format&fit=crop"] }),

  def("budgerigar", "Budgerigar Parakeet", "birds", 35, "A cheerful little green budgerigar with a perky attitude and a whistle for every mood. Beginner-friendly and endlessly entertaining.", { species: "budgerigar", image: "https://images.unsplash.com/photo-1560813562-fd09315f5ce8?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1560813562-fd09315f5ce8?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1773574221918-e860af2ad7fa?w=800&q=80&auto=format&fit=crop"] }),
  def("budgerigar-2", "White Budgerigar Parakeet", "birds", 45, "A gorgeous white budgerigar with clear pale markings and a bubbly personality. Enjoyable for the whole family.", { species: "budgerigar", image: "https://images.unsplash.com/photo-1773574221918-e860af2ad7fa?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1773574221918-e860af2ad7fa?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1560813562-fd09315f5ce8?w=800&q=80&auto=format&fit=crop"] }),

  def("cockatiel", "Cockatiel", "birds", 110, "A sweet grey-and-yellow cockatiel with an orange cheek patch and a soft, melodic whistle. Affectionate, calm, and a delight to own.", { species: "cockatiel", image: "https://images.unsplash.com/photo-1517101724602-c257fe568157?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1517101724602-c257fe568157?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?w=800&q=80&auto=format&fit=crop"] }),
  def("cockatiel-2", "Lutino Cockatiel", "birds", 130, "A striking all-yellow lutino cockatiel with a bright orange cheek patch. Playful, social, and ready to sit on your shoulder for hours.", { species: "cockatiel", image: "https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1517101724602-c257fe568157?w=800&q=80&auto=format&fit=crop"] }),

  def("lovebird", "Peach Faced Lovebird", "birds", 75, "A bright green peach-faced lovebird with a rosy-pink face and a fiercely loyal heart. Small, playful, and full of affection.", { species: "lovebird", image: "https://images.unsplash.com/photo-1757886910003-59da0a701e5e?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1757886910003-59da0a701e5e?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1761676692647-ccc3727b522f?w=800&q=80&auto=format&fit=crop"] }),
  def("lovebird-2", "Fischer's Lovebird", "birds", 85, "A vivid Fischer's lovebird with orange, green, and blue plumage and a comical, confident personality. A bundle of joy in feathers.", { species: "lovebird", image: "https://images.unsplash.com/photo-1761676692647-ccc3727b522f?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1761676692647-ccc3727b522f?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1757886910003-59da0a701e5e?w=800&q=80&auto=format&fit=crop"] }),

  def("parrotlet", "Pacific Parrotlet", "birds", 145, "A mini parrot with a huge personality — the Pacific parrotlet stands just five inches tall and thinks it rules the roost. Charming and constant.", { species: "parrotlet", image: "https://images.unsplash.com/photo-1549208813-8b7a5673dd21?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1549208813-8b7a5673dd21?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1762987015809-914a897785cb?w=800&q=80&auto=format&fit=crop"] }),
  def("parrotlet-2", "Blue Pacific Parrotlet", "birds", 165, "A rare blue mutation Pacific parrotlet with a bold streak and the sweetest whistle. Little bird, enormous personality.", { species: "parrotlet", image: "https://images.unsplash.com/photo-1762987015809-914a897785cb?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1762987015809-914a897785cb?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1549208813-8b7a5673dd21?w=800&q=80&auto=format&fit=crop"] }),

  def("quaker-parakeet", "Quaker Parakeet", "birds", 265, "A bright green Quaker parrot with a grey vest and a gift for talking. Social, clever, and endlessly chatty.", { species: "quaker-parakeet", image: "https://images.unsplash.com/photo-1786550764953-436d597ef762?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1786550764953-436d597ef762?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1787561100238-56a3049e93a2?w=800&q=80&auto=format&fit=crop"] }),
  def("quaker-parakeet-2", "Blue Quaker Parakeet", "birds", 295, "A gorgeous blue Quaker parrot with a gentle voice and an outgoing, people-loving nature. A companion that will talk your ear off — lovingly.", { species: "quaker-parakeet", image: "https://images.unsplash.com/photo-1787561100238-56a3049e93a2?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1787561100238-56a3049e93a2?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1786550764953-436d597ef762?w=800&q=80&auto=format&fit=crop"] }),

  def("green-cheeked-conure", "Green Cheeked Conure", "birds", 285, "A playful green-cheeked conure with a maroon tail and a daredevil streak. Cuddly, silly, and the perfect size for apartments.", { species: "green-cheeked-conure", image: "https://images.unsplash.com/photo-1774723104170-201df695c189?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1774723104170-201df695c189?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1724226408881-a5b872cde749?w=800&q=80&auto=format&fit=crop"] }),
  def("green-cheeked-conure-2", "Pineapple Green Cheeked Conure", "birds", 315, "A pineapple-mutation green-cheeked conure with tropical reds, blues, and yellows. Affectionate, acrobatic, and utterly adorable.", { species: "green-cheeked-conure", image: "https://images.unsplash.com/photo-1724226408881-a5b872cde749?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1724226408881-a5b872cde749?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1774723104170-201df695c189?w=800&q=80&auto=format&fit=crop"] }),

  def("sun-conure", "Sun Conure", "birds", 425, "A dazzling sun conure in brilliant orange, yellow, and green with a voice as bright as its feathers. A lively, attention-loving parrot.", { species: "sun-conure", image: "https://images.unsplash.com/photo-1709025219993-7fd23d69c8ce?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1709025219993-7fd23d69c8ce?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1636960289970-fbf69d5044c1?w=800&q=80&auto=format&fit=crop"] }),
  def("sun-conure-2", "Jenday Conure", "birds", 385, "A gorgeous jenday conure with a fiery gradient of crimson-to-gold plumage. Social, vocal, and impossible to ignore.", { species: "sun-conure", image: "https://images.unsplash.com/photo-1636960289970-fbf69d5044c1?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1636960289970-fbf69d5044c1?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1709025219993-7fd23d69c8ce?w=800&q=80&auto=format&fit=crop"] }),

  def("indian-ringneck", "Indian Ringneck Parakeet", "birds", 345, "An elegant green Indian ringneck with a rose ring around its neck and a sharp, curious mind. A talker in the making.", { species: "indian-ringneck", image: "https://images.unsplash.com/photo-1783752546788-1ef191ec0089?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1783752546788-1ef191ec0089?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1783583157659-c6c9591ee566?w=800&q=80&auto=format&fit=crop"] }),
  def("indian-ringneck-2", "Blue Indian Ringneck Parakeet", "birds", 385, "A striking powder-blue Indian ringneck with a bright personality and an impressive vocabulary. Hand-tamed and people-friendly.", { species: "indian-ringneck", image: "https://images.unsplash.com/photo-1783583157659-c6c9591ee566?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1783583157659-c6c9591ee566?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1783752546788-1ef191ec0089?w=800&q=80&auto=format&fit=crop"] }),

  def("caique", "Black Headed Caique", "birds", 1195, "A clown in feathers — the black-headed caique bounces, flips, and dances for attention. Bright, bold, and endlessly amusing.", { species: "caique", image: "https://images.unsplash.com/photo-1636304836048-4b251df6131c?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1636304836048-4b251df6131c?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1705603477954-bbab4feb1319?w=800&q=80&auto=format&fit=crop"] }),
  def("caique-2", "White Bellied Caique", "birds", 1295, "A rare white-bellied caique with vivid orange thighs and a fearless, playful spirit. Full of tricks and absolute joy.", { species: "caique", image: "https://images.unsplash.com/photo-1705603477954-bbab4feb1319?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1705603477954-bbab4feb1319?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1636304836048-4b251df6131c?w=800&q=80&auto=format&fit=crop"] }),

  def("pionus", "Blue Headed Pionus", "birds", 495, "A serene blue-headed pionus with a calm demeanor and softly musical calls. A gentle, underrated parrot with a loyal heart.", { species: "pionus", image: "https://images.unsplash.com/photo-1711656643239-a39815280b0f?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1711656643239-a39815280b0f?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1759828040387-046690a60b05?w=800&q=80&auto=format&fit=crop"] }),
  def("pionus-2", "Maximilian's Pionus", "birds", 525, "A charming Maximilian's pionus with dark, quiet elegance and an affectionate nature. Great for families wanting a calmer parrot.", { species: "pionus", image: "https://images.unsplash.com/photo-1759828040387-046690a60b05?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1759828040387-046690a60b05?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1711656643239-a39815280b0f?w=800&q=80&auto=format&fit=crop"] }),

  def("amazon-parrot", "Blue Fronted Amazon Parrot", "birds", 750, "A handsome blue-fronted Amazon with a vivid yellow-and-green coat and a bubbly, talkative personality. A lifelong companion.", { species: "amazon-parrot", image: "https://images.unsplash.com/photo-1767786847633-2cbd2621261b?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1767786847633-2cbd2621261b?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1751024494405-68bcbc76a608?w=800&q=80&auto=format&fit=crop"] }),
  def("amazon-parrot-2", "Yellow Naped Amazon Parrot", "birds", 895, "A striking yellow-naped Amazon with a luminous yellow neck patch and a gifted tongue. Bold, clever, and deeply affectionate.", { species: "amazon-parrot", image: "https://images.unsplash.com/photo-1751024494405-68bcbc76a608?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1751024494405-68bcbc76a608?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1767786847633-2cbd2621261b?w=800&q=80&auto=format&fit=crop"] }),

  def("blue-gold-macaw", "Blue & Gold Macaw", "birds", 2150, "The iconic blue-and-gold macaw with a sweeping tail and a voice that fills a room. Stunning, playful, and fiercely bonded to its family.", { species: "blue-gold-macaw", image: "https://images.unsplash.com/photo-1504579264001-833438f93df2?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1504579264001-833438f93df2?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1573017714589-b40123679bf5?w=800&q=80&auto=format&fit=crop"] }),
  def("blue-gold-macaw-2", "Blue & Gold Macaw Baby", "birds", 2350, "A hand-raised baby blue-and-gold macaw with a sweet whistle and the makings of a gentle giant. Vet-checked and socialization begun early.", { species: "blue-gold-macaw", image: "https://images.unsplash.com/photo-1573017714589-b40123679bf5?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1573017714589-b40123679bf5?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1504579264001-833438f93df2?w=800&q=80&auto=format&fit=crop"] }),

  def("scarlet-macaw", "Scarlet Macaw", "birds", 2450, "A breathtaking scarlet macaw in blazing red, blue, and gold. Vibrant, intelligent, and absolutely unforgettable.", { species: "scarlet-macaw", image: "https://images.unsplash.com/photo-1551189013-03cf5bc1c73c?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1551189013-03cf5bc1c73c?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1756308944078-beaf8857150a?w=800&q=80&auto=format&fit=crop"] }),
  def("scarlet-macaw-2", "Scarlet Macaw Baby", "birds", 2650, "A hand-fed scarlet macaw baby with a radiant red coat and a gentle temperament. A forever friend for a devoted owner.", { species: "scarlet-macaw", image: "https://images.unsplash.com/photo-1756308944078-beaf8857150a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1756308944078-beaf8857150a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1551189013-03cf5bc1c73c?w=800&q=80&auto=format&fit=crop"] }),

  def("cockatoo", "Umbrella Cockatoo", "birds", 2295, "A snow-white umbrella cockatoo with a crest that blooms like a flower and a heart as big as its wingspan. Hug-hungry and affectionate.", { species: "cockatoo", image: "https://images.unsplash.com/photo-1722989945706-a580b95a650b?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1722989945706-a580b95a650b?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1700821086704-c9f1ef254a40?w=800&q=80&auto=format&fit=crop"] }),
  def("cockatoo-2", "Sulphur Crested Cockatoo", "birds", 2450, "A brilliant sulphur-crested cockatoo with a lemon-yellow crest and a dancing, musical spirit. A magnificent and very loving parrot.", { species: "cockatoo", image: "https://images.unsplash.com/photo-1700821086704-c9f1ef254a40?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1700821086704-c9f1ef254a40?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1722989945706-a580b95a650b?w=800&q=80&auto=format&fit=crop"] }),

  def("canary", "Canary", "birds", 55, "A cheerful yellow canary whose song fills the home with sunshine. Hardy, easy to care for, and endlessly uplifting.", { species: "canary", image: "https://images.unsplash.com/photo-1779495780802-fcc8b7281def?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1779495780802-fcc8b7281def?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1571019415590-f0ce6d538428?w=800&q=80&auto=format&fit=crop"] }),
  def("canary-2", "Red Factor Canary", "birds", 75, "A rare red-factor canary with a rich orange-red plumage and a beautiful rolling song. A living jewel of the birdhouse.", { species: "canary", image: "https://images.unsplash.com/photo-1571019415590-f0ce6d538428?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1571019415590-f0ce6d538428?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1779495780802-fcc8b7281def?w=800&q=80&auto=format&fit=crop"] }),

  def("zebra-finch", "Zebra Finch", "birds", 25, "A tiny, perky zebra finch with a striking black-and-white barred chest and a cheerful chirp. A lovely, low-maintenance first bird.", { species: "zebra-finch", image: "https://images.unsplash.com/photo-1751514913355-af9bc6db0546?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1751514913355-af9bc6db0546?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1618785427266-e7d1bde0c941?w=800&q=80&auto=format&fit=crop"] }),
  def("zebra-finch-2", "White Zebra Finch", "birds", 35, "A rare white zebra finch with a soft pink beak and an energetic, sociable nature. Best enjoyed in a pair.", { species: "zebra-finch", image: "https://images.unsplash.com/photo-1618785427266-e7d1bde0c941?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1618785427266-e7d1bde0c941?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1751514913355-af9bc6db0546?w=800&q=80&auto=format&fit=crop"] }),

  def("gouldian-finch", "Gouldian Finch", "birds", 105, "A rainbow-hued Gouldian finch with a violet breast and a golden belly — the jewel of the finch world. Exquisitely rare and beautiful.", { species: "gouldian-finch", image: "https://images.unsplash.com/photo-1752654262999-50170cfb9546?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1752654262999-50170cfb9546?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1774447602456-42b3e39ccde7?w=800&q=80&auto=format&fit=crop"] }),
  def("gouldian-finch-2", "Red Head Gouldian Finch", "birds", 125, "A red-headed Gouldian finch with blazing color and a calm, elegant presence. The showpiece of any aviary.", { species: "gouldian-finch", image: "https://images.unsplash.com/photo-1774447602456-42b3e39ccde7?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1774447602456-42b3e39ccde7?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1752654262999-50170cfb9546?w=800&q=80&auto=format&fit=crop"] }),

  def("society-finch", "Society Finch", "birds", 25, "A sweet, sociable society finch in warm chocolate and cream. Gentle, easygoing, and happiest in the company of other finches.", { species: "society-finch", image: "https://images.unsplash.com/photo-1710205903188-e66c9eac2b0e?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1710205903188-e66c9eac2b0e?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1655351596487-d5d911e0e321?w=800&q=80&auto=format&fit=crop"] }),
  def("society-finch-2", "White Society Finch", "birds", 35, "A pure-white society finch with a gentle chirp and a wonderfully friendly nature. A delightful, low-mess first bird.", { species: "society-finch", image: "https://images.unsplash.com/photo-1655351596487-d5d911e0e321?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1655351596487-d5d911e0e321?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1710205903188-e66c9eac2b0e?w=800&q=80&auto=format&fit=crop"] }),

  def("cherry-shrimp-bloody-mary", "Bloody Mary Cherry Shrimp", "aquatic", 12.99, "A deep-red Bloody Mary cherry shrimp that glows against green planted tanks. Hardy, prolific, and a joy to watch forage.", { species: "cherry-shrimp", image: "https://images.unsplash.com/photo-1676825910862-8ab5b59c4ed1?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1676825910862-8ab5b59c4ed1?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1676826353503-40b72c40d728?w=800&q=80&auto=format&fit=crop"] }),
  def("cherry-shrimp-2", "Painted Fire Red Shrimp", "aquatic", 15.99, "An intense grade-A painted fire red shrimp with saturated red coloration. Peaceful, social, and easy to keep in a small tank.", { species: "cherry-shrimp", image: "https://images.unsplash.com/photo-1676826353503-40b72c40d728?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1676826353503-40b72c40d728?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1676825910862-8ab5b59c4ed1?w=800&q=80&auto=format&fit=crop"] }),

  def("betta", "Halfmoon Betta Fish", "aquatic", 24.99, "A show-stopping halfmoon betta in royal blue and red with flowing fins that fan to a full half circle. Captive-bred and thriving.", { species: "betta", image: "https://images.unsplash.com/photo-1534575180408-b7d7c0136ee8?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1534575180408-b7d7c0136ee8?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1573472420143-0c68f179bdc7?w=800&q=80&auto=format&fit=crop"] }),
  def("betta-2", "Crowntail Betta Fish", "aquatic", 21.99, "A dramatic crowntail betta with spiked feathery fins and a striking sapphire sheen. Bold, curious, and full of character.", { species: "betta", image: "https://images.unsplash.com/photo-1573472420143-0c68f179bdc7?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1573472420143-0c68f179bdc7?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1534575180408-b7d7c0136ee8?w=800&q=80&auto=format&fit=crop"] }),

  def("goldfish", "Fantail Goldfish", "aquatic", 9.99, "A charming fantail goldfish with a showy double tail and a glossy orange-gold coat. Hardy, social, and a classic first fish.", { species: "goldfish", image: "https://images.unsplash.com/photo-1520366498724-709889c0c685?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1520366498724-709889c0c685?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1668862347626-70a980820f06?w=800&q=80&auto=format&fit=crop"] }),
  def("goldfish-2", "Oranda Goldfish", "aquatic", 19.99, "A whimsical red-and-white oranda with a fancy wen hood and delicate fins. A living work of art for a coldwater tank.", { species: "goldfish", image: "https://images.unsplash.com/photo-1668862347626-70a980820f06?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1668862347626-70a980820f06?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1520366498724-709889c0c685?w=800&q=80&auto=format&fit=crop"] }),

  def("neon-tetra", "Neon Tetra", "aquatic", 3.99, "A tiny neon tetra with a glowing blue-red stripe that seems to light your tank from within. Peaceful schooling fish, best in groups of six.", { species: "neon-tetra", image: "https://images.unsplash.com/photo-1691387668414-8f142b0aa76c?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1691387668414-8f142b0aa76c?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1737688670910-084f54254e73?w=800&q=80&auto=format&fit=crop"] }),
  def("neon-tetra-2", "Green Neon Tetra", "aquatic", 4.99, "A luminous green neon tetra that shimmers under planted-tank lighting. Hardy, peaceful, and the perfect shoaler for rookies.", { species: "neon-tetra", image: "https://images.unsplash.com/photo-1737688670910-084f54254e73?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1737688670910-084f54254e73?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1691387668414-8f142b0aa76c?w=800&q=80&auto=format&fit=crop"] }),

  def("guppy", "Red Dragon Guppy", "aquatic", 6.99, "A dazzling red dragon guppy with flowing scarlet fins and the sweetest temperament. Livebearers all, easy for beginners.", { species: "guppy", image: "https://images.unsplash.com/photo-1602143221967-ff9a1a490e00?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1602143221967-ff9a1a490e00?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1706479980962-23942d2f4d56?w=800&q=80&auto=format&fit=crop"] }),
  def("guppy-2", "Blue Moscow Guppy", "aquatic", 7.99, "A rare metallic-blue Moscow guppy with a shimmering veil tail. Peaceful, prolific, and a real centerpiece in any community tank.", { species: "guppy", image: "https://images.unsplash.com/photo-1706479980962-23942d2f4d56?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1706479980962-23942d2f4d56?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1602143221967-ff9a1a490e00?w=800&q=80&auto=format&fit=crop"] }),

  def("angelfish", "Silver Angelfish", "aquatic", 11.99, "A graceful silver angelfish with long pectoral fins that glide through the water like silk. Calm, striking, and fun to raise.", { species: "angelfish", image: "https://images.unsplash.com/photo-1510020904390-f245a6de84f5?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1510020904390-f245a6de84f5?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?w=800&q=80&auto=format&fit=crop"] }),
  def("angelfish-2", "Marble Angelfish", "aquatic", 13.99, "A bold marbled angelfish in black-and-white swirls with flowing fins. Peaceful toward tankmates and beautiful at every stage.", { species: "angelfish", image: "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1510020904390-f245a6de84f5?w=800&q=80&auto=format&fit=crop"] }),

  def("corydoras-catfish", "Emerald Cory Catfish", "aquatic", 8.99, "An emerald-green corydoras catfish that scoots along the substrate like a tiny playful tank. Peaceful, social, and endlessly endearing.", { species: "corydoras-catfish", image: "https://images.unsplash.com/photo-1730530355813-fdfb30480141?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1730530355813-fdfb30480141?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1773796214718-3bff684159d5?w=800&q=80&auto=format&fit=crop"] }),
  def("corydoras-catfish-2", "Albino Bronze Corydoras", "aquatic", 9.99, "A pale albino bronze corydoras with bright pink eyes and a gentle, busy nature. The perfect clean-up crew member.", { species: "corydoras-catfish", image: "https://images.unsplash.com/photo-1773796214718-3bff684159d5?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1773796214718-3bff684159d5?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1730530355813-fdfb30480141?w=800&q=80&auto=format&fit=crop"] }),

  def("platy", "Sunburst Platy", "aquatic", 4.99, "A cheerful sunburst platy in warm orange and yellow tones. Hardy, colorful, and famously easy for new fishkeepers.", { species: "platy", image: "https://images.unsplash.com/photo-1760256687633-069b7f56c9d2?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1760256687633-069b7f56c9d2?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1711826950867-0cc2c30e65bc?w=800&q=80&auto=format&fit=crop"] }),
  def("platy-2", "Tuxedo Platy", "aquatic", 5.99, "A dapper black-and-gold tuxedo platy with a friendly demeanor and a knack for brightening any community tank.", { species: "platy", image: "https://images.unsplash.com/photo-1711826950867-0cc2c30e65bc?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1711826950867-0cc2c30e65bc?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1760256687633-069b7f56c9d2?w=800&q=80&auto=format&fit=crop"] }),

  def("molly", "Dalmatian Molly", "aquatic", 5.99, "A playful dalmatian molly with a white body dashed in black spots. Active, curious, and great for beginners.", { species: "molly", image: "https://images.unsplash.com/photo-1643563459751-3f3584476de9?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1643563459751-3f3584476de9?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1643563459275-b4a59247f9d1?w=800&q=80&auto=format&fit=crop"] }),
  def("molly-2", "Black Molly", "aquatic", 6.99, "A sleek black molly with a velvety velvet-like sheen and a calm, sociable temperament. A dependable community fish.", { species: "molly", image: "https://images.unsplash.com/photo-1643563459275-b4a59247f9d1?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1643563459275-b4a59247f9d1?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1643563459751-3f3584476de9?w=800&q=80&auto=format&fit=crop"] }),

  def("discus", "Discus Fish", "aquatic", 54.99, "A gracefully round discus in powder blue and red with its signature disc shape. The king of the aquarium when water is pristine.", { species: "discus", image: "https://images.unsplash.com/photo-1787940102267-cb8ecd6c6772?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1787940102267-cb8ecd6c6772?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1783151121893-3c3b4793f8e6?w=800&q=80&auto=format&fit=crop"] }),
  def("discus-2", "Red Turquoise Discus", "aquatic", 64.99, "A show-quality red turquoise discus with electric turquoise stripes and intense red. A stunning centerpiece for serious aquarists.", { species: "discus", image: "https://images.unsplash.com/photo-1783151121893-3c3b4793f8e6?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1783151121893-3c3b4793f8e6?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1787940102267-cb8ecd6c6772?w=800&q=80&auto=format&fit=crop"] }),

  def("oscar", "Tiger Oscar Fish", "aquatic", 24.99, "A bold tiger oscar with marble-black and orange patterns and bags of personality. Interactive, intelligent, and greedy at feeding time.", { species: "oscar", image: "https://images.unsplash.com/photo-1784558126753-e35da5d0171a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1784558126753-e35da5d0171a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1578771826615-739c533fa45b?w=800&q=80&auto=format&fit=crop"] }),
  def("oscar-2", "Albino Oscar Fish", "aquatic", 29.99, "A striking albino oscar with ghost-white scales and fiery orange fins. A true character fish with a puppy-dog personality.", { species: "oscar", image: "https://images.unsplash.com/photo-1578771826615-739c533fa45b?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1578771826615-739c533fa45b?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1784558126753-e35da5d0171a?w=800&q=80&auto=format&fit=crop"] }),

  def("mystery-snail", "Purple Mystery Snail", "aquatic", 5.99, "A gorgeous purple mystery snail that glides along glass cleaning algae as it goes. Also known as the apple snail. Hardy and fascinating.", { species: "mystery-snail", image: "https://images.unsplash.com/photo-1676826192871-1de180004d97?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1676826192871-1de180004d97?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1565355820202-4c0b6c4019e3?w=800&q=80&auto=format&fit=crop"] }),
  def("mystery-snail-2", "Blue Mystery Snail", "aquatic", 6.99, "A calm blue mystery snail that keeps glass and plants spotless. Peaceful, playful, and wonderfully low-maintenance.", { species: "mystery-snail", image: "https://images.unsplash.com/photo-1565355820202-4c0b6c4019e3?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1565355820202-4c0b6c4019e3?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1676826192871-1de180004d97?w=800&q=80&auto=format&fit=crop"] }),

  def("nerite-snail", "Zebra Nerite Snail", "aquatic", 4.99, "A zebra-striped nerite snail that works tirelessly cleaning algae from glass, rocks, and plant leaves. Perfect for planted tanks.", { species: "nerite-snail", image: "https://images.unsplash.com/photo-1773372735348-1c5e42f24fae?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1773372735348-1c5e42f24fae?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1703756292568-6ac16b456709?w=800&q=80&auto=format&fit=crop"] }),
  def("nerite-snail-2", "Tiger Nerite Snail", "aquatic", 5.99, "A tiger-striped nerite snail with a striking spiral shell and an appetite for algae. A quiet, diligent tank worker.", { species: "nerite-snail", image: "https://images.unsplash.com/photo-1703756292568-6ac16b456709?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1703756292568-6ac16b456709?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1773372735348-1c5e42f24fae?w=800&q=80&auto=format&fit=crop"] }),

  def("ghost-shrimp", "Ghost Shrimp", "aquatic", 2.99, "A translucent ghost shrimp with a tiny orange saddle and endlessly busy little legs. A delightful clean-up crew member.", { species: "ghost-shrimp", image: "https://images.unsplash.com/photo-1518471663599-b686196bdab8?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1518471663599-b686196bdab8?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1704112746011-322ee9d1d3e3?w=800&q=80&auto=format&fit=crop"] }),
  def("ghost-shrimp-2", "Whisker Ghost Shrimp", "aquatic", 3.99, "A whisker ghost shrimp with a clear brittle-like body and long antennae. Peaceful, hardy, and endlessly entertaining to watch.", { species: "ghost-shrimp", image: "https://images.unsplash.com/photo-1704112746011-322ee9d1d3e3?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1704112746011-322ee9d1d3e3?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1518471663599-b686196bdab8?w=800&q=80&auto=format&fit=crop"] }),

  def("amano-shrimp", "Amano Shrimp", "aquatic", 5.99, "A hard-working amano shrimp famous for eating every trace of algae. Pale translucent body with dashes of rust — gorgeous and useful.", { species: "amano-shrimp", image: "https://images.unsplash.com/photo-1778957600735-58dd9d00a2fc?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1778957600735-58dd9d00a2fc?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1676825978897-0dfdb8bbb71b?w=800&q=80&auto=format&fit=crop"] }),
  def("amano-shrimp-2", "Giant Amano Shrimp", "aquatic", 7.99, "The biggest and best of the algae eaters — a giant amano shrimp that cleans with relentless determination. Kid-friendly and blob-proof.", { species: "amano-shrimp", image: "https://images.unsplash.com/photo-1676825978897-0dfdb8bbb71b?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1676825978897-0dfdb8bbb71b?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1778957600735-58dd9d00a2fc?w=800&q=80&auto=format&fit=crop"] }),

  def("dwarf-crayfish", "Dwarf Orange Crayfish", "aquatic", 12.99, "A bright orange dwarf crayfish with a confident scuttle and a passion for hiding in hillocks. A bold little character tankmate.", { species: "dwarf-crayfish", image: "https://images.unsplash.com/photo-1782558093565-a584f9ed8722?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1782558093565-a584f9ed8722?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1785454767175-ed1acad399c3?w=800&q=80&auto=format&fit=crop"] }),
  def("dwarf-crayfish-2", "Dwarf Blue Crayfish", "aquatic", 13.99, "A cobalt-blue dwarf crayfish that turns any tank into a miniature coral reef. Hardy, captive-bred, and endlessly fascinating.", { species: "dwarf-crayfish", image: "https://images.unsplash.com/photo-1785454767175-ed1acad399c3?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1785454767175-ed1acad399c3?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1782558093565-a584f9ed8722?w=800&q=80&auto=format&fit=crop"] }),

  def("clownfish", "Ocellaris Clownfish", "aquatic", 34.99, "A classic orange-and-white ocellaris clownfish with a strong, easygoing personality. Captive-bred and already eating flake food.", { species: "clownfish", image: "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1596414086775-3e321ab08f36?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1679510995006-d3eac6669c82?w=800&q=80&auto=format&fit=crop"] }),
  def("clownfish-2", "Black Ocellaris Clownfish", "aquatic", 39.99, "A rare designer black ocellaris clownfish with sleek ebony fins and bold white bars. Hardy, personable, and a favorite of reef keepers.", { species: "clownfish", image: "https://images.unsplash.com/photo-1679510995006-d3eac6669c82?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1679510995006-d3eac6669c82?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?w=800&q=80&auto=format&fit=crop"] }),

  def("blue-tang", "Blue Tang Fish", "aquatic", 129.99, "The iconic royal blue tang (Dory!) in shimmering sapphire with a bold black outline. A stunning saltwater centerpiece.", { species: "blue-tang", image: "https://images.unsplash.com/photo-1701299762068-fa90e1234d45?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1701299762068-fa90e1234d45?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1709687858071-b9fada057c55?w=800&q=80&auto=format&fit=crop"] }),
  def("blue-tang-2", "Pacific Blue Tang", "aquatic", 139.99, "A Pacific blue tang with electric-blue body and vivid yellow tail. Active, hungry, and the showpiece of any reef aquarium.", { species: "blue-tang", image: "https://images.unsplash.com/photo-1709687858071-b9fada057c55?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1709687858071-b9fada057c55?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1701299762068-fa90e1234d45?w=800&q=80&auto=format&fit=crop"] }),

  def("yellow-tang", "Yellow Tang Fish", "aquatic", 109.99, "A brilliant sunshine-yellow tang with a bright, bold presence in saltwater tanks. Active grazer with a peaceful disposition.", { species: "yellow-tang", image: "https://images.unsplash.com/photo-1594086054491-73d65d3269b6?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1594086054491-73d65d3269b6?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1638818989927-9012a5a439cf?w=800&q=80&auto=format&fit=crop"] }),
  def("yellow-tang-2", "Yellow Tang Juvenile", "aquatic", 99.99, "A juvenile yellow tang with radiant color that deepens as it grows. Peaceful reef-safe grazer, perfect for a growing saltwater setup.", { species: "yellow-tang", image: "https://images.unsplash.com/photo-1638818989927-9012a5a439cf?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1638818989927-9012a5a439cf?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1594086054491-73d65d3269b6?w=800&q=80&auto=format&fit=crop"] }),

  def("damselfish", "Azure Damselfish", "aquatic", 12.99, "A tough little azure damselfish in brilliant cyan with a gold-flecked belly. Hardy, bold, and ideal for beginner marine tanks.", { species: "damselfish", image: "https://images.unsplash.com/photo-1786036184689-6b0b79d1d2c1?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1786036184689-6b0b79d1d2c1?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1640806875401-80b7f6a31bcb?w=800&q=80&auto=format&fit=crop"] }),
  def("damselfish-2", "Three Stripe Damselfish", "aquatic", 13.99, "A cute three-stripe damselfish in black, white, and yellow. Energetic and easy to care for, with a soft feisty streak.", { species: "damselfish", image: "https://images.unsplash.com/photo-1640806875401-80b7f6a31bcb?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1640806875401-80b7f6a31bcb?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1786036184689-6b0b79d1d2c1?w=800&q=80&auto=format&fit=crop"] }),

  def("royal-gramma", "Royal Gramma Basslet", "aquatic", 34.99, "A royal gramma with a half-purple, half-yellow split color and an endearing upside-down swimming habit. A reef-safe charmer.", { species: "royal-gramma", image: "https://images.unsplash.com/photo-1653566983921-67e73a05156c?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1653566983921-67e73a05156c?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1578771809861-64021de25780?w=800&q=80&auto=format&fit=crop"] }),
  def("royal-gramma-2", "Royal Gramma Pair", "aquatic", 64.99, "A bonded pair of royal grammas with vivid violet-to-gold gradient bodies. Peaceful, personable, and reef-savvy.", { species: "royal-gramma", image: "https://images.unsplash.com/photo-1578771809861-64021de25780?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1578771809861-64021de25780?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1653566983921-67e73a05156c?w=800&q=80&auto=format&fit=crop"] }),

  def("blenny", "Bicolor Blenny", "aquatic", 29.99, "A bicolor blenny in chocolate and cream that perches on rocks like a tiny cartoon character. Endless personality in a reef fish.", { species: "blenny", image: "https://images.unsplash.com/photo-1510637356411-449d9bcd0659?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1510637356411-449d9bcd0659?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1764469668487-53357a57c0de?w=800&q=80&auto=format&fit=crop"] }),
  def("blenny-2", "Midas Blenny", "aquatic", 34.99, "A golden midas blenny with animated, expressive eyes and a love of swimming through rockwork. The comedian of the reef tank.", { species: "blenny", image: "https://images.unsplash.com/photo-1764469668487-53357a57c0de?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1764469668487-53357a57c0de?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1510637356411-449d9bcd0659?w=800&q=80&auto=format&fit=crop"] }),

  def("goby", "Yellow Watchman Goby", "aquatic", 24.99, "A fearless yellow watchman goby that pairs instinctively with pistol shrimp. Bright yellow body with huge eyes and a huge personality.", { species: "goby", image: "https://images.unsplash.com/photo-1723107276546-154c9662d16f?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1723107276546-154c9662d16f?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1628279113132-72648699120c?w=800&q=80&auto=format&fit=crop"] }),
  def("goby-2", "Green Clown Goby", "aquatic", 19.99, "A tiny green clown goby with a big attitude that cleverly hides among corals. Peaceful, tiny, and remarkably hardy.", { species: "goby", image: "https://images.unsplash.com/photo-1628279113132-72648699120c?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1628279113132-72648699120c?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1723107276546-154c9662d16f?w=800&q=80&auto=format&fit=crop"] }),

  def("golden-lion-tamarin-juvenile", "Golden Lion Tamarin Juvenile", "monkeys", 1350, "A flame-orange golden lion tamarin juvenile, socialized daily and thriving. Rare, regal, and unmistakably bright.", { species: "golden-lion-tamarin", image: "https://images.unsplash.com/photo-1558724483-0a9d17b1defc?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1558724483-0a9d17b1defc?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1578097505772-31f80662c926?w=800&q=80&auto=format&fit=crop"] }),
  def("golden-lion-tamarin-2", "Golden Lion Tamarin Pair", "monkeys", 2600, "A bonded pair of golden lion tamarins with radiant copper-maned coats and wonderfully playful dispositions. Vet-checked and acclimated.", { species: "golden-lion-tamarin", image: "https://images.unsplash.com/photo-1578097505772-31f80662c926?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1578097505772-31f80662c926?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1558724483-0a9d17b1defc?w=800&q=80&auto=format&fit=crop"] }),

  def("common-marmoset", "Common Marmoset", "monkeys", 1150, "A curious tufted-eared marmoset with expressive amber eyes and an affectionate, mischievous heart. Hand-raised and people-oriented.", { species: "common-marmoset", image: "https://images.unsplash.com/photo-1728835386306-e4a6aacb5859?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1728835386306-e4a6aacb5859?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1665663389418-1e8c19f048c0?w=800&q=80&auto=format&fit=crop"] }),
  def("common-marmoset-2", "Black Tufted Marmoset", "monkeys", 1250, "A dark black-tufted marmoset with silky ears and a bold, playful spirit. Socialized, healthy, and endlessly entertaining.", { species: "common-marmoset", image: "https://images.unsplash.com/photo-1665663389418-1e8c19f048c0?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1665663389418-1e8c19f048c0?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1728835386306-e4a6aacb5859?w=800&q=80&auto=format&fit=crop"] }),

  def("cotton-top-tamarin", "Cotton Top Tamarin", "monkeys", 1450, "A rare cotton-top tamarin crowned with a plume of white fur and brimming with energy. Social, intelligent, and unforgettable.", { species: "cotton-top-tamarin", image: "https://images.unsplash.com/photo-1703237328650-339671324e81?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1703237328650-339671324e81?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1599133806498-2620bbb50813?w=800&q=80&auto=format&fit=crop"] }),
  def("cotton-top-tamarin-2", "Cotton Top Tamarin Juvenile", "monkeys", 1550, "A juvenile cotton-top tamarin with a snowy crest and a joyful, curious nature. Vet-checked, acclimated, and surprisingly vocal.", { species: "cotton-top-tamarin", image: "https://images.unsplash.com/photo-1599133806498-2620bbb50813?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1599133806498-2620bbb50813?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1703237328650-339671324e81?w=800&q=80&auto=format&fit=crop"] }),

  def("white-faced-capuchin", "White Faced Capuchin", "monkeys", 1950, "A white-faced capuchin with a pierrot mask and an astonishing ability to learn. Captive-bred, socialized, and exceptionally bright.", { species: "white-faced-capuchin", image: "https://images.unsplash.com/photo-1678981691354-11084b8b93ef?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1678981691354-11084b8b93ef?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1694067222452-da9316731d77?w=800&q=80&auto=format&fit=crop"] }),
  def("white-faced-capuchin-2", "White Faced Capuchin Juvenile", "monkeys", 2150, "A young white-faced capuchin with a curious stare and a talent for mischief. Hand-raised and socialized around people daily.", { species: "white-faced-capuchin", image: "https://images.unsplash.com/photo-1694067222452-da9316731d77?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1694067222452-da9316731d77?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1678981691354-11084b8b93ef?w=800&q=80&auto=format&fit=crop"] }),

  def("tufted-capuchin", "Tufted Capuchin", "monkeys", 1750, "A tufted capuchin with twin horn-like tufts and a calm, thoughtful gaze. Intelligent, loyal, and quick to learn new routines.", { species: "tufted-capuchin", image: "https://images.unsplash.com/photo-1704026437999-983b270f2e8a?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1704026437999-983b270f2e8a?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1642522134686-2260a00d1ed0?w=800&q=80&auto=format&fit=crop"] }),
  def("tufted-capuchin-2", "Black Tufted Capuchin", "monkeys", 1850, "A bold black tufted capuchin with a confident posture and a warm relationship with humans. Acclimated, vet-checked, and ready to shine.", { species: "tufted-capuchin", image: "https://images.unsplash.com/photo-1642522134686-2260a00d1ed0?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1642522134686-2260a00d1ed0?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1704026437999-983b270f2e8a?w=800&q=80&auto=format&fit=crop"] }),

  def("common-squirrel-monkey", "Common Squirrel Monkey", "monkeys", 1150, "A spirited common squirrel monkey with a mask of white around its face and a lightning-fast tail. Playful, social, and endlessly active.", { species: "common-squirrel-monkey", image: "https://images.unsplash.com/photo-1515444347446-4380c4d8a6ed?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1515444347446-4380c4d8a6ed?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1568719304320-07c051dee2ed?w=800&q=80&auto=format&fit=crop"] }),
  def("common-squirrel-monkey-2", "Squirrel Monkey Juvenile", "monkeys", 1250, "A juvenile squirrel monkey with saucer eyes and off-the-charts energy. Socialized, healthy, and ready for a life of antics.", { species: "common-squirrel-monkey", image: "https://images.unsplash.com/photo-1568719304320-07c051dee2ed?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1568719304320-07c051dee2ed?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1515444347446-4380c4d8a6ed?w=800&q=80&auto=format&fit=crop"] }),

  def("black-handed-spider-monkey", "Black Handed Spider Monkey", "monkeys", 2250, "A black-handed spider monkey with prehensile grace and a gentle, curious demeanor. Agile, affectionate, and remarkably intelligent.", { species: "black-handed-spider-monkey", image: "https://images.unsplash.com/photo-1575590364024-614acdbcbcfc?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1575590364024-614acdbcbcfc?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1697946497142-400870fd5bc0?w=800&q=80&auto=format&fit=crop"] }),
  def("black-handed-spider-monkey-2", "Spider Monkey Juvenile", "monkeys", 2450, "A young black-handed spider monkey swinging with fearless energy. Captive-bred, vet-checked, and socialized from the very start.", { species: "black-handed-spider-monkey", image: "https://images.unsplash.com/photo-1697946497142-400870fd5bc0?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1697946497142-400870fd5bc0?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1575590364024-614acdbcbcfc?w=800&q=80&auto=format&fit=crop"] }),

  def("mantled-howler-monkey", "Mantled Howler Monkey", "monkeys", 1950, "A mantled howler monkey with a deep, resonant call and a strikingly calm presence. Social, smart, and full of jungle charm.", { species: "mantled-howler-monkey", image: "https://images.unsplash.com/photo-1564579362514-755914c2e605?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1564579362514-755914c2e605?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1605903114812-e42833450237?w=800&q=80&auto=format&fit=crop"] }),
  def("mantled-howler-monkey-2", "Howler Monkey Juvenile", "monkeys", 2150, "A juvenile mantled howler monkey with a gentle temperament and a surprisingly powerful voice. Vet-checked, acclimated, and ready to bond.", { species: "mantled-howler-monkey", image: "https://images.unsplash.com/photo-1605903114812-e42833450237?w=800&q=80&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1605903114812-e42833450237?w=800&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1564579362514-755914c2e605?w=800&q=80&auto=format&fit=crop"] }),
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}

