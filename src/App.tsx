import './App.css'
import Home from './Pages/Home/Home'
import AboutUS from './Pages/AboutUs/AboutUs'
import Services from './Pages/Services/Services'
import Achievements from './Pages/Achievements/Achievements'
import Contact from './Pages/Contact/Contact'
import Dashboard from './Admin/Dashboard/Dashboard'
import PublicLayout from './Layouts/PublicLayout'
import AdminLayout from './Layouts/AdminLayout'
import Messages from './Admin/Messages/Messages'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from "./Components/ScrolltoTop";

const Products = () => <div>Products</div>
const Quotations = () => <div>Quotations</div>
const Orders = () => <div>Orders</div>

function App() {

  return (
    <div className="App">

      <ScrollToTop />

      <Routes>

      {/* Public Website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUS />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>

       {/* Admin */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/messages" element={<Messages />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/quotations" element={<Quotations />} />
        <Route path="/admin/orders" element={<Orders />} />
      </Route>

    </Routes>
    </div>
  )
}

export default App