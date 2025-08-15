'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ProvincesPage from './components/ProvincesPage';
import TripPlannerPage from './components/TripPlannerPage';
import WishlistPage from './components/WishlistPage';
import BudgetPage from './components/BudgetPage';
import Footer from './components/Footer';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'provinces':
        return <ProvincesPage />;
      case 'trip-planner':
        return <TripPlannerPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'budget':
        return <BudgetPage />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="main-content">
        {renderCurrentPage()}
      </main>
      
      <Footer />
    </div>
  );
}
