import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, X, Send, Bot, Plus } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { RESTAURANTS_DATA } from '../data/restaurants';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState('IDLE'); // IDLE, ASK_MORE, ASK_CATEGORY, CONFIRM_ORDER
  const [messages, setMessages] = useState([
    { text: "Hi! I am Swizzy Bot. How can I help you with your order?", sender: "bot", type: "text" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { addToCart } = useContext(AppContext);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleBotAddToCart = (item, restaurantName) => {
    addToCart(item, restaurantName);
    setMessages(prev => [...prev, { 
        text: `Great! Added ${item.name} from ${restaurantName} to your cart. Do you want another items?`, 
        sender: "bot",
        type: "options",
        options: ["Yes", "No"]
    }]);
    setChatState('ASK_MORE');
  };

  const processMessage = async (msgText) => {
    const lowerMsg = msgText.toLowerCase();
    
    if (chatState === 'ASK_MORE') {
      if (lowerMsg === 'yes' || lowerMsg === 'y') {
        setChatState('ASK_CATEGORY');
        setMessages(prev => [...prev, { 
          text: "What would you like to order?", 
          sender: "bot", 
          type: "options",
          options: ["Pizza", "Burger", "Biryani", "Sushi", "Taco"]
        }]);
      } else {
        setChatState('CONFIRM_ORDER');
        setMessages(prev => [...prev, { 
          text: "Would you like to confirm your order and proceed to payment?", 
          sender: "bot", 
          type: "options",
          options: ["Yes, Confirm Order", "No, keep browsing"]
        }]);
      }
      return;
    }

    if (chatState === 'CONFIRM_ORDER') {
      if (lowerMsg.includes('yes') || lowerMsg.includes('confirm')) {
        setChatState('IDLE');
        setMessages(prev => [...prev, { 
          text: "Perfect! Redirecting you to payment...", 
          sender: "bot",
          type: "text"
        }]);
        setTimeout(() => {
          setIsOpen(false);
          navigate('/cart');
        }, 1500);
      } else {
        setChatState('IDLE');
        setMessages(prev => [...prev, { 
          text: "Okay, your order is waiting in the cart. How else can I help?", 
          sender: "bot",
          type: "text"
        }]);
      }
      return;
    }

    // Checking for invisible auto-add intent
    const isOrderIntent = lowerMsg.includes('add') || lowerMsg.includes('order') || lowerMsg.includes('want') || lowerMsg.includes('get');
    let itemToOrder = null;
    let restaurantToOrderFrom = null;

    if (isOrderIntent) {
      for (const rest of RESTAURANTS_DATA) {
        for (const item of rest.menu) {
          if (
              lowerMsg.includes(item.name.toLowerCase()) ||
              (item.name.toLowerCase().includes('pizza') && (lowerMsg.includes('pizza') || lowerMsg.includes('piiza')) && lowerMsg.includes(item.name.toLowerCase().replace(' pizza',''))) ||
              (item.name.toLowerCase().includes('burger') && (lowerMsg.includes('burger') || lowerMsg.includes('buger')) && lowerMsg.includes(item.name.toLowerCase().replace(' burger',''))) ||
              (item.name.toLowerCase().includes('biryani') && (lowerMsg.includes('biryani') || lowerMsg.includes('briyani')))
          ) {
            itemToOrder = item;
            restaurantToOrderFrom = rest.name;
            if (lowerMsg.includes(item.name.toLowerCase())) break;
          }
        }
        if (itemToOrder && lowerMsg.includes(itemToOrder.name.toLowerCase())) break;
      }
    }

    if (itemToOrder) {
      handleBotAddToCart(itemToOrder, restaurantToOrderFrom);
      return;
    }

    // Check for explicit category requests to render rich menus AFTER checking for specific item adds
    let foundRestaurant = null;
    if (lowerMsg.includes('pizza') || lowerMsg.includes('piiza')) foundRestaurant = RESTAURANTS_DATA[0];
    else if (lowerMsg.includes('burger') || lowerMsg.includes('buger')) foundRestaurant = RESTAURANTS_DATA[1];
    else if (lowerMsg.includes('biryani') || lowerMsg.includes('briyani')) foundRestaurant = RESTAURANTS_DATA[2];
    else if (lowerMsg.includes('sushi')) foundRestaurant = RESTAURANTS_DATA[3];
    else if (lowerMsg.includes('taco')) foundRestaurant = RESTAURANTS_DATA[4];

    if (foundRestaurant) {
      setChatState('IDLE');
      setMessages(prev => [...prev, { 
        text: `Here are some popular items from ${foundRestaurant.name}:`, 
        sender: "bot",
        type: "menu",
        restaurantName: foundRestaurant.name,
        menuItems: foundRestaurant.menu
      }]);
      return;
    }

    // Fallback to NLP Backend
    setIsLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/get', { message: msgText });
      setMessages(prev => [...prev, { text: response.data.reply, sender: "bot", type: "text" }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Sorry, I am having trouble connecting.", sender: "bot", type: "text", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: "user", type: "text" }]);
    setInputMessage('');
    
    await processMessage(userMessage);
  };

  const handleOptionClick = async (option) => {
    setMessages(prev => [...prev, { text: option, sender: "user", type: "text" }]);
    await processMessage(option);
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen ? (
        <div className="chat-window animate-slide-up">
          <div className="chat-header">
            <div className="chat-header-info">
              <Bot size={24} />
              <div>
                <h3>Swizzy Support</h3>
                <span className="online-status">Online</span>
              </div>
            </div>
            <button className="icon-btn" onClick={() => setIsOpen(false)}>
              <X size={24} color="white" />
            </button>
          </div>
          
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message flex-column ${msg.sender} ${msg.isError ? 'error' : ''}`}>
                <div className="message-content">{msg.text}</div>
                
                {msg.type === 'options' && (
                  <div className="chat-options-container">
                    {msg.options.map(opt => (
                      <button key={opt} className="chat-option-btn" onClick={() => handleOptionClick(opt)}>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {msg.type === 'menu' && (
                  <div className="chat-menu-container">
                    {msg.menuItems.map(item => (
                      <div key={item.id} className="chat-menu-card">
                        <img src={item.image} alt={item.name} className="chat-menu-img" />
                        <div className="chat-menu-details">
                          <span className="chat-menu-name">{item.name}</span>
                          <span className="chat-menu-price">{item.price}</span>
                        </div>
                        <button className="chat-menu-add-btn" onClick={() => handleBotAddToCart(item, msg.restaurantName)}>
                          Add <Plus size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="chat-message bot loading">
                <div className="dot-typing"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-footer" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" disabled={!inputMessage.trim() || isLoading}>
              <Send size={20} />
            </button>
          </form>
        </div>
      ) : (
        <button className="chatbot-toggle-btn animate-fade-in" onClick={() => setIsOpen(true)}>
          <MessageSquare size={28} />
          <span className="tooltip">Need Help?</span>
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;
