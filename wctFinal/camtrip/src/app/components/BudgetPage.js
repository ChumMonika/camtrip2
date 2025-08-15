'use client';

export default function BudgetPage() {
  return (
    <section id="budget" className="page">
      <div className="page-header">
        <h1>Budget Planner</h1>
        <p>Estimate and track your travel expenses</p>
      </div>
      
      <div className="container">
        <div className="text-center mb-4">
          <p>Plan your Cambodia trip budget with our comprehensive expense calculator.</p>
        </div>
        
        {/* Placeholder content - will be expanded in future iterations */}
        <div style={{ 
          background: 'var(--light-gray)', 
          padding: '3rem', 
          borderRadius: '15px', 
          textAlign: 'center',
          color: 'var(--gray)'
        }}>
          <i className="fas fa-calculator" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
          <h3>Budget Calculator Coming Soon</h3>
          <p>Track accommodation, food, transportation, and activity costs for your Cambodia trip.</p>
        </div>
      </div>
    </section>
  );
}
