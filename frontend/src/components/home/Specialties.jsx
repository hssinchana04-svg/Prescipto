import React from "react";
import { Link } from "react-router-dom";
import { 
  HeartPulse, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Stethoscope, 
  Activity, 
  Smile, 
  Ear,
  Microscope
} from "lucide-react";

export function Specialties() {
  const specialtyList = [
    { name: "Cardiology", icon: HeartPulse, color: "text-red-500", bg: "bg-red-50" },
    { name: "Neurology", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Orthopedics", icon: Bone, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Pediatrics", icon: Baby, color: "text-green-500", bg: "bg-green-50" },
    { name: "Ophthalmology", icon: Eye, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "General Practice", icon: Stethoscope, color: "text-teal-500", bg: "bg-teal-50" },
    { name: "Psychiatry", icon: Activity, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Dentistry", icon: Smile, color: "text-pink-500", bg: "bg-pink-50" },
    { name: "ENT", icon: Ear, color: "text-yellow-500", bg: "bg-yellow-50" },
    { name: "Gastroenterology", icon: Microscope, color: "text-[#1E7FBF]", bg: "bg-[#1E7FBF]/10" },
  ];

  return (
    <section id="specialties" className="py-[48px] md:py-[80px] bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A2E] mb-4">Top Specialties</h2>
          <p className="text-[16px] text-[#4A4A6A] max-w-[600px] mx-auto">
            Find experienced doctors across all major specialties to get the best care possible.
          </p>
        </div>

        {/* Horizontal scroll native implementation for mobile, grid for desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-5 md:gap-6 snap-x snap-mandatory hide-scrollbar">
          {specialtyList.map((spec, idx) => (
            <Link
              key={idx}
              to={`/doctors?specialty=${encodeURIComponent(spec.name)}`}
              className="group flex-shrink-0 w-[140px] md:w-auto snap-center flex flex-col items-center p-6 bg-white border border-[#E5E7EB] rounded-[16px] hover:card-shadow-hover hover:-translate-y-1 transition-all duration-200 ease-in-out mr-4 md:mr-0 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${spec.bg} ${spec.color}`}>
                <spec.icon size={32} />
              </div>
              <h4 className="text-[14px] font-semibold text-[#1A1A2E] text-center">{spec.name}</h4>
            </Link>
          ))}
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
    </section>
  );
}
