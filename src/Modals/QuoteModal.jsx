import React from 'react'

export default function QuoteModal({close}) {
  return (
    <>
<div className='fixed top-0 left-0 flex jusitfy-center items-center w-screen min-h-screen bg-[#262626f0] z-[99] p-[20px]   '>

  <div className='w-full  max-w-[1170px] mx-auto  relative overflow-y-auto rounded bg-white px-[16px]  overflow-y-auto max-h-[calc(100vh-40px)]'>
    <div className='text-[30px] flex justify-end cursor-pointer' onClick={close}>
      &times;
    </div>
   <h1 className='text-[24px] text-[#3f3f3f] text-center mb-[10px]'>GET A FREE QUOTE</h1>
   <p className='text-[16px] text-center'>Please fill this for and we'll get back to you as soon as possible!</p>

   <div className="w-full max-w-[1170px] py-[20px]">
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px]  text-gray-500">
            NAME
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-[10px] py-[14px] text-[11px] focus:outline-none focus:border-gray-500"
          />
        </div>

        <div>
          <label className="block text-[11px] text-gray-500 mb-1">
            COMPANY
          </label>
          <input
            type="text"
            placeholder="Please enter the name of your company"
            className="w-full border border-gray-300 rounded-md px-[10px] py-[14px] text-[11px] focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>


      <div> 
        <label class="block text-[11px]  text-gray-500">
          EMAIL
        </label>
        <input
          type="email"
          placeholder="Please type your email address"
          className="w-full border border-gray-300 rounded-md  px-[10px] py-[14px] text-[11px] focus:outline-none focus:border-gray-500"
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px] font-semibold text-gray-500 mb-1">
            NEEDED SERVICES
          </label>
          <select
            className="w-full border border-gray-300 rounded-md  px-[10px] py-[14px] text-[11px] bg-white focus:outline-none focus:border-gray-500"
          >
            <option>Online Store</option>
            <option>Website Design</option>
            <option>SEO</option>
            <option>Marketing</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] text-gray-500">
            BUDGET
          </label>
          <select
            className="w-full border border-gray-300 rounded-md  px-[10px] py-[14px] text-[11px] bg-white focus:outline-none focus:border-gray-500"
          >
            <option>Under $1000</option>
            <option>$1000 - $3000</option>
            <option>$3000 - $5000</option>
            <option>$5000+</option>
          </select>
        </div>
      </div>


      <div>
        <label className="block text-[11px]] text-gray-500 mb-1">
          MESSAGE
        </label>
        <textarea
          rows="5"
          placeholder="Please add any details you think it would be useful for us to make a correct estimation."
          className="w-full border border-gray-300 rounded-md  px-[10px] py-[14px] text-[11px] focus:outline-none focus:border-gray-500 resize-none"
        ></textarea>
      </div>


      <div>
        <button
          type="submit"
          className="bg-[#cd2122] hover:bg-[#93090a] text-white   px-[10px] py-[14px] rounded text-[13px] cursor-pointer"
        >
          GET A QUOTE NOW!
        </button>
      </div>

    </form>

</div>
   
  </div>
</div>


    </>
  )
}
