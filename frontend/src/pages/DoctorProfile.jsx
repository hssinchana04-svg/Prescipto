import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Star, MapPin, CheckCircle2, Clock, CalendarDays } from "lucide-react";
import { AppContext } from "../context/AppContext";

const DoctorProfile = () => {
  const { id } = useParams();
  const { doctors } = useContext(AppContext);
  const [doctor, setDoctor] = useState(null);
  
  useEffect(() => {
    if (doctors.length > 0) {
      const found = doctors.find(d => d._id === id);
      setDoctor(found);
    }
  }, [id, doctors]);
  
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("30");

  const timeSlots = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"];

  if (!doctor) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
      <div className="w-12 h-12 border-4 border-[#1E7FBF] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      
      {/* Cover Banner */}
      <div className="h-[200px] md:h-[280px] w-full bg-gradient-to-r from-[#1E7FBF] to-[#1AAF82] relative">
        <div className="container mx-auto px-6 md:px-[80px] h-full relative">
          {/* Profile Image overlaps banner */}
          <div className="absolute -bottom-[60px] left-6 md:left-[80px]">
             <img 
               src={doctor.image} 
               alt={doctor.name} 
               className="w-[120px] h-[120px] rounded-full object-cover border-[6px] border-white shadow-md bg-blue-50"
             />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-[80px] mt-[80px]">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Main Content */}
          <div className="flex-1">
            
            {/* Header Info */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h1 className="text-[28px] md:text-[36px] font-bold text-[#1A1A2E] leading-[1.2] mb-2 flex items-center gap-3">
                    {doctor.name} <CheckCircle2 className="text-[#1E7FBF] fill-[#1E7FBF]/20" size={24} />
                  </h1>
                  <p className="text-[16px] text-[#4A4A6A] font-medium mb-3">
                    {doctor.speciality} • {doctor.degree}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="specialty">Heart Specialist</Badge>
                    <Badge variant="default">15+ Years Exp</Badge>
                  </div>
                </div>
                
                {/* Rating Card */}
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-[12px] border border-[#E5E7EB] card-shadow shrink-0">
                  <div className="flex flex-col items-center border-r border-[#E5E7EB] pr-4">
                     <span className="text-[22px] font-bold text-[#1A1A2E]">4.9</span>
                     <div className="flex text-[#F0A030] fill-[#F0A030]"><Star size={12}/> <Star size={12}/> <Star size={12}/> <Star size={12}/> <Star size={12}/></div>
                  </div>
                  <div className="pl-2 flex flex-col">
                     <span className="text-[13px] font-semibold text-[#1A1A2E]">120+</span>
                     <span className="text-[12px] text-[#9CA3AF]">Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex items-center gap-6 border-b border-[#E5E7EB] mb-8 overflow-x-auto hide-scrollbar">
              {['overview', 'experience', 'reviews', 'location'].map(tab => (
                <button 
                  key={tab}
                  className={`pb-3 text-[15px] font-medium capitalize whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-[#1E7FBF]' : 'text-[#4A4A6A] hover:text-[#1E7FBF]'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1E7FBF] rounded-t-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'overview' && (
                <div className="animate-[fade-in_0.3s_ease]">
                  <h3 className="text-[18px] font-bold text-[#1A1A2E] mb-3">About Doctor</h3>
                  <p className="text-[16px] text-[#4A4A6A] leading-[1.8] mb-8">
                    {doctor.about} An accomplished medical professional with a track record of delivering excellent patient care. Committed to staying current with the latest medical advancements.
                  </p>

                  <h3 className="text-[18px] font-bold text-[#1A1A2E] mb-3">Specializations</h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {["Hypertension", "Coronary Artery Disease", "Echocardiography", "Preventive Cardiology"].map((spec, i) => (
                       <Badge key={i} variant="specialty" className="px-4 py-2 text-[13px] font-medium rounded-full bg-[#E6FAF5] text-[#0A6B4D]">
                         {spec}
                       </Badge>
                    ))}
                  </div>

                  <h3 className="text-[18px] font-bold text-[#1A1A2E] mb-3">Languages Spoken</h3>
                  <ul className="list-disc pl-5 text-[15px] text-[#4A4A6A] space-y-2 mb-8">
                    <li>English (Native)</li>
                    <li>Spanish (Fluent)</li>
                    <li>French (Conversational)</li>
                  </ul>
                </div>
              )}
              {activeTab !== 'overview' && (
                <div className="text-center py-12 animate-[fade-in_0.3s_ease]">
                   <p className="text-[#9CA3AF] italic">Content for {activeTab} will appear here.</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Sidebar Booking Panel */}
          <aside className="w-full lg:w-[380px] shrink-0">
             <Card className="sticky top-[100px] p-[24px]">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-[#E5E7EB]">
                   <span className="text-[16px] font-medium text-[#4A4A6A]">Consultation Fee</span>
                   <span className="text-[28px] font-bold text-[#1E7FBF]">${doctor.fees}</span>
                </div>

                <div className="mb-6">
                   <div className="flex items-center justify-between mb-4">
                     <h4 className="text-[15px] font-bold text-[#1A1A2E] flex items-center gap-2">
                       <CalendarDays size={18} className="text-[#1E7FBF]"/> Select Date
                     </h4>
                     <span className="text-[13px] text-[#1AAF82] font-medium bg-[#E8F5E9] px-2 py-1 rounded-[4px]">Available</span>
                   </div>
                   
                   {/* Simplified Calendar mock for UI purposes */}
                   <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                     {[0,1,2,3,4,5].map(day => {
                       const d = new Date();
                       d.setDate(d.getDate() + day);
                       const isSelected = selectedDate.getDate() === d.getDate();
                       return (
                         <div 
                           key={day}
                           onClick={() => setSelectedDate(d)}
                           className={`w-[60px] shrink-0 py-3 rounded-[12px] border ${isSelected ? 'bg-[#1E7FBF] border-[#1E7FBF] text-white shadow-md' : 'bg-white border-[#E5E7EB] text-[#4A4A6A] hover:border-[#1E7FBF]'} cursor-pointer transition-all flex flex-col items-center justify-center gap-1`}
                         >
                           <span className="text-[11px] uppercase font-medium opacity-80">{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                           <span className="text-[18px] font-bold">{d.getDate()}</span>
                         </div>
                       )
                     })}
                   </div>
                </div>

                <div className="mb-8">
                   <div className="flex items-center justify-between mb-4">
                     <h4 className="text-[15px] font-bold text-[#1A1A2E] flex items-center gap-2">
                       <Clock size={18} className="text-[#1E7FBF]"/> Select Time
                     </h4>
                     <select 
                       value={duration} 
                       onChange={(e) => setDuration(e.target.value)}
                       className="text-[13px] border border-[#E5E7EB] rounded-[6px] px-2 py-1 outline-none text-[#4A4A6A]"
                     >
                       <option value="15">15 min</option>
                       <option value="30">30 min</option>
                       <option value="45">45 min</option>
                     </select>
                   </div>

                   <div className="grid grid-cols-3 gap-2">
                     {timeSlots.map((time, idx) => (
                       <button
                         key={idx}
                         onClick={() => setSelectedTime(time)}
                         className={`py-2 text-[13px] font-semibold rounded-[8px] border transition-all ${
                           selectedTime === time 
                           ? 'bg-[#1E7FBF] border-[#1E7FBF] text-white shadow-md transform scale-[1.02]' 
                           : 'bg-white border-[#E5E7EB] text-[#4A4A6A] hover:border-[#1E7FBF] hover:text-[#1E7FBF]'
                         }`}
                       >
                         {time}
                       </button>
                     ))}
                   </div>
                </div>

                <Link to={`/book/${doctor._id}`} className="block w-full">
                  <Button 
                    className="w-full text-[16px] py-[16px]" 
                    disabled={!selectedTime}
                  >
                    Confirm Booking
                  </Button>
                </Link>
                
                <p className="text-center text-[12px] text-[#9CA3AF] mt-4 flex items-center justify-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">✓</span> Instant Confirmation
                </p>
             </Card>
          </aside>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default DoctorProfile;
