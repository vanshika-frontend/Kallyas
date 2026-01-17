import React, { useState } from 'react'
import dmgallogo from "../Images/dmgal_logo.svg"
import { DownArrowIcon, RightArrowDemoIcon, TopArrowImgIcon } from '../svg'
import { DemoBtnData } from '../jsondata/demobtn'

export default function DemoButton() {
    const [DemoToggle, setDemoToggle] = useState(false);

    return (
        <>
            {!DemoToggle && (
                <div
                    className="w-[58px] z-45 fixed top-[170px] right-0 text-black text-[10px] py-[13px] bg-white rounded-[3px] leading-[150%] text-center cursor-pointer font-bold shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                    onClick={() => setDemoToggle(true)}
                >
                    YOU GET 70+ MORE DEMOS
                </div>
            )}
            <div
                className="w-[58px] z-45 fixed bottom-[100px] right-0 text-white text-[15px] py-[5px] bg-[#000000ab] rounded-[3px] leading-[150%] text-center cursor-pointer font-bold shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex justify-center items-center flex-col"
            >
                <a href='#home'>
                    <TopArrowImgIcon />
                    Top
                </a>
            </div>


            <div className={`text-center lg:max-w-[50%] w-full ml-auto bg-[white] fixed top-0 right-0  z-[75] transform transition-transform duration-300 ease-in-out ${DemoToggle ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className={`pl-[25px] pt-[25px] fixed z-[101] cursor-pointer `}
                    onClick={() => setDemoToggle(false)} >
                    <RightArrowDemoIcon />
                </div>
                <div className='px-[25px]  overflow-y-auto max-h-screen'>

                    <div className='flex items-center justify-center my-[30px]'>
                        <img src={dmgallogo} />
                    </div>
                    <h1 className='text-[18px] mb-[10px]'>Get all 70+ Pre-made Websites at only $69</h1>
                    <p className='text-[13px] mb-[20px]'>When Purchasing Kallyas you get all 70+ demos and you can install any of them with just one click at anytime.</p>
                    <p className='text-[13px]'>scroll down</p>
                    <div className='flex items-center justify-center  animate-float'>
                        <DownArrowIcon />
                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[20px]'>
                        {DemoBtnData.map((data, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <img src={data.img} className='HoverMapImg cursor-pointer' />
                                        <h1 className='mt-[15px] text-[14px]'>{data.heading}</h1>
                                        <p className='text-[#2f2f2f] text-[12px] '>{data.paragrapgh}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>


                <div className='shadow-[0_-5px_10px_rgba(0,0,0,0.1)] bg-white fixed bottom-0 right-0 w-full  cursor-pointer z-[100] pb-[20px]'>
                    <button className='text-white bg-[#66cc66] my-[30px] text-[13px] py-[13px] px-[20px] rounded'>BUY KALLYAS THEME $69</button>
                </div>
            </div>

        </>
    )
}
