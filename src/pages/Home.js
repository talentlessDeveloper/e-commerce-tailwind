<<<<<<< HEAD
import React,{useEffect} from 'react'
import { client } from '../lib/sanitySetup'
import { fetchAllProductsquery } from '../lib/query'
=======
import React from "react";
import BestFeature from "../components/Featured/BestFeature";
import Categories from "../components/Featured/Categories";
import Feature from "../components/Featured/Feature";
import NewFeature from "../components/Featured/NewFeatures";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
>>>>>>> d25b8093df1683a07c1b6fad9307b034d6143b64

export const Home = () => {
  useEffect(()=>{
    client.fetch(fetchAllProductsquery)
    .then(data => console.log(data))
  });
  
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
