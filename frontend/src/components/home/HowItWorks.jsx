import React from "react";
import { Search, CalendarCheck, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Find a Doctor",
      desc: "Search for doctors by specialty, location, or name.",
    },
    {
      icon: CalendarCheck,
      title: "Pick a Time",
      desc: "Choose a convenient time slot from the doctor's schedule.",
    },
    {
      icon: CheckCircle2,
      title: "Get Confirmed",
      desc: "Receive instant confirmation and regular reminders.",
    },
  ];

  return (
    <section id="how-it-works" className="py-[48px] md:py-[80px] bg-white">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A2E] mb-4">How it Works</h2>
          <p className="text-[16px] text-[#4A4A6A] max-w-[600px] mx-auto">
            Getting healthcare has never been easier. Just follow these simple steps to book your appointment.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-[#E5E7EB] -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative bg-white">
                <div className="w-[80px] h-[80px] rounded-full bg-[#EBF5FC] text-[#1E7FBF] border-4 border-white flex items-center justify-center mb-6 relative">
                  <step.icon size={32} />
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center text-[14px] font-bold border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1A1A2E] mb-2">{step.title}</h3>
                <p className="text-[14px] text-[#4A4A6A] max-w-[250px] leading-[1.6]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
