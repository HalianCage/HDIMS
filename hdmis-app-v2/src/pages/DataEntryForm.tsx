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

  const selectedCategoryId = location.state?.categoryId || 2;
  const selectedCategoryName = location.state?.categoryName || "Deliveries";

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/getFields?categoryNum=${selectedCategoryId}`
        );
        const fieldArray = await response.json();
        setCurrentFields(fieldArray);

        const initialData = fieldArray.map((field) => ({
          field_id: field.field_id,
          value: "",
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
  }, [selectedCategoryId]);

  const handleInputChange = (field_id, value) => {
    setFormData((prev) =>
      prev.map((entry) =>
        entry.field_id === field_id ? { ...entry, value } : entry
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Submit logic
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-[#5aadbb] text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/src/assets/medical-laptop-icon.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-xl font-bold">
            Health Data Information Management System
          </h1>
        </div>
        <div className="flex-1 max-w-md mx-4">
          <div className="bg-white text-[#5aadbb] text-center py-2 px-4 rounded-full font-semibold">
            NAME OF HOSPITAL
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-transparent hover:text-white"
            onClick={() => navigate("/dashboard")}
          >
            Home
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="bg-[#068ca2] text-white p-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold ml-4">
          {`${selectedCategoryName} : ${selectedCategoryId}`}
        </h2>
        <Button
          variant="ghost"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hover:bg-[#057a8f]"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 p-6 flex flex-col min-h-0">
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
            {loading ? (
              <p>Loading fields...</p>
            ) : (
              currentFields.map((field) => (
                <div
                  key={field.field_id}
                  className="flex items-center gap-4 py-4 border-b"
                >
                  <div className="text-2xl font-bold text-gray-500">
                    {field.field_id + 1}
                  </div>
                  <div className="flex-1 text-gray-700">{field.field_name}</div>
                  <Input
                    type="number"
                    className="w-40"
                    placeholder="Enter value"
                    onChange={(e) =>
                      handleInputChange(field.field_id, e.target.value)
                    }
                  />
                </div>
              ))
            )}

            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                onClick={() => navigate("/form-category-selection")}
              >
                Back
              </Button>
              <Button
                className="bg-[#068ca2] hover:bg-[#057a8f]"
                type="submit"
              >
                Save
              </Button>
              <Button variant="outline" size="icon">
                <Camera className="h-6 w-6" />
              </Button>
            </div>
          </form>
        </main>

        {isSidebarOpen && (
          <aside className="w-64 bg-gray-50 p-4 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Forms</h3>
            <div className="space-y-2">
              {/* Replace this with actual category list if you have it */}
              {[1, 2, 3].map((id) => (
                <Button
                  key={id}
                  variant={selectedCategoryId === id ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    selectedCategoryId === id
                      ? "bg-[#068ca2] hover:bg-[#057a8f]"
                      : ""
                  }`}
                  onClick={() =>
                    navigate("/data-entry", {
                      state: { categoryId: id, categoryName: `Form ${id}` },
                    })
                  }
                >
                  {`Form ${id}`}
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
