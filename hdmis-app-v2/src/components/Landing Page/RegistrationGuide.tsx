import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegistrationGuide = () => {
  const videos = [
    {
      title: "10 TIPS HEALTHY EATING HABITS",
      thumbnail: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "5:30"
    },
    {
      title: "Data Analytics Overview",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "8:45"
    },
    {
      title: "System Integration Guide",
      thumbnail: "https://images.unsplash.com/photo-1587825140708-df876c12b44e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "12:20"
    },
    {
      title: "Security Best Practices",
      thumbnail: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "6:15"
    }
  ];

  return (
    <section className="py-16 px-6 bg-hdims-light-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Registration Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="bg-white/20 hover:bg-white/40 text-white border-2 border-white/50 rounded-full p-4"
                >
                  <Play className="h-8 w-8 ml-1" fill="white" />
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                <h3 className="font-semibold text-white text-sm">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegistrationGuide;