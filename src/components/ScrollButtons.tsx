import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show scroll to top button after scrolling down 300px
      setShowScrollTop(scrollY > 300);
      
      // Hide scroll down button after scrolling past first section
      setShowScrollDown(scrollY < windowHeight - 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Down Button */}
      {showScrollDown && (
        <Button
          onClick={scrollDown}
          size="icon"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 shadow-neon animate-bounce transition-smooth"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-neon hover:shadow-glow transition-smooth hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
    </>
  );
};

export default ScrollButtons;
