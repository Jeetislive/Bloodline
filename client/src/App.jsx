import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contact';
import "./App.css";
import RegistrationPage from './pages/registrationPage';
import LoginPage from './pages/loginPage';
import DonorDashboard from './pages/donorDashboard';
import RequesterDashboard from './pages/requesterDashboard';
import GuestRoute from './routes/guestsRoute';
import Founder from './pages/founder';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      
      <Route path='/' element={
        <GuestRoute>
          <Home />
        </GuestRoute>
        } />
      <Route path='/founder' element={<Founder />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/register' element={<RegistrationPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/donor-dashboard' element={<DonorDashboard />} />
      <Route path='/requester-dashboard' element={<RequesterDashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
