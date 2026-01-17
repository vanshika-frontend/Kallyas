import React from 'react'
import icoworld from "../Images/ico-world.svg"
import icoresult from "../Images/ico-results.svg"
import { BoundingBoxIcon, ComputerIcon, DownArrowIcon, DownArrowImgIcon, GraphicIcon, InternetIcon } from '../svg'

export default function Service() {

    return (
        <>

            {/* OUR SERVICES */}
            <section className="py-20 bg-gray-50" id="services">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-16">
                        <h2 className="text-[38px] font-bold text-gray-600 mb-4 tracking-wider">
                            OUR SERVICES
                        </h2>
                        <div className="flex justify-center gap-2 mb-6">
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                        <p className="text-gray-400 text-[18px] tracking-wide uppercase">
                            We're good at some stuff and very good at other stuff
                        </p>
                    </div>

                    <div className='w-full lg:max-w-[1170px] max-w-[750px] m-auto grid grid-cols-1  lg:grid-cols-3 gap-[20px]' >
                        <div className='Servicehover'>
                            <div className=' rounded-[5px]  bg-[#f3f2f2] p-[30px]  z-10 relative '>
                                <ComputerIcon />
                                <h2 className='text-[22px] my-[15px] lg:text-left text-center'>Web development</h2>
                                <p className='text-[13px]  lg:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil alias illo rem, impedit soluta quasi error.</p>
                            </div>
                            <div className='ServicehoverData rounded-[3px] p-[30px]   '>
                                <ComputerIcon />
                                <h2 className='text-[22px] my-[15px] lg:text-left text-center'>Web development</h2>
                                <p className='text-[13px]  lg:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil alias illo rem, impedit soluta quasi error.</p>
                                <ul className="divide-y divide-gray-200 mt-[10px]">
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Content management systens
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Virtual shops and ecommerce
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Business Cards
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Presentation websites
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Online catalogues
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Portal systems
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        & any other dynamic website
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='Servicehover'>
                            <div className=' rounded-[3px]  bg-[#f3f2f2] p-[30px] z-10 relative '>
                                <GraphicIcon />
                                <h2 className='text-[22px] my-[15px]  lg:text-left text-center'>graphic design</h2>
                                <p className='text-[13px]  lg:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil alias illo rem, impedit soluta quasi error.</p>
                            </div>
                            <div className='ServicehoverData rounded-[3px]  bg-[#f3f2f2] p-[30px]'>
                                <GraphicIcon />
                                <h2 className='text-[22px] my-[15px]  lg:text-left text-center'>graphic design</h2>
                                <p className='text-[13px]  lg:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil alias illo rem, impedit soluta quasi error.</p>
                                <ul className="divide-y divide-gray-200 mt-[10px]">
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Logo design
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Flyers & Brochures
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Business Cards
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Stationery Design
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Powerpoint presentation
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Print Ads / Magazine
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Banners
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className='Servicehover'>
                            <div className=' rounded-[3px]  bg-[#f3f2f2] p-[30px] z-10 relative '>
                                <InternetIcon />
                                <h2 className='text-[22px] my-[8px]  lg:text-left text-center'>internet marketing</h2>
                                <p className='text-[13px]  lg:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil alias illo rem, impedit soluta quasi error.</p>
                            </div>
                            <div className='ServicehoverData rounded-[3px]  bg-[#f3f2f2] p-[30px]'>
                                <InternetIcon />

                                <h2 className='text-[22px] my-[8px]  lg:text-left text-center'>internet marketing</h2>
                                <p className='text-[13px]  lg:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil alias illo rem, impedit soluta quasi error.</p>
                                <ul className="divide-y divide-gray-200 mt-[10px]">
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Search engine optimisation
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Search engine marketing
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Internet advertising
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Web analysis
                                    </li>
                                    <li className="py-3 text-red-500 text-[13px] cursor-pointer">
                                        Blog marketing
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>









                </div>

            </section>


            {/* IMAGES SECTION */}
            <div className="relative w-full overflow-hidden">
                <div className="primamryfont w-full flex flex-wrap relative z-10  ">

                    <div
                        className="relative w-full lg:w-1/2 h-[70vh] flex items-center justify-center lg:justify-end px-6 lg:pr-[50px] "
                    >

                        <div className="absolute inset-0 bg-black/70 lg:rounded-br-[70px] rounded-br-0"></div>


                        <div className="relative max-w-[540px] flex flex-col-reverse lg:flex-row items-center gap-[20px] text-center lg:text-right text-white " >
                            <div>
                                <h2 className="text-[24px] lg:text-[32px] font-bold mb-6">
                                    WE'RE WORLDWIDE
                                </h2>
                                <p className="text-[13px] ">
                                    Completely predominate backend functionalities whereas professional
                                    convergence. Enthusiastically deploy multimedia based metrics with
                                    turnkey networks.
                                </p>
                            </div>

                            <img
                                src={icoworld}
                                alt="world"
                                className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px]"
                            />
                        </div>
                    </div>

                    <div
                        className="relative w-full lg:w-1/2 h-[70vh] flex items-center justify-center lg:justify-start px-6 lg:pl-[50px]"
                    >

                        <div className="absolute inset-0 bg-red-600/80 lg:rounded-bl-[70px] rounded-bl-0"></div>

                        <div className="relative max-w-[500px] flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left text-white">
                            <img
                                src={icoresult}
                                alt="results"
                                className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px]"
                            />

                            <div>
                                <h2 className="text-[24px] lg:text-[32px] font-bold mb-6">
                                    INSTANT RESULTS
                                </h2>
                                <p className="text-[13px] leading-relaxed">
                                    Completely predominate backend functionalities whereas professional
                                    convergence. Enthusiastically deploy multimedia based metrics with
                                    turnkey networks.
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className='mx-auto   w-[100px] h-[100px] bg-[white] rotate-[-45deg] shadow-[inset_0_12px_20px_rgba(0,0,0,0.2)] absolute bottom-[-65px] left-1/2 -translate-x-1/2  flex items-center justify-center BoxDownArrow'>
                      
                            <DownArrowImgIcon />
                      
                    </div>




                </div>

            </div>





        </>
    )
}




