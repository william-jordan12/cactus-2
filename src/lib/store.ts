import { getPool, initDb } from "./db";
import {
  categories as staticCategories,
  products as staticProducts,
  type Category,
  type Product,
} from "./products";

export interface DbProduct {
  slug: string;
  name: string;
  category: Category | string;
  species: string;
  price: number;
  image: string;
  description: string;
  details: string[];
  featured: boolean;
  stock: number;
  rating: number;
  reviews: number;
}

function mapProduct(row: Record<string, unknown>): Product {
  return {
    slug: String(row.slug),
    name: String(row.name),
    category: String(row.category) as Category,
    species: String(row.species || ""),
    price: Number(row.price),
    image: String(row.image || "/images/placeholder.jpg"),
    images: Array.isArray(row.images) ? row.images.map(String) : [],
    description: String(row.description || ""),
    details: Array.isArray(row.details)
      ? (row.details as string[])
      : [],
    featured: Boolean(row.featured),
    stock: Number(row.stock || 0),
    rating: Number(row.rating || 0),
    reviews: Number(row.reviews || 0),
  };
}

export interface DbCategory {
  slug: Category;
  name: string;
  description: string;
}

function mapCategory(row: Record<string, unknown>): DbCategory {
  return {
    slug: String(row.slug) as Category,
    name: String(row.name),
    description: String(row.description || ""),
  };
}

export async function getCategories(): Promise<DbCategory[]> {
  try {
    await initDb();
    const result = await getPool().query(
      `SELECT slug, name, description FROM ssv_categories ORDER BY name`
    );
    return result.rows.map(mapCategory);
  } catch {
    return staticCategories;
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    await initDb();
    const result = await getPool().query(
      `SELECT slug, name, category, species, price, image, images, description, details, featured, stock, rating, reviews
       FROM ssv_products ORDER BY featured DESC, name ASC`
    );
    return result.rows.map(mapProduct);
  } catch {
    return staticProducts;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    await initDb();
    const result = await getPool().query(
      `SELECT slug, name, category, species, price, image, images, description, details, featured, stock, rating, reviews
       FROM ssv_products WHERE slug = $1`,
      [slug]
    );
    const row = result.rows[0];
    return row ? mapProduct(row) : undefined;
  } catch {
    return staticProducts.find((p) => p.slug === slug);
  }
}

export interface DbSpecies {
  slug: string;
  category: string;
  name: string;
}

export async function getSpecies(category?: string): Promise<DbSpecies[]> {
  try {
    await initDb();
    const result = category
      ? await getPool().query(
          `SELECT slug, category, name FROM ssv_species WHERE category = $1 ORDER BY name ASC`,
          [category]
        )
      : await getPool().query(
          `SELECT slug, category, name FROM ssv_species ORDER BY category ASC, name ASC`
        );
    return result.rows.map((row) => ({
      slug: String(row.slug),
      category: String(row.category),
      name: String(row.name),
    }));
  } catch {
    return [];
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getProducts();
  const featured = all.filter((p) => p.featured);
  return featured.length > 0 ? featured : all.slice(0, 8);
}

export async function getRelatedProducts(
  product: Product,
  count = 4
): Promise<Product[]> {
  const all = await getProducts();
  return all
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}