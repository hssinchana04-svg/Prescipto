import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doctors } from "../assets/assets";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { CalendarDays, History, User, Bell, LogOut, MoreVertical } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingAppointments = [
    {
      id: 1,
      doctor: doctors[0],
      date: "Today",
      time: "02:30 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: doctors[1],
      date: "Oct 24, 2026",
      time: "10:00 AM",
      status: "Pending",
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      doctor: doctors[2],
      date: "Sep 15, 2026",
      time: "11:30 AM",
      status: "Completed",
    }
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-[32px] md:py-[48px]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-[260px] shrink-0">
            <Card className="sticky top-[100px] overflow-hidden bg-white">
              <div className="p-6 border-b border-[#E5E7EB] flex flex-col items-center text-center bg-[#EBF5FC]">
                 <img 
                   src="https://randomuser.me/api/portraits/men/32.jpg" 
                   alt="Patient Name" 
                   className="w-[80px] h-[80px] rounded-full border-4 border-white shadow-sm mb-3 object-cover"
                 />
                 <h3 className="text-[18px] font-bold text-[#1A1A2E]">Michael Chen</h3>
                 <Badge variant="default" className="mt-1 bg-white border border-[#E5E7EB] text-[#4A4A6A]">Patient</Badge>
              </div>
              
              <nav className="flex flex-col p-4 gap-1">
                 {[
                   { id: "upcoming", label: "Upcoming visits", icon: CalendarDays },
                   { id: "history", label: "Medical History", icon: History },
                   { id: "profile", label: "Profile Settings", icon: User },
                   { id: "notifications", label: "Notifications", icon: Bell },
                 ].map(item => (
                   <button
                     key={item.id}
                     onClick={() => setActiveTab(item.id)}
                     className={`flex items-center gap-3 px-4 py-3 rounded-[8px] text-[14px] font-medium transition-colors ${
                       activeTab === item.id 
                       ? "bg-[#1E7FBF] text-white shadow-sm" 
                       : "text-[#4A4A6A] hover:bg-[#F8F9FA] hover:text-[#1E7FBF]"
                     }`}
                   >
                     <item.icon size={18} />
                     {item.label}
                   </button>
                 ))}
                 
                 <div className="h-[1px] bg-[#E5E7EB] my-2" />
                 
                 <button className="flex items-center gap-3 px-4 py-3 rounded-[8px] text-[14px] font-medium text-[#E53935] hover:bg-red-50 transition-colors">
                    <LogOut size={18} />
                    Log Out
                 </button>
              </nav>
            </Card>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            <Card className="min-h-[500px] p-0 md:p-[32px] overflow-hidden bg-white">
              
              {/* UPCOMING TAB */}
              {activeTab === "upcoming" && (
                <div className="p-6 md:p-0 animate-[fade-in_0.3s_ease]">
                  <h2 className="text-[22px] font-bold text-[#1A1A2E] mb-6 border-b border-[#E5E7EB] pb-4">Upcoming Appointments</h2>
                  
                  <div className="flex flex-col gap-4">
                    {upcomingAppointments.map((apt) => (
                      <div key={apt.id} className="border border-[#E5E7EB] rounded-[16px] p-5 flex flex-col md:flex-row gap-5 items-start md:items-center hover:shadow-md transition-shadow bg-white">
                        <img src={apt.doctor.image} alt={apt.doctor.name} className="w-[80px] h-[80px] rounded-full object-cover border border-[#E5E7EB] bg-blue-50 shrink-0" />
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="text-[18px] font-semibold text-[#1A1A2E]">{apt.doctor.name}</h4>
                            <Badge variant={apt.status === "Confirmed" ? "available" : "pending"}>{apt.status}</Badge>
                          </div>
                          <p className="text-[14px] text-[#1E7FBF] font-medium mb-3">{apt.doctor.speciality}</p>
                          
                          <div className="flex items-center gap-4 text-[13px] text-[#4A4A6A]">
                            <div className="flex items-center gap-1.5 bg-[#F8F9FA] px-3 py-1.5 rounded-[6px] font-medium">
                              <CalendarDays size={14} className="text-[#9CA3AF]"/> {apt.date}
                            </div>
                            <div className="flex items-center gap-1.5 bg-[#F8F9FA] px-3 py-1.5 rounded-[6px] font-medium">
                              <History size={14} className="text-[#9CA3AF]"/> {apt.time}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t border-[#E5E7EB] md:border-t-0">
                          <Button variant="secondary" className="flex-1 md:flex-none text-[13px] py-1.5 h-9">Reschedule</Button>
                          <Button variant="outline" className="flex-1 md:flex-none text-[13px] py-1.5 h-9 border-[#E5E7EB] text-[#E53935] hover:bg-red-50 hover:border-red-100">Cancel</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HISTORY TAB */}
              {activeTab === "history" && (
                <div className="p-6 md:p-0 animate-[fade-in_0.3s_ease]">
                  <h2 className="text-[22px] font-bold text-[#1A1A2E] mb-6 border-b border-[#E5E7EB] pb-4">Medical History</h2>
                  
                  <div className="flex flex-col gap-4">
                    {pastAppointments.map((apt) => (
                      <div key={apt.id} className="border border-[#E5E7EB] rounded-[16px] p-5 flex flex-col md:flex-row gap-5 items-start md:items-center bg-[#F8F9FA]/50">
                        <img src={apt.doctor.image} alt={apt.doctor.name} className="w-[60px] h-[60px] rounded-full object-cover border border-[#E5E7EB] bg-white shrink-0 grayscale opacity-80" />
                        
                        <div className="flex-1 text-[#4A4A6A]">
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="text-[16px] font-semibold text-[#1A1A2E]">{apt.doctor.name}</h4>
                            <span className="text-[12px] font-medium bg-[#E5E7EB] text-[#4A4A6A] px-2 py-1 rounded-[4px]">Completed</span>
                          </div>
                          <p className="text-[13px] text-[#4A4A6A] mb-2">{apt.doctor.speciality}</p>
                          <p className="text-[13px] font-medium">{apt.date} • {apt.time}</p>
                        </div>

                        <div className="w-full md:w-auto mt-2 md:mt-0">
                          <Link to={`/doctor/${apt.doctor._id}`}>
                             <Button className="w-full text-[13px] h-9">Book Again</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PROFILE TAB (Mock Form) */}
              {activeTab === "profile" && (
                <div className="p-6 md:p-0 animate-[fade-in_0.3s_ease]">
                  <h2 className="text-[22px] font-bold text-[#1A1A2E] mb-6 border-b border-[#E5E7EB] pb-4">Profile Settings</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                     <div>
                       <label className="text-[13px] font-medium text-[#4A4A6A] mb-[6px] tracking-[0.05em] uppercase block">First Name</label>
                       <input type="text" defaultValue="Michael" className="w-full h-[48px] rounded-[8px] border border-[#E5E7EB] px-4 text-[14px]" />
                     </div>
                     <div>
                       <label className="text-[13px] font-medium text-[#4A4A6A] mb-[6px] tracking-[0.05em] uppercase block">Last Name</label>
                       <input type="text" defaultValue="Chen" className="w-full h-[48px] rounded-[8px] border border-[#E5E7EB] px-4 text-[14px]" />
                     </div>
                     <div>
                       <label className="text-[13px] font-medium text-[#4A4A6A] mb-[6px] tracking-[0.05em] uppercase block">Phone</label>
                       <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full h-[48px] rounded-[8px] border border-[#E5E7EB] px-4 text-[14px]" />
                     </div>
                     <div>
                       <label className="text-[13px] font-medium text-[#4A4A6A] mb-[6px] tracking-[0.05em] uppercase block">Blood Group</label>
                       <select className="w-full h-[48px] rounded-[8px] border border-[#E5E7EB] px-4 text-[14px] bg-white">
                         <option>O+</option>
                         <option>A+</option>
                         <option>B+</option>
                       </select>
                     </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-[#E5E7EB]">
                     <Button>Save Changes</Button>
                  </div>
                </div>
              )}

              {/* NOTIFICATIONS TAB */}
              {activeTab === "notifications" && (
                <div className="p-6 md:p-0 animate-[fade-in_0.3s_ease] flex flex-col items-center justify-center text-center h-[300px]">
                  <Bell size={48} className="text-[#E5E7EB] mb-4" />
                  <p className="text-[16px] text-[#4A4A6A] font-medium">No new notifications</p>
                  <p className="text-[13px] text-[#9CA3AF]">You're all caught up!</p>
                </div>
              )}

            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
