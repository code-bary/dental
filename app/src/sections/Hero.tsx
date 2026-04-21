import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-screen bg-[#F6F8FA] overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-mint w-[400px] h-[400px] -top-20 -left-20 animate-pulse" />
        <div className="blob-coral w-[300px] h-[300px] top-1/3 right-1/4 animate-pulse animation-delay-200" />
        <div className="blob-lemon w-[250px] h-[250px] bottom-20 left-1/3 animate-pulse animation-delay-400" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen section-padding pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12">
          {/* Text Content */}
          <div className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Sri Ram Dental Clinic
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1E3C] leading-tight mb-6">
              A Commitment to{' '}
              <span className="text-[#2EC4B6]">Dental Excellence</span>
            </h1>
            <p className="text-lg text-[#6B7A90] mb-8 max-w-lg leading-relaxed">
              Modern, gentle dentistry for the whole family—routine care to advanced treatments. 
              Over 20 years of experience creating beautiful, healthy smiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('#appointment')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              <button 
                onClick={() => scrollToSection('#services')}
                className="flex items-center justify-center gap-2 text-[#0B1E3C] font-semibold hover:text-[#2EC4B6] transition-colors group"
              >
                View Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <span className="text-4xl font-bold text-[#2EC4B6]">20+</span>
                <p className="text-sm text-[#6B7A90] mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#2EC4B6]">10K+</span>
                <p className="text-sm text-[#6B7A90] mt-1">Happy Patients</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#2EC4B6]">15+</span>
                <p className="text-sm text-[#6B7A90] mt-1">Expert Doctors</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className={`relative hidden lg:block h-[70vh] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[42vw] h-[60vh]">
              <img
                src="/images/hero-main.jpg"
                alt="Dental consultation"
                className="w-full h-full image-rounded shadow-2xl"
              />
            </div>

            {/* Small Top-Left Image */}
            <div className="absolute left-0 top-[10%] w-[18vw] h-[14vh] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}">
              <img
                src="/images/hero-small-1.jpg"
                alt="Clinic reception"
                className="w-full h-full rounded-[40px] object-cover shadow-lg"
              />
            </div>

            {/* Small Bottom-Right Image */}
            <div className="absolute right-[5%] bottom-[5%] w-[20vw] h-[18vh] transition-all duration-1000 delay-700">
              <img
                src="/images/hero-small-2.jpg"
                alt="Patient care"
                className="w-full h-full rounded-[40px] object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden relative h-[40vh]">
            <img
              src="/images/hero-main.jpg"
              alt="Dental consultation"
              className="w-full h-full rounded-[36px] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
