import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search, LogOut } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import './Navbar.css';
import './NavbarExtra.css';


const Navbar = () => {
  const { user, logout, cart } = useContext(AppContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo-container">
          <div className="logo-icon">🍔</div>
          <span className="logo-text">Swizzy</span>
        </Link>
        
        <div className="nav-search">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
        </div>

        <nav className="nav-links">
          {user ? (
            <div className="nav-item">
              <User size={20} />
              <span>Hi, {user.name}</span>
              <button className="logout-btn" onClick={logout} title="Logout">
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="nav-item">
              <User size={20} />
              <span>Sign In</span>
            </Link>
          )}

          <Link to="/cart" className="nav-item cart-btn">
            <ShoppingBag size={20} />
            <span>Cart</span>
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </Link>
          <Link to="/admin-login" className="nav-item">
  Admin
</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
