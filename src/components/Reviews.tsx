"use client";

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

export default function Reviews() {
  return (
    <ReactGoogleReviews
      layout="carousel"
      featurableId="91d15ced-3f55-450c-8f91-6aec0519a062"
    />
  );
}
