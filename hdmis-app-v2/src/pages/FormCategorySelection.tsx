
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formCategories = [
  { id: "M1", name: "Anti-Natal Care (ANC)" },
  { id: "M2", name: "Deliveries" },
  { id: "M3", name: "Number of Caesarean (C- Section) Deliveries" },
  { id: "M4", name: "Pregnancy outcome & details of new born" },
  { id: "M5", name: "Complicate Pregnancies" },
  { id: "M6", name: "Post Natel Care (PNC)" },
  { id: "M7", name: "Pregnancy outcome & details of new born" }, // Corrected from M4
  { id: "M8", name: "Family Planning" },
  { id: "M9", name: "Child Immunisation" },
  { id: "M10", name: "Number of cases of Childhood Diseases (0-5 years)" },
  { id: "M11", name: "NVBDCP" },
  { id: "M12", name: "Adolescents Health" },
  { id: "M13", name: "Directly Observed Treatment, Short-course (DOTS)" },
  { id: "M14", name: "Patient Services" },
  { id: "M15", name: "Laboratory Testing" },
  { id: "M16", name: "Details of deaths reported with probable causes" },
];

const FormCategorySelection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-[#5aadbb] text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/src/assets/medical-laptop-icon.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">Health Data Information Management System</h1>
        </div>
        <div className="flex-1 max-w-md mx-4">
            <div className="bg-white text-[#5aadbb] text-center py-2 px-4 rounded-full font-semibold">
                NAME OF HOSPITAL
            </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="text-white border-white hover:bg-transparent hover:text-white" onClick={() => navigate('/dashboard')}>Home</Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex-1 p-6 flex flex-col">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Select a Form</h2>
        </div>
        <div className="flex items-center mb-6 gap-4">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                type="search"
                placeholder="Search"
                className="w-full pl-10"
                />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                History
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formCategories.map((category) => (
            <Button
              key={category.id}
              className="w-full h-16 bg-[#068ca2] hover:bg-[#057a8f] text-white text-lg justify-start px-6"
              onClick={() => navigate("/data-entry", { state: { categoryId: category.id } })}
            >
              <span className="font-bold mr-4">{category.id}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FormCategorySelection;
