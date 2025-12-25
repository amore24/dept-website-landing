import React from 'react';
import { Link } from 'react-router-dom'
import ClientNote from './ClientNote';
import ClientQuote from './ClientQuote';
import ClientList from './ClientList';
import ScaledCardLeft from './ScaledCardLeft'
import { FadeInOnScroll } from "./FadeInOnScroll";

const Home = () => {
  return (
    <>
      <ClientNote />
      <section className='flex flex-row py-[32px] px-[16px] bg-black text-white text-base lg:text-[26px] lg:p-[32px] lg:bg-white lg:text-black'>
        <div className='flex-1'><span className='font-thin text-gray-400'>Show me</span> <a href=""  className='underline'>all work</a></div>
        <div className='flex-1 text-right'><span className='font-thin text-gray-400'>in</span> <Link to="/view-industries" className='underline'>all industries</Link></div>
      </section>
      <FadeInOnScroll>
      <section className='flex flex-wrap'>
        <div className='relative block-one bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px] hover:opacity-100'>
          <div className='absolute w-full h-[inherit] left-[0] top-[0] pl-[24px] pt-[374px] lg:pl-[32px] lg:pt-[345px] text-white hover:opacity-100 hover:bg-blue-300'>
            <div className='text-base'>BOL.COM</div>
            <p className='text-[26px] lg:text-4xl mt-[16px]'>A Summer island in the Netherlands</p>
            <a href="" className='text-base mt-[16px]'>Read more</a>
          </div>
        </div>
        <div className='relative block-two bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px] hover:opacity-100'>
          <div className='absolute w-full h-[inherit] left-[0] top-[0] pl-[24px] pt-[374px] lg:pl-[32px] lg:pt-[345px] text-white hover:opacity-100 hover:bg-green-300'>
            <div className='text-base'>KEMPEN</div>
            <p className='text-[26px] lg:text-4xl mt-[16px]'>Not some average banking website</p>
            <a href="" className='text-base mt-[16px]'>Read more</a>
          </div>
        </div>
        <div className='relative block-three bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px] hover:opacity-100'>
          <div className='absolute w-full h-[inherit] left-[0] top-[0] pl-[24px] pt-[374px] lg:pl-[32px] lg:pt-[345px] text-white hover:opacity-100 hover:bg-red-300'>
            <div className='text-base'>PHILIPS</div>
            <p className='text-[26px] lg:text-4xl mt-[16px]'>Beautiful design meets innovative technology</p>
            <a href="" className='text-base mt-[16px]'>Read more</a>
          </div>
        </div>
        <div className='relative block-four bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px] hover:opacity-100'>
          <div className='absolute w-full h-[inherit] left-[0] top-[0] pl-[24px] pt-[374px] lg:pl-[32px] lg:pt-[345px] text-white hover:opacity-100 hover:bg-yellow-200'>
            <div className='text-base'>GEMEENTEMUSEUM</div>
            <p className='text-4xl mt-[16px]'>A 100 years of Mondriaan & De Stijl</p>
            <a href="" className='text-base mt-[16px]'>Read more</a>
          </div>
        </div>
      </section>
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <ScaledCardLeft />
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <section className='flex flex-wrap'>
        <div className='relative block-six bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px]'>
          <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
            <div className='text-base'>BE LIGHTNING</div>
            <p className='text-[26px] lg:text-4xl mt-[16px]'>Delivering clarity on a global scale</p>
            <a href="" className='text-base mt-[16px]'>Read more</a>
          </div>
        </div>
        <div className='relative block-seven bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px]'>
          <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
            <div className='text-base'>TUI</div>
            <p className='text-[26px] lg:text-4xl mt-[16px]'>Swipe to find your next holiday destination</p>
            <a href="" className='text-base mt-[16px]'>Read more</a>
          </div>
        </div>
      </section>
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <section className='flex flex-wrap'>
          <div className='flex-[100%] lg:flex-[33%] h-[564px] bg-black text-white py-[45px] px-[32px] text-sm'>
            <div>AMAZON</div>
            <p className='my-[12px]'>Starting with delivering through drones</p>
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
          <div className='relative flex-[100%] lg:flex-[67%] h-[564px] block-eight bg-no-repeat bg-cover bg-center'>
            <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
              <div className='text-base'>FLORENSIS</div>
              <p className='text-[26px] lg:text-4xl mt-[16px]'>Rethinking the entire online ecosystem</p>
              <a href="" className='text-base mt-[16px]'>Read more</a>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <section className='flex flex-wrap'>
          <div className='relative block-nine bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px]'>
            <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
              <div className='text-base'>CHOCOMEL</div>
              <p className='text-[26px] lg:text-4xl mt-[16px]'>A campaign for the limited edition letter packs</p>
              <a href="" className='text-base mt-[16px]'>Read more</a>
            </div>
          </div>
          <div className='relative block-ten bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px]'>
            <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
              <div className='text-base'>JBL</div>
              <p className='text-[26px] lg:text-4xl mt-[16px]'>Live like a champion with Jerome Boateng</p>
              <a href="" className='text-base mt-[16px]'>Read more</a>
            </div>
          </div>
          <div className='relative block-elleven bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px]'>
            <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
              <div className='text-base'>ZALANDO</div>
              <p className='text-[26px] lg:text-4xl mt-[16px]'>Innovative SEO and content strategy for Zalando</p>
              <a href="" className='text-base mt-[16px]'>Read more</a>
            </div>
          </div>
          <div className='relative block-twelve bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px]'>
            <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
              <div className='text-base'>KONINKLIJKE BIBLIOTHEEK</div>
              <p className='text-[26px] lg:text-4xl mt-[16px]'>The search of the most influential book ever</p>
              <a href="" className='text-base mt-[16px]'>Read more</a>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      
      <ClientQuote />

      <FadeInOnScroll>
        <section className='flex flex-wrap'>
          <div className='relative block-thirteen bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px]'>
            <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
              <div className='text-base'>LIBERTY GLOBAL</div>
              <p className='text-26px] lg:text-4xl mt-[16px]'>Delivering complex commerce solutions</p>
              <a href="" className='text-base mt-[16px]'>Read more</a>
            </div>
          </div>
          <div className='relative block-fourteen bg-no-repeat bg-cover bg-center flex-[100%] lg:flex-[50%] h-[540px]'>
            <div className='absolute left-[24px] top-[374px] lg:left-[32px] lg:top-[345px] text-white'>
              <div className='text-base'>ARLA</div>
              <p className='text-[26px] lg:text-4xl mt-[16px]'>Swipe to find your next holiday destination</p>
              <a href="" className='text-base mt-[16px]'>Read more</a>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ClientList />
      </FadeInOnScroll>
    </>
  );
};

export default Home;