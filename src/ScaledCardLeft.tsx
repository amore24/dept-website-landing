import React from 'react';

export default function ScaledCardLeft() {
    return(
    <section className='flex flex-wrap'>
        <div className='relative flex-[100%] lg:flex-[67%] h-[564px] block-five bg-no-repeat bg-cover bg-center'>
            <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
            <div className='text-base'>FLORENSIS</div>
            <p className='text-[26px] lg:text-4xl mt-[16px]'>Rethinking the entire online ecosystem</p>
            <a href="" className='text-base mt-[16px]'>Read more</a>
            </div>
        </div>
        <div className='flex-[100%] lg:flex-[33%] h-[564px] bg-black text-white py-[45px] px-[32px] text-sm'>
            <div>MICROSOFT</div>
            <p className='my-[12px]'>Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels</p>
            <a href="" className='mt-[16px]'>Read more</a>
            <hr className='my-[32px]'/>
            <div>O’NEILL</div>
            <p className='my-[12px]'>Integrating existing content into O’Neills’s new e-commerce platform</p>
            <a href="" className='mt-[16px]'>Read more</a>
            <hr className='my-[32px]'/>
            <div>MICROSOFT</div>
            <p className='my-[12px]'>Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels</p>
            <a href="" className='mt-[16px]'>Read more</a>
        </div>
    </section>
    );
}