import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dataEntryImage from "@/assets/data-entry-illustration.png";

const HowHdimsHelps = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const helpSections = [
    {
      title: "Easy Data Entry for Hospitals",
      description: "Hospitals can quickly upload patient and facility data with a user-friendly interface.",
      image: dataEntryImage,
      bgColor: "bg-primary"
    },
    {
      title: "Interactive Dashboards for Government",
      description: "Government officials can view real-time, visualized health data for informed decisions.",
      bgColor: "bg-primary"
    },
    {
      title: "Unified Health Data Platform",
      description: "All hospital data is securely collected and managed in one place.",
      bgColor: "bg-primary"
    },
    {
      title: "Secure and Compliant",
      description: "Built with strict data privacy and healthcare compliance standards.",
      bgColor: "bg-primary"
    },
    {
      title: "Role-Based Access",
      description: "Custom views and permissions for hospitals, admins, and policymakers.",
      bgColor: "bg-primary"
    },
    {
      title: "Data-Driven Policy Making",
      description: "Get insights that help shape better health policies and resource allocation.",
      bgColor: "bg-primary"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % helpSections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + helpSections.length) % helpSections.length);
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">How HDIMS Helps</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className={`${helpSections[currentSlide].bgColor} rounded-lg p-8 text-center text-primary-foreground relative`}>
            <div className="flex items-center justify-between mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-white/20"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-white/20"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">{helpSections[currentSlide].title}</h3>
            
            {helpSections[currentSlide].image && (
              <div className="bg-white rounded-lg p-4 mb-4 max-w-md mx-auto">
                <img src={helpSections[currentSlide].image} alt={helpSections[currentSlide].title} className="w-full h-auto rounded" />
              </div>
            )}
            
            {!helpSections[currentSlide].image && (
              <div className="bg-white rounded-lg p-8 mb-4 max-w-md mx-auto">
                <div className="bg-gray-100 rounded h-32 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Dashboard Preview</span>
                </div>
              </div>
            )}
            
            <p className="text-sm opacity-90">{helpSections[currentSlide].description}</p>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {helpSections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowHdimsHelps;