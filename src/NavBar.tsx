import React, { useState, useCallback } from 'react';
import Menu from './Menu';

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    const menuClick = useCallback(():void => {
      setToggleMenu((prev) => !prev);
    },[toggleMenu]);

    return(
        <header>
        <nav className='fixed top-[0px] z-10 w-full flex flex-row bg-white content-center px-[16px] py-[18px] text-black lg:bg-black lg:text-white lg:p-[16px]'>
          {/* Logo for desktop */}
          <div className='flex-1 justify-self-start hidden lg:block'>
            <svg width="89" height="25" viewBox="0 0 89 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.4585 12.235C22.4585 6.03132 19.0718 1.25195 10.4626 1.25195H1.25208V23.218H10.4626C19.0718 23.218 22.4585 18.4387 22.4585 12.235ZM16.1915 12.235C16.1915 16.5712 13.7544 18.1855 10.3677 18.1855H7.23419V6.28453H10.3677C13.7544 6.28453 16.1915 7.89875 16.1915 12.235Z" fill="white"/>
              <path d="M23.8911 23.218H41.2994V18.2171H29.8732V14.4506H39.9067V9.70286H29.8732V6.25287H41.0145V1.25195H23.8911V23.218Z" fill="white"/>
              <path d="M61.564 8.87996C61.564 3.34095 58.0191 1.25195 52.5117 1.25195H42.9846V23.218H48.9667V16.508H52.5117C58.0191 16.508 61.564 14.4189 61.564 8.87996ZM55.3604 8.87996C55.3604 11.0323 54.3476 11.9185 51.9103 11.9185H48.9667V5.84141H51.9103C54.3476 5.84141 55.3604 6.72764 55.3604 8.87996Z" fill="white"/>
              <path d="M62.2169 6.37948H69.1485V23.218H75.1306V6.37948H82.0623V1.25195H62.2169V6.37948Z" fill="white"/>
              <path d="M79.5767 20.1426C79.5767 22.1304 81.1858 23.7395 83.1739 23.7395C85.1615 23.7395 86.7867 22.1304 86.7867 20.1426C86.7867 18.1547 85.1615 16.5298 83.1739 16.5298C81.1858 16.5298 79.5767 18.1547 79.5767 20.1426ZM80.2708 20.1426C80.2708 18.5019 81.5644 17.1608 83.1739 17.1608C84.7826 17.1608 86.0923 18.5019 86.0923 20.1426C86.0923 21.7832 84.7826 23.1084 83.1739 23.1084C81.5644 23.1084 80.2708 21.7832 80.2708 20.1426ZM81.4856 21.9253H82.6211V20.6947H83.2686L83.9465 21.9253H85.1772L84.3567 20.4739C84.7356 20.3161 85.019 19.8902 85.019 19.4169C85.019 18.5807 84.4828 18.1863 83.5676 18.1863H81.4856V21.9253ZM83.8674 19.4326C83.8674 19.7323 83.6788 19.8586 83.3155 19.8586H82.6211V19.0697H83.3155C83.6788 19.0697 83.8674 19.1645 83.8674 19.4326Z" fill="white"/>
            </svg>
          </div>
          {/* Logo for mobile */}
          <div className='flex-1 justify-self-start block lg:hidden'>
            <svg width="53" height="15" viewBox="0 0 53 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_116_2690)">
              <path d="M13.4751 7.34129C13.4751 3.61909 11.4431 0.751465 6.27754 0.751465H0.751221V13.9311H6.27754C11.4431 13.9311 13.4751 11.0635 13.4751 7.34129ZM9.71489 7.34129C9.71489 9.94304 8.2526 10.9116 6.22061 10.9116H4.34049V3.77101H6.22061C8.2526 3.77101 9.71489 4.73954 9.71489 7.34129Z" fill="black"/>
              <path d="M14.3347 13.9311H24.7797V10.9306H17.924V8.67068H23.9441V5.82201H17.924V3.75202H24.6088V0.751465H14.3347V13.9311Z" fill="black"/>
              <path d="M36.9384 5.32827C36.9384 2.00486 34.8114 0.751465 31.507 0.751465H25.7908V13.9311H29.38V9.90508H31.507C34.8114 9.90508 36.9384 8.65165 36.9384 5.32827ZM33.2162 5.32827C33.2162 6.61966 32.6085 7.1514 31.1462 7.1514H29.38V3.50514H31.1462C32.6085 3.50514 33.2162 4.03688 33.2162 5.32827Z" fill="black"/>
              <path d="M37.3301 3.82798H41.4891V13.9311H45.0783V3.82798H49.2373V0.751465H37.3301V3.82798Z" fill="black"/>
              <path d="M47.7458 12.0856C47.7458 13.2783 48.7113 14.2438 49.9042 14.2438C51.0968 14.2438 52.0719 13.2783 52.0719 12.0856C52.0719 10.8929 51.0968 9.91797 49.9042 9.91797C48.7113 9.91797 47.7458 10.8929 47.7458 12.0856ZM48.1623 12.0856C48.1623 11.1012 48.9385 10.2966 49.9042 10.2966C50.8694 10.2966 51.6552 11.1012 51.6552 12.0856C51.6552 13.07 50.8694 13.8652 49.9042 13.8652C48.9385 13.8652 48.1623 13.07 48.1623 12.0856ZM48.8912 13.1553H49.5725V12.4169H49.961L50.3678 13.1553H51.1061L50.6139 12.2844C50.8412 12.1898 51.0113 11.9342 51.0113 11.6502C51.0113 11.1485 50.6895 10.9119 50.1404 10.9119H48.8912V13.1553ZM50.3203 11.6596C50.3203 11.8395 50.2071 11.9153 49.9892 11.9153H49.5725V11.4419H49.9892C50.2071 11.4419 50.3203 11.4988 50.3203 11.6596Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_116_2690">
              <rect width="52.8237" height="15" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          {/* navbar for desktop */}
          <ul className='hidden flex-6 flex-row justify-self-end items-center font-[18px] lg:flex'>
            <li className='mr-8 hover:underline'><a href="">WORK</a></li>
            <li className='mr-8 hover:underline'><a href="">CULTER</a></li>
            <li className='mr-8 hover:underline'><a href="">SERVICES</a></li>
            <li className='mr-8 hover:underline'><a href="">INSIGHTS</a></li>
            <li className='mr-8 hover:underline'><a href="">CAREERS</a></li>
            <li className='mr-8 hover:underline'><a href="">CONTACT</a></li>
            {/* Ellipsis for opening menu */}
            <li className='mx-16'>
              <button onClick={menuClick}>
                <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z" fill="white"/>
                  <path d="M19.2 4C19.2 6.20914 17.4091 8 15.2 8C12.9909 8 11.2 6.20914 11.2 4C11.2 1.79086 12.9909 0 15.2 0C17.4091 0 19.2 1.79086 19.2 4Z" fill="white"/>
                  <path d="M30.4 4C30.4 6.20914 28.6091 8 26.4 8C24.1909 8 22.4 6.20914 22.4 4C22.4 1.79086 24.1909 0 26.4 0C28.6091 0 30.4 1.79086 30.4 4Z" fill="white"/>
                </svg>
              </button>
            </li>
          </ul>
          <button onClick={menuClick} className='flex-1 text-right font-[16px] lg:hidden'>MENU</button>
        </nav>

        {/* Side Menu */}
        <Menu menuOnClick={menuClick} menuState={toggleMenu} />
      </header>
    );
}