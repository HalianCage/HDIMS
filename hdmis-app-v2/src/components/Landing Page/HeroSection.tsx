import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.png";

interface HeroSectionProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

const HeroSection = ({ onLoginClick, onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="bg-hdims-light-bg py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Empowering Healthcare with Smarter Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              A unified platform for visualizing hospital data for government officials
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-hdims-teal-dark"
                onClick={onRegisterClick}
              >
                Register
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={onLoginClick}
              >
                Login
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-lg border-2 border-gray-300 p-8 shadow-lg">
              <img 
                src={heroImage} 
                alt="Healthcare Data Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;