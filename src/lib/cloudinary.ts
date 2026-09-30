// Remote product images are hotlinked from external CDNs (Unsplash, Shopify).
// Cloudinary's "fetch" delivery type proxies those URLs so they can be resized,
// auto-formatted (WebP/AVIF) and quality-tuned before reaching the browser.
//
// No API secret is referenced here on purpose: this module is imported by
// client components, and only the public cloud name is safe to inline.
const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
  process.env.CLOUDINARY_CLOUD_NAME ||
  "";

const CLOUDINARY_HOST = "res.cloudinary.com";

const DEFAULT_WIDTH = 800;

export function cloudinaryDeliveryUrl(
  src: string | undefined,
  options: { width?: number } = {}
): string | undefined {
  if (!src) return src;
  if (!CLOUD_NAME) return src;
  // Local paths (/images/...) and already-delivered Cloudinary URLs pass through.
  if (src.includes(CLOUDINARY_HOST)) return src;
  if (!/^https?:\/\//i.test(src)) return src;

  const width = Math.round(options.width ?? DEFAULT_WIDTH);
  // c_limit keeps the aspect ratio and never upscales; dpr_auto keeps it sharp
  // on retina screens; f_auto/q_auto pick the best format and quality.
  const transform = `f_auto,q_auto,c_limit,dpr_auto,w_${width}`;

  return `https://${CLOUDINARY_HOST}/${CLOUD_NAME}/image/fetch/${transform}/${encodeURIComponent(
    src
  )}`;
}
