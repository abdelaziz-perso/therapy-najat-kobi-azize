import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SupportSection from './components/SupportSection';
import ExpectationsSection from './components/ExpectationsSection';
import AboutMeSection from './components/AboutMeSection';
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
      <AboutMeSection />
      <TestimonialsSection />
      <ServicesGrid />
      <SessionProcessSection />
      <AppointmentSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

function App() {
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
