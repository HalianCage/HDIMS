import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, BarChart3, Shield, Building2 } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Database,
      title: "Centralized Data Collection",
      description: "Securely gathers data from partner hospitals in real-time.",
      gradient: "bg-gradient-to-br from-hdims-purple/20 to-hdims-light-bg",
      borderColor: "border-hdims-purple/30",
      iconColor: "text-hdims-purple"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Interactive dashboards help policymakers track health indicators.",
      gradient: "bg-gradient-to-br from-hdims-pink/20 to-hdims-light-bg",
      borderColor: "border-hdims-pink/30",
      iconColor: "text-hdims-pink"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "End-to-end encryption ensures compliance with medical data norms.",
      gradient: "bg-gradient-to-br from-hdims-green/20 to-hdims-light-bg",
      borderColor: "border-hdims-green/30",
      iconColor: "text-hdims-green"
    },
    {
      icon: Building2,
      title: "Hospital Integration",
      description: "Easily integrates with public and private hospitals of all sizes.",
      gradient: "bg-gradient-to-br from-hdims-yellow/20 to-hdims-light-bg",
      borderColor: "border-hdims-yellow/30",
      iconColor: "text-hdims-yellow"
    }
  ];

  return (
    <section className="py-20 px-6 bg-hdims-light-bg" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About HDIMS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HDIMS (Health Data Information & Management System) is a unified platform designed to 
            collect, manage, and visualize real-time hospital data, enabling government bodies to make 
            faster, data-driven healthcare decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`group p-1 rounded-3xl ${feature.gradient} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
              <Card className={`h-full text-center bg-card/80 backdrop-blur-sm border-2 ${feature.borderColor} rounded-2xl`}>
                <CardHeader className="p-6">
                  <div className={`w-20 h-20 rounded-full ${feature.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className={`h-10 w-10 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;