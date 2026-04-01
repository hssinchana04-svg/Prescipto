import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="min-h-[560px] flex items-center pt-8 pb-16 md:py-0 relative overflow-hidden">
      {/* Soft Blue Blob Background */}
      <div className="absolute right-[-10%] top-[-10%] w-[60%] h-[120%] bg-[#1E7FBF]/8 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6 animate-[fade-in-up_0.6s_ease-out]">
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#1A1A2E] leading-[1.2]">
              Book Your Doctor<br />Appointment in Minutes
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#4A4A6A] leading-[1.7] max-w-[480px]">
              Find trusted doctors, compare reviews, and book appointments instantly. Your health, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link to="/doctors">
                <Button size="lg" className="w-full sm:w-auto">Find a Doctor</Button>
              </Link>
              <Link to="/#how-it-works">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">How it works</Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-[fade-in_0.8s_ease-out_0.2s_both]">
            <div className="aspect-[4/3] md:aspect-square max-h-[500px] w-full rounded-[24px] overflow-hidden bg-white/50 border border-white card-shadow backdrop-blur-sm p-4 relative">
              <img 
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800" 
                alt="Smiling Doctor" 
                className="w-full h-full object-cover rounded-[16px]"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-[-20px] bg-white rounded-[16px] p-4 flex items-center gap-3 card-shadow animate-bounce">
                <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1A1A2E]">Experienced Doctors</p>
                  <p className="text-[11px] text-[#9CA3AF]">Verified Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
