'use client';

import { useState } from 'react';

export default function HomePage({ onPageChange }) {
  const [currentWizardStep, setCurrentWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    tripType: '',
    budget: '',
    interests: [],
    days: ''
  });

  const handleWizardNext = () => {
    if (currentWizardStep < 4) {
      setCurrentWizardStep(currentWizardStep + 1);
    }
  };

  const handleWizardPrev = () => {
    if (currentWizardStep > 1) {
      setCurrentWizardStep(currentWizardStep - 1);
    }
  };

  const handleInterestChange = (interest, checked) => {
    if (checked) {
      setWizardData(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    } else {
      setWizardData(prev => ({
        ...prev,
        interests: prev.interests.filter(i => i !== interest)
      }));
    }
  };

  const handleAttractionClick = (attractionId) => {
    console.log(`Attraction ${attractionId} clicked`);
    // This would navigate to attraction detail in the full implementation
  };

  return (
    <section id="home" className="page active">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Discover Cambodia</h1>
          <p>Experience the Kingdom of Wonder - from ancient temples to vibrant culture</p>
          <div className="cta-buttons">
            <button 
              className="cta-btn cta-primary"
              onClick={() => onPageChange('provinces')}
            >
              Explore Provinces
            </button>
            <button 
              className="cta-btn cta-secondary"
              onClick={() => onPageChange('trip-planner')}
            >
              Plan Your Trip
            </button>
          </div>

          {/* Trip Planner Wizard */}
          <div className="trip-wizard">
            <div className="container">
              <h2>Plan Your Perfect Trip</h2>
              <p>Answer a few questions to get a personalized travel plan</p>

              <div className="wizard-container">
                {/* Step 1: Trip Type */}
                <div className={`wizard-step ${currentWizardStep === 1 ? 'active' : ''}`}>
                  <h3>What type of trip are you planning?</h3>
                  <div className="options">
                    <label className="option">
                      <input 
                        type="radio" 
                        name="tripType" 
                        value="adventure"
                        onChange={(e) => setWizardData(prev => ({...prev, tripType: e.target.value}))}
                      />
                      <span>Adventure & Nature</span>
                    </label>
                    <label className="option">
                      <input 
                        type="radio" 
                        name="tripType" 
                        value="cultural"
                        onChange={(e) => setWizardData(prev => ({...prev, tripType: e.target.value}))}
                      />
                      <span>Cultural & Historical</span>
                    </label>
                    <label className="option">
                      <input 
                        type="radio" 
                        name="tripType" 
                        value="relaxation"
                        onChange={(e) => setWizardData(prev => ({...prev, tripType: e.target.value}))}
                      />
                      <span>Beach & Relaxation</span>
                    </label>
                    <label className="option">
                      <input 
                        type="radio" 
                        name="tripType" 
                        value="mixed"
                        onChange={(e) => setWizardData(prev => ({...prev, tripType: e.target.value}))}
                      />
                      <span>Mixed Experience</span>
                    </label>
                  </div>
                </div>

                {/* Step 2: Budget */}
                <div className={`wizard-step ${currentWizardStep === 2 ? 'active' : ''}`}>
                  <h3>What's your budget range?</h3>
                  <div className="options">
                    <label className="option">
                      <input 
                        type="radio" 
                        name="budget" 
                        value="budget"
                        onChange={(e) => setWizardData(prev => ({...prev, budget: e.target.value}))}
                      />
                      <span>Budget ($20-50/day)</span>
                    </label>
                    <label className="option">
                      <input 
                        type="radio" 
                        name="budget" 
                        value="mid-range"
                        onChange={(e) => setWizardData(prev => ({...prev, budget: e.target.value}))}
                      />
                      <span>Mid-range ($50-100/day)</span>
                    </label>
                    <label className="option">
                      <input 
                        type="radio" 
                        name="budget" 
                        value="luxury"
                        onChange={(e) => setWizardData(prev => ({...prev, budget: e.target.value}))}
                      />
                      <span>Luxury ($100+/day)</span>
                    </label>
                  </div>
                </div>

                {/* Step 3: Interests */}
                <div className={`wizard-step ${currentWizardStep === 3 ? 'active' : ''}`}>
                  <h3>What interests you most?</h3>
                  <div className="options multi-select">
                    <label className="option">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="temples"
                        onChange={(e) => handleInterestChange('temples', e.target.checked)}
                      />
                      <span>Ancient Temples</span>
                    </label>
                    <label className="option">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="nature"
                        onChange={(e) => handleInterestChange('nature', e.target.checked)}
                      />
                      <span>Nature & Wildlife</span>
                    </label>
                    <label className="option">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="food"
                        onChange={(e) => handleInterestChange('food', e.target.checked)}
                      />
                      <span>Local Cuisine</span>
                    </label>
                    <label className="option">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="shopping"
                        onChange={(e) => handleInterestChange('shopping', e.target.checked)}
                      />
                      <span>Shopping & Markets</span>
                    </label>
                    <label className="option">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="nightlife"
                        onChange={(e) => handleInterestChange('nightlife', e.target.checked)}
                      />
                      <span>Nightlife & Entertainment</span>
                    </label>
                  </div>
                </div>

                {/* Step 4: Duration */}
                <div className={`wizard-step ${currentWizardStep === 4 ? 'active' : ''}`}>
                  <h3>How many days do you have?</h3>
                  <div className="options">
                    <label className="option">
                      <input 
                        type="radio" 
                        name="days" 
                        value="3"
                        onChange={(e) => setWizardData(prev => ({...prev, days: e.target.value}))}
                      />
                      <span>3-5 Days</span>
                    </label>
                    <label className="option">
                      <input 
                        type="radio" 
                        name="days" 
                        value="7"
                        onChange={(e) => setWizardData(prev => ({...prev, days: e.target.value}))}
                      />
                      <span>1 Week</span>
                    </label>
                    <label className="option">
                      <input 
                        type="radio" 
                        name="days" 
                        value="14"
                        onChange={(e) => setWizardData(prev => ({...prev, days: e.target.value}))}
                      />
                      <span>2 Weeks</span>
                    </label>
                    <label className="option">
                      <input 
                        type="radio" 
                        name="days" 
                        value="21"
                        onChange={(e) => setWizardData(prev => ({...prev, days: e.target.value}))}
                      />
                      <span>3+ Weeks</span>
                    </label>
                  </div>
                </div>

                <div className="wizard-controls">
                  <button 
                    className="wizard-btn prev" 
                    disabled={currentWizardStep === 1}
                    onClick={handleWizardPrev}
                  >
                    Previous
                  </button>
                  <button 
                    className="wizard-btn next" 
                    style={{ display: currentWizardStep === 4 ? 'none' : 'inline-block' }}
                    onClick={handleWizardNext}
                  >
                    Next
                  </button>
                  <button 
                    className="wizard-btn generate" 
                    style={{ display: currentWizardStep === 4 ? 'inline-block' : 'none' }}
                    onClick={() => {
                      console.log('Generate plan with data:', wizardData);
                      onPageChange('trip-planner');
                    }}
                  >
                    Generate Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Highlights */}
      <div className="top-highlights">
        <div className="container">
          <h2>Quick Recommendations</h2>
          <div className="highlights-grid">
            <div className="highlight-box">
              <h3>1-Day Trips</h3>
              <ul className="highlight-list">
                <li onClick={() => handleAttractionClick(101)}>Phnom Tamao Wildlife Rescue Center</li>
                <li onClick={() => handleAttractionClick(102)}>Koh Dach (Silk Island)</li>
                <li onClick={() => handleAttractionClick(103)}>Oudong Mountain</li>
              </ul>
            </div>

            <div className="highlight-box">
              <h3>Family-Friendly</h3>
              <ul className="highlight-list">
                <li onClick={() => handleAttractionClick(104)}>Siem Reap Water Park</li>
                <li onClick={() => handleAttractionClick(105)}>Cambodian Cultural Village</li>
                <li onClick={() => handleAttractionClick(5)}>Tonle Sap Floating Villages</li>
              </ul>
            </div>

            <div className="highlight-box">
              <h3>Cultural Experience</h3>
              <ul className="highlight-list">
                <li onClick={() => handleAttractionClick(4)}>Royal Palace & Silver Pagoda</li>
                <li onClick={() => handleAttractionClick(106)}>Tuol Sleng Genocide Museum</li>
                <li onClick={() => handleAttractionClick(107)}>Traditional Apsara Dance Shows</li>
              </ul>
            </div>

            <div className="highlight-box">
              <h3>Adventure & Nature</h3>
              <ul className="highlight-list">
                <li onClick={() => handleAttractionClick(108)}>Kulen Mountain National Park</li>
                <li onClick={() => handleAttractionClick(109)}>Cardamom Mountains Trekking</li>
                <li onClick={() => handleAttractionClick(110)}>Mekong River Dolphin Watching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
