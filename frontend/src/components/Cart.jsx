import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import './Cart.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useContext(AppContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const total = getCartTotal();

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handlePaymentConfirm = () => {
    setOrderConfirmed(true);
    clearCart();
  };

  if (orderConfirmed) {
    return (
      <div className="container cart-container animate-fade-in" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <CheckCircle2 size={80} color="var(--success)" style={{ margin: '0 auto 20px' }} />
        <h1>Order Confirmed!</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', margin: '16px 0 32px' }}>
          Your food is being prepared and will be delivered shortly.
        </p>
        <Link to="/" className="btn btn-primary" onClick={() => setOrderConfirmed(false)}>
          Back to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0 && !isCheckingOut) {
    return (
      <div className="container cart-container empty-cart animate-fade-in">
        <div className="empty-cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>You can go to home page to view more restaurants</p>
        <Link to="/" className="btn btn-primary">See Restaurants</Link>
      </div>
    );
  }

  return (
    <div className="container cart-container animate-fade-in">
      <div className="cart-header">
        <Link to="/" className="back-link"><ArrowLeft size={20} /> Continue Shopping</Link>
        <h1>Secure Checkout</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items-section">
          {(!isCheckingOut) ? (
            <div className="cart-items-list">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <div className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                      <div className="dot"></div>
                    </div>
                    <div>
                      <h4>{item.name}</h4>
                      <span className="item-restaurant">from {item.restaurantName}</span>
                      <div className="item-price">{item.price}</div>
                    </div>
                  </div>
                  
                  <div className="item-actions">
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="checkout-payment-section animate-slide-up">
              <h2>Payment details</h2>
              <p>Scan the QR code below using any UPI app to pay <strong>₹{total}</strong></p>
              
              <div className="qr-box">
                {/* Simulated QR Code for payment */}
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=swizzy@upi&pn=Swizzy&am=${total}&cu=INR`} 
                  alt="Payment QR Code" 
                  className="qr-image"
                />
                <p className="qr-hint">UPI ID: swizzy@upi</p>
              </div>

              <div className="payment-actions">
                <button className="btn btn-primary confirm-payment-btn" onClick={handlePaymentConfirm}>
                  I've made the payment
                </button>
                <button className="btn btn-secondary" onClick={() => setIsCheckingOut(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bill-details-section">
          <h3>Bill Details</h3>
          <div className="bill-row">
            <span>Item Total</span>
            <span>₹{total}</span>
          </div>
          <div className="bill-row">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>
          <div className="bill-row">
            <span>Taxes & Charges</span>
            <span>₹{Math.round(total * 0.05)}</span>
          </div>
          <div className="divider"></div>
          <div className="bill-row total">
            <span>To Pay</span>
            <span>₹{total + 40 + Math.round(total * 0.05)}</span>
          </div>

          {!isCheckingOut && (
            <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
              Proceed to Pay
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
