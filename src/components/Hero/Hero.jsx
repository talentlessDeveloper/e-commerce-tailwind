import React from "react";
import heroBg from "../../assets/background-hero.png";
import Search from "./Search";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "100vh",
      }}
    >
      <div className="mart-container flex justify-center items-center  h-full">
        <Search />
      </div>
    </section>
  );
}

export default Hero;
