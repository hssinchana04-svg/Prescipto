import React, { useContext } from "react";
import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { Specialties } from "../components/home/Specialties";
import { TopDoctors } from "../components/home/TopDoctors";
import { HowItWorks } from "../components/home/HowItWorks";
import { Testimonials } from "../components/home/Testimonials";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Specialties />
      <TopDoctors doctors={doctors} />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
