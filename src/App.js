import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </section>
  );
}

export default App;
