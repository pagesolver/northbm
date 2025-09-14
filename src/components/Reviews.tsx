import { PageSolverClient } from "@pagesolver/sdk";
import ReviewsClient from "./ReviewsClient";

export const revalidate = 3600; // Revalidate every hour

export default async function Reviews() {
  try {
    const client = new PageSolverClient(process.env.PAGESOLVER_API_KEY!);
    const reviewsResponse = await client.getGoogleReviews();

    if (!reviewsResponse.reviews || reviewsResponse.reviews.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-base-content/60">
            No reviews available at the moment.
          </p>
        </div>
      );
    }

    return <ReviewsClient reviews={reviewsResponse.reviews} />;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return (
      <div className="text-center py-8">
        <p className="text-base-content/60">
          Unable to load reviews at the moment. Please try again later.
        </p>
      </div>
    );
  }
}
