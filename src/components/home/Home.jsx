import React from "react";
import Hero from "./hero/Hero";
import HAbout from "./HAbout";
import Hblog from "./Hblog";
import Testimonal from "./testimonal/Testimonal";
import Hprice from "./Hprice";
import AboutCard from "../about/AboutCard";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  );
};

export default Home;
