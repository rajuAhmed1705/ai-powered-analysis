import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

interface StarRatingProps {
  name: string;
  title: string;
  isRequired: boolean;
  description: string;
  maxRating: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  name,
  title,
  isRequired,
  description,
  maxRating,
  onChange,
}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const previousRatingRef = useRef(rating);

  useEffect(() => {
    // Only trigger onChange when the rating changes
    if (previousRatingRef.current !== rating) {
      const changeEvent = {
        target: { name, value: String(rating) },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(changeEvent);
      previousRatingRef.current = rating;
    }
  }, [rating, name, onChange]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="flex">
        {Array.from({ length: maxRating }, (_, index) => index + 1).map(
          (star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none"
            >
              <FontAwesomeIcon
                icon={star <= (hoverRating || rating) ? solidStar : regularStar}
                className="text-yellow-500 h-6 w-6"
              />
            </button>
          )
        )}
      </div>
      <input type="hidden" name={name} value={rating} required={isRequired} />
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default StarRating;
