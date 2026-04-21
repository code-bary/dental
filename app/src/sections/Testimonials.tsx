import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The team made me feel at ease from the moment I walked in. The treatment was gentle, and the results exceeded my expectations. I actually look forward to my dental visits now!",
      author: "Anjali R.",
      role: "Patient since 2020",
      rating: 5,
    },
    {
      quote: "Dr. Sri Ram is incredibly skilled and patient. He explained every step of my root canal procedure, and I felt no pain at all. The staff is warm and welcoming too.",
      author: "Rajesh K.",
      role: "Patient since 2019",
      rating: 5,
    },
    {
      quote: "I was terrified of dentists until I came here. They took such good care of me and my kids. Now my whole family comes to Sri Ram Dental Clinic.",
      author: "Priya M.",
      role: "Patient since 2021",
      rating: 5,
    },
    {
      quote: "The clinic is spotlessly clean, and the technology they use is impressive. My smile makeover transformed my confidence. Thank you, Dr. Sri Ram!",
      author: "Vikram S.",
      role: "Patient since 2018",
      rating: 5,
    },
  ];

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full py-20 lg:py-28 bg-[#F6F8FA] overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-mint w-[400px] h-[400px] top-0 right-0" />
        <div className="blob-coral w-[300px] h-[300px] bottom-20 left-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1E3C] leading-tight mb-4">
              What Our Happy Patients Say
            </h2>
            <p className="text-lg text-[#6B7A90] mb-8 max-w-lg leading-relaxed">
              Real stories from real smiles. Our patients' satisfaction is our greatest reward.
            </p>

            {/* Testimonial Card */}
            <div className="bg-white rounded-[40px] p-8 shadow-xl relative">
              <Quote className="w-10 h-10 text-[#2EC4B6]/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD166] text-[#FFD166]" />
                ))}
              </div>

              <p className="text-[#0B1E3C] text-lg leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#0B1E3C]">— {testimonials[currentIndex].author}</p>
                  <p className="text-sm text-[#6B7A90]">{testimonials[currentIndex].role}</p>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-[#F6F8FA] flex items-center justify-center hover:bg-[#2EC4B6] hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-[#F6F8FA] flex items-center justify-center hover:bg-[#2EC4B6] hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-[#2EC4B6] w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative hidden lg:block h-[70vh] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[44vw] h-[65vh]">
              <img
                src="/images/testimonial-patient.jpg"
                alt="Happy patient"
                className="w-full h-full image-rounded shadow-2xl"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden relative h-[40vh]">
            <img
              src="/images/testimonial-patient.jpg"
              alt="Happy patient"
              className="w-full h-full rounded-[36px] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
