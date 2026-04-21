import { useEffect, useRef, useState } from 'react';
import { Scan, Shield, Clock, FileText, ArrowRight } from 'lucide-react';

const WhatWeProvide = () => {
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

  const features = [
    {
      icon: Scan,
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art digital imaging for accurate diagnosis and treatment planning.',
      borderColor: 'bg-[#2EC4B6]',
    },
    {
      icon: Shield,
      title: 'Pain-Free Techniques',
      description: 'Modern anesthesia and gentle procedures for a comfortable experience.',
      borderColor: 'bg-[#FF8B7B]',
    },
    {
      icon: Clock,
      title: 'Same-Day Emergency Care',
      description: 'Quick response for dental emergencies when you need us most.',
      borderColor: 'bg-[#FFD166]',
    },
    {
      icon: FileText,
      title: 'Personalized Treatment Plans',
      description: 'Customized care tailored to your specific needs and goals.',
      borderColor: 'bg-[#2EC4B6]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6F8FA] py-20 lg:py-28"
    >
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column */}
          <div className={`lg:sticky lg:top-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
              Our Promise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1E3C] mb-6">
              What We Provide
            </h2>
            <p className="text-lg text-[#6B7A90] mb-8 leading-relaxed">
              From your first consultation to follow-up care, we prioritize safety, 
              cleanliness, and clear communication. Our commitment is to provide 
              you with the highest quality dental care in a comfortable environment.
            </p>
            <button className="flex items-center gap-2 text-[#0B1E3C] font-semibold hover:text-[#2EC4B6] transition-colors group">
              See our protocols
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`card-white flex items-start gap-5 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Border Accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${feature.borderColor}`} />
                
                <div className="w-12 h-12 bg-[#F6F8FA] rounded-xl flex items-center justify-center flex-shrink-0 ml-4">
                  <feature.icon className="w-6 h-6 text-[#2EC4B6]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1E3C] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B7A90] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
