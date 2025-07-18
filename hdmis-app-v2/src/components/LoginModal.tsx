import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import medicalLaptopIcon from "@/assets/medical-laptop-icon.png";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [activeTab, setActiveTab] = useState<"government" | "medical">("government");
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Add actual authentication logic here
    navigate("/dashboard");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl p-0">
        <div className="bg-[#e9e9e9] rounded-t-lg px-8 pt-8 pb-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-[#3b7e8a] text-lg font-semibold">
              <img src={medicalLaptopIcon} alt="Logo" className="h-10 w-10" />
              <span>Health Data Information<br/>Management System</span>
            </DialogTitle>
          </DialogHeader>
        </div>
        <div className="bg-[#f7f7f7] rounded-b-lg px-8 pb-8 pt-4">
          <div className="flex justify-center mb-6">
            <div className="flex w-full max-w-md rounded-full overflow-hidden border border-[#d1d1d1] bg-white">
              <button
                className={`flex-1 py-2 font-semibold text-lg transition-colors ${activeTab === "government" ? "bg-[#5e9ea7] text-white" : "bg-[#d1d1d1] text-[#5e9ea7]"}`}
                onClick={() => setActiveTab("government")}
              >
                Government
              </button>
              <button
                className={`flex-1 py-2 font-semibold text-lg transition-colors ${activeTab === "medical" ? "bg-[#5e9ea7] text-white" : "bg-[#d1d1d1] text-[#5e9ea7]"}`}
                onClick={() => setActiveTab("medical")}
              >
                Medical Facility
              </button>
            </div>
          </div>
          <div className="text-center text-[#b0b0b0] text-xl mb-6">
            {activeTab === "government" ? "Login as an Admin" : "Login as a Facility"}
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Input className="max-w-md bg-white" placeholder="VERIFICATION ID" />
            <Input className="max-w-md bg-white" type="password" placeholder="PASSWORD" />
            <Button 
              className="max-w-md w-full bg-[#5e9ea7] hover:bg-[#3b7e8a] text-white text-lg mt-2"
              onClick={handleLogin}
            >
              Login
            </Button>
            <div className="w-full flex justify-end mt-2">
              <button className="text-xs text-[#222] opacity-70 hover:underline">Forgot Password?</button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;