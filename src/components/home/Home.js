import React from "react";
import Navbar from "../layout/Navbar";

import Footer from "../layout/footer/Footer";
import Header from "../layout/Header";
import About from "./about/About";
import Infos from "./info/Infos";
import Book from "./Book/Book";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <main>
        <About />
        <Infos />
        <Book />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
