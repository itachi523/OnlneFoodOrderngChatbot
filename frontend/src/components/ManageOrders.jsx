import React from "react";

function ManageUsers() {
const users =
JSON.parse(localStorage.getItem("users")) || [];

return (
<div style={{ padding: "30px" }}> <h1>Manage Users</h1>

```
  {users.length === 0 ? (
    <p>No users registered yet.</p>
  ) : (
    <table
      border="1"
      width="100%"
      cellPadding="10"
      style={{
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role || "User"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>


);
}

export default ManageUsers;
