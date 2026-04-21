import { useEffect, useRef, useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  CircleDot, 
  AlignCenter, 
  Zap, 
  Baby,
  ArrowRight
} from 'lucide-react';

const Treatments = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Stethoscope,
      title: 'General Dentistry',
      description: 'Exams, cleanings, fillings, and preventive care to maintain your oral health.',
      color: 'bg-[#2EC4B6]/10',
      iconColor: 'text-[#2EC4B6]',
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Whitening, veneers, and smile makeovers to enhance your appearance.',
      color: 'bg-[#FF8B7B]/10',
      iconColor: 'text-[#FF8B7B]',
    },
    {
      icon: CircleDot,
      title: 'Dental Implants',
      description: 'Replace missing teeth with natural-looking, permanent solutions.',
      color: 'bg-[#FFD166]/10',
      iconColor: 'text-[#FFD166]',
    },
    {
      icon: AlignCenter,
      title: 'Orthodontics',
      description: 'Clear aligners and braces for all ages to straighten your smile.',
      color: 'bg-[#2EC4B6]/10',
      iconColor: 'text-[#2EC4B6]',
    },
    {
      icon: Zap,
      title: 'Root Canal Therapy',
      description: 'Save infected teeth with gentle, precise care and modern techniques.',
      color: 'bg-[#FF8B7B]/10',
      iconColor: 'text-[#FF8B7B]',
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Kid-friendly visits that build healthy habits from an early age.',
      color: 'bg-[#FFD166]/10',
      iconColor: 'text-[#FFD166]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#F6F8FA] py-20 lg:py-28"
    >
      <div className="section-padding">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1E3C] mb-6">
            Best Quality Treatments
          </h2>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto leading-relaxed">
            Comprehensive services to protect, restore, and enhance your smile. 
            We use the latest technology for the best results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-white group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E3C] mb-3 group-hover:text-[#2EC4B6] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6B7A90] leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-[#2EC4B6] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
