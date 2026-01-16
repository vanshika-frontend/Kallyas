import React from 'react'
import { Facebookwhite, Internetwhite, Linkedin, PrinterstWhite, TwitterIcon } from '../svg'
import kallyas from "../Images/kallyas-logo.svg"
import SimpleMap from './Map'
import office from "../Images/office-building.jpg"



export default function Footer() {
    return (
        <>
            <SimpleMap />

            {/* <div className='w-full max-w-[350px] z-[999] absolute top-0 '>
               <img src={office} className='w-[350px]'/>
               <div className='p-[30px] mb-[20px]'>

               <h1 className='text-[16px] text-[#343434]'>The Kallyas Theme</h1>
               <p className='text-[13px] pt-[20px]'>We’re a multi-featured small team, focused on designing and developing awesome themes and templates for</p>
               <p  className='text-[13px] '>multiple platforms such as WordPress or Joomla, as well others soon ( Magento, Open Cart etc. ).</p>
               </div>
            </div> */}
         
             {/* Footer Section */}
            <section className="bg-[#2f2f2f] w-full text-white  ">
                <div className="max-w-[1170px] mx-auto text-center pt-[80px] pb-[35px] px-[16px]">
                    <div className='max-w-[780px] mx-auto'>

                        <h2 className="text-[28px] font-bold ">
                            STAY TUNED!
                        </h2>

                        <p className=" mt-[10px] mx-auto text-[16px] pb-[35px]">
                            We'll do our best to deliver valuable updates and lots of great resources without invading your mailbox.
                        </p>


                        <div className="flex  justify-center gap-[10px] items-center">
                            <input
                                type="email"
                                placeholder="your.address@email.com"
                                className="w-full max-w-[610px]  py-[12px]  px-[15px] text-black rounded outline-none bg-white"
                            />

                            <button
                                className="bg-[#cd2122] w-full  max-w-[100px] text-white text-[12px] hover:bg-[black] px-[15px] py-[14px] rounded cursor-pointer"
                            >
                                JOIN US
                            </button>
                        </div>


                        <div className="flex justify-center gap-[10px] mt-[40px]">
                            <div className="w-[45px] h-[45px] bg-[#3b5998] flex items-center justify-center rounded-[3px] hover:bg-[#272f42] cursor-pointer">
                                <Facebookwhite />
                            </div>
                            <div className="w-[45px] h-[45px] bg-[#55acee] flex items-center justify-center rounded-[3px] hover:bg-[#272f42] cursor-pointer">
                                <TwitterIcon />
                            </div>
                            <div className="w-[45px] h-[45px] bg-[#ff5a87] flex items-center justify-center rounded-[3px] hover:bg-[#272f42] cursor-pointer">
                                <Internetwhite />
                            </div>
                            <div className="w-[45px] h-[45px] bg-[#cb2027] flex items-center justify-center rounded-[3px] hover:bg-[#272f42] cursor-pointer">
                                <PrinterstWhite />
                            </div>
                            <div className="w-[45px] h-[45px] bg-[#0077b5] flex items-center justify-center rounded-[3px] hover:bg-[#272f42] cursor-pointer">
                                <Linkedin />
                            </div>
                        </div>
                    </div>



                    <div className=" mt-[60px] h-[4px] bg-[#444] "></div>


                    <div className="mt-[20px] flex flex-col md:flex-row flex-col-reverse justify-between items-center text-[#888] text-[13px]">
                        <div className='flex  gap-[10px]'>
                            <img src={kallyas} />

                            <p className='mt-[6px] text-[13px]'>
                                @ 2015 All rights reserved. Buy <span className="text-white">Kallyas WordPress Theme</span>.
                            </p>
                        </div>

                        <div className="flex gap-[20px] mt-[10px] md:mt-0 text-[11px] text-[#8b8c8d] md:pb-0 pb-[10px]">
                            <p>DISCLAIMER</p>
                            <p>SUPPORT POLICY</p>
                            <p>LEGAL</p>
                        </div>
                    </div>

                </div>
            </section>

        </>



    )
}
