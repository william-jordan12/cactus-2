export type Category = "cacti" | "succulents" | "rare" | "tools";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  details: string[];
  featured?: boolean;
  stock: number;
  rating: number;
  reviews: number;
}

export const categories: { slug: Category; name: string; description: string }[] = [
  {
    slug: "cacti",
    name: "Cactus Seeds",
    description: "Hardy desert cacti that thrive on neglect.",
  },
  {
    slug: "succulents",
    name: "Succulent Seeds",
    description: "Plump, water-storing beauties for any windowsill.",
  },
  {
    slug: "rare",
    name: "Rare & Exotic",
    description: "Limited-edition seeds for serious collectors.",
  },
  {
    slug: "tools",
    name: "Growing Tools",
    description: "Everything you need to start your collection.",
  },
];

export const products: Product[] = [
  {
    slug: "saguaro-seed-pack",
    name: "Saguaro (Carnegiea gigantea) Seed Pack",
    category: "cacti",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?w=800&q=80&auto=format&fit=crop",
    description:
      "The iconic symbol of the American Southwest. Slow-growing but majestic, the Saguaro can live for over 150 years and reach 40 feet tall. Each pack contains 25 viable seeds with detailed germination instructions.",
    details: [
      "25 premium seeds per pack",
      "98% germination rate",
      "Detailed growing guide included",
      "Ships worldwide in discreet packaging",
    ],
    featured: true,
    stock: 120,
    rating: 4.9,
    reviews: 214,
  },
  {
    slug: "peyote-lophophora-williamsii",
    name: "Peyote (Lophophora williamsii) Seeds",
    category: "cacti",
    price: 18.5,
    image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80&auto=format&fit=crop",
    description:
      "Small, spineless, and button-shaped, Peyote is one of the most revered cacti in history. Slow-growing with a rich cultural heritage, each pack contains 20 seeds ready for indoor cultivation.",
    details: [
      "20 seeds per pack",
      "Small, slow-growing desert cactus",
      "Ideal for indoor growers",
      "Comes with germination sheet",
    ],
    featured: true,
    stock: 85,
    rating: 4.8,
    reviews: 167,
  },
  {
    slug: "san-pedro-seed-pack",
    name: "San Pedro (Trichocereus pachanoi) Seeds",
    category: "cacti",
    price: 14.5,
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&q=80&auto=format&fit=crop",
    description:
      "The fast-growing columnar cactus from the Andes. San Pedro is prized for its rapid growth rate and striking ribbed columns. Perfect for beginners wanting a rewarding cactus. 30 seeds per pack.",
    details: [
      "30 seeds per pack",
      "Fast-growing columnar cactus",
      "Excellent for beginners",
      "Reaches several feet in years",
    ],
    featured: true,
    stock: 140,
    rating: 4.7,
    reviews: 98,
  },
  {
    slug: "barrel-cactus-mix",
    name: "Barrel Cactus (Echinocactus) Mix Seeds",
    category: "cacti",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80&auto=format&fit=crop",
    description:
      "A colorful mix of golden barrel and red barrel cactus seeds. These round, ribbed beauties produce stunning flowers when mature. 40 seeds per pack of mixed species.",
    details: [
      "40 mixed seeds per pack",
      "Golden and red barrel varieties",
      "Produces showy flowers",
      "Great for rock gardens",
    ],
    stock: 95,
    rating: 4.6,
    reviews: 76,
  },
  {
    slug: "mammillaria-seed-mix",
    name: "Mammillaria (Powder Puff) Seed Mix",
    category: "cacti",
    price: 8.75,
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&q=80&auto=format&fit=crop",
    description:
      "Dozens of Mammillaria species that cluster and flower generously. The 'powder puff' nickname comes from their soft, hair-like spines. 35 seeds per pack.",
    details: [
      "35 seeds per pack",
      "Numerous species in one mix",
      "Clusters and flowers freely",
      "Easy for beginners",
    ],
    stock: 110,
    rating: 4.5,
    reviews: 61,
  },
  {
    slug: "string-of-pearls-seeds",
    name: "String of Pearls (Senecio rowleyanus) Seeds",
    category: "succulents",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&q=80&auto=format&fit=crop",
    description:
      "The trailing succulent that looks like a string of tiny green peas. Perfect for hanging baskets and shelves. 20 seeds per pack with detailed instructions.",
    details: [
      "20 seeds per pack",
      "Trailing growth for baskets",
      "Low water requirements",
      "Ideal indoor houseplant",
    ],
    featured: true,
    stock: 200,
    rating: 4.8,
    reviews: 143,
  },
  {
    slug: "lithops-living-stones",
    name: "Lithops (Living Stones) Mixed Seeds",
    category: "succulents",
    price: 10.25,
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800&q=80&auto=format&fit=crop",
    description:
      "Nature's perfect camouflage. These pebble-like succulents blend into rocky environments and burst with daisy-like flowers. 25 seeds of mixed varieties.",
    details: [
      "25 mixed seeds per pack",
      "Camouflaged stone appearance",
      "Stunning daisy-like blooms",
      "Collector favorite",
    ],
    stock: 90,
    rating: 4.9,
    reviews: 188,
  },
  {
    slug: "echeveria-seed-mix",
    name: "Echeveria Rosette Seed Mix",
    category: "succulents",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?w=800&q=80&auto=format&fit=crop",
    description:
      "Beautiful rosette-forming succulents in a rainbow of colors — from powdery blues to blush pinks. 30 seeds of multiple Echeveria species.",
    details: [
      "30 mixed seeds per pack",
      "Rosette-forming leaf structures",
      "Range of colors and textures",
      "Perfect for succulent gardens",
    ],
    stock: 130,
    rating: 4.7,
    reviews: 84,
  },
  {
    slug: "jade-plant-seeds",
    name: "Jade Plant (Crassula ovata) Seeds",
    category: "succulents",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&q=80&auto=format&fit=crop",
    description:
      "The classic lucky money plant. Jade plants develop thick, woody trunks and glossy oval leaves. 25 seeds per pack, symbols of good fortune.",
    details: [
      "25 seeds per pack",
      "Symbol of good luck & prosperity",
      "Develops bonsai-like trunks",
      "Low-maintenance houseplant",
    ],
    stock: 150,
    rating: 4.5,
    reviews: 57,
  },
  {
    slug: "astrophytum-star-cactus",
    name: "Astrophytum (Star Cactus) Seeds",
    category: "rare",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?w=800&q=80&auto=format&fit=crop",
    description:
      "The coveted Star Cactus with its distinctive white-dotted ribs. A true collector's piece that's rarely offered as seed. 15 premium seeds per pack.",
    details: [
      "15 rare seeds per pack",
      "Iconic star-shaped body",
      "Highly sought by collectors",
      "Limited annual availability",
    ],
    featured: true,
    stock: 40,
    rating: 5.0,
    reviews: 65,
  },
  {
    slug: "aztekium-ritteri",
    name: "Aztekium ritteri Seeds",
    category: "rare",
    price: 32.5,
    image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80&auto=format&fit=crop",
    description:
      "One of the rarest and slowest-growing cacti in existence, found only in a single valley in Mexico. A true holy grail for serious collectors. 10 seeds per pack.",
    details: [
      "10 ultra-rare seeds",
      "Among the rarest cacti on Earth",
      "Extremely slow-growing specimen",
      "Restricted availability",
    ],
    stock: 25,
    rating: 5.0,
    reviews: 31,
  },
  {
    slug: "blossfeldia-lliputana",
    name: "Blossfeldia liliputana (Smallest Cactus) Seeds",
    category: "rare",
    price: 28.0,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80&auto=format&fit=crop",
    description:
      "The world's smallest cactus, native to the high Andes. Mature plants barely exceed a centimeter across. 12 rare seeds per pack for dedicated growers.",
    details: [
      "12 seeds per pack",
      "World's smallest cactus species",
      "Extreme collector's item",
      "Grows in high-altitude conditions",
    ],
    stock: 30,
    rating: 4.9,
    reviews: 22,
  },
  {
    slug: "seedling-heat-mat",
    name: "Seedling Heat Mat (10x20 inch)",
    category: "tools",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80&auto=format&fit=crop",
    description:
      "Consistent bottom heat is the secret to high cactus germination rates. Waterproof, thermostatically controlled mat raises soil temperature by 10-20 degrees.",
    details: [
      "10 x 20 inch watering surface",
      "Waterproof and durable",
      "Increases germination rates",
      "Standard US power plug",
    ],
    stock: 75,
    rating: 4.6,
    reviews: 41,
  },
  {
    slug: "germination-kit",
    name: "Deluxe Seed Germination Kit",
    category: "tools",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1520423465871-0866049020b7?w=800&q=80&auto=format&fit=crop",
    description:
      "Everything you need to sprout your cactus seeds: humidity dome trays, perlite mix, labels, a misting bottle, and a full-color growing guide.",
    details: [
      "Humidity dome tray set included",
      "Cactus-specific soil mix",
      "Plant labels & misting bottle",
      "Full-color growing guide",
    ],
    stock: 60,
    rating: 4.8,
    reviews: 53,
  },
  {
    slug: "succulent-soil-mix",
    name: "Premium Succulent & Cactus Soil Mix",
    category: "tools",
    price: 11.5,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80&auto=format&fit=crop",
    description:
      "A perfectly draining blend of pumice, perlite, coarse sand, and organic matter. Pre-mixed to the ideal ratio for cacti and succulents. 2 quarts.",
    details: [
      "Fast-draining custom blend",
      "Pumice, perlite & coarse sand",
      "2 quarts per bag",
      "Ready to use out of the bag",
    ],
    stock: 180,
    rating: 4.7,
    reviews: 68,
  },
  {
    slug: "tweezers-set",
    name: "Precision Planting Tweezers Set",
    category: "tools",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=800&q=80&auto=format&fit=crop",
    description:
      "Planting tiny cactus seeds is easy with these precision tweezers. Includes a straight and angled tip for delicate handling of small seeds.",
    details: [
      "Straight and angled tips",
      "Anti-slip grip",
      "Stainless steel construction",
      "Perfect for tiny seeds",
    ],
    stock: 95,
    rating: 4.4,
    reviews: 27,
  },
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
