import { useState } from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
