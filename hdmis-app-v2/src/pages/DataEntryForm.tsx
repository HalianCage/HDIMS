import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DataEntryForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentFields, setCurrentFields] = useState([]);
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectedCategoryId = location.state?.categoryId || "M2";
  const categoryNum = selectedCategoryId.replace("M", "");

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/form-fields/${categoryNum}`);
        const data = await response.json();
        setCurrentFields(data);
        // Initialize formData with field_id and empty values
        const initialData = data.map(field => ({
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
  }, [categoryNum]);

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
    <div className="flex">
      {/* Sidebar toggle */}
      <button
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-white text-gray-800 px-3 py-2 rounded hover:bg-gray-200"
          >
            Back to Home
          </button>
        </div>
      )}

      {/* Main content */}
      <div className={`flex-1 min-h-screen bg-gray-100 p-8 transition-all ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <h1 className="text-3xl font-bold mb-6">Data Entry - {selectedCategoryId}</h1>

        {loading ? (
          <p>Loading fields...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
            {currentFields.length === 0 ? (
              <p>No fields found for this category.</p>
            ) : (
              currentFields.map((field, index) => (
                <div key={field.field_id} className="flex flex-col">
                  <label htmlFor={`field-${field.field_id}`} className="mb-1 font-medium">
                    {field.field_name}
                  </label>
                  <input
                    id={`field-${field.field_id}`}
                    type="text"
                    className="p-2 border border-gray-300 rounded"
                    onChange={(e) => handleInputChange(field.field_id, e.target.value)}
                  />
                </div>
              ))
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DataEntryForm;
