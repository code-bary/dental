import { useEffect, useRef, useState } from 'react';
import { Users, Cpu, BadgeIndianRupee, Heart } from 'lucide-react';

const WhyChooseUs = () => {
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
      icon: Users,
      title: 'Experienced Team',
      description: 'Over 20 years of expertise in general and cosmetic dentistry, providing patients with excellent care.',
      color: 'bg-[#2EC4B6]/10',
      iconColor: 'text-[#2EC4B6]',
    },
    {
      icon: Cpu,
      title: 'Modern Technology',
      description: 'Digital imaging, precise diagnostics, and minimally invasive tools for the best outcomes.',
      color: 'bg-[#FF8B7B]/10',
      iconColor: 'text-[#FF8B7B]',
    },
    {
      icon: BadgeIndianRupee,
      title: 'Transparent Pricing',
      description: 'Clear estimates, no hidden fees, and flexible payment options for your convenience.',
      color: 'bg-[#FFD166]/10',
      iconColor: 'text-[#FFD166]',
    },
    {
      icon: Heart,
      title: 'Patient-First Care',
      description: 'We listen, explain, and tailor every visit to your comfort and individual needs.',
      color: 'bg-[#2EC4B6]/10',
      iconColor: 'text-[#2EC4B6]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6F8FA] py-20 lg:py-28"
    >
      <div className="section-padding">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1E3C] mb-6">
            We Care About Your Smile
          </h2>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto leading-relaxed">
            We combine experience, technology, and a patient-first approach 
            to make every visit comfortable and effective.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-white flex items-start gap-5 p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B1E3C] mb-2">
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
    </section>
  );
};

export default WhyChooseUs;
