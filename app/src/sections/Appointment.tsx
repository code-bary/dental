import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Appointment = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Appointment request submitted! We will contact you shortly.');
    setFormData({ name: '', phone: '', date: '', time: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={sectionRef}
      id="appointment"
      className="relative w-full py-20 lg:py-28 bg-[#F6F8FA] overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-mint w-[500px] h-[500px] -top-40 -left-40" />
        <div className="blob-coral w-[400px] h-[400px] -bottom-40 -right-40" />
        <div className="blob-lemon w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        {/* Main Panel */}
        <div className={`w-full max-w-6xl mx-auto bg-white rounded-[44px] lg:rounded-[64px] shadow-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="bg-[#0B1E3C] p-8 lg:p-12 text-white flex flex-col justify-center">
              <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Book Now
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Make An Appointment
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Book a visit online. We'll confirm quickly and send reminders. 
                Your smile is our priority.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2EC4B6]/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us</p>
                    <p className="font-semibold">+91-1234567890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2EC4B6]/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email us</p>
                    <p className="font-semibold">care@sriramdental.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2EC4B6]/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Working hours</p>
                    <p className="font-semibold">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-12 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7A90]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7A90]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7A90]" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7A90]" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none transition-all appearance-none bg-white"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#6B7A90]" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific concerns or questions?"
                    rows={3}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
