import React, { useEffect } from 'react'

export default function LoginModal({ closeLogin }) {



    return (
        <>
            <div className='fixed top-0 left-0 flex jusitfy-center items-center w-screen min-h-screen bg-[#262626f0]  p-[20px] z-50  overflow-hidden '>

                <div className='w-full  max-w-[450px] mx-auto  relative rounded bg-white  max-h-[calc(100vh-40px)] overflow-hidden'>
                    <div className='text-[30px] flex justify-end cursor-pointer text-[#3f3f3f] pr-[20px]' onClick={closeLogin}>
                        &times;
                    </div>
                    <div className='px-[50px] pb-[50px]'>
                        <h1 className='text-[#3f3f3f] sm:text-[16px] text-[10px] my-[20px] leading-[150%]'>SIGN IN YOUR ACCOUNT TO HAVE ACCESS TO DIFFERENT FEATURES</h1>
                        <form className='space-y-3'>
                            <label className='text-gray-800'>USERNAME</label>
                            <input placeholder='eg:james_smith' className="w-full border border-gray-300 rounded-md px-[10px] py-[14px] text-[11px] focus:outline-none focus:border-gray-500 placeholder-gray-800" />

                            <label className='text-gray-800'>PASSWORD</label>
                            <input placeholder='type password' className="w-full border border-gray-300 rounded-md px-[10px] py-[14px] text-[11px] focus:outline-none focus:border-gray-500 placeholder-gray-800" />

                            <button className='text-white bg-[#cd2122] hover:bg-[#8b0d0e] py-[10px] px-[15px] rounded cursor-pointer'>
                                LOGIN
                            </button>

                        </form>


                    </div>

                </div>
            </div>


        </>
    )
}
