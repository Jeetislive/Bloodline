import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import OurTeam from './pages/ourteam';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contact';
import "./App.css";
import RegistrationPage from './pages/registrationPage';
import LoginPage from './pages/loginPage';
import DonorDashboard from './pages/donorDashboard';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/our-team' element={<OurTeam />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/register' element={<RegistrationPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/donor-dashboard' element={<DonorDashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
