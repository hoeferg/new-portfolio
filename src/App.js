import './App.css';
import Header from "./Header/Header.js"
import Home from "./Home/Home.js"
import About from "./AboutMe/About.js"
import Contact from "./Contact/Contact.js"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
      
    </div>
  );
}


