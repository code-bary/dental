import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is the first consultation free?',
      answer: 'Yes, we offer a complimentary initial consultation for new patients. This includes a basic examination and discussion of your dental health goals. It\'s our way of helping you get to know us before committing to treatment.',
    },
    {
      question: 'How do I prepare for a root canal?',
      answer: 'Before a root canal, eat a light meal and take any prescribed medications. Avoid alcohol and smoking. We\'ll provide detailed instructions based on your specific case. The procedure is done under local anesthesia, so you\'ll be comfortable throughout.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Absolutely! We understand that dental care can be a significant investment. We offer flexible payment plans and accept most major insurance providers. Our team will work with you to find a payment solution that fits your budget.',
    },
    {
      question: 'What should I do in a dental emergency?',
      answer: 'For dental emergencies, call us immediately at +91-1234567890. We reserve slots for emergency cases and will do our best to see you the same day. For severe pain, swelling, or trauma, seek immediate care.',
    },
    {
      question: 'Are whitening treatments safe for sensitive teeth?',
      answer: 'Yes, we offer specialized whitening treatments designed for sensitive teeth. Our dentists will assess your condition and recommend the most suitable option. We use professional-grade products that minimize sensitivity while delivering excellent results.',
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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6F8FA] py-20 lg:py-28"
    >
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1E3C] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#6B7A90] leading-relaxed">
              Quick answers to help you plan your visit. Can't find what you're looking for? 
              Feel free to contact us.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-[28px] shadow-[0_4px_20px_rgba(11,30,60,0.08)] overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#0B1E3C] pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2EC4B6] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-[#6B7A90] leading-relaxed">
                    {faq.answer}
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

export default FAQ;
