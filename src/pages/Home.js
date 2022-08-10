import React from "react";
import BestFeature from "../components/Featured/BestFeature";
import Feature from "../components/Featured/Feature";
import NewFeature from "../components/Featured/NewFeatures";
import Hero from "../components/Hero/Hero";

export const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Feature />
        <NewFeature />
        <BestFeature />
        <div className="App text-center text-3xl font-bold underline">
          ECOMMERCE WITH PRINCE
        </div>
      </main>
    </>
  );
};
