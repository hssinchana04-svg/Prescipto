import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Star } from "lucide-react";

// For demo purposes, we will accept doctors as a prop, 
// normally this would come from a global context or API.
export function TopDoctors({ doctors = [] }) {
  // Take only the first 8 doctors for the homepage
  const displayDoctors = doctors.slice(0, 8);

  return (
    <section className="py-[48px] md:py-[80px] bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A2E] mb-4">Top Rated Doctors</h2>
          <p className="text-[16px] text-[#4A4A6A] max-w-[600px] mx-auto">
            Book appointments with the best doctors in your city. Verified professionals ready to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayDoctors.map((doc, index) => (
            <Card key={index} hoverable className="overflow-hidden flex flex-col h-full bg-white transition-all duration-300">
              <div className="relative pt-[24px] px-[24px] flex justify-center">
                <div className="w-[80px] text-center">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-[80px] h-[80px] rounded-full object-cover border-2 border-[#E5E7EB] bg-blue-50"
                  />
                  {/* Verified Badge */}
                  <div className="absolute top-[24px] right-[24px]">
                     <Badge variant="available">Available Today</Badge>
                  </div>
                </div>
              </div>
              
              <CardContent className="flex flex-col flex-1 mt-4 text-center items-center">
                <h4 className="text-[18px] font-semibold text-[#1A1A2E] mb-1 truncate w-full">{doc.name}</h4>
                <div className="mb-3">
                  <Badge variant="specialty">{doc.speciality}</Badge>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  <Star size={16} className="text-[#F0A030] fill-[#F0A030]" />
                  <span className="text-[13px] font-medium text-[#1A1A2E]">4.9</span>
                  <span className="text-[13px] text-[#9CA3AF]">(120 Reviews)</span>
                </div>
                
                <div className="mt-auto w-full pt-4 border-t border-[#E5E7EB]">
                  <Link to={`/doctor/${doc._id}`} className="w-full block">
                    <Button variant="secondary" className="w-full">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/doctors">
            <Button variant="outline" className="bg-transparent border border-[#E5E7EB] text-[#4A4A6A] hover:bg-[#F8F9FA] px-8">
              View All Doctors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
