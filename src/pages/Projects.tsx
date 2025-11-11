import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Zap, Star } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Johnson Residence Solar Installation",
      location: "Homewood, AL",
      type: "Residential",
      date: "January 2024",
      capacity: "8.5 kW",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800",
      description: "Complete rooftop solar system with battery backup for a 3,000 sq ft home.",
      testimonial: "Cut our energy bills by 85%. The installation was flawless!",
      client: "Michael Johnson",
    },
    {
      id: 2,
      title: "Birmingham Tech Center",
      location: "Birmingham, AL",
      type: "Commercial",
      date: "November 2023",
      capacity: "125 kW",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800",
      description: "Large-scale commercial installation for a 50,000 sq ft office building.",
      testimonial: "Reduced operational costs significantly while going green.",
      client: "Tech Center Management",
    },
    {
      id: 3,
      title: "Green Valley Farm Solar Array",
      location: "Tuscaloosa, AL",
      type: "Industrial",
      date: "August 2023",
      capacity: "250 kW",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800",
      description: "Industrial-scale ground-mounted solar array for agricultural operations.",
      testimonial: "Powers our entire operation with room to grow. Exceptional service.",
      client: "Green Valley Farms",
    },
    {
      id: 4,
      title: "Mountain View Apartments",
      location: "Hoover, AL",
      type: "Commercial",
      date: "June 2023",
      capacity: "95 kW",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
      description: "Multi-unit residential complex with shared solar system and individual metering.",
      testimonial: "Tenants love the reduced electricity costs. Great investment.",
      client: "Mountain View Properties",
    },
    {
      id: 5,
      title: "Williams Family Home",
      location: "Vestavia Hills, AL",
      type: "Residential",
      date: "March 2024",
      capacity: "6.2 kW",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
      description: "Residential solar installation with smart energy monitoring system.",
      testimonial: "Amazing team! Professional, efficient, and knowledgeable.",
      client: "Sarah Williams",
    },
    {
      id: 6,
      title: "Minnesota Manufacturing Plant",
      location: "Huntsville, AL",
      type: "Industrial",
      date: "December 2023",
      capacity: "400 kW",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      description: "Massive industrial installation powering a 100,000 sq ft manufacturing facility.",
      testimonial: "Impressive scale and execution. Exceeded all expectations.",
      client: "Minnesota Manufacturing Co.",
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-fade-in-up">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up">
              Showcasing our successful solar installations across Minnesota
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="font-poppins font-bold text-4xl text-primary mb-1">5,000+</div>
              <p className="text-sm text-muted-foreground">Completed Projects</p>
            </div>
            <div>
              <div className="font-poppins font-bold text-4xl text-primary mb-1">15 MW</div>
              <p className="text-sm text-muted-foreground">Total Capacity</p>
            </div>
            <div>
              <div className="font-poppins font-bold text-4xl text-primary mb-1">$20M</div>
              <p className="text-sm text-muted-foreground">Client Savings</p>
            </div>
            <div>
              <div className="font-poppins font-bold text-4xl text-primary mb-1">98%</div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Residential", "Commercial", "Industrial"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`transition-smooth ${
                  filter === category
                    ? "bg-primary text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="border-none shadow-medium hover:shadow-strong transition-smooth animate-fade-in-up overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-primary font-semibold">
                    {project.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-bold text-xl mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span className="font-semibold">{project.capacity}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-1">
                      "{project.testimonial}"
                    </p>
                    <p className="text-xs font-semibold text-primary">
                      - {project.client}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Ready to Start Your Solar Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our growing list of satisfied customers making the switch to clean energy
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-bold text-lg px-12 py-6 shadow-strong transition-smooth"
              onClick={() => window.location.href = "/contact"}
            >
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
