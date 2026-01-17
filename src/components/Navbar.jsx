import React, { useEffect, useRef, useState } from "react";
import Icon from "../Images/kallyas-logo.svg";
import { IoArrowBack } from "react-icons/io5";
import { EnvatoIcon, Facebookwhite, LanguageIcon, LoginIcon, PrinterstWhite, QuoteIcon, SearchIcon, SupportIcon, TwitterWhiteIcon } from "../svg";
import Slider from "react-slick";
import QuoteModal from "../Modals/QuoteModal";

export default function Navbar() {
  const [hideTopNav, setHideTopNav] = useState(false);
  const [menutoggle, setMenuToggle] = useState(false);
  const [QuoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHideTopNav(true);
      } else {
        setHideTopNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
  };
  const scrollToServices = () => {
  const element = document.getElementById("services");
  const yOffset = -80; // navbar height
  const y =
    element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};


  return (
    <>

      {/* Mobile Menu */}
      <div className="md:hidden block  w-full z-[999] bg-[#000000d6]">

        <nav className="bg-[#000000d6] primaryfont w-full flex justify-between m-auto p-[15px]">
          <div className="flex flex-wrap gap-[20px] items-center">
            <div className='flex gap-[5px]' >
              <Facebookwhite />
              <TwitterWhiteIcon />
              <PrinterstWhite />
              <EnvatoIcon />
            </div>
            <div className="text-white text-[10px]">
              Questions? Call: 0900 800 900
            </div>
          </div>

          <div className="flex gap-[7px] text-white items-center text-[10px]">
            <LanguageIcon />
            <LoginIcon />
            <SupportIcon />
            <SearchIcon />
          </div>
        </nav>
        <div className="border-b border-[white] w-full max-w-[970px] mx-auto "></div>
        <div className="flex justify-center py-[20px]">
          <img src={Icon} alt="logo" />
        </div>
        <div className="border-b border-[white] w-full max-w-[970px] mx-auto "></div>
        <div className="flex justify-between items-center px-[20px] py-[20px]">
          <div onClick={() => setMenuToggle(!menutoggle)} className="lg:hidden block cursor-pointer">
            <div className="relative w-5 h-6">
              <span
                className={`absolute left-0 top-0 h-[3px] w-full bg-black rounded transition-all duration-300
                     ${menutoggle ? "rotate-120 top-[10px]" : ""}`}
              />
              <span
                className={`absolute left-0 top-[10px] h-[3px] w-full bg-black rounded transition-all duration-300
                     ${menutoggle ? "-rotate-120 top-[10px]" : ""}`}
              />
              <span
                className={`absolute left-0 top-[20px] h-[3px] w-full bg-black rounded transition-all duration-300
                         ${menutoggle ? "opacity-0 " : ""}`}
              />
            </div>
          </div>
          <div className="relative w-[59px] h-[59px] bg-red-600 flex flex-col items-center justify-center text-white FreeQuoteHoverMenu" 
          onClick={() => setQuoteModalOpen(true)}>
            <p className="text-[17px]">FREE</p>
            <p className="text-[12px]">QUOTE</p>
            <div className="absolute top-full left-0 w-full h-[5px] z-40">
              <QuoteIcon />
            </div>
          </div>
              {QuoteModalOpen && (
              <QuoteModal close={() => setQuoteModalOpen(false)}/>
            ) }
          <div
            className={`fixed top-0 right-0 h-screen w-full bg-white transform transition-transform duration-300 ease-in-out z-[1] ${menutoggle ? "translate-x-0" : "translate-x-full"}`}>
            <div className="p-[20px]" onClick={() => setMenuToggle(false)}>
              <IoArrowBack size={24} />
            </div>
            <ul className=" divide-y divide-gray-200 flex flex-col gap-[16px] p-6 mt-[20px]">
              <li onClick={() => setMenuToggle(false)}><a href="#home">HOME</a></li>
              <li onClick={() => setMenuToggle(false)}><a href="#services">SERVICES</a></li>
              <li onClick={() => setMenuToggle(false)}><a href="#OurCompany">OUR COMPANY</a></li>
              <li onClick={() => setMenuToggle(false)}><a href="#portfolio">PORTFOLIO</a></li>
              <li onClick={() => setMenuToggle(false)}><a href="#process">PROCESS</a></li>
              <li onClick={() => setMenuToggle(false)}><a href="#partners">PARTNERS</a></li>
              <li onClick={() => setMenuToggle(false)}><a href="#blog">BLOG</a></li>
              <li onClick={() => setMenuToggle(false)}><a href="#Contact">CONTACT</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Header */}
      <div className="headers" id="home">
        <div className="headersbg">
        </div>
        {/* fIRST NAVBAR */}
        <div
          className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out
                      ${hideTopNav ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
        >
          <nav className="hidden primaryfont md:w-full lg:max-w-[1170px] max-w-[750px] md:flex md:justify-between md:m-auto p-[10px]">
            <div className="flex gap-[20px] items-center">
              <div className='flex gap-[5px]' >
                <Facebookwhite />
                <TwitterWhiteIcon />
                <PrinterstWhite />
                <EnvatoIcon />
              </div>
              <div className="text-white text-[12px]" >
                Questions? Call: 0900 800 900
              </div>
            </div>

            <div className="flex gap-[10px] text-white items-center text-[11px]">
              <p>LANGUAGES</p>
              <p>LOGIN</p>
              <p>SUPPORT</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37" /></svg>
            </div>
          </nav>

          <div className="hidden md:block md:border-b md:border-[#dad0d061] md:w-full md:max-w-[1170px] md:mx-auto "></div>
        </div>


        {/* SECOND NAVBAR */}
        <div
          className={`hidden md:block md:fixed md:left-0 md:w-full md:z-40 md:transition-all md:duration-500  md:z-[45]
          ${hideTopNav ? "md:top-0" : "md:top-[52px]"}`}
        >
          <div className="w-full lg:max-w-[1170px] max-w-[750px]   flex justify-between m-auto p-[10px] primaryfont items-center">
            <div className="flex items-center gap-[10px]">
              <img src={Icon} alt="logo" />
              <div onClick={() => setMenuToggle(!menutoggle)} className="lg:hidden block cursor-pointer">
                <div className="relative w-5 h-6">
                  <span
                    className={`absolute left-0 top-0 h-[3px] w-full bg-black rounded transition-all duration-300
                     ${menutoggle ? "rotate-120 top-[10px]" : ""}`}
                  />
                  <span
                    className={`absolute left-0 top-[10px] h-[3px] w-full bg-black rounded transition-all duration-300
                     ${menutoggle ? "-rotate-120 top-[10px]" : ""}`}
                  />
                  <span
                    className={`absolute left-0 top-[20px] h-[3px] w-full bg-black rounded transition-all duration-300
                         ${menutoggle ? "opacity-0 " : ""}`}
                  />
                </div>
              </div>
              {/* Mobile Menu */}
              <div
                className={`lg:hidden fixed top-0 right-0 h-screen w-[50%] bg-white transform transition-transform duration-300 ease-in-out z-[4] ${menutoggle ? "translate-x-0" : "translate-x-full"}`}>
                <ul className=" divide-y divide-gray-200 flex flex-col gap-[16px] p-6 mt-[20px]">
                  <li onClick={() => setMenuToggle(false)}><a href="#home">HOME</a></li>
                  <li onClick={() => setMenuToggle(false)}><a href="#services">SERVICES</a></li>
                  <li onClick={() => setMenuToggle(false)}><a href="#OurCompany">OUR COMPANY</a></li>
                  <li onClick={() => setMenuToggle(false)}><a href="#portfolio">PORTFOLIO</a></li>
                  <li onClick={() => setMenuToggle(false)}><a href="#process">PROCESS</a></li>
                  <li onClick={() => setMenuToggle(false)}><a href="#partners">PARTNERS</a></li>
                  <li onClick={() => setMenuToggle(false)}><a href="#blog">BLOG</a></li>
                  <li onClick={() => setMenuToggle(false)}><a href="#Contact">CONTACT</a></li>
                </ul>
              </div>
            </div>

            <ul className=" hidden lg:flex lg:gap-[20px] lg:text-[11px] text-white cursor-pointer">
              <li className="relative z-[10] px-[9px] py-[5px] transition-transform duration-300 ease-out hover:scale-110 hover:bg-red-600 hover:text-white 
              rounded "><a href="#home">HOME</a></li>
              <li className="px-[9px] py-[5px] transition-transform duration-300 ease-out hover:scale-110 hover:bg-red-600 hover:text-white
               hover:rounded" ><a href="#services">SERVICES</a></li>
              <li className="px-[9px] py-[5px] transition-transform duration-300 ease-out hover:scale-110 hover:bg-red-600 hover:text-white
                 hover:rounded"><a href="#OurCompany">OUR COMPANY</a></li>
              <li className="px-[9px] py-[5px] transition-transform duration-300 ease-out hover:scale-110 hover:bg-red-600 hover:text-white
               hover:rounded"><a href="#portfolio">PORTFOLIO</a></li>
              <li className="px-[9px] py-[5px] transition-transform duration-300 ease-out hover:scale-110 hover:bg-red-600 hover:text-white
              hover:rounded"><a href="#process">PROCESS</a></li>
              <li className="px-[9px] py-[5px] transition-transform duration-300 ease-out hover:scale-110 hover:bg-red-600 hover:text-white
                 hover:rounded"><a href="#partners">PARTNERS</a></li>
              <li className="px-[9px] py-[5px] transition-transform duration-300 ease-out hover:scale-110 hover:bg-red-600 hover:text-white
               hover:rounded"><a href="#blog">BLOG</a></li>
              <li className="px-[9px] py-[5px] transition-transform duration-300 ease-out hover:scale-110 hover:bg-red-600 hover:text-white
                 hover:rounded"><a href="#Contact">CONTACT</a></li>
            </ul>



            <div className="relative w-[59px] h-[59px] bg-red-600 flex flex-col items-center justify-center text-white hover:bg-white hover:text-[black] cursor-pointer FreeQuoteHover" onClick={() => setQuoteModalOpen(true)}>
              <p className="text-[17px]">FREE</p>
              <p className="text-[12px]">QUOTE</p>
              <div className="absolute top-full left-0 w-full h-[5px] z-40">
                <QuoteIcon />
              </div>
            </div>
            {QuoteModalOpen && (
              <QuoteModal close={() => setQuoteModalOpen(false)}/>
            ) }
          </div>
        </div>



        {/* BackgroundImage Slider */}
        <div className="slider-container  h-screen relative ">

          <Slider {...settings} >
            {/* Ist BackgroundImage */}
            <div className="background">
              <div className="primaryfont relative w-full lg:max-w-[1170px] max-w-[750px] h-full mx-auto flex items-center px-[20px] pt-[150px]">
                <div className="text-white w-full Slide">
                  <p className="mb-[15px] text-white/80 WebData">
                    WEB • MOBILE • ECOMMERCE
                  </p>

                  <h1 className="text-[40px] leading-[120%] font-light EdgeTheme">
                    KALLYAS IS A CUTTING EDGE THEME <br />
                    THAT WILL <span className="font-bold">ROCK WORLD ROCK</span>
                  </h1>

                  <div className="w-[60px] h-[2px] bg-white my-[25px]"></div>

                  <p className="text-[18px] text-white/90 mb-[35px] PlusBtn">
                    Plus your customers will love it!
                  </p>

                  <div className="flex gap-[10px] PlusBtn">
                    <button className="bg-red-600 hover:bg-red-700 px-[20px] py-[10px] text-white text-[13px] rounded-[3px] cursor-pointer">
                      BUY NOW
                    </button>

                    <button className="border border-white px-[25px] py-[10px] text-white text-[13px] rounded-[3px] cursor-pointer">
                      MORE DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Second BackgroundImage */}
            <div className="Secondbackground ">
              <div className="h-screen w-full max-w-[1170px] mx-auto flex items-center px-[40px] ">

                <div className="flex  flex-col Slide">
                  <div className="Decade sm:text-[26px] text-[15px] EdgeTheme">
                    FOR OVER A DECADE
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap sm:ml-0 ml-[20px]  gap-[10px] items-center PlusBtn">
                    <div className="Deliver sm:text-[26px] text-[15px]">WE DELIVER RESULTS</div>
                    <div className="portifolio sm:text-[26px] text-[15px]">SEE PORTFOLIO</div>
                  </div>
                  <div className="worldwide hidden sm:block text-[19px] PlusBtn">FOR HUNDREDS OF SUCCESSFUL BUSINESSES WORLDWIDE</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

      </div>

      {/* SWISS ARMY Box  */}
      <div className="px-[16px] lg:mt-0 mt-[40px] actionBox">

        <div className="SWISS-ARMY w-full max-w-[1170px] m-auto ">
          <div className="relative flex lg:flex-nowrap flex-wrap text-center lg:text-start lg:justify-between  justify-center gap-[20px] w-full max-w-[1170px] m-auto  bg-[#cd2122] text-white z-[999] ">
            <div className="max-w-[700px]" >
              <h2 className="text-[20px]">KALLYAS THEME, THE SWISS ARMY SECRET FOR BUILDING THE MODERN , FUTURE-PROOF WEBSITE.</h2>
              <p className="mt-[20px]">Packed with all the gems and goodies, Kallyas is our flagship WordPress Theme.</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-[9px] ">
              <button className="px-[20px] py-[9px]  text-[14px] text-white bg-transparent border border-white rounded cursor-pointer">JOIN OUR NEWSLETTER</button>
              <button className="px-[20px] py-[9px] text-[14px] bg-white text-[black] rounded hover:bg-[#d8cece] cursor-pointer">BUY NOW</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}



