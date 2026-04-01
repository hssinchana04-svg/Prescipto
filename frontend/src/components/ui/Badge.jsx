import React from "react";
import { cn } from "../../lib/utils";

const Badge = ({ className, variant = "default", children, ...props }) => {
  const variants = {
    default: "bg-[#F8F9FA] text-[#4A4A6A]",
    available: "bg-[#E8F5E9] text-[#2E7D32]",
    unavailable: "bg-[#F1F3F4] text-[#6B7280]",
    pending: "bg-[#FFF3E0] text-[#E65100]",
    specialty: "bg-[#E6FAF5] text-[#0A6B4D]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-[12px] py-[4px] text-[11px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E7FBF] focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Badge };
