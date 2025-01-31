import React from 'react'

import "./Stars.css"

export default function Stars({ rating }) {
    const fullStars = Math.floor(rating);
    const decimalPercentage = Math.round((rating % 1) * 100);
    const halfStar = decimalPercentage != 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    

    return (
        <div className="star-rating" 
            style={{
                '--decimal-percentage': `${decimalPercentage > 30? decimalPercentage: decimalPercentage + 15}%`
            }}
        >
          {[...Array(fullStars)].map((_, index) => (
            <span key={`full-${index}`} className="star full">★</span>
          ))}
          {halfStar === 1 && <span className="star half">★</span>}
          {[...Array(emptyStars)].map((_, index) => (
            <span key={`empty-${index}`} className="star empty">☆</span>
          ))}
          <span className="rating-number">({rating.toFixed(1)}/5)</span>
        </div>
    )
}
