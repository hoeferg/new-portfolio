import { useRef } from 'react';
import './App.css';
import Header from "./components/Header/Header.js";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/AboutMe/About.js";
import Skills from "./Pages/Skills/Skills.js";
import Contact from "./Pages/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import music from "./photos/music.jpg";
// import clarient from "./photos/clarient.jpg";
// import piano from "./photos/piano.jpg";
import sax from "./photos/sax.jpg";

export default function App() {
  const ref = useRef();

  return (
    <div className="App">
      <Parallax pages={4} ref={ref}>
      <Header />
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${sax})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${music})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <Home/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >

          <About />
        <Skills />
        <Contact />
        <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}


