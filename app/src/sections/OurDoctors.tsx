import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const OurDoctors = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="doctors"
      className="relative w-full py-20 lg:py-28 bg-[#F6F8FA] overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-mint w-[400px] h-[400px] -top-32 -right-32" />
        <div className="blob-coral w-[250px] h-[250px] bottom-20 left-1/3" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Our Team
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] leading-tight mb-6">
              Our Doctors
            </h2>
            <p className="text-lg text-[#6B7A90] mb-6 max-w-lg leading-relaxed">
              Led by Dr. Sri Ram, our team brings over 20 years of advanced training 
              and a gentle approach to every procedure—from routine exams to complex 
              restorations. We believe in continuous learning and staying updated with 
              the latest dental techniques.
            </p>
            <p className="text-lg text-[#6B7A90] mb-8 max-w-lg leading-relaxed">
              Each member of our team is dedicated to providing personalized care 
              that addresses your unique needs and concerns.
            </p>
            <button className="flex items-center gap-2 text-[#0B1E3C] font-semibold hover:text-[#2EC4B6] transition-colors group w-fit">
              Meet the team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Images */}
          <div className={`relative hidden lg:block h-[70vh] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Doctor Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[44vw] h-[65vh]">
              <img
                src="/images/doctor-main.jpg"
                alt="Dr. Sri Ram"
                className="w-full h-full image-rounded shadow-2xl"
              />
              {/* Doctor Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-3xl p-5 shadow-lg">
                <h3 className="text-xl font-bold text-[#0B1E3C]">Dr. Sri Ram</h3>
                <p className="text-[#6B7A90]">Chief Dental Surgeon</p>
                <p className="text-[#2EC4B6] font-semibold mt-1">20+ Years Experience</p>
              </div>
            </div>

          </div>

          {/* Mobile Image */}
          <div className="lg:hidden relative h-[50vh]">
            <img
              src="/images/doctor-main.jpg"
              alt="Dr. Sri Ram"
              className="w-full h-full rounded-[36px] object-cover shadow-xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <h3 className="text-lg font-bold text-[#0B1E3C]">Dr. Sri Ram</h3>
              <p className="text-sm text-[#6B7A90]">Chief Dental Surgeon</p>
              <p className="text-[#2EC4B6] font-semibold text-sm mt-1">20+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
