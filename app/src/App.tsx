import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import WhyChooseUs from './sections/WhyChooseUs';
import OurDoctors from './sections/OurDoctors';
import Treatments from './sections/Treatments';
import Appointment from './sections/Appointment';
import WhatWeProvide from './sections/WhatWeProvide';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Gallery from './sections/Gallery';
import Blog from './sections/Blog';
import Footer from './sections/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <WhoWeAre />
        <WhyChooseUs />
        <OurDoctors />
        <Treatments />
        <Appointment />
        <WhatWeProvide />
        <Testimonials />
        <FAQ />
        <Gallery />
        <Blog />
        <Footer />
      </main>
      
      {/* Toast notifications */}
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
