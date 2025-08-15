'use client';

import { useState } from 'react';
import AttractionCard from './AttractionCard';

export default function ProvinceDetail({ province, onBack, onAttractionClick }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!province) return null;

  const categories = ['all', 'temple', 'nature', 'cultural', 'adventure', 'food'];
  
  const filteredAttractions = selectedCategory === 'all' 
    ? province.attractions 
    : province.attractions?.filter(attraction => attraction.category === selectedCategory);

  return (
    <div className="province-detail">
      <div className="container">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back to Provinces
        </button>

        <div className="province-header">
          <div className="province-hero">
            <img 
              src={province.image || '/api/placeholder/1200/400'} 
              alt={province.name}
              className="province-hero-image"
            />
            <div className="province-hero-overlay">
              <div className="province-hero-content">
                <h1>{province.name}</h1>
                <p>{province.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Province Info */}
        <div className="province-info">
          <div className="info-grid">
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>{province.location || 'Cambodia'}</p>
            </div>
            
            <div className="info-card">
              <i className="fas fa-users"></i>
              <h3>Population</h3>
              <p>{province.population || 'N/A'}</p>
            </div>
            
            <div className="info-card">
              <i className="fas fa-language"></i>
              <h3>Languages</h3>
              <p>Khmer, English</p>
            </div>
            
            <div className="info-card">
              <i className="fas fa-phone"></i>
              <h3>Emergency</h3>
              <p>Police: {province.emergency?.police || '117'}</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        {province.highlights && province.highlights.length > 0 && (
          <div className="province-highlights">
            <h2>Top Highlights</h2>
            <div className="highlights-grid">
              {province.highlights.map((highlight) => (
                <div key={highlight.id} className="highlight-card">
                  <img 
                    src={highlight.image || '/api/placeholder/300/200'} 
                    alt={highlight.name}
                    className="highlight-image"
                  />
                  <div className="highlight-content">
                    <h3>{highlight.name}</h3>
                    <p>{highlight.description}</p>
                    {highlight.rating && (
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <span>{highlight.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Attractions */}
        {province.attractions && province.attractions.length > 0 && (
          <div className="province-attractions">
            <div className="attractions-header">
              <h2>All Attractions</h2>
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="attractions-grid">
              {filteredAttractions?.map((attraction) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  onAttractionClick={onAttractionClick}
                  onAddToWishlist={(id) => console.log(`Added ${id} to wishlist`)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
