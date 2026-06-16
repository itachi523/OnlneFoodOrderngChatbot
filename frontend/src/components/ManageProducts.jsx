import React from "react";
import { RESTAURANTS_DATA } from "../data/restaurants";
import "./Admin.css";

function ManageProducts() {

const allProducts = RESTAURANTS_DATA.flatMap(
(restaurant) =>
restaurant.menu.map((item) => ({
...item,
restaurant: restaurant.name,
}))
);

return ( <div className="admin-container"> <h1 className="admin-title">
Manage Products </h1>

```
  <div className="admin-card">
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Food</th>
          <th>Restaurant</th>
          <th>Price</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        {allProducts.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.restaurant}</td>
            <td>{item.price}</td>
            <td>
              {item.isVeg
                ? "Veg"
                : "Non Veg"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


);
}

export default ManageProducts;
