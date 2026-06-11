import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Restaurant from './components/Restaurant';
import Cart from './components/Cart';
import ChatbotWidget from './components/ChatbotWidget';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 80px)' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/restaurant/:id" element={<Restaurant />} />
            </Routes>
          </main>
          <ChatbotWidget />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
