import React from 'react';

export default function Form() {
    return(
        <section className='flex flex-wrap py-[48px] px-[36px] lg:p-[58px]'>
        <div className='flex-[100%] text-[26px] mb-[38px] lg:flex-[30%] lg:text-[48px]'>QUESTION? <br />WE ARE HERE <br />TO HELP!</div>
        <form action="" className='grid grid-cols-2 flex-[100%] lg:flex-[70%]'>
          <div className='col-span-2 mb-[35px] lg:col-span-1'>
            <label htmlFor="name">NAME</label> <br />
            <input className='border-b border-gray-300 w-full lg:w-[70%]' type="text" name="name" id="name" />
          </div>
          <div className='col-span-2 lg:col-span-1 '>
            <label htmlFor="email">EMAIL</label> <br />
            <input className='border-b border-gray-300 w-full mb-[38px] lg:w-[70%]' type="text" name="email" id="email" />
          </div>
          <div className='col-span-2 lg:col-span-2'>
            <label htmlFor="message">MESSAGE</label> <br />
            <textarea className='border-b border-gray-300 w-full lg:w-[35%]' name="message" id="message"></textarea> <br />
            <button className='border w-full text-purple-600 border-purple-600 py-[16px] px-[64px] rounded-[50px] mt-[35px] lg:border-black lg:w-[35%] lg:text-black'>SEND</button>
          </div>
        </form>
      </section>
    );
}