import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-fade-in-up">
              Let's Power Your Future Together
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up">
              Get in touch for a free consultation and quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="border-none shadow-strong">
                <CardContent className="p-8">
                  <h2 className="font-poppins font-bold text-3xl mb-6 text-primary">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-semibold mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                        placeholder="+1 (205) 555-0198"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base font-semibold mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-32"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-primary font-bold text-lg shadow-medium transition-smooth"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up space-y-6">
              <div>
                <h2 className="font-poppins font-bold text-3xl mb-6 text-primary">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We're here to answer your questions about solar energy. Whether you're ready
                  to start your project or just exploring options, we'd love to hear from you.
                </p>
              </div>

              <Card className="border-none shadow-medium">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-solar flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-primary">Office Address</h3>
                      <p className="text-muted-foreground">
                        1104 Norman Way<br />
                        Birmingham, AL 35242<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-solar flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-primary">Phone</h3>
                      <a
                        href="tel:+12055550198"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        +1 (205) 555-0198
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-solar flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-primary">Email</h3>
                      <a
                        href="mailto:info@barkowenergy.com"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        info@barkowenergy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-solar flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-primary">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-medium gradient-accent">
                <CardContent className="p-6 text-white">
                  <h3 className="font-poppins font-bold text-xl mb-3">
                    Ready to Go Solar?
                  </h3>
                  <p className="mb-4 opacity-90">
                    Schedule a free consultation with our solar experts and discover how much
                    you can save.
                  </p>
                  <Button
                    variant="outline"
                    className="bg-white text-primary hover:bg-white/90 border-none font-semibold"
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-poppins font-bold text-4xl mb-4 text-primary">
                Visit Our Office
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in Birmingham, Alabama
              </p>
            </div>
            <Card className="border-none shadow-strong overflow-hidden">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.3826574!2d-86.7489!3d33.5186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzA3LjAiTiA4NsKwNDQnNTYuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Barkow Energy Office Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
