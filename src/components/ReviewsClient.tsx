"use client";

import { GoogleReview } from "@pagesolver/sdk";
import { Star } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";

function ReviewCard({ review }: { review: GoogleReview }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textLength = review.text.length;
  const shouldShowReadMore = textLength > 200;
  const displayText = isExpanded ? review.text : review.text.slice(0, 200);

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow min-w-[350px] max-w-[400px] mx-3 my-4">
      <div className="card-body p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-base-content">
            {review.author || "Anonymous"}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < review.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-base-content/60 ml-1">
              {review.rating}/5
            </span>
          </div>
        </div>

        <div className="text-base-content/80 leading-relaxed">
          <p>
            {displayText}
            {!isExpanded && shouldShowReadMore && "..."}
          </p>
          {shouldShowReadMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary-focus text-sm font-medium mt-2 transition-colors"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        {review.publishTime && (
          <div className="text-sm text-base-content/50 mt-3">
            {review.publishTime}
          </div>
        )}
      </div>
    </div>
  );
}

interface ReviewsClientProps {
  reviews: GoogleReview[];
}

export default function ReviewsClient({ reviews }: ReviewsClientProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-base-content/60">
          No reviews available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-base-content mb-2">
            What Our Customers Say
          </h2>
          <p className="text-base-content/70">
            Real reviews from satisfied customers
          </p>
        </div>

        <div className="py-4">
          <Marquee
            pauseOnHover
            speed={30}
            gradient={true}
            gradientColor="hsl(var(--b1))"
            style={{ overflow: "visible" }}
          >
            {reviews.map((review: GoogleReview, index: number) => (
              <ReviewCard key={review.publishTime || index} review={review} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
