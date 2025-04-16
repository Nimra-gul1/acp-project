import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Reservation from './Reservation.jsx';
import Contact from './Contact.jsx';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import History from './History.jsx';
import AboutUs from './AboutUs.jsx';
import DrinksMenu from './DrinksMenu.jsx';
import NewMenu from './NewMenu.jsx';
import MenuPage from './MenuPage.jsx';
import FoodMenu from './FoodMenu.jsx';
import DrinksMenuList from './DrinksMenuList.jsx';

const MenuPageWithNavigate = () => {
  const navigate = useNavigate();
  return <MenuPage navigate={navigate} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<MenuPageWithNavigate />} />
        <Route path="/D1" element={<DrinksMenu />} />
        <Route path="/newmenu" element={<NewMenu />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/drinksmenu" element={<DrinksMenuList />} />
      </Routes>
    </Router>
  </StrictMode>
);