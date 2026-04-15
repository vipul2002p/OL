import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import StatsBar from './components/StatsBar';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FeaturedProducts from './components/FeaturedProducts';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <StatsBar />
      <Testimonials />
      <Gallery />
      <FeaturedProducts />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
