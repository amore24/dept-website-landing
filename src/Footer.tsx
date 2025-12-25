import React from 'react';

export default function Footer() {

    window.onscroll = function() {showScrollToTopLink()};
    const showScrollToTopLink = () => {
      const topLink = document.getElementById('topLink');
      if(topLink) {
        if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
          topLink.style.display = 'block';
        } else {
          topLink.style.display = 'none';
        }
      }
    }
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' 
      });
    }
    return(
      <>
        <footer className='px-[36px] py-[45px] lg:py-[65px] lg:px-[50px] bg-black text-white'>
        <nav className='flex flex-row '>
          {/* Logo for desktop */}
          <div className='hidden lg:flex-[20%] lg:justify-self-start lg:block'>
            <svg width="89" height="25" viewBox="0 0 89 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.4585 12.235C22.4585 6.03132 19.0718 1.25195 10.4626 1.25195H1.25208V23.218H10.4626C19.0718 23.218 22.4585 18.4387 22.4585 12.235ZM16.1915 12.235C16.1915 16.5712 13.7544 18.1855 10.3677 18.1855H7.23419V6.28453H10.3677C13.7544 6.28453 16.1915 7.89875 16.1915 12.235Z" fill="white"/>
              <path d="M23.8911 23.218H41.2994V18.2171H29.8732V14.4506H39.9067V9.70286H29.8732V6.25287H41.0145V1.25195H23.8911V23.218Z" fill="white"/>
              <path d="M61.564 8.87996C61.564 3.34095 58.0191 1.25195 52.5117 1.25195H42.9846V23.218H48.9667V16.508H52.5117C58.0191 16.508 61.564 14.4189 61.564 8.87996ZM55.3604 8.87996C55.3604 11.0323 54.3476 11.9185 51.9103 11.9185H48.9667V5.84141H51.9103C54.3476 5.84141 55.3604 6.72764 55.3604 8.87996Z" fill="white"/>
              <path d="M62.2169 6.37948H69.1485V23.218H75.1306V6.37948H82.0623V1.25195H62.2169V6.37948Z" fill="white"/>
              <path d="M79.5767 20.1426C79.5767 22.1304 81.1858 23.7395 83.1739 23.7395C85.1615 23.7395 86.7867 22.1304 86.7867 20.1426C86.7867 18.1547 85.1615 16.5298 83.1739 16.5298C81.1858 16.5298 79.5767 18.1547 79.5767 20.1426ZM80.2708 20.1426C80.2708 18.5019 81.5644 17.1608 83.1739 17.1608C84.7826 17.1608 86.0923 18.5019 86.0923 20.1426C86.0923 21.7832 84.7826 23.1084 83.1739 23.1084C81.5644 23.1084 80.2708 21.7832 80.2708 20.1426ZM81.4856 21.9253H82.6211V20.6947H83.2686L83.9465 21.9253H85.1772L84.3567 20.4739C84.7356 20.3161 85.019 19.8902 85.019 19.4169C85.019 18.5807 84.4828 18.1863 83.5676 18.1863H81.4856V21.9253ZM83.8674 19.4326C83.8674 19.7323 83.6788 19.8586 83.3155 19.8586H82.6211V19.0697H83.3155C83.6788 19.0697 83.8674 19.1645 83.8674 19.4326Z" fill="white"/>
            </svg>
          </div>
          <ul className='flex flex-[50%] flex-col lg:flex-row lg:flex-[80%] lg:justify-start lg:font-[18px]'>
            <li className='mb-[48px] lg:mr-8 hover:underline'><a href="">WORK</a></li>
            <li className='mb-[48px] lg:mr-8 hover:underline'><a href="">CULTER</a></li>
            <li className='mb-[48px] lg:mr-8 hover:underline'><a href="">SERVICES</a></li>
            <li className='mb-[48px] lg:mr-8 hover:underline'><a href="">INSIGHTS</a></li>
            <li className='mb-[48px] lg:mr-8 hover:underline'><a href="">CAREERS</a></li>
            <li className='mb-[48px] lg:mr-8 hover:underline'><a href="">CONTACT</a></li>
          </ul>
          <div className='flex-[50%] flex-col justify-items-end lg:hidden'>
              <div style={{marginBottom:'36px'}}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 2.5H18.75C17.0924 2.5 15.5027 3.15848 14.3306 4.33058C13.1585 5.50269 12.5 7.0924 12.5 8.75V12.5H8.75V17.5H12.5V27.5H17.5V17.5H21.25L22.5 12.5H17.5V8.75C17.5 8.41848 17.6317 8.10054 17.8661 7.86612C18.1005 7.6317 18.4185 7.5 18.75 7.5H22.5V2.5Z" fill="white"/>
                </svg>
              </div>
              <div style={{marginBottom:'36px'}}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.875 3.37508C24.7977 4.13499 23.6049 4.71621 22.3425 5.09633C21.665 4.31728 20.7645 3.76511 19.7629 3.5145C18.7613 3.26389 17.7069 3.32693 16.7423 3.69509C15.7777 4.06326 14.9495 4.71878 14.3696 5.57301C13.7897 6.42724 13.4862 7.43896 13.5 8.47133V9.59633C11.523 9.6476 9.56393 9.20912 7.79738 8.31996C6.03084 7.4308 4.51161 6.11855 3.375 4.50008C3.375 4.50008 -1.125 14.6251 9 19.1251C6.68309 20.6978 3.92305 21.4864 1.125 21.3751C11.25 27.0001 23.625 21.3751 23.625 8.43758C23.624 8.12422 23.5938 7.81163 23.535 7.50383C24.6832 6.37151 25.4934 4.94188 25.875 3.37508Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div style={{marginBottom:'36px'}}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.125 2.25H7.875C4.7684 2.25 2.25 4.7684 2.25 7.875V19.125C2.25 22.2316 4.7684 24.75 7.875 24.75H19.125C22.2316 24.75 24.75 22.2316 24.75 19.125V7.875C24.75 4.7684 22.2316 2.25 19.125 2.25Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.0002 12.7913C18.139 13.7276 17.9791 14.6838 17.5431 15.524C17.1072 16.3641 16.4174 17.0454 15.572 17.471C14.7265 17.8965 13.7684 18.0446 12.8339 17.8943C11.8994 17.7439 11.0361 17.3027 10.3669 16.6334C9.69757 15.9641 9.25636 15.1008 9.10598 14.1663C8.95561 13.2318 9.10373 12.2737 9.52928 11.4283C9.95482 10.5828 10.6361 9.89305 11.4763 9.45712C12.3164 9.02118 13.2726 8.86126 14.2089 9.0001C15.1639 9.14172 16.0481 9.58674 16.7308 10.2694C17.4135 10.9521 17.8585 11.8363 18.0002 12.7913Z" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.6875 7.3125H19.6987" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
          </div>
        </nav>
        <hr className='border-gray-500 mt-[61px] mb-[45px]'/>
        <div className='flex flex-col text-[13px] lg:flex lg:flex-row text-gray-500 justify-center text-left'>
          <div className='flex-1 lg:flex-none lg:mr-[36px]'>Chamber of Commerce: 63464101</div>
          <div className='flex-1 lg:flex-none lg:mr-[36px]'>VAT: NL 8552.47.502.B01</div>
          <div className='flex-1 lg:flex-none lg:mr-[36px]'>Terms and conditions</div>
          <div className='flex-1 lg:flex-auto lg:text-right'>© 2022 Dept Agency</div>
        </div>
        
      </footer>
      <a href="#" id="topLink" onClick={(e) => { e.preventDefault(); scrollToTop()}} className='hidden fixed text-center h-[80px] w-[50px] px-[10px] py-[20px] lg:h-[285px] lg:w-[60px] lg:py-[100px] lg:px-[15px] bottom-0 right-0 bg-white text-blue-500 cursor-pointer '>
            <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.20907 0.296031C8.44528 -0.0918603 8.99288 -0.100123 9.24011 0.280473L17.8959 13.6059C18.1678 14.0245 17.8754 14.5851 17.3853 14.5851H0.614676C0.132658 14.5851 -0.161205 14.041 0.0942641 13.6215L8.20907 0.296031Z" fill="#5115F7"/>
              <path d="M6.87176 8.28665C6.87176 7.9388 7.14652 7.6568 7.48546 7.6568H10.5539C10.8929 7.6568 11.1676 7.9388 11.1676 8.28665V35.3702C11.1676 35.718 10.8929 36 10.5539 36H7.48546C7.14652 36 6.87176 35.718 6.87176 35.3702V8.28665Z" fill="#5115F7"/>
            </svg>
            <div className='text-lg'>Top</div>
        </a>
      </>
    );
}