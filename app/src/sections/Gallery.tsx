import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/images/gallery-1.jpg', alt: 'Dental tools', span: 'col-span-1 row-span-1' },
    { src: '/images/gallery-2.jpg', alt: 'X-ray consultation', span: 'col-span-1 row-span-2' },
    { src: '/images/gallery-3.jpg', alt: 'Reception area', span: 'col-span-1 row-span-1' },
    { src: '/images/gallery-4.jpg', alt: 'Our team', span: 'col-span-2 row-span-1' },
    { src: '/images/gallery-5.jpg', alt: 'Patient care', span: 'col-span-1 row-span-1' },
    { src: '/images/gallery-6.jpg', alt: 'Modern equipment', span: 'col-span-1 row-span-1' },
  ];

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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6F8FA] py-20 lg:py-28"
    >
      <div className="section-padding">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1E3C] mb-6">
            Photo Gallery
          </h2>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto leading-relaxed">
            A glimpse of our clinic, team, and patient care. Experience the 
            warmth and professionalism of Sri Ram Dental Clinic.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative group overflow-hidden rounded-[36px] lg:rounded-[44px] cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0B1E3C]/0 group-hover:bg-[#0B1E3C]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#2EC4B6] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
