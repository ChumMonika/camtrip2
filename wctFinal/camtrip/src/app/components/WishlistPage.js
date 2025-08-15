'use client';

export default function WishlistPage() {
  return (
    <section id="wishlist" className="page">
      <div className="page-header">
        <h1>My Wishlist</h1>
        <p>Save your favorite places and attractions</p>
      </div>
      
      <div className="container">
        <div className="text-center mb-4">
          <p>Keep track of places you want to visit and experiences you want to have in Cambodia.</p>
        </div>
        
        {/* Placeholder content - will be expanded in future iterations */}
        <div style={{ 
          background: 'var(--light-gray)', 
          padding: '3rem', 
          borderRadius: '15px', 
          textAlign: 'center',
          color: 'var(--gray)'
        }}>
          <i className="fas fa-heart" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
          <h3>Your Wishlist is Empty</h3>
          <p>Start exploring provinces and attractions to add them to your wishlist.</p>
          <button className="btn btn-primary mt-2" style={{ marginTop: '1rem' }}>
            Explore Provinces
          </button>
        </div>
      </div>
    </section>
  );
}
