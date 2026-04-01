import React from "react";
import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  isLoading, 
  disabled, 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-inter font-semibold transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E7FBF] focus-visible:ring-offset-2 disabled:opacity-45 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#1E7FBF] text-white rounded-[8px] btn-shadow hover:bg-[#1569A3]",
    secondary: "bg-white text-[#1E7FBF] border border-[#1E7FBF] rounded-[8px] hover:bg-[#EBF5FC]",
    danger: "bg-[#E53935] text-white rounded-[8px] hover:bg-red-700",
    ghost: "bg-transparent text-[#4A4A6A] hover:bg-gray-100 rounded-[8px]",
  };

  const sizes = {
    default: "py-[14px] px-[28px] text-[15px]",
    sm: "py-2 px-4 text-[13px]",
    lg: "py-4 px-8 text-[16px]",
    icon: "h-10 w-10",
  };

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? "Please wait..." : children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };
