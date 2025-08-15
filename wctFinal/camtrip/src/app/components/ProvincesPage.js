'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';
import ProvinceDetail from './ProvinceDetail';

export default function ProvincesPage() {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const provinces = [
    {
      id: 1,
      name: "Siem Reap",
      description: "Home to the magnificent Angkor Wat temple complex",
      image: "/api/placeholder/300/200",
      location: "Northwestern Cambodia",
      population: "245,494",
      highlights: [
        {
          id: 1,
          name: "Angkor Wat",
          description: "The largest religious monument in the world",
          image: "/api/placeholder/300/200",
          rating: 4.8
        },
        {
          id: 2,
          name: "Bayon Temple",
          description: "Famous for its smiling stone faces",
          image: "/api/placeholder/300/200",
          rating: 4.7
        },
        {
          id: 3,
          name: "Ta Prohm",
          description: "Temple engulfed by massive tree roots",
          image: "/api/placeholder/300/200",
          rating: 4.6
        }
      ],
      attractions: [
        {
          id: 1,
          name: "Angkor Wat",
          description: "The largest religious monument in the world",
          category: "temple",
          rating: 4.8,
          image: "/api/placeholder/280/180"
        },
        {
          id: 2,
          name: "Angkor Thom",
          description: "Ancient walled city with magnificent temples",
          category: "temple",
          rating: 4.7,
          image: "/api/placeholder/280/180"
        },
        {
          id: 5,
          name: "Floating Village",
          description: "Traditional stilt house village on Tonle Sap Lake",
          category: "nature",
          rating: 4.3,
          image: "/api/placeholder/280/180"
        }
      ],
      emergency: {
        police: "117",
        fire: "118",
        ambulance: "119"
      }
    },
    {
      id: 2,
      name: "Phnom Penh",
      description: "The vibrant capital city with rich history and culture",
      image: "/api/placeholder/300/200",
      location: "Central Cambodia",
      population: "2,281,951",
      highlights: [
        {
          id: 4,
          name: "Royal Palace",
          description: "Stunning complex of royal buildings and gardens",
          image: "/api/placeholder/300/200",
          rating: 4.5
        },
        {
          id: 5,
          name: "Silver Pagoda",
          description: "Temple with floor made of silver tiles",
          image: "/api/placeholder/300/200",
          rating: 4.4
        }
      ],
      attractions: [
        {
          id: 6,
          name: "Royal Palace",
          description: "Stunning complex of royal buildings and gardens",
          category: "cultural",
          rating: 4.5,
          image: "/api/placeholder/280/180"
        },
        {
          id: 7,
          name: "Central Market",
          description: "Art Deco market with local goods and souvenirs",
          category: "cultural",
          rating: 4.2,
          image: "/api/placeholder/280/180"
        }
      ],
      emergency: {
        police: "117",
        fire: "118",
        ambulance: "119"
      }
    },
    {
      id: 3,
      name: "Sihanoukville",
      description: "Coastal city with beautiful beaches and islands",
      image: "/api/placeholder/300/200",
      location: "Southern Cambodia",
      population: "199,902",
      highlights: [
        {
          id: 6,
          name: "Otres Beach",
          description: "Pristine white sand beach with clear waters",
          image: "/api/placeholder/300/200",
          rating: 4.3
        }
      ],
      attractions: [
        {
          id: 8,
          name: "Otres Beach",
          description: "Pristine white sand beach with clear waters",
          category: "nature",
          rating: 4.3,
          image: "/api/placeholder/280/180"
        },
        {
          id: 9,
          name: "Koh Rong Island",
          description: "Tropical paradise with pristine beaches",
          category: "nature",
          rating: 4.6,
          image: "/api/placeholder/280/180"
        }
      ],
      emergency: {
        police: "117",
        fire: "118",
        ambulance: "119"
      }
    },
    {
      id: 4,
      name: "Battambang",
      description: "Charming provincial town with French colonial architecture",
      image: "/api/placeholder/300/200",
      location: "Northwestern Cambodia",
      population: "196,709",
      highlights: [
        {
          id: 7,
          name: "Bamboo Train",
          description: "Unique railway experience through countryside",
          image: "/api/placeholder/300/200",
          rating: 4.4
        }
      ],
      attractions: [
        {
          id: 10,
          name: "Bamboo Train",
          description: "Unique railway experience through countryside",
          category: "adventure",
          rating: 4.4,
          image: "/api/placeholder/280/180"
        }
      ],
      emergency: {
        police: "117",
        fire: "118",
        ambulance: "119"
      }
    },
    {
      id: 5,
      name: "Kampot",
      description: "Riverside town famous for pepper farms and colonial charm",
      image: "/api/placeholder/300/200",
      location: "Southern Cambodia",
      population: "48,966",
      highlights: [
        {
          id: 8,
          name: "Bokor National Park",
          description: "Mountain park with abandoned French hill station",
          image: "/api/placeholder/300/200",
          rating: 4.2
        }
      ],
      attractions: [
        {
          id: 11,
          name: "Bokor National Park",
          description: "Mountain park with abandoned French hill station",
          category: "nature",
          rating: 4.2,
          image: "/api/placeholder/280/180"
        }
      ],
      emergency: {
        police: "117",
        fire: "118",
        ambulance: "119"
      }
    },
    {
      id: 6,
      name: "Kep",
      description: "Quiet coastal town known for fresh seafood and crab markets",
      image: "/api/placeholder/300/200",
      location: "Southern Cambodia",
      population: "35,753",
      highlights: [
        {
          id: 9,
          name: "Kep Crab Market",
          description: "Famous market for fresh seafood and blue crabs",
          image: "/api/placeholder/300/200",
          rating: 4.1
        }
      ],
      attractions: [
        {
          id: 12,
          name: "Kep Crab Market",
          description: "Famous market for fresh seafood and blue crabs",
          category: "food",
          rating: 4.1,
          image: "/api/placeholder/280/180"
        }
      ],
      emergency: {
        police: "117",
        fire: "118",
        ambulance: "119"
      }
    }
  ];

  const filteredProvinces = provinces.filter(province =>
    province.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    province.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProvinceClick = (provinceId) => {
    const province = provinces.find(p => p.id === provinceId);
    setSelectedProvince(province);
  };

  const handleBackToProvinces = () => {
    setSelectedProvince(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAttractionClick = (attractionId) => {
    console.log(`Attraction ${attractionId} clicked`);
    // This would navigate to attraction detail in the full implementation
  };

  if (selectedProvince) {
    return (
      <ProvinceDetail
        province={selectedProvince}
        onBack={handleBackToProvinces}
        onAttractionClick={handleAttractionClick}
      />
    );
  }

  return (
    <section id="provinces" className="page">
      <div className="page-header">
        <h1>Explore Cambodia's Provinces</h1>
        <p>Discover the diverse regions and their unique attractions</p>
      </div>
      
      <SearchBar 
        onSearch={handleSearch}
        placeholder="Search provinces by name or description..."
      />
      
      <div className="container">
        <div className="provinces-grid">
          {filteredProvinces.map((province) => (
            <div 
              key={province.id} 
              className="province-card"
              onClick={() => handleProvinceClick(province.id)}
            >
              <img 
                src={province.image} 
                alt={province.name} 
                className="province-image" 
              />
              <div className="province-content">
                <h3>{province.name}</h3>
                <p>{province.description}</p>
                <div className="province-stats">
                  <span><i className="fas fa-map-marker-alt"></i> {province.location}</span>
                  <span><i className="fas fa-users"></i> {province.population}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProvinces.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No provinces found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </section>
  );
}
