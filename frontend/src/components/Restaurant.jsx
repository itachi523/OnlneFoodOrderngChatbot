import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, ArrowLeft, Plus } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { RESTAURANTS_DATA } from '../data/restaurants';
import './Restaurant.css';

const Restaurant = () => {
  const { id } = useParams();
  const restaurant = RESTAURANTS_DATA.find(r => r.id === parseInt(id));
  const { addToCart } = useContext(AppContext);

  if (!restaurant) {
    return (
      <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
        <h2>Restaurant not found</h2>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="restaurant-page animate-fade-in">
      <div className="restaurant-cover">
        <img src={restaurant.image} alt={restaurant.name} />
        <div className="cover-overlay"></div>
        <div className="container cover-content">
          <Link to="/" className="back-btn"><ArrowLeft size={24} /></Link>
        </div>
      </div>
      
      <div className="container restaurant-details-container">
        <div className="restaurant-header">
          <div>
            <h1 className="restaurant-title">{restaurant.name}</h1>
            <p className="restaurant-cuisine">{restaurant.cuisine}</p>
          </div>
          <div className="restaurant-rating-box">
            <div className="rating-top">
              <Star size={16} fill="white" />
              <span>{restaurant.rating}</span>
            </div>
          </div>
        </div>

        <div className="restaurant-meta-info">
          <div className="meta-item">
            <Clock size={18} />
            <span>{restaurant.time}</span>
          </div>
        </div>

        <div className="menu-section">
          <h3 className="menu-heading">Recommended</h3>
          <div className="menu-list">
            {restaurant.menu.map((item) => (
              <div key={item.id} className="menu-item animate-slide-up">
                <div className="menu-item-info">
                  <div className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                    <div className="dot"></div>
                  </div>
                  <h4>{item.name}</h4>
                  <span className="item-price">{item.price}</span>
                  <p className="item-desc">{item.desc}</p>
                </div>
                <div className="menu-item-action">
                  <div className="menu-item-image-wrapper">
                    <img src={item.image} alt={item.name} className="menu-item-image" />
                    <button className="add-btn with-image" onClick={() => addToCart(item, restaurant.name)}>
                      ADD <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
