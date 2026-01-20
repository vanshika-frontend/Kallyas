import "./style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import MultiPurpose from './components/MultiPurpose'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Reviews from "./components/Reviews"
import Footer from "./components/footer"
import DemoButton from "./components/DemoButton"
import { ParallaxProvider } from "react-scroll-parallax";


function App() {


  return (
    <>

    <ParallaxProvider>
      <DemoButton />
     <Navbar />
     <Service />
     <MultiPurpose />
     <Reviews />
     <Footer />
    </ParallaxProvider>
    </>
  )
}

export default App
