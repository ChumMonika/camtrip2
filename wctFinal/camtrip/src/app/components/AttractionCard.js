'use client';

export default function AttractionCard({ attraction, onAttractionClick, onAddToWishlist }) {
  const handleCardClick = () => {
    if (onAttractionClick) {
      onAttractionClick(attraction.id);
    }
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    if (onAddToWishlist) {
      onAddToWishlist(attraction.id);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="attraction-card" onClick={handleCardClick}>
      <div className="attraction-image-container">
        <img 
          src={attraction.image || '/api/placeholder/280/180'} 
          alt={attraction.name} 
          className="attraction-image" 
        />
        <button 
          className="wishlist-btn"
          onClick={handleWishlistClick}
          aria-label="Add to wishlist"
        >
          <i className="far fa-heart"></i>
        </button>
      </div>
      
      <div className="attraction-content">
        <h4>{attraction.name}</h4>
        <p>{attraction.description}</p>
        
        <div className="attraction-meta">
          <div className="rating">
            {attraction.rating && (
              <>
                {renderStars(attraction.rating)}
                <span className="rating-value">{attraction.rating}</span>
              </>
            )}
          </div>
          
          <div className="category-tag">
            {attraction.category || 'Attraction'}
          </div>
        </div>
        
        {attraction.culturalInfo && (
          <div className="cultural-info">
            <i className="fas fa-info-circle"></i>
            <span>Cultural significance</span>
          </div>
        )}
      </div>
    </div>
  );
}
