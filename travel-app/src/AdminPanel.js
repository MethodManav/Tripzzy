// AdminPanel.js
import { Routes, Route } from 'react-router-dom';
import AdminHeader from './Admin/pages/AdminHeader';
import AdminSidebar from './Admin/pages/AdminSidebar';
import Dashboard from './Admin/pages/Dashboard';
import Footer from './Admin/pages/Footer';
import Feedback from './Admin/pages/Feedback';
import AddAdmin from './Admin/pages/AddAdmin';
import AddFlights from './Admin/pages/AddFlights';
import AddHotels from './Admin/pages/AddHotels';

function AdminPanel() {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/add_admin' element={<AddAdmin />} />
        <Route path='/add_flights' element={<AddFlights />} />
        <Route path='/add_hotels' element={<AddHotels />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AdminPanel;
