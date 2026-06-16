import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setUsersCount(users.length);
    setProductsCount(products.length);
    setOrdersCount(orders.length);
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f4f5f8",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          color: "#282c3f",
        }}
      >
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Total Users</h3>
          <h1>{usersCount}</h1>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Total Products</h3>
          <h1>{productsCount}</h1>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Total Orders</h3>
          <h1>{ordersCount}</h1>
        </div>
      </div>

      {/* Admin Actions */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <Link
          to="/admin/products"
          style={cardStyle}
        >
          🍔 Manage Products
        </Link>

        <Link
          to="/admin/users"
          style={cardStyle}
        >
          👥 Manage Users
        </Link>

        <Link
          to="/admin/orders"
          style={cardStyle}
        >
          📦 Manage Orders
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "30px",
  textDecoration: "none",
  color: "#282c3f",
  fontWeight: "600",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textAlign: "center",
  fontSize: "18px",
};

export default AdminDashboard;