import { useEffect, useRef, useState } from 'react';

const WhoWeAre = () => {
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

  const cards = [
    {
      image: '/images/who-we-are-1.jpg',
      caption: 'Prevention First',
    },
    {
      image: '/images/who-we-are-2.jpg',
      caption: 'Gentle Techniques',
    },
    {
      image: '/images/who-we-are-3.jpg',
      caption: 'Lasting Results',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-20 lg:py-28 bg-[#F6F8FA] overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-mint w-[350px] h-[350px] top-1/4 -left-20" />
        <div className="blob-coral w-[280px] h-[280px] bottom-1/4 right-0" />
        <div className="blob-lemon w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-[#6B7A90] max-w-3xl mx-auto leading-relaxed">
            We're a modern dental practice built around your comfort—clear communication, 
            calm environment, and treatment plans tailored to you. Our team is dedicated 
            to providing exceptional dental care with a gentle touch.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-[44px] lg:rounded-[52px] shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ height: '400px', transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={card.image}
                alt={card.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1E3C]/80 to-transparent p-6">
                <span className="text-white font-semibold text-lg">{card.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
