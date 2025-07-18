import { useState } from "react";
import Header from "@/components/Landing Page/Header";
import HeroSection from "@/components/Landing Page/HeroSection";
import AboutSection from "@/components/Landing Page/AboutSection";
import FeatureCards from "@/components/Landing Page/FeatureCards";
import HowHdimsHelps from "@/components/Landing Page/HowHdimsHelps";
import RegistrationGuide from "@/components/Landing Page/RegistrationGuide";
import HospitalsOnboard from "@/components/Landing Page/HospitalsOnboard";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />
      <HeroSection 
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />
      <AboutSection />
      <FeatureCards />
      <HowHdimsHelps />
      <RegistrationGuide />
      <HospitalsOnboard />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
};

export default Index;
