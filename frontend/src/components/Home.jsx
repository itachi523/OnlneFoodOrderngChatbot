import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { RESTAURANTS_DATA as RESTAURANTS } from '../data/restaurants';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="container hero-content animate-slide-up">
          <h1>Hungry? <span>Order now</span></h1>
          <p>Get food from your favorite restaurants delivered fast.</p>
        </div>
      </div>

      <div className="container section">
        <div className="section-header">
          <h2>Top restaurant chains in your city</h2>
        </div>

        <div className="restaurant-grid">
          {RESTAURANTS.map((restaurant, index) => (
            <Link 
              to={`/restaurant/${restaurant.id}`} 
              key={restaurant.id} 
              className="restaurant-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="restaurant-image-container">
                <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                <div className="restaurant-offer">{restaurant.offer}</div>
              </div>
              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <div className="restaurant-meta">
                  <div className="rating-badge">
                    <Star size={14} fill="white" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <span className="dot">•</span>
                  <div className="time">
                    <Clock size={14} />
                    <span>{restaurant.time}</span>
                  </div>
                </div>
                <p className="cuisine">{restaurant.cuisine}</p>
                <div className="divider"></div>
                <p className="price-tag">{restaurant.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
