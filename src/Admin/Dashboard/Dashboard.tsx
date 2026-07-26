import "./Dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
const [stats, setStats] = useState({
  totalMessages: 0,
});
useEffect(() => {

  fetch("http://localhost:5000/dashboard")
    .then((response) => response.json())
    .then((data) => setStats(data))
    .catch((error) => console.error(error));

}, []);

  return (
    <>
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, Administrator</p>
      </header>

      <section className="cards">
        <div className="card">
          <h2>{stats.totalMessages}</h2>
          <p>Messages</p>
        </div>

        <div className="card">
          <h2>24</h2>
          <p>Products</p>
        </div>

        <div className="card">
          <h2>8</h2>
          <p>Quotations</p>
        </div>
      </section>
    </>
  );
}

export default Dashboard;