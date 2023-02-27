import './App.css';
import Header from "./components/Header/Header.js"
import Home from "./Pages/Home/Home.js"
import About from "./Pages/AboutMe/About.js"
import Skills from "./Pages/Skills/Skills.js"
import Contact from "./Pages/Contact/Contact.js"
import Footer from "./components/Footer/Footer.js"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  );
}


