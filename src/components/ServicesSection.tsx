import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();
  const [savedService, setSavedService] = useState<number | null>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center',
      text: 'On Time Delivery',
      description: 'We guarantee timely project delivery with strict adherence to deadlines. Our project management ensures every milestone is met without compromising on quality or functionality.',
      backgroundImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1920&h=1080&fit=crop&crop=center'
    },
    {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
      text: 'AI Integration',
      description: 'Seamlessly integrate cutting-edge AI solutions into your existing systems. From machine learning models to natural language processing, we enhance your business with intelligent automation.',
      backgroundImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center'
    },
    {
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center',
      text: 'AI Automation',
      description: 'Transform your workflows with intelligent automation powered by AI. Reduce manual tasks, eliminate errors, and boost productivity across all your business processes.',
      backgroundImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop&crop=center'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
      text: 'Web Applications',
      description: 'Custom web applications built with modern technologies. From e-commerce platforms to enterprise solutions, we create scalable and user-friendly web experiences.',
      backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center'
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center',
      text: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android. We build engaging, high-performance mobile applications that connect with your users anywhere, anytime.',
      backgroundImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop&crop=center'
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center',
      text: 'Internship Programs',
      description: 'Comprehensive internship opportunities for students and fresh graduates. Gain real-world experience in software development, AI, and modern technologies.',
      backgroundImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&crop=center',
      text: 'Training Programs',
      description: 'Professional training in latest technologies and programming languages. Enhance your team\'s skills with our comprehensive training programs and workshops.',
      backgroundImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop&crop=center'
    },
    {
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center',
      text: '24/7 Support',
      description: 'Round-the-clock technical support and customer service. Our dedicated team ensures your business runs smoothly with immediate assistance whenever you need it.',
      backgroundImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop&crop=center'
    }
  ];

  // Auto-advance service every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentServiceIndex];

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Dynamic Background Image with Black Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url('${currentService.backgroundImage}')`,
        }}
      >
        {/* Multiple Gradient Overlays for Fade-to-Black Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Overlay Content on Image */}
      <div className="relative z-10 h-full">
        <div className="absolute left-6 bottom-8 text-white max-w-xl bg-black/40 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSavedService(savedService === currentServiceIndex ? null : currentServiceIndex)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                savedService === currentServiceIndex 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
  
            <div className="text-4xl md:text-6xl font-bold text-white/80 transition-all duration-500">
              {String(currentServiceIndex + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Service Title & Description */}
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
            {currentService.text}
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-200 leading-relaxed">
            {currentService.description}
          </p>

          {/* Call to Actions */}
          <div className="mt-6 flex gap-3">
            <button
              className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
              onClick={() => navigate('/projects')}
            >
              Explore Now
            </button>
            <button
              className="px-6 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Fade Overlays */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent z-20"></div>
      <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-black/60 to-transparent z-20"></div>
      <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-black/60 to-transparent z-20"></div>
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/40 to-transparent z-20"></div>
    </section>
  );
};

export default ServicesSection;
