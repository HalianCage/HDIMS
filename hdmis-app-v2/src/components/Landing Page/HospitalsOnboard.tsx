import { Card, CardContent } from "@/components/ui/card";

const HospitalsOnboard = () => {
  const hospitals = [
    { name: "Noble Hospital", logo: "NH" },
    { name: "Sahyadri Hospitals", logo: "SH" },
    { name: "Poona Hospital", logo: "PH" },
    { name: "Motherhood Hospitals", logo: "MH" },
    { name: "City Care Hospital", logo: "CC" },
    { name: "Apollo Hospitals", logo: "AH" }
  ];

  return (
    <section className="py-20 px-6 bg-hdims-light-bg">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">Hospitals Onboard</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {hospitals.map((hospital, index) => (
            <Card key={index} className="group bg-gradient-to-br from-card to-muted/50 hover:from-muted/50 hover:to-card transition-all duration-300 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-hdims-teal-dark rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <span className="text-primary-foreground font-bold text-3xl">{hospital.logo}</span>
                </div>
                <p className="text-lg text-center text-foreground font-semibold">
                  {hospital.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalsOnboard;