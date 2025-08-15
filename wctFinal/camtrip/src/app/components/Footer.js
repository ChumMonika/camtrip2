'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Cambodia Travel</h3>
            <p>Your trusted guide to exploring the Kingdom of Wonder. Discover ancient temples, vibrant culture, and stunning landscapes.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><a href="#">Provinces</a></li>
              <li><a href="#">Attractions</a></li>
              <li><a href="#">Cultural Sites</a></li>
              <li><a href="#">Natural Wonders</a></li>
              <li><a href="#">Adventure Tours</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Plan Your Trip</h3>
            <ul>
              <li><a href="#">Trip Planner</a></li>
              <li><a href="#">Budget Calculator</a></li>
              <li><a href="#">Travel Tips</a></li>
              <li><a href="#">Best Time to Visit</a></li>
              <li><a href="#">Transportation</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Cambodia Travel. All rights reserved. | Discover the Kingdom of Wonder</p>
        </div>
      </div>
    </footer>
  );
}
