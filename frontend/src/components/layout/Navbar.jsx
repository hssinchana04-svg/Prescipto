import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { AppContext } from "../../context/AppContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Doctors", path: "/doctors" },
    { name: "Specialties", path: "/#specialties" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
          scrolled ? "border-b border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.06)] py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-[80px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1E7FBF] rounded-[8px] flex items-center justify-center text-white font-bold text-xl">M</div>
            <span className="text-[22px] font-bold text-[#1A1A2E]">MediBook</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[14px] font-inter transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-[#1E7FBF] font-medium underline underline-offset-4"
                    : "text-[#4A4A6A] hover:text-[#1E7FBF]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {token ? (
              <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onMouseEnter={() => setDropdownOpen(true)}
                >
                  <img
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#1E7FBF]/20"
                    src={userData?.image || 'https://ui-avatars.com/api/?name=' + (userData?.name || 'U')}
                    alt=""
                  />
                  <ChevronDown size={16} className={`text-[#4A4A6A] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#E5E7EB] py-2 z-50">
                    <button onClick={() => { navigate('/my-profile'); setDropdownOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-[#4A4A6A] hover:bg-[#F5F7FA] hover:text-[#1E7FBF] transition-colors">
                      My Profile
                    </button>
                    <button onClick={() => { navigate('/my-appointments'); setDropdownOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-[#4A4A6A] hover:bg-[#F5F7FA] hover:text-[#1E7FBF] transition-colors">
                      My Appointments
                    </button>
                    <hr className="my-1 border-[#E5E7EB]" />
                    <button onClick={() => { logout(); setDropdownOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <Button>Login / Sign Up</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#1A1A2E]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col pt-6 px-6 slide-in-right">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-[22px] font-bold text-[#1A1A2E]" onClick={() => setMobileMenuOpen(false)}>
              MediBook
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-[#1A1A2E]">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[18px] font-inter ${
                  location.pathname === link.path
                    ? "text-[#1E7FBF] font-medium"
                    : "text-[#4A4A6A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {token ? (
              <>
                <Link to="/my-profile" onClick={() => setMobileMenuOpen(false)} className="text-[18px] text-[#4A4A6A]">My Profile</Link>
                <Link to="/my-appointments" onClick={() => setMobileMenuOpen(false)} className="text-[18px] text-[#4A4A6A]">My Appointments</Link>
                <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="text-[18px] text-red-500 text-left mt-2">Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="mt-4">
                <Button className="w-full">Login / Sign Up</Button>
              </Link>
            )}
          </nav>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        .slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </>
  );
}
