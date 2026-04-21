import { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const blogs = [
    {
      image: '/images/blog-1.jpg',
      title: '5 Signs You Should See a Dentist Sooner',
      excerpt: 'Don\'t ignore these warning signs that your oral health needs attention. Early detection can save you from complex procedures.',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
    },
    {
      image: '/images/blog-2.jpg',
      title: 'How to Keep Your Gums Healthy',
      excerpt: 'Healthy gums are the foundation of a beautiful smile. Learn the best practices for maintaining gum health at home.',
      date: 'Dec 10, 2024',
      readTime: '4 min read',
    },
    {
      image: '/images/blog-3.jpg',
      title: 'What to Expect During a Dental Cleaning',
      excerpt: 'Regular cleanings are essential for oral health. Here\'s what happens during your appointment and why it matters.',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
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
      id="blog"
      className="relative w-full bg-[#F6F8FA] py-20 lg:py-28"
    >
      <div className="section-padding">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-[#2EC4B6] font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Blog
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1E3C] mb-6">
            Latest Blog & News
          </h2>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto leading-relaxed">
            Tips, insights, and updates from the clinic. Stay informed about 
            the latest in dental care and oral health.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className={`card-white overflow-hidden group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden -m-6 mb-5">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex items-center gap-4 text-sm text-[#6B7A90] mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1E3C] mb-3 group-hover:text-[#2EC4B6] transition-colors line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-[#6B7A90] leading-relaxed mb-4 line-clamp-3">
                {blog.excerpt}
              </p>

              <button className="flex items-center gap-2 text-[#2EC4B6] font-semibold text-sm group/btn">
                Read More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
