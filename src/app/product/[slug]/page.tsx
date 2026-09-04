import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts } from "@/lib/store";
import ProductView from "@/components/ProductView";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = await getRelatedProducts(product);

  return <ProductView product={product} related={related} />;
}