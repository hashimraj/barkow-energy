import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  const milestones = [
    { year: "2007", title: "Company Founded", description: "Barret Kowalski establishes Barkow Energy in Birmingham, AL" },
    { year: "2012", title: "1,000 Installations", description: "Reached milestone of 1,000 successful solar installations" },
    { year: "2016", title: "Commercial Expansion", description: "Expanded services to include large-scale commercial projects" },
    { year: "2020", title: "Battery Solutions", description: "Launched advanced energy storage and battery systems" },
    { year: "2024", title: "Industry Leader", description: "Recognized as Alabama's premier solar energy provider" },
  ];

  const values = [
    { icon: Target, title: "Excellence", description: "Delivering the highest quality installations and service" },
    { icon: Heart, title: "Sustainability", description: "Committed to protecting our planet for future generations" },
    { icon: Users, title: "Customer Focus", description: "Your satisfaction and success are our top priorities" },
    { icon: Lightbulb, title: "Innovation", description: "Staying at the forefront of solar technology advancements" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-fade-in-up">
              About Barkow Energy
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up">
              Pioneering sustainable energy solutions for over 25 years
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img
                src={founderImage}
                alt="Barret Kowalski, Founder of Barkow Energy"
                className="rounded-lg shadow-strong w-full"
              />
            </div>
            <div className="animate-fade-in-up">
              <h2 className="font-poppins font-bold text-4xl mb-6 text-primary">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                Barret Kowalski
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                In 2007, Barret Kowalski founded Barkow Energy with a vision to make clean,
                renewable energy accessible to everyone in Alabama and beyond.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                With a background in electrical engineering and a passion for environmental
                sustainability, Barret has led Barkow Energy to become one of the most trusted
                names in the solar industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under his leadership, the company has completed thousands of installations,
                helping families and businesses reduce their carbon footprint while saving on
                energy costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-6 rounded-lg gradient-hero flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-primary">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To deliver high-performance solar energy systems that help homes and businesses
                  transition toward sustainable, reliable, and affordable power. We're committed
                  to making renewable energy accessible and practical for everyone.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-6 rounded-lg gradient-solar flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-primary">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the leading renewable energy provider in the Southeast, empowering
                  communities to embrace clean energy while creating a sustainable future for
                  generations to come. Together, we're building a brighter tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-primary">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-poppins font-bold text-3xl text-accent">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 pt-2">
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-24 bg-border ml-1.5 mt-2"></div>
                  )}
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="font-poppins font-bold text-xl mb-2 text-primary">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-strong bg-white hover:scale-105 transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-solar flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg mb-2 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <div className="font-poppins font-bold text-5xl text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="font-poppins font-bold text-5xl text-primary mb-2">5,000+</div>
              <p className="text-muted-foreground">Installations</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="font-poppins font-bold text-5xl text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="font-poppins font-bold text-5xl text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Expert Team Members</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
