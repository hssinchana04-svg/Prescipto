import React, { useState, useContext } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { specialityData } from "../assets/assets";
import { Search, MapPin, Filter, Star } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const initialSpecialty = searchParams.get("specialty") || "";
  
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);

  // Filtered doctors
  const filteredDoctors = doctors.filter(doc => {
    if (selectedSpecialty && doc.speciality !== selectedSpecialty) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-6 md:px-[80px] py-[32px]">
      
      {/* Mobile Filters Toggle */}
      <div className="md:hidden mb-6">
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2 border-[#E5E7EB] text-[#4A4A6A]"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar Filters */}
        <aside className={`w-full md:w-[280px] shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white rounded-[16px] border border-[#E5E7EB] p-[24px] sticky top-[100px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[18px] font-semibold text-[#1A1A2E]">Filters</h3>
              <button 
                className="text-[13px] text-[#1E7FBF] hover:underline"
                onClick={() => setSelectedSpecialty("")}
              >
                Clear all
              </button>
            </div>
            
            {/* Specialty Filter */}
            <div className="mb-6">
              <h4 className="text-[14px] font-semibold text-[#1A1A2E] mb-3">Specialty</h4>
              <div className="flex flex-col gap-2">
                {specialityData.map((item, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="specialty" 
                      className="w-4 h-4 text-[#1E7FBF] focus:ring-[#1E7FBF] border-[#E5E7EB]"
                      checked={selectedSpecialty === item.speciality}
                      onChange={() => setSelectedSpecialty(item.speciality)}
                    />
                    <span className={`text-[14px] transition-colors ${selectedSpecialty === item.speciality ? 'text-[#1E7FBF] font-medium' : 'text-[#4A4A6A] group-hover:text-[#1E7FBF]'}`}>
                      {item.speciality}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Other Mock Filters (UI Only) */}
            <div className="mb-6">
              <h4 className="text-[14px] font-semibold text-[#1A1A2E] mb-3">Availability</h4>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-[13px] border border-[#1E7FBF] bg-[#EBF5FC] text-[#1E7FBF] rounded-[8px] font-medium">Today</button>
                <button className="flex-1 py-2 text-[13px] border border-[#E5E7EB] text-[#4A4A6A] hover:bg-[#F8F9FA] rounded-[8px]">This Week</button>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-[14px] font-semibold text-[#1A1A2E] mb-3">Consultation Fee</h4>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="Min" className="h-10 text-[13px]" />
                <span className="text-[#9CA3AF]">-</span>
                <Input type="number" placeholder="Max" className="h-10 text-[13px]" />
              </div>
            </div>

            <Button className="w-full h-12">Apply Filters</Button>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="flex-1">
          
          {/* Search Header */}
          <div className="bg-white rounded-[16px] border border-[#E5E7EB] p-4 mb-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full relative">
              <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input 
                type="text" 
                placeholder="Current Location" 
                className="w-full h-[48px] pl-10 pr-4 rounded-[8px] bg-[#F8F9FA] border-none focus:ring-2 focus:ring-[#1E7FBF] outline-none text-[14px]"
              />
            </div>
            <div className="flex-1 w-full relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input 
                type="text" 
                placeholder="Search doctors, clinics, etc." 
                className="w-full h-[48px] pl-10 pr-4 rounded-[8px] bg-[#F8F9FA] border-none focus:ring-2 focus:ring-[#1E7FBF] outline-none text-[14px]"
              />
            </div>
            <div className="w-full sm:w-auto">
              <select className="w-full sm:w-[140px] h-[48px] px-3 border border-[#E5E7EB] rounded-[8px] text-[14px] text-[#4A4A6A] bg-white outline-none focus:border-[#1E7FBF]">
                <option>Sort by: Relevance</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Experience</option>
                <option>Sort by: Fee</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-[22px] font-bold text-[#1A1A2E]">
              {selectedSpecialty ? `${selectedSpecialty} Specialists` : 'All Doctors'} 
              <span className="text-[16px] font-normal text-[#9CA3AF] ml-2">({filteredDoctors.length} results)</span>
            </h2>
          </div>

          {/* Doctor Grid (2 columns on desktop) */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {filteredDoctors.map((doc, index) => (
              <Card key={index} hoverable className="flex flex-col sm:flex-row overflow-hidden bg-white">
                <div className="sm:w-[160px] bg-blue-50 p-4 flex items-center justify-center shrink-0 border-b sm:border-b-0 sm:border-r border-[#E5E7EB]">
                  <img src={doc.image} alt={doc.name} className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full object-cover border-4 border-white shadow-sm" />
                </div>
                <CardContent className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[18px] font-bold text-[#1A1A2E]">{doc.name}</h3>
                    <div className="flex items-center gap-1 bg-[#FDF9F3] px-2 py-1 rounded-[6px]">
                      <Star size={14} className="text-[#F0A030] fill-[#F0A030]" />
                      <span className="text-[12px] font-semibold text-[#1A1A2E]">4.9</span>
                    </div>
                  </div>
                  
                  <p className="text-[14px] text-[#1E7FBF] font-medium mb-1">{doc.speciality}</p>
                  <p className="text-[13px] text-[#9CA3AF] mb-3">{doc.degree} • {doc.experience} Experience</p>
                  
                  <div className="flex items-center gap-4 mb-4 mt-auto pt-2">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#9CA3AF] uppercase tracking-wider font-semibold">Next Slot</span>
                      <span className="text-[13px] font-medium text-[#1A1A2E] text-green-600">Today, 2:30 PM</span>
                    </div>
                    <div className="w-[1px] h-8 bg-[#E5E7EB]"></div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#9CA3AF] uppercase tracking-wider font-semibold">Consultation</span>
                      <span className="text-[13px] font-medium text-[#1A1A2E]">${doc.fees}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 pt-3 border-t border-[#E5E7EB]">
                     <Link to={`/doctor/${doc._id}`} className="w-full">
                       <Button variant="secondary" className="w-full py-2 h-10 text-[14px]">Book Appointment</Button>
                     </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredDoctors.length === 0 && (
              <div className="col-span-full py-16 text-center">
                <p className="text-[#4A4A6A] text-[16px]">No doctors found for this filter.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSelectedSpecialty("")}>Clear Filters</Button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Doctors;
