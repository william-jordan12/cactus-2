export type Category = "dogs" | "cats" | "rabbits" | "birds" | "aquatic" | "reptiles";

export interface Product {
  slug: string;
  name: string;
  category: Category;
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
];

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
};

const defaultStock: Record<Category, number> = {
  dogs: 4,
  cats: 5,
  rabbits: 8,
  birds: 6,
  aquatic: 20,
  reptiles: 8,
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
  // ------------------------------ DOGS ------------------------------
  def("german-shepherd", "German Shepherd", "dogs", 850, "A loyal, intelligent, and versatile working dog. Confident and trainable, they excel as family protectors and companions.", { featured: true }),
  def("siberian-husky", "Siberian Husky", "dogs", 700, "A playful, energetic sled dog with a thick double coat and striking blue eyes. Friendly with people and full of character."),
  def("rottweiler", "Rottweiler", "dogs", 900, "A powerful, confident guardian breed. Calm and brave with a strong protective instinct, easy to train with consistent leadership."),
  def("doberman-pinscher", "Doberman Pinscher", "dogs", 950, "An alert, elegant, and fearless guardian. Highly intelligent and endlessly devoted to their family."),
  def("belgian-malinois", "Belgian Malinois", "dogs", 1100, "A high-drive, athletic working dog prized for obedience and protection. Best suited to experienced, active owners."),
  def("border-collie", "Border Collie", "dogs", 600, "Widely regarded as the most intelligent dog breed. Eager to learn, tireless, and happiest with a job to do."),
  def("australian-shepherd", "Australian Shepherd", "dogs", 650, "A smart, active herding dog with a colorful coat and boundless energy. A devoted family member that loves the outdoors."),
  def("golden-retriever", "Golden Retriever", "dogs", 800, "The classic family dog — gentle, patient, and overflowing with love. Friendly with kids, other pets, and strangers alike.", { featured: true }),
  def("labrador-retriever", "Labrador Retriever", "dogs", 750, "America's favorite family dog. Outgoing, even-tempered, and endlessly food-motivated, Labs thrive in any household."),
  def("cocker-spaniel", "Cocker Spaniel", "dogs", 700, "A sweet, cheerful companion with a silky coat and doe eyes. Affectionate, playful, and wonderful with children."),
  def("german-shorthaired-pointer", "German Shorthaired Pointer", "dogs", 850, "A versatile hunting and athletic companion. Energetic, trainable, and happiest with an active family."),
  def("english-setter", "English Setter", "dogs", 900, "A gentle, elegant gundog with a soft temperament. Affectionate at home and tireless in the field."),
  def("french-bulldog", "French Bulldog", "dogs", 1200, "A compact, charming companion with bat ears and a big personality. Low-energy, easygoing, and perfect for apartment living.", { featured: true }),
  def("standard-poodle", "Standard Poodle", "dogs", 1000, "An elegant, hypoallergenic breed renowned for intelligence and trainability. Versatile from family pet to show dog."),
  def("miniature-poodle", "Miniature Poodle", "dogs", 900, "A smart, lively poodle in a smaller size. Hypoallergenic coat and a cheerful, eager-to-please personality."),
  def("toy-poodle", "Toy Poodle", "dogs", 800, "A tiny, brilliant companion with a curly hypoallergenic coat. Bright, portable, and deeply devoted."),
  def("chihuahua", "Chihuahua", "dogs", 500, "A bold, sassy lap dog that's all heart. Loyal to their person and surprisingly feisty for their size."),
  def("dachshund", "Dachshund", "dogs", 550, "A fearless, curious hound with a famously long body. Playful, clever, and full of personality — great for families."),
  def("beagle", "Beagle", "dogs", 500, "A merry, sociable scent hound with a happy howl. Great with kids and other dogs, always ready for an adventure."),
  def("shih-tzu", "Shih-Tzu", "dogs", 650, "A royal, affectionate lapdog with a flowing coat. Sweet-natured, calm, and happiest curled up beside you."),
  def("yorkshire-terrier", "Yorkshire Terrier", "dogs", 700, "A tiny terrier with a big personality. Bold, affectionate, and surprisingly protective for their size."),
  def("pug", "Pug", "dogs", 600, "A charming, comical companion with a wrinkled face and big round eyes. Laid-back, loving, and full of mischief."),
  def("pomeranian", "Pomeranian", "dogs", 650, "A fluffy, bright little dog with a fox-like face. Vivacious, confident, and endlessly entertaining."),

  // ------------------------------ CATS ------------------------------
  def("maine-coon", "Maine Coon", "cats", 900, "The gentle giant of the cat world. Large, fluffy, and dog-friendly, with tufted ears and a loving nature.", { featured: true }),
  def("persian", "Persian", "cats", 800, "A calm, sweet-natured cat with a luxurious flat face and plush coat. A quiet lap cat that loves a routine life."),
  def("ragdoll", "Ragdoll", "cats", 850, "A large, affectionate cat that goes limp when held. Striking blue eyes and a silky, soft semi-long coat."),
  def("norwegian-forest-cat", "Norwegian Forest Cat", "cats", 800, "A sturdy, adaptable forest cat with a thick double coat. Playful, gentle, and happiest climbing."),
  def("birman", "Birman", "cats", 750, "A serene, gentle cat with white mittens and pointed coloring. Quiet, social, and devoted to their humans."),
  def("himalayan", "Himalayan", "cats", 850, "A Persian with Siamese points — calm, sweet, and beautiful. A dignified lap cat with a soft, plush coat."),
  def("domestic-shorthair", "Domestic Shorthair", "cats", 120, "The classic, adaptable house cat in tabby, calico, and tuxedo coats. Healthy, independent, and full of personality."),
  def("british-shorthair", "British Shorthair", "cats", 750, "A round-faced, teddy-bear cat with a plush blue coat. Calm, easygoing, and remarkably undemanding."),
  def("american-shorthair", "American Shorthair", "cats", 650, "A sturdy, good-natured working cat that's been a family favorite for generations. Mellow and adaptable."),
  def("abyssinian", "Abyssinian", "cats", 700, "A ticked-coat cat with a sporty, curious nature. Active, intelligent, and endlessly interested in everything."),
  def("burmese", "Burmese", "cats", 700, "A warm, people-loving cat with a glossy coat and golden eyes. Playful, chatty, and devoted to family."),
  def("russian-blue", "Russian Blue", "cats", 750, "A striking silver-blue cat with emerald eyes. Quiet, gentle, and loyal — wonderful for calm households."),
  def("siamese", "Siamese", "cats", 600, "A talkative, affectionate cat with striking pointed coloring and sapphire eyes. Bonds deeply with their humans.", { featured: true }),
  def("bengal", "Bengal", "cats", 1000, "A wild-looking cat with a glittering spotted coat. Athletic, curious, and endlessly entertaining."),
  def("sphynx", "Sphynx", "cats", 1100, "A hairless, warm, and affectionate cat that loves attention. Playful, sociable, and surprisingly cuddly."),
  def("scottish-fold", "Scottish Fold", "cats", 800, "A sweet-natured cat with distinctive folded ears and an owl-like expression. Calm, loving, and great with kids."),
  def("oriental-shorthair", "Oriental Shorthair", "cats", 750, "A slender, elegant cat with huge ears and a talkative nature. Affectionate, playful, and full of personality."),

  // ------------------------------ RABBITS ------------------------------
  def("holland-lop", "Holland Lop", "rabbits", 95, "A tiny, floppy-eared bunny with a baby-like face. Docile, gentle, and the most popular house rabbit breed.", { featured: true }),
  def("mini-lop", "Mini Lop", "rabbits", 85, "A small lop-eared rabbit with a friendly, easygoing temperament. Loves attention and makes a great family pet."),
  def("english-lop", "English Lop", "rabbits", 120, "The breed with the longest ears of any rabbit. A calm, gentle giant of the lop family."),
  def("french-lop", "French Lop", "rabbits", 110, "A large, mellow lop with a lovable, goofy personality. Robust and great with kids."),
  def("netherland-dwarf", "Netherland Dwarf", "rabbits", 100, "The smallest rabbit breed — a feisty, adorable bundle of energy with a compact body and bold attitude."),
  def("dwarf-hotot", "Dwarf Hotot", "rabbits", 110, "A striking white rabbit with eye-catching black eyeliner rings. Compact, curious, and sweet."),
  def("polish-rabbit", "Polish", "rabbits", 90, "A tiny, refined rabbit with a soft, flyback coat. Gentle, quiet, and perfect for first-time owners."),
  def("flemish-giant", "Flemish Giant", "rabbits", 160, "The king of rabbits — a gentle giant that can reach 15+ pounds. Calm, affectionate, and surprisingly docile."),
  def("lionhead", "Lionhead", "rabbits", 95, "A fluffy rabbit with a distinctive mane around its head. Playful, outgoing, and absolutely adorable."),
  def("mini-rex", "Mini Rex", "rabbits", 100, "A velvety-soft rabbit with a plush, dense coat. Sweet-tempered and a delight to handle."),
  def("dutch-rabbit", "Dutch", "rabbits", 80, "A classic, handsome rabbit with distinctive white blaze and markings. Smart, friendly, and easy to train."),
  def("english-angora", "English Angora", "rabbits", 130, "A cloud of luxurious wool with face furnishings that steal the show. Gentle and needs regular grooming."),
  def("californian", "Californian", "rabbits", 75, "A calm, glossy-coated rabbit with white fur and dark points. Even-tempered and quick to bond."),
  def("new-zealand", "New Zealand", "rabbits", 70, "A hardy, dependable rabbit known for a calm temperament and excellent mothering instincts."),

  // ------------------------------ BIRDS ------------------------------
  def("budgerigar", "Budgerigar (Budgie)", "birds", 45, "A small, colorful parakeet that's endlessly entertaining. Easy to care for and surprisingly talented talkers."),
  def("cockatiel", "Cockatiel", "birds", 90, "A gentle, crested parrot with a whistling repertoire. Affectionate, hardy, and ideal for first-time bird owners."),
  def("lovebird", "Lovebird", "birds", 110, "A small, bold parrot that forms deep bonds with its human. Playful, nippy-billed, and full of character."),
  def("parrotlet", "Parrotlet", "birds", 160, "A tiny green parrot with a huge personality. Smart, spunky, and surprisingly bold for their size."),
  def("quaker-parakeet", "Quaker Parakeet", "birds", 150, "A lively, social parakeet with excellent talking ability. Enterprising builders and devoted companions."),
  def("green-cheeked-conure", "Green-Cheeked Conure", "birds", 240, "A playful, affectionate little conure known for its clownish antics. Quieter than most conures, perfect for apartments."),
  def("sun-conure", "Sun Conure", "birds", 450, "A dazzling parrot in vivid sunset colors. Loud, loving, and utterly devoted to its flock — very vocal."),
  def("indian-ringneck", "Indian Ringneck Parakeet", "birds", 320, "An elegant, sleek parakeet with a gorgeous ringed collar. Intelligent, charming talkers when bonded."),
  def("caique", "Caique", "birds", 700, "A playful, acrobatic parrot that seems to bounce off the walls. Comedy gold with endless energy."),
  def("pionus", "Pionus", "birds", 600, "A calm, gentle parrot with a soft, musky scent. Quieter than most parrots and wonderfully affectionate."),
  def("african-grey", "African Grey Parrot", "birds", 1500, "The most intelligent talking parrot, with extraordinary vocabulary. Sensitive, loyal, and undeniably special.", { featured: true }),
  def("amazon-parrot", "Amazon Parrot", "birds", 1100, "A vibrant green parrot with a bold, charismatic voice. Bright, social, and endlessly entertaining."),
  def("blue-gold-macaw", "Blue and Gold Macaw", "birds", 2800, "A stunning, iconic macaw with vibrant blue and gold plumage. Majestic, affectionate, and very vocal."),
  def("scarlet-macaw", "Scarlet Macaw", "birds", 3000, "A brilliant red macaw with a commanding presence. Intelligent, social, and a true centerpiece companion."),
  def("cockatoo", "Cockatoo", "birds", 2200, "A fluffy, affectionate parrot with a dramatic crest. Velcro companions that crave daily attention and cuddles."),
  def("canary", "Canary", "birds", 60, "A cheerful songster in sunshine yellow. Beautiful voice, easy care, and a joy to listen to."),
  def("zebra-finch", "Zebra Finch", "birds", 35, "A busy little finch with cheeky orange patches and bouncy songs. Hardy, social, and great in groups."),
  def("gouldian-finch", "Gouldian Finch", "birds", 120, "A rainbow-colored finch often called the world's most beautiful. Striking and best kept in pairs."),
  def("society-finch", "Society Finch", "birds", 40, "A gentle, social finch that thrives in flocks. Sweet-natured and endlessly active."),

  // ------------------------------ AQUATIC ------------------------------
  def("betta", "Betta Fish", "aquatic", 25, "A dazzling fighter with flowing fins and vivid colors. Hardy, low-maintenance, and full of personality."),
  def("goldfish", "Goldfish", "aquatic", 15, "The classic, cheerful freshwater fish. Long-lived and hardy, great for beginners and experts alike."),
  def("neon-tetra", "Neon Tetra", "aquatic", 6, "A shimmering little tetra with a glowing blue-red stripe. Peaceful schooling fish that sparkle in planted tanks."),
  def("guppy", "Guppy", "aquatic", 5, "A tiny, colorful livebearer that's perfect for community tanks. Easy to breed and endlessly fascinating."),
  def("angelfish", "Angelfish", "aquatic", 25, "An elegant, disk-shaped cichlid with trailing fins. Graceful centerpiece fish for taller tanks."),
  def("corydoras-catfish", "Corydoras Catfish", "aquatic", 8, "A busy bottom-dweller with a cute, armored body. Peaceful and adorable in small schools."),
  def("platy", "Platy", "aquatic", 6, "A friendly, adaptable livebearer in a rainbow of colors. Perfect community fish for beginners."),
  def("molly", "Molly", "aquatic", 7, "A sturdy, sociable livebearer available in many shapes and colors. Great for community tanks."),
  def("discus", "Discus", "aquatic", 80, "The king of the aquarium — a round, brilliantly colored cichlid that requires dedicated, warm water care."),
  def("oscar", "Oscar", "aquatic", 30, "A bold, personable cichlid that recognizes its owner. Big appetite, big attitude, big fun."),
  def("mystery-snail", "Mystery Snail", "aquatic", 7, "A large, colorful freshwater snail that keeps tanks spotless. Fascinating to watch glide and graze."),
  def("nerite-snail", "Nerite Snail", "aquatic", 6, "A superb algae eater in striking striped patterns. Tireless janitor for planted aquariums."),
  def("cherry-shrimp", "Cherry Shrimp", "aquatic", 8, "A vivid red dwarf shrimp that adds life to any planted tank. Hardy, social, and easy to breed. ", { featured: true }),
  def("ghost-shrimp", "Ghost Shrimp", "aquatic", 5, "A transparent, active shrimp that's endlessly entertaining. Great scavengers for community tanks."),
  def("amano-shrimp", "Amano Shrimp", "aquatic", 9, "A large, efficient algae-eating shrimp. Nature's best tank janitor with a cool, dotted pattern."),
  def("dwarf-crayfish", "Dwarf Crayfish", "aquatic", 18, "A mini lobster for nano tanks. Cute, curious, and full of attitude."),
  def("clownfish", "Clownfish", "aquatic", 90, "The iconic orange-and-white reef fish of the coral world. Hardy for a saltwater species and full of charm.", { featured: true }),
  def("blue-tang", "Blue Tang", "aquatic", 150, "A stunning royal-blue fish with a distinctive yellow tail. A showpiece for experienced saltwater keepers."),
  def("yellow-tang", "Yellow Tang", "aquatic", 120, "A vivid, sunshine-yellow reef fish that brings instant color. Active, hardy, and a saltwater favorite."),
  def("damselfish", "Damselfish", "aquatic", 35, "A tough, vibrant saltwater fish that's perfect for new reef keepers. Bold and full of personality."),
  def("royal-gramma", "Royal Gramma", "aquatic", 60, "A gorgeous purple-and-yellow basslet that adds drama to any reef. Peaceful and easy to keep."),
  def("blenny", "Blenny", "aquatic", 55, "A charismatic, bottom-dwelling reef fish with a fun personality. Great algae grazer with big character."),
  def("goby", "Goby", "aquatic", 50, "A charming little reef fish with big eyes and a perky personality. Loves sandy substrate hideouts."),

  // ------------------------------ REPTILES ------------------------------
  def("bearded-dragon", "Bearded Dragon", "reptiles", 120, "A friendly, easygoing lizard that loves to lounge and wave. The ultimate beginner reptile with a big personality.", { featured: true }),
  def("leopard-gecko", "Leopard Gecko", "reptiles", 80, "A nocturnal gecko with a smiling face and spotty pattern. Hardy, gentle, and perfect for first-time reptile owners."),
  def("crested-gecko", "Crested Gecko", "reptiles", 90, "A cute, friendly gecko with eyelash crests and a prehensile tail. Thrives at room temperature with no special lights."),
  def("blue-tongued-skink", "Blue-Tongued Skink", "reptiles", 300, "A calm, chunky lizard with a shocking blue tongue. Tame, intelligent, and delightfully people-friendly."),
  def("veiled-chameleon", "Veiled Chameleon", "reptiles", 150, "A color-shifting climber with a tall casque. Stunning to watch and rewarding for attentive keepers."),
  def("green-anole", "Green Anole", "reptiles", 25, "A lively little lizard that changes from green to brown. Active, entertaining, and easy to keep."),
  def("corn-snake", "Corn Snake", "reptiles", 90, "A docile, beautifully patterned constrictor that's perfect for beginners. Curious, hardy, and easy to handle."),
  def("ball-python", "Ball Python", "reptiles", 140, "A calm, gentle python famous for its shy, endearing nature. A top pick for new and experienced keepers alike."),
  def("milk-snake", "Milk Snake", "reptiles", 110, "A striking red, black, and white colubrid. Hardy, active, and wonderfully personable."),
  def("king-snake", "King Snake", "reptiles", 100, "A glossy, friendly colubrid with a healthy appetite. Hardy and confident, a classic favorite."),
  def("western-hognose", "Western Hognose Snake", "reptiles", 130, "An adorable, upturned-nose snake with a dramatic 'playing dead' act. Docile and hugely entertaining."),
  def("red-eared-slider", "Red-Eared Slider", "reptiles", 40, "The classic pond turtle with striking red ear patches. Active, hardy, and perfect for outdoor ponds."),
  def("yellow-bellied-slider", "Yellow-Bellied Slider", "reptiles", 40, "A bright, social pond turtle named for its yellow underbelly. Hardy and great for first-time turtle keepers."),
  def("eastern-box-turtle", "Eastern Box Turtle", "reptiles", 120, "A ground-dwelling turtle with a domed, patterned shell. Slow, gentle, and long-lived companions."),
  def("russian-tortoise", "Russian Tortoise", "reptiles", 150, "A small, active, desert tortoise with a sunny personality. Hardy, curious, and great for outdoor enclosures."),
  def("hermanns-tortoise", "Hermann's Tortoise", "reptiles", 200, "A beautiful, docile Mediterranean tortoise with a domed golden shell. A true garden companion."),
  def("sulcata-tortoise", "Sulcata Tortoise", "reptiles", 250, "The African spurred tortoise — a charismatic giant that needs space and sunshine. Amazing for dedicated keepers."),
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