'use client';

import { useState, useEffect } from 'react';

export default function Navigation({ currentPage, onPageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = `navbar ${isScrolled ? 'scrolled' : ''} ${currentPage !== 'home' ? 'non-homepage' : ''}`;

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'provinces', label: 'Provinces' },
    { id: 'trip-planner', label: 'Trip Planner' },
    { id: 'wishlist', label: 'Wishlist' },
    { id: 'budget', label: 'Budget' }
  ];

  return (
    <nav className={navbarClass}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/api/placeholder/40/40" alt="Cambodia Trip Logo" className="logo-image" />
          <div className="logo-text">
            <span className="logo-main">CAMBODIA</span>
            <span className="logo-sub">TRIP</span>
          </div>
        </div>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={currentPage === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="nav-auth">
          <div 
            className="nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <button className="signin-btn" onClick={() => console.log('Sign in clicked')}>
            Sign In
          </button>
          <button className="signup-btn" onClick={() => console.log('Sign up clicked')}>
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
