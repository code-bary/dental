import { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Youtube,
  Send,
  Heart
} from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Dental Lane, Bengaluru, Karnataka 560001',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91-1234567890',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'care@sriramdental.in',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
  ];

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Dental Implants',
    'Orthodontics',
    'Root Canal Therapy',
    'Pediatric Dentistry',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#0B1E3C] pt-20 lg:pt-28"
    >
      {/* Content */}
      <div className="section-padding">
        {/* Headline */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Ready for a healthier smile?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Book online or call us. We're here to help you achieve the smile of your dreams.
          </p>
        </div>

        {/* Contact Cards */}
        <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 bg-[#2EC4B6]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-6 h-6 text-[#2EC4B6]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-white/70">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`border-t border-white/10 pt-12 pb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#2EC4B6] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl text-white">
                  Sri Ram Dental
                </span>
              </div>
              <p className="text-white/60 leading-relaxed mb-6">
                Modern, gentle dentistry for the whole family. Over 20 years of 
                experience creating beautiful, healthy smiles.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#2EC4B6] transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-white/60 hover:text-[#2EC4B6] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i}>
                    <span className="text-white/60">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-white/60 mb-4">
                Get oral health tips and updates delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-[#2EC4B6] focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-12 h-12 bg-[#2EC4B6] rounded-xl flex items-center justify-center hover:bg-[#25A99C] transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Sri Ram Dental Clinic. All rights reserved. 
              Made with <Heart className="w-4 h-4 text-[#FF8B7B] fill-[#FF8B7B]" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
