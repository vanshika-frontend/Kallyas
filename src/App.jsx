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

function App() {


  return (
    <>

      <DemoButton />
     <Navbar />
     <Service />
     <MultiPurpose />
     <Reviews />
     <Footer />

    </>
  )
}

export default App
