import { NextResponse } from "next/server";
import { reviews, getAverageRating, getRatingDistribution } from "@/lib/reviews";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    reviews,
    averageRating: getAverageRating(),
    distribution: getRatingDistribution(),
    total: reviews.length,
  });
}