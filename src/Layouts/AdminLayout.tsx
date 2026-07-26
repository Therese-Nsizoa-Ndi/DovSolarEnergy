import { Outlet, Link } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-container">

      <aside className="sidebar">

        <h2>DovSolar Admin</h2>

        <nav>

          <Link to="/admin">🏠 Dashboard</Link>

          <Link to="/admin/messages">📩 Messages</Link>

          <Link to="/admin/products">📦 Products</Link>

          <Link to="/admin/quotations">📄 Quotations</Link>

          <Link to="/admin/orders">🛒 Orders</Link>

        </nav>

      </aside>

      <main className="admin-content">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;