import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Newspaper, Video, Building2 } from "lucide-react";

const FeatureCards = () => {
  const cards = [
    {
      title: "Core Features",
      description: "Explore the powerful tools HDIMS offers for smarter healthcare management.",
      icon: ArrowUpRight,
      color: "text-hdims-purple",
      bgColor: "bg-hdims-purple/20"
    },
    {
      title: "Latest News",
      description: "Stay updated with the latest developments and updates from HDIMS.",
      icon: Newspaper,
      color: "text-hdims-yellow",
      bgColor: "bg-hdims-yellow/20"
    },
    {
      title: "Registration Guide",
      description: "Simple video tutorials on how to register and use the HDIMS platform.",
      icon: Video,
      color: "text-hdims-green",
      bgColor: "bg-hdims-green/20"
    },
    {
      title: "Hospitals Onboard",
      description: "See the hospitals and medical facilities already linked with our platform.",
      icon: Building2,
      color: "text-hdims-pink",
      bgColor: "bg-hdims-pink/20"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Features & Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore everything HDIMS has to offer for modern healthcare data management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="group relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl cursor-pointer bg-card">
              <div className={`w-28 h-28 ${card.bgColor} rounded-full absolute -right-6 -top-8`}>
                <p className={`absolute bottom-8 left-8 ${card.color} text-4xl font-bold`}>{`0${index + 1}`}</p>
              </div>
              <CardHeader>
                <div className={`p-4 inline-block rounded-lg w-16 ${card.bgColor}`}>
                  <card.icon className={`h-10 w-10 ${card.color}`} />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-base text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;