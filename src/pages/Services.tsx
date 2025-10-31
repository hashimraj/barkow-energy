import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Battery,
  Settings,
  FileCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sun,
  Home,
  Building2,
  Factory,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Zap,
      title: "Solar Panel Installation",
      description: "Professional installation services for all property types, from residential homes to large industrial facilities.",
      features: [
        "Residential solar systems",
        "Commercial installations",
        "Industrial-scale projects",
        "Custom system design",
        "Premium panel selection",
        "Warranty & certification",
      ],
    },
    {
      icon: Battery,
      title: "Battery & Energy Storage",
      description: "Advanced battery solutions that store excess energy for use during peak hours or power outages.",
      features: [
        "Lithium-ion battery systems",
        "Hybrid energy solutions",
        "Backup power systems",
        "Grid-tied storage",
        "Off-grid capabilities",
        "Smart energy management",
      ],
    },
    {
      icon: Settings,
      title: "System Maintenance & Repairs",
      description: "Comprehensive maintenance services to ensure your solar system operates at peak efficiency year-round.",
      features: [
        "Regular system inspections",
        "Panel cleaning services",
        "Performance monitoring",
        "Component replacement",
        "Emergency repairs",
        "Preventive maintenance",
      ],
    },
    {
      icon: FileCheck,
      title: "Energy Consultation & Audits",
      description: "Expert guidance to help you understand your energy needs and design the perfect solar solution.",
      features: [
        "Free energy audits",
        "System sizing analysis",
        "ROI calculations",
        "Financing options",
        "Permit assistance",
        "Incentive guidance",
      ],
    },
    {
      icon: TrendingUp,
      title: "On-Grid & Off-Grid Solutions",
      description: "Flexible solar solutions whether you want to stay connected to the grid or achieve complete energy independence.",
      features: [
        "Grid-tied systems",
        "Off-grid installations",
        "Hybrid configurations",
        "Net metering setup",
        "Inverter optimization",
        "Load management",
      ],
    },
    {
      icon: Sun,
      title: "Solar Monitoring & Optimization",
      description: "Real-time monitoring and optimization services to maximize your system's performance and savings.",
      features: [
        "24/7 system monitoring",
        "Performance analytics",
        "Mobile app access",
        "Alert notifications",
        "Efficiency optimization",
        "Production reports",
      ],
    },
  ];

  const installationTypes = [
    {
      icon: Home,
      title: "Residential",
      description: "Transform your home with clean solar energy and reduce your electricity bills by up to 80%.",
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Boost your business's bottom line and sustainability with commercial solar solutions.",
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Large-scale solar installations designed for high-energy industrial operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up">
              Comprehensive solar energy solutions tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl mb-4 text-primary">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for every type of property
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {installationTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-smooth group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-solar flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <type.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl mb-3 text-primary">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-primary">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end solar solutions from consultation to ongoing support
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-smooth animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg gradient-accent flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-poppins font-bold text-2xl mb-3 text-primary">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-primary">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to getting you solar-powered
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Free energy audit and system design" },
                { step: "02", title: "Proposal", desc: "Detailed quote and financing options" },
                { step: "03", title: "Installation", desc: "Professional installation by experts" },
                { step: "04", title: "Support", desc: "Ongoing monitoring and maintenance" },
              ].map((item, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-solar flex items-center justify-center">
                    <span className="font-poppins font-bold text-2xl text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl mb-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request a free consultation and discover which solar solution is right for you
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-primary font-bold text-lg px-12 py-6 shadow-strong transition-smooth"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
