import React, { useRef } from 'react'
import phone from "../Images/ptf1.png"
import img1 from "../Images/gpg1-270x270_c.jpg";
import img2 from "../Images/gpg8-270x270_c.jpg"
import { CorrectIcon, FacebookIcon, LeftarrowIcon, PrinterstIcon, RightarrowIcon, RocketIcon, SecondComputerIcon, StarIcon, StrokeIcon, TwitterIcon, YouTubeIcon } from '../svg';
import ptf13 from "../Images/ptf13.png"
import ptf5 from "../Images/ptf5.png"
import ptf7576 from "../Images/ptf7-768x576.png"
import ptf3576 from "../Images/ptf3-768x576.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Rightarrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <RightarrowIcon />
        </div>
    );
}


function Leftarrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <LeftarrowIcon />
        </div>
    );
}

export default function MultiPurpose() {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            swipeToSlide: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "200px",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerMode: true,
                          arrows: false,
                        centerPadding: "80px",

                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                          arrows: false,
                        centerPadding: "0px",
                        centerMode: false,
                    }
                }
            ]

        };
    return (
        <>
            {/* MULTI-PURPOSE */}
            <section className="max-w-[1170px] w-full mx-auto  pt-[110px] pb-[70px] ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-[15px]">

                    {/* LEFT CONTENT */}
                    <div className=''>
                        <h2 className="text-[18px] md:text-[38px] font-bold text-[#454545]">
                            TRULY MULTI-PURPOSE <span className="text-red-600">&</span> OUTSTANDING
                        </h2>
                        <div className="w-12 h-[2px] bg-[#53535363] my-6"></div>
                        <p className="text-[#535353] text-[18px]">
                            Dramatically expedite emerging ROI through diverse deliverables.
                            Phosphluorescently integrate covalent portals without cooperative
                            e-services.
                        </p>

                        <div className="mt-12 border-t border-[#53535363] pb-[20px] pt-[20px] flex flex-wrap md:flex-nowrap gap-6 items-start">
                            <img
                                src={phone}
                                className="md:w-40 md:h-28 object-cover w-full h-[200px]"
                            />

                            <p className="text-gray-500 text-[13px] mb-[20px] md:px-[15px] px-0">
                                Credibly build out-of-the-box functionalities before strategic
                                expertise. Globally unleash integrated collaboration and
                                idea-sharing without worldwide information.
                                <br /><br />
                                Competently reconceptualize resource maximizing relationships via
                                business synergy.
                            </p>
                        </div>
                        <div className='mt-[20px] text-[#535353] text-[16px] ' >
                            <h1 className='pt-[30px] pb-[15px]'>STAY IN TOUCH WITH US!</h1>
                            <div className='grid grid-cols-1 lg:grid-cols-4 gap-[20px] mt-[20px]'>
                                <div>
                                    <FacebookIcon />
                                    <p className='mt-[7px]'>We love to share new stuff!</p>
                                </div>
                                <div>
                                    <YouTubeIcon />
                                    <p className='mt-[7px]'>Watch our videos!</p>
                                </div>
                                <div>
                                    <TwitterIcon />
                                    <p className='mt-[7px]'>Follow our tweets!</p>
                                </div>
                                <div>
                                    <PrinterstIcon />
                                    <p className='mt-[7px]'>We pin only the good stuff!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="circleData w-[60px] h-[60px] rounded-full bg-[#CD2122] text-white flex items-center justify-center font-bold text-[12px] cursor-pointer
                transition-transform duration-300 ease-out hover:scale-110">
                                <span>WHO
                                </span>
                            </div>
                            <h3 className="text-[14px] font-semibold text-[red] ">
                                WE ARE
                            </h3>
                        </div>

                        <p className="text-gray-500 ">
                            Ut pretium, sapien blandit vulputate mattis, lorem elit bibendum mi,
                            quis dignissim ipsum neque.
                        </p>

                        <ul className="mt-4 space-y-2 text-gray-500 text-[15px] ">
                            <li> Aliquam feugiat eleifend</li>
                            <li> Fusce sit amet orci quis arcu</li>
                        </ul>

                        <p className="mt-4 text-gray-500 text-[15px] ">
                            Phasellus in risus quis lectus iaculis tate. Credibly repurpose
                            bleeding-edge imperatives and multimedia based e-services. Quickly
                            negotiate scalable information after 2.0 markets.
                        </p>


                        <h4 className="mt-[20px] text-[20px] font-semibold ">
                            THE TEAM
                        </h4>

                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[20px] sm:gap-[20px] mt-4">
                            <div >
                                <img
                                    src={img1}
                                    alt="img1"
                                    className="w-50 h-50 object-cover"
                                />
                                <div className='w-50 flex flex-col gap-[10px] p-[10px] TeamHover'>
                                    <div className='relative z-[10]'>
                                        <h2 className="text-gray-800 text-[15px] my-[10px]">KAYLA BROWNS</h2>
                                        <p className="text-gray-800 text-[13px] my-[10px]">ASSISTANT MANAGER</p>
                                    </div>
                                    <div className='TeamHoverData p-[10px]'>
                                        <h2 className="text-gray-800 text-[15px] my-[10px]">KAYLA BROWNS</h2>
                                        <p className="text-gray-800 text-[13px] my-[10px]">ASSISTANT MANAGER</p>
                                        <p className="text-gray-800 text-[10px] pb-[20px] leading-[200%] ">Proactively brand bricks-and-clicks data after flexible models. Progressively incubate effective platforms vis-a-vis open-source niche markets.</p>
                                        <div className='flex gap-[10px]'>
                                            <FacebookIcon />
                                            <TwitterIcon />
                                            <PrinterstIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={img2}
                                    alt="img2"
                                    className="w-50 h-50 object-cover "
                                />
                                <div className='w-50 flex flex-col gap-[10px] p-[10px] TeamHover'>
                                    <div className='relative z-[10]'>
                                        <h2 className="text-gray-800 text-[15px]  my-[10px]">PAUL ANDREWS</h2>
                                        <p className="text-gray-800 text-[13px]  my-[10px]">MANAGER</p>
                                    </div>
                                    <div className='TeamHoverData p-[10px]'>
                                        <h2 className="text-gray-800 text-[15px]  my-[10px]">PAUL ANDREWS</h2>
                                        <p className="text-gray-800 text-[13px]  my-[10px]">MANAGER</p>
                                        <p className="text-gray-800 text-[10px] pb-[20px] leading-[200%]">
                                            Proactively brand bricks-and-clicks data after flexible models. Progressively incubate effective platforms vis-a-vis open-source niche markets.</p>
                                        <div className='flex gap-[10px]'>
                                            <FacebookIcon />
                                            <TwitterIcon />
                                            <PrinterstIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Slider */}
            <div className='w-full max-w-[1170px] m-auto px-[15px] py-[35px]'>
                <h1 className='text-[32px] mt-[20px] mb-[10px] font-bold '>RECENT PROJECTS</h1>
                <div className='flex justify-between px-[20px]'>
                    <p>VIEW ALL</p>
                    <div className='flex '>
                        <Leftarrow onClick={previous} />
                        <Rightarrow onClick={next} />
                    </div>
                </div>

            </div>

            <div className='SlickContainerPadding mt-[20px]' >
                <Slider {...settings} ref={slider => {
                    sliderRef = slider;
                }} >
                    <div className='px-[5px] outline-none focus:outline-none border-0 '>
                        <img src={ptf13} />
                    </div>
                    <div className='px-[5px] outline-none focus:outline-none border-0'>
                        <img src={phone} />
                    </div>
                    <div className='px-[5px] outline-none focus:outline-none border-0'>
                        <img src={ptf5} />
                    </div>
                    <div className='px-[5px] outline-none focus:outline-none border-0' >
                        <img src={ptf7576} />
                    </div>
                    <div className='px-[5px] outline-none focus:outline-none border-0'>
                        <img src={ptf3576} />
                    </div>

                </Slider>
            </div>

            {/* SVG number */}
            <div className="w-full bg-white py-16">
                <div className="max-w-[1170px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[] text-center">

                    <div >
                        <div className="flex flex-col items-center gap-4 lg:pb-[30px]">
                            <SecondComputerIcon />
                        </div>

                        <div className="flex flex-col items-center gap-4 lg:pt-[30px]">

                            <h2 className="text-3xl font-light">25000+</h2>
                            <p className="text-xs tracking-wide uppercase text-gray-500">
                                Code Lines This Month
                            </p>
                        </div>
                    </div>

                    <div className='mt-[30px] sm:mt-0'>
                        <div className="flex flex-col items-center gap-4 lg:pb-[30px]">
                            <h2 className="text-3xl font-light">150+</h2>
                            <p className="text-xs tracking-wide uppercase text-gray-500">
                                Launched Projects
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4  lg:pt-[30px]">
                            <RocketIcon />
                        </div>
                    </div>

                    <div className='sm:mt-[30px] lg:mt-0 mt-[40px]'>

                        <div className="flex flex-col items-center gap-4 lg:pb-[30px]">
                            <StrokeIcon />
                        </div>

                        <div className="flex flex-col items-center gap-4  lg:pt-[30px]">

                            <h2 className="text-3xl font-light">9900+</h2>
                            <p className="text-xs tracking-wide uppercase text-gray-500">
                                Coffee Cups This Year
                            </p>
                        </div>
                    </div>

                    <div className='mt-[30px] lg:mt-0'>
                        <div className="flex flex-col items-center gap-4 lg:pb-[30px]">
                            <h2 className="text-3xl font-light">180+</h2>
                            <p className="text-xs tracking-wide uppercase text-gray-500">
                                Reviews and Ratings
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4  lg:pt-[30px]">
                            <StarIcon />
                        </div>
                    </div>

                </div>
            </div>

            {/* our working process */}
            <div className='w-full max-w-[1170px] mx-auto  px-[16px]'>
                <p className="text-red-600 text[18px] mb-[20px]">our working process</p>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                    <div className='md:pr-[20px] pr-0'>
                        <div className="PlanningCard">
                            <h3 className="font-semibold mb-2 text-[#535353]" >PLANNING & STRATEGY</h3>
                            <p className="text-[14px] text-gray-500">
                                Appropriately productivate distributed infrastructures for one-to-one expertise.
                            </p>
                        </div>
                    </div>
                    <div className='md:pr-[30px] pr-0'>
                        <div className="DesignCard">
                            <div className='DesignCardData'>
                                <h3 className="font-semibold mb-2 text-[#535353]">DESIGN & DEVELOP</h3>
                                <p className="text-[13px] text-gray-500">
                                    Credibly develop cross functional internal or "organic" sources vis-a-vis magnetic e-services.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='TestCard '>
                            <div className="relative text-white  rounded-md flex justify-between items-center gap-[10px]">
                                <div className='absolute left-0 top-10px] z-[10]'>
                                    <CorrectIcon />
                                </div>

                                <div className='ml-[50px]'>

                                    <h3 className="font-semibold mb-2 text[16px]">TEST & DELIVER</h3>
                                    <p className="text-[14px]">
                                        Continually promote empowered resources for professional manufactured products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
