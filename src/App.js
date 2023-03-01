import { useRef } from 'react';
import './App.css';
// import Header from "./components/Header/Header.js";
// import Home from "./Pages/Home/Home.js";
// import About from "./Pages/AboutMe/About.js";
// import Skills from "./Pages/Skills/Skills.js";
// import Contact from "./Pages/Contact/Contact.js";
// import Footer from "./components/Footer/Footer.js";



import { Parallax, ParallaxLayer } from '@react-spring/parallax';


export default function App() {
  const ref = useRef();

  return (
    <div className="App">
      {/* header */}
      <Parallax pages={4} ref={ref}>

        {/* Home */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${sax})`,
            backgroundSize: 'cover',
          }}
        > </ParallaxLayer>

        {/* projects */}
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${music})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        {/* skills */}
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
        </ParallaxLayer>

        {/* Contact Me */}
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(2)}
        >
        </ParallaxLayer>
      
      </Parallax>
    </div>
  );
}


