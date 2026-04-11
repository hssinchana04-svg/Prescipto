import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { CheckCircle2, ChevronRight, Lock, Calendar, Clock, MapPin } from "lucide-react";

const Booking = () => {
  const { id } = useParams();
  const { doctors } = useContext(AppContext);
  const doctor = doctors.find(d => d._id === id);

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!doctor) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading doctor details...</div>;
  }

  // Form State
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "", dob: "", gender: "male", reason: "",
    cardNumber: "", expiry: "", cvv: "", nameOnCard: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handlePayment = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success Step
    }, 1500);
  };

  if (step === 4) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#F8F9FA] px-6">
        <Card className="max-w-[480px] w-full text-center py-8">
          <CardContent className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#E8F5E9] flex items-center justify-center mb-6 animate-[scale-up_0.4s_ease-out]">
              <CheckCircle2 size={40} className="text-[#2E7D32]" />
            </div>
            <h2 className="text-[28px] font-bold text-[#1A1A2E] mb-2">Booking Confirmed!</h2>
            <p className="text-[16px] text-[#4A4A6A] mb-8">
              Your appointment with <span className="font-semibold text-[#1E7FBF]">{doctor.name}</span> has been confirmed.
            </p>
            
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-[12px] p-4 w-full text-left mb-8 flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="text-[13px] text-[#9CA3AF]">Appointment ID</span>
                <span className="text-[14px] font-semibold text-[#1A1A2E]">#MBK-8492</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px] text-[#9CA3AF]">Date & Time</span>
                <span className="text-[14px] font-semibold text-[#1A1A2E]">Today, 2:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px] text-[#9CA3AF]">Total Paid</span>
                <span className="text-[14px] font-semibold text-[#1A1A2E]">${doctor.fees}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link to="/dashboard" className="flex-1">
                 <Button variant="secondary" className="w-full">View Dashboard</Button>
              </Link>
              <Button className="flex-1">Add to Calendar</Button>
            </div>
          </CardContent>
        </Card>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scale-up {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-[32px] md:py-[48px]">
      <div className="container mx-auto px-6 md:px-[80px] max-w-[1000px]">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 relative">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#E5E7EB] -z-10" />
             <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#1E7FBF] -z-10 transition-all duration-300 ease-in-out" style={{ width: `${(step - 1) * 50}%` }} />
             
             {[1, 2, 3].map(s => (
                <div key={s} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[14px] font-bold transition-colors duration-300 ${step >= s ? 'bg-[#1E7FBF] border-[#1E7FBF] text-white' : 'bg-white border-[#E5E7EB] text-[#9CA3AF]'}`}>
                  {step > s ? <CheckCircle2 size={16} /> : s}
                </div>
             ))}
          </div>
          <div className="flex justify-between text-[13px] font-semibold">
            <span className={step >= 1 ? "text-[#1E7FBF]" : "text-[#9CA3AF]"}>Patient Details</span>
            <span className={step >= 2 ? "text-[#1E7FBF]" : "text-[#9CA3AF]"}>Review</span>
            <span className={step >= 3 ? "text-[#1E7FBF]" : "text-[#9CA3AF]"}>Payment</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Area */}
          <div className="flex-1">
             <Card className="p-[24px]">
               {/* STEP 1: PATIENT DETAILS */}
               {step === 1 && (
                 <div className="animate-[fade-in_0.3s_ease]">
                    <h2 className="text-[22px] font-bold text-[#1A1A2E] mb-6">Patient Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mb-6">
                      <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
                      <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                      <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                      <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                      <Input label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} />
                      
                      <div className="flex flex-col gap-1 w-full relative">
                        <label className="text-[13px] font-medium text-[#4A4A6A] mb-[6px] tracking-[0.05em] uppercase">Gender</label>
                        <select 
                          name="gender" 
                          value={formData.gender} 
                          onChange={handleChange}
                          className="flex h-[48px] w-full rounded-[8px] border border-[#E5E7EB] bg-white px-3 py-2 text-[14px] font-inter text-[#4A4A6A] focus-visible:outline-none focus-visible:border-[#1E7FBF] focus-visible:ring-[3px] focus-visible:ring-[#1E7FBF]/15"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="text-[13px] font-medium text-[#4A4A6A] mb-[6px] tracking-[0.05em] uppercase block">Reason for Visit</label>
                      <textarea 
                         name="reason"
                         value={formData.reason}
                         onChange={handleChange}
                         placeholder="Briefly describe your symptoms or reason for visit..."
                         className="flex min-h-[100px] w-full rounded-[8px] border border-[#E5E7EB] bg-white px-3 py-2 text-[14px] font-inter text-[#4A4A6A] focus-visible:outline-none focus-visible:border-[#1E7FBF] focus-visible:ring-[3px] focus-visible:ring-[#1E7FBF]/15 resize-none"
                      />
                    </div>

                    <div className="flex justify-end pt-4 border-t border-[#E5E7EB]">
                      <Button onClick={nextStep}>Continue <ChevronRight size={18} className="ml-1" /></Button>
                    </div>
                 </div>
               )}

               {/* STEP 2: REVIEW */}
               {step === 2 && (
                 <div className="animate-[fade-in_0.3s_ease]">
                    <h2 className="text-[22px] font-bold text-[#1A1A2E] mb-6">Review Appointment</h2>
                    
                    <div className="bg-[#EBF5FC] rounded-[12px] p-6 mb-6 flex items-start gap-4">
                      <img src={doctor.image} alt={doctor.name} className="w-[60px] h-[60px] rounded-full object-cover border-2 border-white shadow-sm bg-blue-50" />
                      <div>
                        <h4 className="text-[16px] font-bold text-[#1E7FBF] mb-1">{doctor.name}</h4>
                        <p className="text-[14px] text-[#4A4A6A] font-medium">{doctor.speciality}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="flex gap-3">
                        <Calendar className="text-[#9CA3AF] shrink-0" size={20} />
                        <div>
                          <p className="text-[13px] text-[#9CA3AF]">Date</p>
                          <p className="text-[15px] font-semibold text-[#1A1A2E]">Today, {new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Clock className="text-[#9CA3AF] shrink-0" size={20} />
                        <div>
                          <p className="text-[13px] text-[#9CA3AF]">Time</p>
                          <p className="text-[15px] font-semibold text-[#1A1A2E]">02:30 PM (30 min duration)</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-[16px] font-semibold text-[#1A1A2E] mb-4 border-b border-[#E5E7EB] pb-2">Patient Details</h3>
                    <div className="grid grid-cols-2 gap-y-4 mb-8 text-[14px]">
                      <div>
                        <p className="text-[#9CA3AF] text-[12px] uppercase">Name</p>
                        <p className="text-[#4A4A6A] font-medium">{formData.firstName || "John"} {formData.lastName || "Doe"}</p>
                      </div>
                      <div>
                        <p className="text-[#9CA3AF] text-[12px] uppercase">Phone</p>
                        <p className="text-[#4A4A6A] font-medium">{formData.phone || "+1 234 567 890"}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[#9CA3AF] text-[12px] uppercase">Reason for visit</p>
                        <p className="text-[#4A4A6A] font-medium">{formData.reason || "General Checkup"}</p>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-t border-[#E5E7EB]">
                      <Button variant="ghost" onClick={prevStep}>Back</Button>
                      <Button onClick={nextStep}>Proceed to Payment <ChevronRight size={18} className="ml-1" /></Button>
                    </div>
                 </div>
               )}

               {/* STEP 3: PAYMENT */}
               {step === 3 && (
                 <div className="animate-[fade-in_0.3s_ease]">
                    <h2 className="text-[22px] font-bold text-[#1A1A2E] mb-6 flex items-center justify-between">
                      Payment Details
                      <div className="flex items-center gap-1 text-[13px] text-[#1AAF82] bg-[#E8F5E9] px-3 py-1.5 rounded-full font-medium">
                        <Lock size={14} /> SSL Secured
                      </div>
                    </h2>
                    
                    <div className="mb-6">
                      <Input label="Name on Card" name="nameOnCard" value={formData.nameOnCard} onChange={handleChange} placeholder="JOHN DOE" />
                    </div>

                    <div className="mb-8 relative">
                      <Input label="Card Number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="0000 0000 0000 0000" />
                      <div className="absolute right-3 top-[38px] flex gap-1">
                         {/* Mock CC icons */}
                         <div className="w-8 h-5 bg-[#E5E7EB] rounded-[2px]" />
                         <div className="w-8 h-5 bg-[#E5E7EB] rounded-[2px]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <Input label="Expiry Date" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" />
                      <Input label="CVV" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" type="password" />
                    </div>

                    <div className="flex justify-between pt-4 border-t border-[#E5E7EB]">
                      <Button variant="ghost" onClick={prevStep} disabled={isSubmitting}>Back</Button>
                      <Button onClick={handlePayment} isLoading={isSubmitting}>Pay ${doctor.fees} & Confirm</Button>
                    </div>
                 </div>
               )}
             </Card>
          </div>

          {/* Right Summary Panel */}
          <aside className="w-full lg:w-[320px] shrink-0">
             <Card className="sticky top-[100px] p-[24px]">
               <h3 className="text-[16px] font-bold text-[#1A1A2E] mb-4 border-b border-[#E5E7EB] pb-3">Booking Summary</h3>
               
               <div className="flex flex-col gap-3 text-[14px]">
                 <div className="flex justify-between">
                   <span className="text-[#4A4A6A]">Consultation Fee</span>
                   <span className="font-medium text-[#1A1A2E]">${doctor.fees}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-[#4A4A6A]">Service Tax (5%)</span>
                   <span className="font-medium text-[#1A1A2E]">${(doctor.fees * 0.05).toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between pt-3 border-t border-[#E5E7EB] font-bold text-[16px]">
                   <span className="text-[#1A1A2E]">Total Pay</span>
                   <span className="text-[#1E7FBF]">${(doctor.fees * 1.05).toFixed(2)}</span>
                 </div>
               </div>

               <div className="mt-6 bg-[#E8F5E9] p-3 rounded-[8px] flex gap-2 text-[12px] text-[#2E7D32]">
                 <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                 <p>Free cancellation up to 24 hours before the appointment time.</p>
               </div>
             </Card>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Booking;
