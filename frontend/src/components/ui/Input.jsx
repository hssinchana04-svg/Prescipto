import React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, label, error, helperText, id, ...props }, ref) => {
  const inputId = id || React.useId();
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={inputId} className="text-[13px] font-medium text-[#4A4A6A] mb-[6px] tracking-[0.05em] uppercase">
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        className={cn(
          "flex h-[48px] w-full rounded-[8px] border border-[#E5E7EB] bg-white px-3 py-2 text-[14px] font-inter text-[#4A4A6A] placeholder:text-[#9CA3AF] focus-visible:outline-none focus-visible:border-[#1E7FBF] focus-visible:ring-[3px] focus-visible:ring-[#1E7FBF]/15 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-[#E53935] focus-visible:border-[#E53935] focus-visible:ring-[#E53935]/15",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-[13px] text-[#E53935] mt-1">{error}</p>
      )}
      {!error && helperText && (
        <p className="text-[13px] text-[#9CA3AF] mt-1">{helperText}</p>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
