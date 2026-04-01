import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-[80px] pb-[40px]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1E7FBF] rounded-[8px] flex items-center justify-center text-white font-bold text-xl">M</div>
              <span className="text-[22px] font-bold">MediBook</span>
            </div>
            <p className="text-[#9CA3AF] text-[14px] leading-[1.6] mb-6">
              Your health, on your schedule. Premium private clinic experience from the comfort of your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#9CA3AF] text-[13px] bg-white/10 px-3 py-1.5 rounded-full">
                <ShieldCheck size={16} className="text-[#1AAF82]" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF] text-[13px] bg-white/10 px-3 py-1.5 rounded-full">
                <Lock size={16} className="text-[#1AAF82]" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-[#9CA3AF] text-[14px]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Find a Doctor</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Patient Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Specialties</h4>
            <ul className="flex flex-col gap-4 text-[#9CA3AF] text-[14px]">
              <li><Link to="/doctors?specialty=Cardiology" className="hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link to="/doctors?specialty=Neurology" className="hover:text-white transition-colors">Neurology</Link></li>
              <li><Link to="/doctors?specialty=Orthopedics" className="hover:text-white transition-colors">Orthopedics</Link></li>
              <li><Link to="/doctors?specialty=Pediatrics" className="hover:text-white transition-colors">Pediatrics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-[#9CA3AF] text-[14px]">
              <li>123 Medical Drive, Health City</li>
              <li>support@medibook.com</li>
              <li>+1 (800) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#9CA3AF] text-[14px]">
          <p>© {new Date().getFullYear()} MediBook. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
