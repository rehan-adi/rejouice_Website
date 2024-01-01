import { useRef } from "react";
import Cursor from "./Components/Cursor";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import ImgVideo from "./Components/ImgVideo";
import Navbar from "./Components/Navbar";
import Page from "./Components/Page";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import BgAnimation from "./Components/BgAnimation"
import SlidingImage from "./Components/SlidingImage";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './locomotive-scroll.css'

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: 'vertical',
      }}
      watch={[
        
      ]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Navbar />
        <Cursor />
        <Hero />
        <Page />
        <Page2 />
        <ImgVideo />
        <Page3 />
        <BgAnimation />
        <Page4 />
        <SlidingImage />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
