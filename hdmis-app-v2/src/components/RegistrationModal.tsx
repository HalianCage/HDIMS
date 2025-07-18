import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import medicalLaptopIcon from "@/assets/medical-laptop-icon.png";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [activeTab, setActiveTab] = useState<"government" | "medical">("government");

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
          {activeTab === "government" ? (
            <div className="flex flex-col gap-4 items-center">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ADMIN TYPE" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="state">State Admin</SelectItem>
                  <SelectItem value="district">District Admin</SelectItem>
                  <SelectItem value="block">Block Admin</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="STATE" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                </SelectContent>
              </Select>
              <Input className="max-w-md bg-white" placeholder="VERIFICATION ID" />
              <Input className="max-w-md bg-white" type="password" placeholder="PASSWORD" />
              <Input className="max-w-md bg-white" type="password" placeholder="CONFIRM PASSWORD" />
              <Button className="max-w-md w-full bg-[#5e9ea7] hover:bg-[#3b7e8a] text-white text-lg mt-2">Register</Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 items-center">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="STATE" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="FACILITY NAME" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hospital1">City Hospital</SelectItem>
                  <SelectItem value="hospital2">General Hospital</SelectItem>
                  <SelectItem value="hospital3">Medical Center</SelectItem>
                </SelectContent>
              </Select>
              <Input className="max-w-md bg-white" placeholder="NIN ID" />
              <Input className="max-w-md bg-white" type="email" placeholder="EMAIL ID" />
              <Input className="max-w-md bg-white" type="password" placeholder="PASSWORD" />
              <Input className="max-w-md bg-white" type="password" placeholder="CONFIRM PASSWORD" />
              <Button className="max-w-md w-full bg-[#5e9ea7] hover:bg-[#3b7e8a] text-white text-lg mt-2">Register</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal; 