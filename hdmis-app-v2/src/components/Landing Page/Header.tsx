import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";

interface HeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}


const Header = ({ onLoginClick, onRegisterClick }: HeaderProps) => {
  return (
    <header className="bg-primary text-primary-foreground py-3 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Monitor className="h-8 w-8" />
          <div>
            <h1 className="text-lg font-semibold">Health Data Information</h1>
            <p className="text-sm opacity-90">Management System</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm hover:opacity-80 transition-opacity">About Us</a>
          <a href="#contact" className="text-sm hover:opacity-80 transition-opacity">Contact Us</a>
          <button 
            onClick={onLoginClick}
            className="text-sm hover:opacity-80 transition-opacity"
          >
            Login
          </button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onClick={onRegisterClick}
          >
            Register
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;