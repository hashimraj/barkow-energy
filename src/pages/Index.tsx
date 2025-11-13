import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollButtons from "@/components/ScrollButtons";
import {
  Award,
  Globe,
  Shield,
  Zap,
  Battery,
  Settings,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import heroImage1 from "@/assets/hero-solar-1.jpg";
import heroImage2 from "@/assets/hero-solar-2.jpg";
import heroImage3 from "@/assets/hero-solar-3.jpg";
import aboutImage from "@/assets/about-solar-installation.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceBattery from "@/assets/service-battery.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import ctaBackground from "@/assets/cta-background.jpg";

const Index = () => {
  const heroImages = [heroImage1, heroImage2, heroImage3];
  
  const stats = [
    { icon: Award, label: "25+ Years of Experience", value: "Since 1997" },
    { icon: Globe, label: "Global Energy Expertise", value: "Trusted Solutions" },
    { icon: Shield, label: "Certified & Insured", value: "100% Reliable" },
  ];

  const services = [
    {
      icon: Zap,
      title: "Solar Panel Installation",
      description: "Professional installation for residential, commercial, and industrial properties.",
      image: serviceInstallation,
    },
    {
      icon: Battery,
      title: "Energy Storage Systems",
      description: "Advanced battery solutions for continuous power and energy independence.",
      image: serviceBattery,
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance services to keep your system running efficiently.",
      image: serviceMaintenance,
    },
  ];

  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Homeowner",
      content: "Barkow Energy transformed our home with an exceptional solar system. Our energy bills have decreased by 80%!",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Business Owner",
      content: "Professional, efficient, and knowledgeable. They handled our commercial installation flawlessly.",
      rating: 5,
    },
    {
      name: "David Brown",
      role: "Property Manager",
      content: "Outstanding service from consultation to installation. Highly recommend Barkow Energy for any solar project.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollButtons />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel images={heroImages} interval={5000} />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="container mx-auto px-4 sm:px-6 z-10 text-center text-white py-32 md:py-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Powering Sustainability Since 1997</span>
          </div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-7xl mb-6 animate-fade-in-up leading-tight">
            Power Your Future with <span className="text-gradient shadow-glow">Solar Energy</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up opacity-95 leading-relaxed">
            Delivering high-performance renewable energy systems that transform how you power your world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up px-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-neon hover:shadow-glow transition-smooth hover:scale-105 w-full"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-white/30 text-white hover:bg-white/20 font-semibold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 backdrop-blur-md transition-smooth hover:scale-105 w-full"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-neon transition-smooth animate-fade-in-up group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-solar opacity-0 group-hover:opacity-10 transition-smooth" />
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-solar flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                    <stat.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl mb-3 text-primary group-hover:text-accent transition-smooth">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground font-semibold text-lg">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(244,180,0,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-solar opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-smooth" />
              <img 
                src={aboutImage} 
                alt="Professional solar panel installation by Barkow Energy team"
                className="relative rounded-3xl shadow-strong w-full h-auto object-cover"
              />
            </div>
            <div className="text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold mb-6 animate-fade-in">
                Trusted Solar Partner
              </div>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-primary leading-tight">
                About Barkow Energy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded by <span className="font-bold text-primary">Barret Kowalski</span> in 1997,
                Barkow Energy has been at the forefront of renewable energy solutions for over 25 years.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our mission is to deliver high-performance solar energy systems that help homes and
                businesses transition toward sustainable, reliable, and affordable power.
              </p>
              <Link to="/about">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 shadow-medium hover:shadow-strong transition-smooth hover:scale-105"
                >
                  Read Our Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_center,rgba(76,175,80,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold mb-4 animate-fade-in">
              What We Offer
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-6 text-primary">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solar energy solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-border/50 shadow-medium hover:shadow-neon transition-smooth group cursor-pointer overflow-hidden relative">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                  <div className="absolute bottom-6 left-6 w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-8 bg-gradient-to-br from-white to-muted/20">
                  <h3 className="font-poppins font-bold text-2xl mb-4 text-primary group-hover:text-secondary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-6 shadow-medium hover:shadow-strong transition-smooth hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,180,0,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full glass-card border border-white/20 text-white font-semibold mb-4 animate-fade-in">
              Client Success Stories
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who've made the switch to solar
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="border border-white/20 shadow-strong bg-white/95 backdrop-blur-sm hover:bg-white transition-smooth h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex gap-1 mb-5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6 italic text-base leading-relaxed flex-grow">
                          "{testimonial.content}"
                        </p>
                        <div className="pt-4 border-t border-border/50">
                          <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="glass-card border-white/30 text-white hover:bg-white/20 -left-4" />
                <CarouselNext className="glass-card border-white/30 text-white hover:bg-white/20 -right-4" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(76,175,80,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="border-none shadow-neon overflow-hidden relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.92), rgba(11, 57, 84, 0.92)), url(${ctaBackground})`,
              }}
            />
            <CardContent className="p-8 sm:p-12 md:p-16 text-center relative z-10">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-6 animate-pulse" />
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-6xl mb-6 text-white leading-tight">
                Ready to Go Solar?
              </h2>
              <p className="text-lg md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get a free consultation and discover how much you can save with solar energy
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-white font-semibold">No obligation quote</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-white font-semibold">Expert consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-white font-semibold">Custom solutions</span>
                </div>
              </div>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 shadow-neon hover:scale-105 transition-smooth w-full sm:w-auto"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
