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

