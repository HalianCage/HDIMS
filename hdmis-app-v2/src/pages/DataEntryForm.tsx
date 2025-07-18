
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Camera } from "lucide-react";

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

const formFields = {
    M1: [{label: "Number of ANC checkups"}, {label: "Number of high-risk pregnancies"}],
    M2: [
        { label: "Number of Home Deliveries attended by Skill Birth Attendant(SBA) (Doctor/Nurse/ANM)" },
        { label: "Number of Home Deliveries attended by Non SBA (Trained Birth Attendant(TBA) /Relatives/etc.)" },
        { label: "Number of Institutional Deliveries" },
        { label: "Number of Live Births" },
    ],
    // Add mock fields for other categories as needed
}

const DataEntryForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const selectedCategoryId = location.state?.categoryId || 'M2';
  const selectedCategory = formCategories.find(c => c.id === selectedCategoryId) || formCategories[0];

  const currentFields = formFields[selectedCategoryId] || formFields['M2'];

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

        <div className="bg-[#068ca2] text-white p-2 flex items-center justify-between">
            <h2 className="text-lg font-semibold ml-4">{`Maternal : ${selectedCategory.name}`}</h2>
            <Button variant="ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:bg-[#057a8f]">
                <Menu className="h-6 w-6" />
            </Button>
        </div>

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 p-6 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto">
                {currentFields.map((field, index) => (
                    <div key={index} className="flex items-center gap-4 py-4 border-b">
                        <div className="text-2xl font-bold text-gray-500">{index + 1}</div>
                        <div className="flex-1 text-gray-700">{field.label}</div>
                        <Input type="number" className="w-40" placeholder="Enter value" />
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-6">
                <Button variant="outline" onClick={() => navigate('/form-category-selection')}>Back</Button>
                <Button className="bg-[#068ca2] hover:bg-[#057a8f]">Save</Button>
                <Button variant="outline" size="icon">
                    <Camera className="h-6 w-6" />
                </Button>
            </div>
        </main>

        {isSidebarOpen && (
            <aside className="w-64 bg-gray-50 p-4 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">Forms</h3>
                <div className="space-y-2">
                    {formCategories.map(category => (
                        <Button 
                            key={category.id} 
                            variant={selectedCategory.id === category.id ? 'default' : 'ghost'} 
                            className={`w-full justify-start ${selectedCategory.id === category.id ? 'bg-[#068ca2] hover:bg-[#057a8f]' : ''}`}
                            onClick={() => navigate('/data-entry', { state: { categoryId: category.id } })}
                        >
                           {`${category.id} - ${category.name}`}
                        </Button>
                    ))}
                </div>
            </aside>
        )}
      </div>
    </div>
  );
};

export default DataEntryForm;
