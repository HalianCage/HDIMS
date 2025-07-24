import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";

const DataEntryForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentFields, setCurrentFields] = useState([]);
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectedCategoryId = location.state?.categoryId || 2 ;
  const selectedCategoryName = location.state?.categoryName || 'Deliveries';
  let fieldArray;

  useEffect(() => {

    const fetchFields = async () => {
      try {

        console.log("Inside fetchFields")
        console.log(typeof(selectedCategoryId))
        console.log(selectedCategoryId)
        const response = await fetch(`http://localhost:3000/getFields?categoryNum=${selectedCategoryId}`);
        fieldArray = await response.json();
        console.log(fieldArray)
        setCurrentFields(fieldArray);
        // Initialize formData with field_id and empty values
        const initialData = fieldArray.map(field => ({
          field_id: field.field_id,
          value: ""
        }));
        setFormData(initialData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching form fields:", error);
        setCurrentFields([]);
        setFormData([]);
        setLoading(false);
      }
    };

    fetchFields();
  }, [selectedCategoryId, selectedCategoryName]);

  const handleInputChange = (field_id, value) => {
    setFormData(prev =>
      prev.map(entry =>
        entry.field_id === field_id ? { ...entry, value } : entry
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Example POST submission:
    // await fetch('/submit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ category_id: categoryNum, fields: formData }),
    // });
  };

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
            <h2 className="text-lg font-semibold ml-4">{`Maternal : ${selectedCategoryId}`}</h2>
            <Button variant="ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:bg-[#057a8f]">
                <Menu className="h-6 w-6" />
            </Button>
        </div>

        <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 p-6 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto">
                {fieldArray.map(field => (
                    <div key={field.field_id} className="flex items-center gap-4 py-4 border-b">
                        <div className="text-2xl font-bold text-gray-500">{field.field_id + 1}</div>
                        <div className="flex-1 text-gray-700">{field.field_name}</div>
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
                    {fieldArray.map(category => (
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

      

    // <div className="flex">
    //   {/* Sidebar toggle */}
    //   <button
    //     className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded"
    //     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    //   >
    //     {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
    //   </button>

    //   {/* Sidebar */}
    //   {isSidebarOpen && (
    //     <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0">
    //       <h2 className="text-xl font-bold mb-4">Sidebar</h2>
    //       <button
    //         onClick={() => navigate("/")}
    //         className="mt-4 bg-white text-gray-800 px-3 py-2 rounded hover:bg-gray-200"
    //       >
    //         Back to Home
    //       </button>
    //     </div>
    //   )}

    //   {/* Main content */}
    //   <div className={`flex-1 min-h-screen bg-gray-100 p-8 transition-all ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
    //     <h1 className="text-3xl font-bold mb-6">Data Entry - {selectedCategoryId}</h1>

    //     {loading ? (
    //       <p>Loading fields...</p>
    //     ) : (
    //       <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
    //         {currentFields.length === 0 ? (
    //           <p>No fields found for this category.</p>
    //         ) : (
    //           currentFields.map((field, index) => (
    //             <div key={field.field_id} className="flex flex-col">
    //               <label htmlFor={`field-${field.field_id}`} className="mb-1 font-medium">
    //                 {field.field_name}
    //               </label>
    //               <input
    //                 id={`field-${field.field_id}`}
    //                 type="text"
    //                 className="p-2 border border-gray-300 rounded"
    //                 onChange={(e) => handleInputChange(field.field_id, e.target.value)}
    //               />
    //             </div>
    //           ))
    //         )}

    //         <button
    //           type="submit"
    //           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    //         >
    //           Submit
    //         </button>
    //       </form>
    //     )}
    //   </div>
    // </div>
  );
};

export default DataEntryForm;
