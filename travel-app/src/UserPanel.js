// UserPanel.js
import { Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Home from './components/Home';
import Stays from './components/Stays';
import Flights from './components/Flights';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Forgot from './components/Forgot';
import Flightbooking from './components/Flightbooking';
import HotelBooking from './components/HotelBooking';
import Payment from './components/Payment';
import HotelPayment from './components/HotelPayment';
import FlightTickets from './components/FlightTickets';
import HotelTickets from './components/HotelTickets';

function UserPanel() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path='/book_flight' element={<Flightbooking />} />
        <Route path='/book_hotel' element={<HotelBooking />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/hotelpayment' element={<HotelPayment />} />
        <Route path='/flight_bookings' element={<FlightTickets />} />
        <Route path='/hotel_bookings' element={<HotelTickets />} />
      </Routes>
    </>
  );
}

export default UserPanel;
