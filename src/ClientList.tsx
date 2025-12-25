import React from 'react';

export default function ClientList() {
    return(
        <section className='bg-black text-white py-[92px] px-[43px]'>
        <div className='flex flex-col'>
          <h2 className='text-[34px] mb-[32px]'>Clients</h2>
          <p className='text-lg/[40px]'>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
        </div>
        <div className='grid grid-cols-3 gap-4 mt-[64px]'>
          <div className='google-logo bg-no-repeat bg-contain bg-center h-[90px]'></div>
          <div className='levis-logo bg-no-repeat bg-contain bg-center'></div>
          <div className='netflix-logo bg-no-repeat bg-contain bg-center'></div>
          <div className='spotify-logo bg-no-repeat bg-contain bg-center h-[90px]'></div>
          <div className='patagonia-logo bg-no-repeat bg-contain bg-center'></div>
          <div className='fujitsu-logo bg-no-repeat bg-contain bg-center'></div>
          <div className='adyen-logo bg-no-repeat bg-contain bg-center h-[90px]'></div>
          <div className='audi-logo bg-no-repeat bg-contain bg-center'></div>
          <div className='triumph-logo bg-no-repeat bg-contain bg-center'></div>
          <div className='tesla-logo bg-no-repeat bg-contain bg-center h-[90px]'></div>
          <div className='asos-logo bg-no-repeat bg-contain bg-center'></div>
          <div className='takeaway-logo bg-no-repeat bg-contain bg-center'></div>
        </div>
      </section>
    );
}