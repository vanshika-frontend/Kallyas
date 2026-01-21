import React from 'react'
import dannpetty from "../Images/dannpetty.jpg"
import madysondesigns from "../Images/madysondesigns.jpg"
import teleject from "../Images/teleject.jpg"
import { JqueryIcon, MySqlIcon, PhpIcon, PlusIcon, PSIcon, StarSvgIcon } from '../svg'
import picjumbo1 from "../Images/picjumbo.com_HNCK9101-370x200_c.jpg"
import picjumbo2 from "../Images/picjumbo.com_HNCK8963-370x200_c.jpg"
import picjumbo3 from "../Images/picjumbo.com_HNCK8377-370x200_c.jpg"
import { ScrollReveal } from '@allwells/react-scroll-reveal';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import logo2 from "../Images/logo2.svg"
import logo3 from "../Images/logo3.svg"
import logo4 from "../Images/logo4.svg"
import logo7 from "../Images/logo7.svg"



export default function Reviews() {
  return (
    <>
      {/* PARTNERS & REVIEWS */}

      <ParallaxBanner  >
        <ParallaxBannerLayer image="/bg-demos-prlx.jpg" speed={10} scale={[1, 1]} />
        <div className="ReviewsBackground w-full min-h-screen md:min-h-[750px] relative z-10 pt-[60px]  mt-[30px]" id='partners'>
          <div className='w-full max-w-[1170px]  text-center mx-auto flex justify-center items-center flex-col gap-[20px] pt-[35px] pb-[60px]'>
            <h2 className='text-white text-[24px]'>OUR PARTNERS & REVIEWS</h2>
            <div className="w-12 h-[2px] bg-white "></div>
          </div>

          <div className='w-full max-w-[1170px]  mx-auto flex flex-wrap md:flex-nowrap  gap-[30px] pb-[30px] px-[16px] '>
            <div>
              <div className='px-[40px] py-[50px] text-[14px] bg-[#00000042] text-white '>
                “Credibly innovate granular internal or "organic" sources whereas high standards in web readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with.
              </div>
              <div className='flex items-center gap-[10px]'>
                <div className=' rounded-[50%] p-[5px] bg-[gray]'>
                  <img src={dannpetty} className='w-[110px] h-[110px] rounded-[50%]' />
                </div>
                <div className='text-white'>
                  <h1 className='text-[16px]'>JIMMY FERRARA</h1>
                  <h3 className='text-[13px] text-gray-500'>GENERAL MANAGER</h3>
                  <div className='flex '>
                    <StarSvgIcon />
                    <StarSvgIcon />
                    <StarSvgIcon />
                    <StarSvgIcon />
                    <StarSvgIcon />
                  </div>
                </div>

              </div>

            </div>


            <div className='flex flex-wrap lg:flex-nowrap gap-[30px]'>

              <div>
                <div className='px-[40px] py-[50px] text-[14px] bg-[#00000042] text-white '>
                  “Credibly innovate granular internal or "organic" sources whereas high standards in web readiness.
                </div>
                <div className='flex items-center gap-[10px] mt-[10px]'>
                  <div className=' rounded-[50%] p-[5px] bg-[gray]'>
                    <img src={madysondesigns} className='w-[60px] h-[60px] rounded-[50%]' />
                  </div>
                  <div className='text-white'>
                    <h1 className='text-[14px]'>PAULA ANDREWS</h1>
                    <h3 className='text-[13px] text-gray-500'>SWIFT Inc.</h3>
                    <div className='flex '>
                      <StarSvgIcon />
                      <StarSvgIcon />
                      <StarSvgIcon />
                      <StarSvgIcon />
                      <StarSvgIcon />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className='flex items-center gap-[10px] mt-[30px] lg:mt-0'>
                  <div className=' rounded-[50%] p-[5px] bg-[gray]'>

                    <img src={teleject} className='w-[60px] h-[60px] rounded-[50%]' />
                  </div>
                  <div className='text-white'>
                    <h1 className='text-[14px]'>SAMMY BROWNS</h1>
                    <h3 className='text-[13px] text-gray-500'>CFO, Perfect Inc.</h3>
                    <div className='flex '>
                      <StarSvgIcon />
                      <StarSvgIcon />
                      <StarSvgIcon />
                      <StarSvgIcon />
                      <StarSvgIcon />
                    </div>
                  </div>
                </div>
                <div className='px-[40px] py-[50px] text-[14px] bg-[#00000042] text-white mt-[10px] '>
                  “Credibly innovate granular internal or "organic" sources whereas high standards in web readiness.
                </div>

              </div>
            </div>

          </div>
          <div className="w-full max-w-[1170px] m-auto h-[1px] bg-[#ffffff4a] "></div>
          <div className='w-full max-w-[1170px]  mx-auto flex-wrap lg:flex-nowrap  flex  justify-between gap-[30px] items-center z-[15] px-[16px]  my-[50px]'>
            <div>
              <h2 className='text-[18px] text-white '>TECHNOLOGIES</h2>
              <div className="w-15   h-[1px] bg-white  mt-[10px]"></div>
            </div>
            <div className='flex flex-1  justify-center gap-[30px] max-w-[889px] lg:min-w-0 min-w-[90vw] '>
              <div className='flex  justify-center flex-1 ImageIconAnimation'>
                <img src={logo2} alt='php'/>
              </div>


              <div className='hidden sm:flex justify-center flex-1 ImageIconAnimation'>
                  <img src={logo3} alt='hogesh'/>
              </div>



              <div className='hidden sm:flex justify-center flex-1 ImageIconAnimation'>
                 <img src={logo4} alt='html'/>
              </div>



              <div className='hidden xl:flex justify-center flex-1 ImageIconAnimation' >
                   <img src={logo7} alt='kallyas'/>
              </div>


            </div>
          </div>
        </div>
      </ParallaxBanner>


      {/* LATEST STORIES */}

      <section className="w-full max-w-[1170px] mx-auto px-4 py-16" id='blog'>

        <h2 className="text-red-600 text-[18px] uppercase mb-8">
          Latest Stories
        </h2>
        {/* Three Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <div>
            <div className="Storieshover relative ">
              <img
                src={picjumbo1}
                className="w-full max-w-[360px] h-[194px] object-cover"
                alt=""
              />
              <button
                className="hoverbtn absolute bottom-[10px] left-[-10px] bg-red-600 text-white text-[12px] px-[14px] py-[9px]"
              >
                Read more +
              </button>
              <div className='StorieshoverData'>
                <PlusIcon />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-4">
              21 August 2015 By stefan in <span className="italic text-[black]">Mobile</span>
            </p>

            <h3 className="mt-2 text-[16px] italic text-[black]">
              Enthusiastically administrate ubiquitous
            </h3>
          </div>


          <div>
            <div className="Storieshover relative ">
              <img
                src={picjumbo2}
                className="w-full max-w-[360px] h-[194px] object-cover"
                alt=""
              />
              <button
                className="hoverbtn absolute bottom-[10px] left-[-10px] bg-red-600 text-white text-[12px] px-[14px] py-[9px]"
              >
                Read more +
              </button>
              <div className='StorieshoverData'>
                <PlusIcon />
              </div>
            </div>

            <p className="text-[11px] text-gray-400 mt-4">
              07 August 2015 By stefan in <span className="italic text-[black]">Mobile, Technology</span>
            </p>

            <h3 className="mt-2 text-[16px] italic text-[black]">
              Uniquely productize next-generation opportunities
            </h3>
          </div>


          <div>
            <div className="Storieshover relative ">
              <img
                src={picjumbo3}
                className="w-full max-w-[360px] h-[194px] object-cover"
                alt=""
              />
              <button
                className="hoverbtn absolute bottom-[10px] left-[-10px] bg-red-600 text-white text-[12px] px-[14px] py-[9px]"
              >
                Read more +
              </button>
              <div className='StorieshoverData'>
                <PlusIcon />
              </div>
            </div>

            <p className="text-[11px] text-gray-400 mt-4">
              07 August 2015 By stefan in <span className="italic text-[black]">Mobile, Networking</span>
            </p>

            <h3 className="mt-2 text-[16px] italic text-[black]">
              Progressively repurpose cutting-edge models
            </h3>
          </div>

        </div>

        <div className="w-full max-w-[1170px] mx-auto h-[1px] bg-[gray] my-[30px]"></div>

        {/*  WORDPRESS THEME */}
        <div className='w-full max-w-[1170px] flex sm:flex-nowrap flex-wrap justify-between items-center'>
          <div className='md:max-w-[600px] sm:max-w-[400px] max-w-[600px] '>
            <h1 className='text-[#cd2122] text-[22px] mb-[10px] break-all'>ONE OF THE MOST COMPLETE WORDPRESS THEME</h1>
            <p className='text-[16px]'>We always had this statement and we're keeping our promise. Beside a powerful yet easy to use frontend Page Builder, Kallyas has packed inside lots of sweet features that wait to be discovered.</p>
          </div>
          <a href="https://themeforest.net/item/kallyas-responsive-multipurpose-wordpress-theme/4091658?license=regular&open_purchase_for_item_id=4091658&purchasable=source&ref=hogash" target='_blank'>
            <button className='text-[13px] px-[20px] py-[10px] text-white bg-[#cd2122] w-full sm:w-[200px] sm:mt-0 mt-[20px] hover:bg-[#7f1e1e] rounded cursor-pointer'>BUY KALLYAS NOW</button>
          </a>
        </div>


        {/*CORPORATE HEADQUARTERS */}
        <div className='w-full max-w-[1170px] pt-[90px] pb-[35px]'>
          <h1 className='text-[#000000] text-[26px]'>CORPORATE HEADQUARTERS</h1>
          <p className='text-[#444444] text-[16px] pb-[25px]'>Kallyas Innovations, Inc.</p>

          <div className='w-full max-w-[1170px] grid md:grid-cols-3 grid-cols-1 mx-auto'>
            <div className='text-[13px] pb-[20px] md:pb-0'>
              <p className='text-[#000000]'>145 Gates Avenue, NY 10018,</p>
              <p className='text-[#444444]'>United States</p>
            </div>
            <div className='text-[13px] pb-[20px] md:pb-0'>
              <p className='text-[#000000]'>Tel: 0345 / 5587 57</p>
              <p className='text-[#444444]'>Fax: 0345 / 5587 58</p>
            </div>
            <div className='text-[13px] pb-[20px] md:pb-0'>
              <p className='text-[#000000]'>Email: hq@thewebsite.com</p>
              <p className='text-[#444444]'>Web: www.thewebsite.com</p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
