

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Placeholder for pages we'll build next
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Offices } from './pages/Offices';
import { Hostels } from './pages/Hostels';
import { Events } from './pages/Events';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cooks } from './pages/Cooks';
import { Areas } from './pages/Areas';
import { NotFound } from './pages/NotFound';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/offices" element={<Offices />} />
            <Route path="/hostels" element={<Hostels />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cooks" element={<Cooks />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        {/* Mobile Fixed Bottom CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-nk-surface/95 backdrop-blur-sm border-t border-nk-border z-40">
          <a
            href={`https://wa.me/923001234567?text=Hi,%20I'm%20interested%20in%20ordering%20food`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3 bg-nk-green text-white rounded-md font-medium"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
