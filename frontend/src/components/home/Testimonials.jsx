import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/Card";

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Booking an appointment was so easy and fast. The doctor was very professional and the whole experience was seamless. Highly recommend MediBook!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "I found a great cardiologist within minutes. The instant confirmation gave me peace of mind. The UI is incredibly beautiful and intuitive.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "No more waiting in long clinic queues. I could see the doctor's availability upfront and picked a slot that worked for me. Excellent service.",
      rating: 4,
    },
  ];

  return (
    <section className="py-[48px] md:py-[80px] bg-[#F8F9FA] border-t border-[#E5E7EB]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A2E] mb-4">Patient Stories</h2>
          <p className="text-[16px] text-[#4A4A6A] max-w-[600px] mx-auto">
            See what our patients have to say about their experience with our platform and doctors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className="bg-white hover:card-shadow-hover transition-shadow duration-300">
              <CardContent className="pt-[24px] flex flex-col h-full">
                <div className="flex gap-1 mb-4 text-[#F0A030] fill-[#F0A030]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < review.rating ? "fill-current" : "fill-none text-[#E5E7EB]"} />
                  ))}
                </div>
                <p className="text-[14px] text-[#4A4A6A] leading-[1.7] italic flex-1 mb-6">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={review.photo} alt={review.name} className="w-[40px] h-[40px] rounded-full object-cover border border-[#E5E7EB]" />
                  <h4 className="text-[16px] font-semibold text-[#1A1A2E]">{review.name}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
