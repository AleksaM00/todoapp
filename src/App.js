import React, { Fragment } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Fragment className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </Fragment>
  );
}

export default App;