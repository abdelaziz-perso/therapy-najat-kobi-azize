import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaintenancePage from './components/MaintenancePage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SupportSection from './components/SupportSection';
import ExpectationsSection from './components/ExpectationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesGrid from './components/ServicesGrid';
import SessionProcessSection from './components/SessionProcessSection';
import AppointmentSection from './components/AppointmentSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <SupportSection />
      <ExpectationsSection />
      <ServicesGrid />
      <TestimonialsSection />
      <SessionProcessSection />
      <AppointmentSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

const isMaintenanceMode =
  import.meta.env.PROD && import.meta.env.VITE_MAINTENANCE_MODE === 'true';

function App() {
  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
