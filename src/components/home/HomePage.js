import Footer from "../Footer";
import Header from "../Header";
import Features from "./Features";
import Hero from "./Hero";

import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const fetchDatas = async () => {
    const data = await axios.get("/");
    console.log(data);
  };

  useEffect(() => {
    fetchDatas();
  });
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;
