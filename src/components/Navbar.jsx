import React, { useEffect, useRef, useState } from "react";
import Icon from "../Images/kallyas-logo.svg";
import { IoArrowBack } from "react-icons/io5";
import { CloseIcon, EnvatoIcon, Facebookwhite, LanguageIcon, LoginIcon, PrinterstWhite, QuoteIcon, SearchFirstIcon, SearchIcon, SupportIcon, TopArrowImgIcon, TwitterWhiteIcon } from "../svg";
import Slider from "react-slick";
import QuoteModal from "../Modals/QuoteModal";
import { US, FR, ES } from "country-flag-icons/react/3x2";
import LoginModal from "../Modals/LoginModal";



export default function Navbar() {
  const [menutoggle, setMenuToggle] = useState(false);
  const [QuoteModalOpen, setQuoteModalOpen] = useState(false);
  const [LoginModalOpen, SetLoginModalOpen] = useState(false);
  const [SupportModalOpen, SetSupportModalOpen] = useState(false);
  const [SearchOpen, SetSearchOpen] = useState(false);
  const [fixSecondNav, setFixSecondNav] = useState(false);
  const [showBtn, setShowBtn] = useState("myBtn none");
  const[searchInput, setSearchInput] = useState("");


  //For Header 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setFixSecondNav(true);
      } else {
        setFixSecondNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For LoginModal
  useEffect(() => {
    if (LoginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [LoginModalOpen]);


  // For Slider
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

  // Top Buttton
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn("myBtn");
    } else {
      setShowBtn("none");
    }
  }


  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  return (
    <>
      {/* Support Modal */}
      <div className={` relative w-full z-50 bg-[#f4f2ef]   overflow-hidden transition-all duration-500 ease-in-out  
          ${SupportModalOpen ? "max-h-[200px]" : "max-h-0"}
        `}>
        <div className="relative">
          <button className="w-[40px] h-[40px] text-white rounded-full cursor-pointer  bg-[#000000ab] text-[20px] absolute xl:top-13 xl:right-10 top-0  right-0" onClick={() => SetSupportModalOpen(false)}>
            &times;
          </button>
        </div>

        <div className='max-w-[1170px] mx-auto flex flex-wrap md:flex-nowrap justify-between items-center  pb-[25px] px-[20px] py-[30px] gap-[30px]'>
          <div className='px-[20px]'>
            <h1 className='text-[black] text-[18px] mb-[10px]'>HOW TO SHOP</h1>
            <div className='flex flex-wrap md:flex-nowrap  gap-[30px]'>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-red-600 text-[black]text-sm font-semibold">
                  1
                </span>
                <p className="text-[black] text-[14px]">
                  Login or create new account.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-red-600 text-[black]text-sm font-semibold">
                  2
                </span>
                <p className="text-[black] text-[14px]">
                  Review your order
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-red-600 text-[black]text-sm font-semibold">
                  3
                </span>
                <p className="text-[black] text-[14px]">
                  Payment & FREE shipment
                </p>
              </div>
            </div>
            <p className='text-[black] text-[12px] mt-[10px]'>If you still have problems, please let us know, by sending an email to support@website.com . Thank you!</p>
          </div>
          <div className="md:px-0 px-[20px]">
            <h1 className='text-[black] text-[18px]'>SHOWROOM HOURS</h1>
            <p className='text-[black] text-[15px]'>Mon-Fri 9:00AM - 6:00AM</p>
            <p className='text-[black] text-[15px]'>Sat - 9:00AM-5:00PM</p>
            <p className='text-[black] text-[15px]'>Sundays by appointment only!</p>
          </div>
        </div>

      </div>


      {/* Mobile Menu */}
      <div className="md:hidden block  w-full z-40  bg-[#000000d6]" >

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
            <div className="relative group">
              <LanguageIcon />
              <div className="absolute hidden group-hover:block bg-white p-[10px] rounded-[2px]">
                <div className="flex gap-[6px] text-gray-800">
                  <US className="w-[20px] h-[20px]" /> <p>ENGLISH</p>
                </div>
                <div className="flex gap-[6px]  text-gray-800">
                  <FR className="w-[20px] h-[20px]" />  <p>FRANCAIS</p>
                </div>
                <div className="flex gap-[6px]  text-gray-800">
                  <ES className="w-[20px] h-[20px]" /> <p>ESPANOL</p>
                </div>
              </div>
            </div>

            <div onClick={() => SetLoginModalOpen(true)}>
              <LoginIcon />
            </div>
            {LoginModalOpen && (
              <LoginModal closeLogin={() => SetLoginModalOpen(false)} />
            )}
            <div onClick={() => SetSupportModalOpen(true)}>
              <SupportIcon />
            </div>
            <div onClick={() => SetSearchOpen(true)}>
              <SearchIcon />
            </div>
            {SearchOpen && (
              <>
                <div className="bg-white w-full px-[20px] pb-[30px] absolute top-[20px] right-0">
                  <div className="text-[black] text-[15px] flex justify-end pt-[10px] cursor-pointer" onClick={() => SetSearchOpen(false)}>&times;</div>
                  <div className="flex justify-between">
                    <input placeholder="SEARCH" className="placeholder-gray-500" /> <SearchFirstIcon />
                  </div>
                  <div className="border-b border-gray-300 pt-[5px]"></div>
                </div>

              </>
            )}
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
            <div className="absolute top-full left-0 w-full h-[5px] z-35">
              <QuoteIcon />
            </div>
          </div>
          {QuoteModalOpen && (
            <QuoteModal close={() => setQuoteModalOpen(false)} />
          )}
          <div
            className={`fixed top-0 right-0 h-screen w-full bg-white transform transition-transform duration-300 ease-in-out z-42 ${menutoggle ? "translate-x-0" : "translate-x-full"}`}>
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


      {/* Header Slider */}
      <div className="headers" id="home">
        <div className="slider-container  h-screen relative ">
          {/* Slider */}
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
                    <a href="https://themeforest.net/item/kallyas-responsive-multipurpose-wordpress-theme/4091658?license=regular&open_purchase_for_item_id=4091658&purchasable=source&ref=hogash" target="_blank">
                      <button className="bg-red-600 hover:bg-red-700 px-[20px] py-[10px] text-white text-[13px] rounded-[3px] cursor-pointer">
                        BUY NOW
                      </button>
                    </a>

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

          {/* Header */}
          <div className="absolute top-0 left-0 w-full z-35 ">
            <div className={`headersbg  ${fixSecondNav ? "fixed" : "absolute "} `}></div>
            <div className="mx-auto lg:max-w-[1170px] max-w-[750px] ">

              {/* fIRST NAVBAR */}
              <div
                className={` transition-all duration-500 ease-in-out  z-40 relative
                  
            `}
              >
                <nav className="hidden primaryfont  md:flex md:justify-between md:m-auto px-[10px]  py-[15px]">
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

                  <div className="relative flex gap-[10px] text-white items-center text-[11px]">
                    <div className="relative group">
                      <p className="cursor-pointer">LANGUAGES</p>
                      <div className="absolute hidden group-hover:block bg-white p-[10px] rounded-[2px] cursor-pointer">
                        <div className="flex gap-[6px] text-gray-800 hover:bg-gray-200">
                          <US className="w-[20px] h-[20px]" /> <p>ENGLISH</p>
                        </div>
                        <div className="flex gap-[6px]  text-gray-800 hover:bg-gray-200">
                          <FR className="w-[20px] h-[20px]" />  <p>FRANCAIS</p>
                        </div>
                        <div className="flex gap-[6px]  text-gray-800 hover:bg-gray-200">
                          <ES className="w-[20px] h-[20px]" /> <p>ESPANOL</p>
                        </div>
                      </div>
                    </div>
                    <p onClick={() => SetLoginModalOpen(true)} className="cursor-pointer">LOGIN</p>

                    <p onClick={() => SetSupportModalOpen(true)} className="cursor-pointer">SUPPORT</p>

                    {/* <div onClick={() => SetSearchOpen(true)} className="cursor-pointer">
                      <SearchIcon />
                    </div>
                    {SearchOpen && (
                      <>
                        <div className="absolute top-[25px] right-0  bg-white w-full px-[20px] pb-[30px] z-40">
                          <div className="text-[black] text-[15px] flex justify-end pt-[10px] cursor-pointer" onClick={() => SetSearchOpen(false)}>&times;</div>
                          <div className="flex">
                            <input placeholder="SEARCH" className="placeholder-gray-500" /> <SearchFirstIcon />
                          </div>
                          <div className="border-b border-gray-300 pt-[5px]"></div>
                        </div>
                      </>
                    )} */}

                   
                      {SearchOpen ? (
                         <div  onClick={() => SetSearchOpen(false)} className="cursor-pointer bg-white w-[25px] h-[25px] flex items-center justify-center">
                          <CloseIcon />
                         </div>
                      ) : (
                        <div onClick={() => SetSearchOpen(true)} className="cursor-pointer bg-[#00000059] w-[25px] h-[25px] flex items-center justify-center">
                          <SearchIcon />
                        </div>
                      )}
                       {SearchOpen && (
                      <>
                        <div className="absolute top-[25px] right-0  bg-white w-full px-[20px] py-[30px] z-40">
                          <div className="flex cursor-pointer">
                            <input placeholder="SEARCH" type="text"  value={searchInput}    onChange={(e) => setSearchInput(e.target.value)} className="placeholder-gray-500 border-0 outline-none focus:outline-none text-[black]" /> 
                            <SearchFirstIcon />
                          </div>
                          <div className="border-b border-gray-300 pt-[5px]"></div>
                        </div>
                      </> 
                    )}
                  

                  </div>
                </nav>

                <div className="hidden md:block md:border-b md:border-[#dad0d061] md:w-full md:max-w-[1170px] md:mx-auto "></div>
              </div>

              {/* SECOND NAVBAR */}
              <div
                className={`hidden md:block   z-35  md:transition-all md:duration-500  
                   ${fixSecondNav ? "fixed top-0 left-0 w-full" : "relative "} `}
              >
                <div className="  flex justify-between m-auto p-[10px] primaryfont items-center lg:max-w-[1170px] max-w-[750px] mx-auto">
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
                      className={`lg:hidden fixed top-0 right-0 h-screen w-[50%] bg-white transform transition-transform duration-300 ease-in-out z-38 ${menutoggle ? "translate-x-0" : "translate-x-full"}`}>
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

                  <ul className=" hidden lg:flex lg:gap-[10px] lg:text-[11px] text-white cursor-pointer">
                    <li><a href="#home" className="ListNavbar">HOME</a></li>
                    <li><a href="#services" className="ListNavbar">SERVICES</a></li>
                    <li><a href="#OurCompany" className="ListNavbar">OUR COMPANY</a></li>
                    <li><a href="#portfolio" className="ListNavbar">PORTFOLIO</a></li>
                    <li><a href="#process" className="ListNavbar">PROCESS</a></li>
                    <li><a href="#partners" className="ListNavbar">PARTNERS</a></li>
                    <li><a href="#blog" className="ListNavbar">BLOG</a></li>
                    <li><a href="#Contact" className="ListNavbar">CONTACT</a></li>
                  </ul>



                  <div className="relative w-[59px] h-[59px] bg-red-600 flex flex-col items-center justify-center text-white hover:bg-white hover:text-[black] cursor-pointer FreeQuoteHover" onClick={() => setQuoteModalOpen(true)}>
                    <p className="text-[17px]">FREE</p>
                    <p className="text-[12px]">QUOTE</p>
                    <div className="absolute top-full left-0 w-full h-[5px] z-35">
                      <QuoteIcon />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
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
              <a href="#footer">
                <button className="px-[20px] py-[9px]  text-[14px] text-white bg-transparent border border-white rounded cursor-pointer">JOIN OUR NEWSLETTER</button>
              </a>
              <a href="/" target="_blank">
                <button className="px-[20px] py-[9px] text-[14px] bg-white text-[black] rounded hover:bg-[#d8cece] cursor-pointer">BUY NOW</button>
              </a>
            </div>
          </div>

        </div>
      </div>


      {/* Top Btn */}
      <div
        onClick={topFunction}
        id="myBtn"
        className={showBtn} >

        <TopArrowImgIcon />
        Top

      </div>


      {QuoteModalOpen && (
        <QuoteModal close={() => setQuoteModalOpen(false)} />
      )}
      {LoginModalOpen && (
        <LoginModal closeLogin={() => SetLoginModalOpen(false)} />
      )}

    </>
  );
}



