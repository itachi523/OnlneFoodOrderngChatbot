import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Restaurant from "./components/Restaurant";
import Cart from "./components/Cart";
import ChatbotWidget from "./components/ChatbotWidget";

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ManageProducts from "./components/ManageProducts";
import ManageUsers from "./components/ManageUsers";
import ManageOrders from "./components/ManageOrders";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Navbar />

          <main style={{ minHeight: "calc(100vh - 80px)" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/restaurant/:id" element={<Restaurant />} />

              {/* Admin Routes */}
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<ManageProducts />} />
              <Route path="/admin/users" element={<ManageUsers />} />
              <Route path="/admin/orders" element={<ManageOrders />} />
              <Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/products" element={<ManageProducts />} />
<Route path="/admin/users" element={<ManageUsers />} />
<Route path="/admin/orders" element={<ManageOrders />} />
            </Routes>
          </main>

          <ChatbotWidget />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;