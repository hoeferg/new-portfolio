// import { useRef } from 'react';
import './App.css';
import Header from "./components/Header/header";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Projects/project"
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/ContactForm";
import Footer from "./components/Footer/Footer";


export default function App() {
  // const ref = useRef();

  return (
    <div>
      <Header />
      <Home />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}


