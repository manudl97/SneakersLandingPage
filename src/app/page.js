"use client";
import React from "react";
import About from "./components/About";
import CircleCards from "./components/CircleCards";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CircleCards />
      <Products/>
      <About/>
      <Contact/>
      <Footer/>
    
    </>
  );
}
