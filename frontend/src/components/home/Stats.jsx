import React from "react";

export function Stats() {
  const stats = [
    { number: "10,000+", label: "Patients" },
    { number: "200+", label: "Doctors" },
    { number: "50+", label: "Specialties" },
  ];

  return (
    <div className="bg-[#F8F9FA] border-y border-[#E5E7EB] py-[32px]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center ${idx > 0 && 'pt-8 md:pt-0'}`}>
              <h2 className="text-[36px] md:text-[42px] font-bold text-[#1E7FBF] leading-[1.2]">
                {stat.number}
              </h2>
              <p className="text-[14px] font-medium text-[#4A4A6A] mt-2 uppercase tracking-[0.05em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
