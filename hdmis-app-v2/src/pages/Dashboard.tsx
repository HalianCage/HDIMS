
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-[#5aadbb] text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/src/assets/medical-laptop-icon.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">Health Data Information Management System</h1>
        </div>
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-[#068ca2] hover:bg-[#057a8f]">Home</Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="mb-4">
          <p className="text-sm text-gray-500">Last visited time and date</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/form-category-selection")}>
            <CardHeader>
              <CardTitle>Data Filling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Data filled from the last day of visit</p>
              <Progress value={50} className="w-full" />
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>View Past Records</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for chart */}
              <div className="h-16 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-sm text-gray-500">Chart</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total No. of Patient</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">This month</p>
              <p className="text-2xl font-bold">1234</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">M1</div>
                  <div className="flex-1">
                    <p>Anti-Natal Care (ANC)</p>
                    <Progress value={100} className="w-full" />
                  </div>
                  <div className="ml-4 text-green-500">Done</div>
                  <div className="ml-4 text-gray-500">32h</div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">M2</div>
                  <div className="flex-1">
                    <p>Deliveries</p>
                    <Progress value={50} className="w-full" />
                  </div>
                  <div className="ml-4 text-orange-500">In Progress</div>
                  <div className="ml-4 text-gray-500">16h</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0 flex justify-center">
              <Calendar
                mode="single"
                selected={new Date()}
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
