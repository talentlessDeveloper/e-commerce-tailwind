import React from "react";
import BestFeature from "../components/Featured/BestFeature";
import Categories from "../components/Featured/Categories";
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
        <Categories />
        <div className="App text-center text-3xl font-bold underline">
          ECOMMERCE WITH PRINCE
        </div>
      </main>
    </>
  );
};
