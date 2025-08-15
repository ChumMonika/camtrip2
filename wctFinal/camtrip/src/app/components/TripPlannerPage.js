'use client';

export default function TripPlannerPage() {
  return (
    <section id="trip-planner" className="page">
      <div className="page-header">
        <h1>Trip Planner</h1>
        <p>Plan your perfect Cambodia adventure</p>
      </div>
      
      <div className="container">
        <div className="text-center mb-4">
          <p>Create detailed itineraries, manage your schedule, and organize your Cambodia trip.</p>
        </div>
        
        {/* Placeholder content - will be expanded in future iterations */}
        <div style={{ 
          background: 'var(--light-gray)', 
          padding: '3rem', 
          borderRadius: '15px', 
          textAlign: 'center',
          color: 'var(--gray)'
        }}>
          <i className="fas fa-map-marked-alt" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
          <h3>Trip Planning Features Coming Soon</h3>
          <p>Interactive itinerary builder, day-by-day planning, and personalized recommendations.</p>
        </div>
      </div>
    </section>
  );
}
