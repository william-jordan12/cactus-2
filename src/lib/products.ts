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

