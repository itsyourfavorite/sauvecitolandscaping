import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Clock, 
  Users,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Menu,
  X,
  Leaf,
  TreePine,
  Droplets,
  Hammer,
  Trash2,
  Flower2
} from 'lucide-react';
import { useState } from 'react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline({ delay: 0.3 });
      
      heroTl.fromTo('.hero-left-img', 
        { opacity: 0, x: '-12vw', scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.hero-right-img',
        { opacity: 0, x: '12vw', scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.85'
      )
      .fromTo('.hero-label',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo('.hero-headline span',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo('.hero-subheadline',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo('.hero-cta',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );

      // Services section animation
      gsap.fromTo('.services-left-card',
        { opacity: 0, x: '-60vw', scale: 0.98 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.services-headline',
        { opacity: 0, y: '-20vh' },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.service-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      );

      // Featured section animation
      gsap.fromTo('.featured-img',
        { opacity: 0, y: '-40vh', scale: 1.03 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.featured-text',
        { opacity: 0, x: '-30vw' },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 70%',
            end: 'top 35%',
            scrub: 0.5,
          }
        }
      );

      // Process section animation
      gsap.fromTo('.process-img',
        { opacity: 0, x: '-60vw', scale: 0.98 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.process-step',
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-steps',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      );

      // Projects grid animation
      gsap.fromTo('.project-card',
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 0.5,
          }
        }
      );

      // About section animation
      gsap.fromTo('.about-img',
        { opacity: 0, x: '-60vw' },
        {
          opacity: 1, x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.about-content',
        { opacity: 0, x: '30vw' },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 0.5,
          }
        }
      );

      // Testimonials animation
      gsap.fromTo('.testimonial-img',
        { opacity: 0, x: '-60vw' },
        {
          opacity: 1, x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-list',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      );

      // Pricing animation
      gsap.fromTo('.pricing-card',
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.5,
          }
        }
      );

      // Contact animation
      gsap.fromTo('.contact-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.contact-form',
        { opacity: 0, x: '8vw', scale: 0.98 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 0.5,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    { icon: Leaf, title: 'Lawn Care', desc: 'Professional mowing, fertilizing, and maintenance' },
    { icon: Flower2, title: 'Garden Design', desc: 'Custom landscape design and planting' },
    { icon: TreePine, title: 'Tree Trimming', desc: 'Expert pruning and tree health care' },
    { icon: Droplets, title: 'Irrigation', desc: 'Smart watering systems installation' },
    { icon: Hammer, title: 'Hardscaping', desc: 'Patios, walkways, and retaining walls' },
    { icon: Trash2, title: 'Cleanup', desc: 'Seasonal cleanup and debris removal' },
  ];

  const projects = [
    { img: '/images/project_pool.jpg', title: 'Courtyard Pool', tag: 'Design + Build' },
    { img: '/images/project_shade.jpg', title: 'Shade Garden', tag: 'Garden Design' },
    { img: '/images/project_entry.jpg', title: 'Entry Walk', tag: 'Hardscaping' },
    { img: '/images/project_lighting.jpg', title: 'Night Lighting', tag: 'Lighting' },
    { img: '/images/project_hardscape.jpg', title: 'Stone Terrace', tag: 'Hardscaping' },
    { img: '/images/project_trees.jpg', title: 'Tree Care', tag: 'Maintenance' },
  ];

  const testimonials = [
    {
      quote: "They turned our backyard into our favorite room of the house. The attention to detail was incredible.",
      author: "Maya R.",
      location: "Laguna Beach, CA"
    },
    {
      quote: "On time, on budget, and the garden actually thrives. Suavecito is the real deal.",
      author: "Jon & Lena P.",
      location: "Newport Beach, CA"
    },
    {
      quote: "Professional, creative, and incredibly easy to work with. Our outdoor space has never looked better.",
      author: "David S.",
      location: "Irvine, CA"
    }
  ];

  const pricingPlans = [
    {
      name: 'Garden Refresh',
      price: 'Starting at $3,200',
      features: [
        'Site assessment & consultation',
        'Plant selection & sourcing',
        'Soil preparation',
        'Professional installation',
        '30-day care guide'
      ]
    },
    {
      name: 'Full Design + Build',
      price: 'Custom Quote',
      features: [
        'Complete landscape design',
        '3D visualization',
        'Hardscape construction',
        'Irrigation systems',
        '1-year maintenance plan'
      ],
      featured: true
    },
    {
      name: 'Ongoing Care',
      price: 'Monthly Plans',
      features: [
        'Weekly lawn maintenance',
        'Seasonal pruning',
        'Fertilizer program',
        'Irrigation monitoring',
        'Priority scheduling'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-bg">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Vignette overlay */}
      <div className="vignette-overlay" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-brand-accent" />
              <span className="font-heading font-bold text-xl text-brand-text">Suavecito</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection(projectsRef)} className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">Work</button>
              <button onClick={() => scrollToSection(servicesRef)} className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">Services</button>
              <button onClick={() => scrollToSection(processRef)} className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">Process</button>
              <button onClick={() => scrollToSection(pricingRef)} className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">Pricing</button>
              <button onClick={() => scrollToSection(contactRef)} className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">Contact</button>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:9495420708" className="flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">
                <Phone className="w-4 h-4" />
                (949) 542-0708
              </a>
              <button onClick={() => scrollToSection(contactRef)} className="btn-primary text-sm py-3 px-6">
                Book a Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-brand-bg/95 backdrop-blur-md border-t border-brand-text/10">
            <div className="px-6 py-6 space-y-4">
              <button onClick={() => scrollToSection(projectsRef)} className="block w-full text-left py-2 text-brand-text">Work</button>
              <button onClick={() => scrollToSection(servicesRef)} className="block w-full text-left py-2 text-brand-text">Services</button>
              <button onClick={() => scrollToSection(processRef)} className="block w-full text-left py-2 text-brand-text">Process</button>
              <button onClick={() => scrollToSection(pricingRef)} className="block w-full text-left py-2 text-brand-text">Pricing</button>
              <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left py-2 text-brand-text">Contact</button>
              <a href="tel:9495420708" className="flex items-center gap-2 py-2 text-brand-accent font-medium">
                <Phone className="w-4 h-4" />
                (949) 542-0708
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="w-full px-6 lg:px-12 py-12">
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Left Image */}
            <div className="hero-left-img card-luxury w-full lg:w-[34vw] h-[40vh] lg:h-[64vh] relative">
              <img 
                src="/images/hero_left_pathway.jpg" 
                alt="Beautiful garden pathway" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none lg:pointer-events-auto">
              <span className="hero-label label-mono text-brand-muted mb-4">Landscape Design Studio</span>
              <h1 className="hero-headline font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center text-brand-text leading-tight">
                <span className="block">OUTDOOR SPACES</span>
                <span className="block">DESIGNED LIKE</span>
                <span className="block text-gradient">SCENES</span>
              </h1>
              <p className="hero-subheadline mt-6 text-base lg:text-lg text-brand-muted text-center max-w-md px-4">
                Backyards, courtyards, and gardens—designed, built, and maintained with restraint.
              </p>
              <div className="hero-cta mt-8 flex flex-col sm:flex-row gap-4 pointer-events-auto">
                <button onClick={() => scrollToSection(contactRef)} className="btn-primary">
                  Book a Call
                </button>
                <button onClick={() => scrollToSection(projectsRef)} className="btn-outline">
                  View Projects
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hero-right-img card-luxury w-full lg:w-[34vw] h-[40vh] lg:h-[64vh] relative">
              <img 
                src="/images/hero_right_lawn.jpg" 
                alt="Modern backyard lawn" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="services-left-card lg:col-span-4 card-luxury h-[50vh] lg:h-[68vh]">
              <img 
                src="/images/services_left_tall.jpg" 
                alt="Lush garden bed" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="services-headline mb-12">
                <span className="label-mono text-brand-muted mb-4 block">What We Do</span>
                <h2 className="font-heading font-bold text-3xl lg:text-5xl xl:text-6xl text-brand-text">
                  SERVICES<br />
                  <span className="text-brand-muted">THAT FIT YOUR SITE</span>
                </h2>
              </div>

              {/* Services Grid */}
              <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="service-card group bg-white rounded-3xl p-6 border border-brand-text/5 hover:border-brand-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-sm"
                  >
                    <service.icon className="w-10 h-10 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading font-semibold text-lg text-brand-text mb-2">{service.title}</h3>
                    <p className="text-sm text-brand-muted">{service.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button onClick={() => scrollToSection(contactRef)} className="inline-flex items-center gap-2 text-brand-accent font-medium hover:gap-3 transition-all">
                  See all services <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section ref={featuredRef} className="relative py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          {/* Featured Image */}
          <div className="featured-img card-luxury w-full h-[40vh] lg:h-[50vh] mb-12">
            <img 
              src="/images/featured_pool.jpg" 
              alt="Luxury courtyard pool" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="featured-text">
              <h2 className="font-heading font-bold text-3xl lg:text-5xl xl:text-6xl text-brand-text">
                COURTYARDS<br />
                POOLS<br />
                <span className="text-brand-muted">GARDENS</span>
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-brand-muted mb-6">
                We design for climate, light, and how you actually live outside—then build it to last. 
                Every project begins with understanding your vision and ends with a space that feels 
                like it was always meant to be there.
              </p>
              <button onClick={() => scrollToSection(projectsRef)} className="inline-flex items-center gap-2 text-brand-accent font-medium hover:gap-3 transition-all self-start">
                Explore featured work <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="relative py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="process-img lg:col-span-5 card-luxury h-[50vh] lg:h-[68vh]">
              <img 
                src="/images/process_team.jpg" 
                alt="Our team at work" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="label-mono text-brand-muted mb-4 block">How We Work</span>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-brand-text mb-12">
                A CALM PROCESS<br />
                <span className="text-brand-muted">FROM FIRST VISIT TO FINAL WALKTHROUGH</span>
              </h2>

              <div className="process-steps space-y-8">
                {[
                  { num: '01', title: 'Consult & Measure', desc: 'We visit your site, understand your vision, and assess the landscape.' },
                  { num: '02', title: 'Design & Approve', desc: 'Custom designs with detailed plans and 3D visualizations.' },
                  { num: '03', title: 'Build & Maintain', desc: 'Expert installation followed by ongoing care programs.' },
                ].map((step, index) => (
                  <div key={index} className="process-step flex gap-6">
                    <span className="font-mono text-3xl lg:text-4xl font-bold text-brand-accent">{step.num}</span>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-brand-text mb-2">{step.title}</h3>
                      <p className="text-brand-muted">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button onClick={() => scrollToSection(contactRef)} className="btn-primary">
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section ref={projectsRef} className="relative py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span className="label-mono text-brand-muted mb-4 block">Portfolio</span>
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-brand-text">
                SELECTED PROJECTS
              </h2>
            </div>
            <p className="text-brand-muted max-w-md mt-4 lg:mt-0">
              A few recent transformations—designed for real life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card group card-luxury-sm overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 bg-white">
                  <span className="label-mono text-brand-accent text-[10px]">{project.tag}</span>
                  <h3 className="font-heading font-semibold text-lg text-brand-text mt-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="about-img lg:col-span-5 card-luxury h-[50vh] lg:h-[68vh]">
              <img 
                src="/images/about_team.jpg" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="about-content lg:col-span-7 flex flex-col justify-center">
              <span className="label-mono text-brand-muted mb-4 block">About Us</span>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-brand-text mb-8">
                BUILT BY PEOPLE<br />
                <span className="text-brand-muted">WHO LOVE THE DETAILS</span>
              </h2>

              <p className="text-lg text-brand-muted mb-8">
                We're a small team of designers and growers based in California. We sketch in plan 
                and in person—then we build what we drew. Every project receives our full attention, 
                from the initial consultation to the final walkthrough.
              </p>

              {/* Why Choose Us */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Award, title: 'Licensed & Insured', desc: 'Full coverage for your peace of mind' },
                  { icon: Clock, title: 'Reliable', desc: 'On time, every time' },
                  { icon: CheckCircle2, title: 'Affordable', desc: 'Transparent pricing, no surprises' },
                  { icon: MapPin, title: 'Local', desc: 'Serving Orange County since 2010' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-brand-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-brand-text">{item.title}</h4>
                      <p className="text-sm text-brand-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollToSection(contactRef)} className="inline-flex items-center gap-2 text-brand-accent font-medium hover:gap-3 transition-all self-start">
                Meet the team <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="relative py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="testimonial-img lg:col-span-5 card-luxury h-[50vh] lg:h-[68vh]">
              <img 
                src="/images/testimonials_garden.jpg" 
                alt="Beautiful garden seating area" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="label-mono text-brand-muted mb-4 block">Testimonials</span>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-brand-text mb-12">
                CLIENTS<br />
                <span className="text-brand-muted">SAY IT BEST</span>
              </h2>

              <div className="testimonials-list space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card bg-white rounded-3xl p-6 lg:p-8 border border-brand-text/5">
                    <p className="text-lg lg:text-xl text-brand-text mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-text">{testimonial.author}</p>
                        <p className="text-sm text-brand-muted">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="relative py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="label-mono text-brand-muted mb-4 block">Investment</span>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-brand-text mb-4">
              PACKAGES
            </h2>
            <p className="text-brand-muted max-w-md mx-auto">
              Transparent scope. No surprise line items.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card rounded-3xl p-6 lg:p-8 ${
                  plan.featured 
                    ? 'bg-brand-dark text-white shadow-luxury' 
                    : 'bg-white border border-brand-text/5'
                }`}
              >
                <h3 className={`font-heading font-semibold text-xl mb-2 ${plan.featured ? 'text-white' : 'text-brand-text'}`}>
                  {plan.name}
                </h3>
                <p className={`text-2xl lg:text-3xl font-bold mb-6 ${plan.featured ? 'text-brand-accent' : 'text-brand-accent'}`}>
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-brand-accent' : 'text-brand-accent'}`} />
                      <span className={`text-sm ${plan.featured ? 'text-white/80' : 'text-brand-muted'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className={`w-full py-3 rounded-full font-medium transition-all ${
                    plan.featured 
                      ? 'bg-brand-accent text-white hover:bg-brand-accent/90' 
                      : 'border-2 border-brand-text text-brand-text hover:bg-brand-text hover:text-white'
                  }`}
                >
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="relative py-24 lg:py-32 bg-brand-dark">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="contact-content">
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-8">
                LET'S DESIGN<br />
                <span className="text-brand-accent">YOUR NEXT SCENE.</span>
              </h2>

              <div className="space-y-6 mb-10">
                <a href="tel:9495420708" className="flex items-center gap-4 text-white/80 hover:text-brand-accent transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="label-mono text-white/50 text-[10px]">Call Us</p>
                    <p className="text-lg">(949) 542-0708</p>
                  </div>
                </a>

                <a href="mailto:hello@suavecitolandscaping.com" className="flex items-center gap-4 text-white/80 hover:text-brand-accent transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="label-mono text-white/50 text-[10px]">Email</p>
                    <p className="text-lg">hello@suavecitolandscaping.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="label-mono text-white/50 text-[10px]">Location</p>
                    <p className="text-lg">Based in California — working nationwide</p>
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-sm">
                Response within 1 business day
              </p>
            </div>

            {/* Right Form */}
            <div className="contact-form bg-white rounded-3xl p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-xl text-brand-text mb-6">Send an Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="label-mono text-brand-muted text-[10px] mb-2 block">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-text/10 focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label-mono text-brand-muted text-[10px] mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-text/10 focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="label-mono text-brand-muted text-[10px] mb-2 block">Project Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-text/10 focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="label-mono text-brand-muted text-[10px] mb-2 block">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-brand-text/10 focus:border-brand-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/10 py-12">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-brand-accent" />
              <span className="font-heading font-bold text-xl text-white">Suavecito</span>
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <a href="tel:9495420708" className="flex items-center gap-2 text-white/80 hover:text-brand-accent transition-colors">
                <Phone className="w-4 h-4" />
                (949) 542-0708
              </a>
              <span className="hidden sm:block text-white/30">|</span>
              <span className="text-white/60">Licensed & Insured</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-accent hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-accent hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Suavecito Landscaping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
