import React from "react";
import BestFeature from "../components/Featured/BestFeature";
import Categories from "../components/Featured/Categories";
import Feature from "../components/Featured/Feature";
import NewFeature from "../components/Featured/NewFeatures";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

export const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Feature />
        <NewFeature />
        <BestFeature />
        <Categories />
        <Footer />
      </main>
    </>
  );
};
