import React from 'react';

interface MenuProps {
  menuOnClick: () => void;
  menuState: boolean;
}
export default function Menu({menuOnClick, menuState}:MenuProps) {
    return(
        <div className={`${ menuState ? 'block' : 'hidden'} transition-all transition-discrete py-[23px] px-[16px] lg:py-[45px] lg:px-[55px] fixed top-[0px] w-full bg-black text-white h-[100vh] z-20`}>
            <div className='grid grid-cols-2 gap-4'>
                {/* Dept Logo for desktop */}
                <div className='h-[20%] hidden lg:block'>
                    <svg width="89" height="25" viewBox="0 0 89 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4585 12.235C22.4585 6.03132 19.0718 1.25195 10.4626 1.25195H1.25204V23.218H10.4626C19.0718 23.218 22.4585 18.4387 22.4585 12.235ZM16.1915 12.235C16.1915 16.5712 13.7543 18.1855 10.3677 18.1855H7.23416V6.28453H10.3677C13.7543 6.28453 16.1915 7.89875 16.1915 12.235Z" fill="white"/>
                        <path d="M23.8911 23.218H41.2994V18.2171H29.8732V14.4506H39.9067V9.70286H29.8732V6.25287H41.0145V1.25195H23.8911V23.218Z" fill="white"/>
                        <path d="M61.5641 8.87996C61.5641 3.34095 58.0191 1.25195 52.5118 1.25195H42.9847V23.218H48.9668V16.508H52.5118C58.0191 16.508 61.5641 14.4189 61.5641 8.87996ZM55.3605 8.87996C55.3605 11.0323 54.3476 11.9185 51.9104 11.9185H48.9668V5.84141H51.9104C54.3476 5.84141 55.3605 6.72764 55.3605 8.87996Z" fill="white"/>
                        <path d="M62.2169 6.37948H69.1485V23.218H75.1306V6.37948H82.0623V1.25195H62.2169V6.37948Z" fill="white"/>
                        <path d="M79.5766 20.1426C79.5766 22.1304 81.1857 23.7395 83.1738 23.7395C85.1614 23.7395 86.7867 22.1304 86.7867 20.1426C86.7867 18.1547 85.1614 16.5298 83.1738 16.5298C81.1857 16.5298 79.5766 18.1547 79.5766 20.1426ZM80.2708 20.1426C80.2708 18.5019 81.5643 17.1608 83.1738 17.1608C84.7825 17.1608 86.0922 18.5019 86.0922 20.1426C86.0922 21.7832 84.7825 23.1084 83.1738 23.1084C81.5643 23.1084 80.2708 21.7832 80.2708 20.1426ZM81.4855 21.9253H82.6211V20.6947H83.2685L83.9464 21.9253H85.1771L84.3567 20.4739C84.7356 20.3161 85.0189 19.8902 85.0189 19.4169C85.0189 18.5807 84.4827 18.1863 83.5675 18.1863H81.4855V21.9253ZM83.8674 19.4326C83.8674 19.7323 83.6787 19.8586 83.3155 19.8586H82.6211V19.0697H83.3155C83.6787 19.0697 83.8674 19.1645 83.8674 19.4326Z" fill="white"/>
                    </svg>
                </div>
                {/* Dept Logo for mobile */}
                <div className='h-[20%] block lg:hidden'>
                    <svg width="53" height="15" viewBox="0 0 53 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_116_2833)">
                        <path d="M13.4753 7.34129C13.4753 3.61909 11.4433 0.751465 6.27779 0.751465H0.751465V13.9311H6.27779C11.4433 13.9311 13.4753 11.0635 13.4753 7.34129ZM9.71513 7.34129C9.71513 9.94304 8.25285 10.9116 6.22085 10.9116H4.34073V3.77101H6.22085C8.25285 3.77101 9.71513 4.73954 9.71513 7.34129Z" fill="white"/>
                        <path d="M14.3345 13.9311H24.7794V10.9306H17.9237V8.67068H23.9438V5.82201H17.9237V3.75202H24.6085V0.751465H14.3345V13.9311Z" fill="white"/>
                        <path d="M36.9387 5.32827C36.9387 2.00486 34.8117 0.751465 31.5073 0.751465H25.791V13.9311H29.3803V9.90508H31.5073C34.8117 9.90508 36.9387 8.65165 36.9387 5.32827ZM33.2165 5.32827C33.2165 6.61966 32.6088 7.1514 31.1464 7.1514H29.3803V3.50514H31.1464C32.6088 3.50514 33.2165 4.03688 33.2165 5.32827Z" fill="white"/>
                        <path d="M37.3301 3.82798H41.4891V13.9311H45.0783V3.82798H49.2373V0.751465H37.3301V3.82798Z" fill="white"/>
                        <path d="M47.7461 12.0856C47.7461 13.2783 48.7116 14.2438 49.9044 14.2438C51.097 14.2438 52.0721 13.2783 52.0721 12.0856C52.0721 10.8929 51.097 9.91797 49.9044 9.91797C48.7116 9.91797 47.7461 10.8929 47.7461 12.0856ZM48.1626 12.0856C48.1626 11.1012 48.9387 10.2966 49.9044 10.2966C50.8697 10.2966 51.6555 11.1012 51.6555 12.0856C51.6555 13.07 50.8697 13.8652 49.9044 13.8652C48.9387 13.8652 48.1626 13.07 48.1626 12.0856ZM48.8914 13.1553H49.5728V12.4169H49.9613L50.368 13.1553H51.1064L50.6141 12.2844C50.8415 12.1898 51.0115 11.9342 51.0115 11.6502C51.0115 11.1485 50.6898 10.9119 50.1407 10.9119H48.8914V13.1553ZM50.3206 11.6596C50.3206 11.8395 50.2074 11.9153 49.9894 11.9153H49.5728V11.4419H49.9894C50.2074 11.4419 50.3206 11.4988 50.3206 11.6596Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_116_2833">
                        <rect width="52.8237" height="15" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                {/* Close Button */}
                <button className='h-[20%] justify-items-end' onClick={menuOnClick}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.37375e-05 15.2063L15.2064 0L16.7353 1.52895L1.52898 16.7353L2.37375e-05 15.2063Z" fill="white"/>
                        <path d="M1.52895 3.43578e-05L16.7353 15.2064L15.2063 16.7353L0 1.52899L1.52895 3.43578e-05Z" fill="white"/>
                    </svg>
                </button>
                <div className='col-span-full text-right lg:text-[26px] text-[20px]'>
                    <ul className=''>
                        <li className='block w-full border-b border-gray-600'><a href="">HOME</a></li>
                        <li className='block w-full border-b border-gray-600'><a href="">WORK</a></li>
                        <li className='block w-full border-b border-gray-600'><a href="">CULTURE</a></li>
                        <li className='block w-full border-b border-gray-600'><a href="">SERVICES</a></li>
                        <li className='block w-full border-b border-gray-600'><a href="">PARTNERS</a></li>
                        <li className='block w-full border-b border-gray-600'><a href="">STORIES</a></li>
                        <li className='block w-full border-b border-gray-600'><a href="">CAREERS</a></li>
                        <li className='block w-full border-b border-gray-600'><a href="">EVENTS</a></li>
                        <li className='block w-full border-b border-gray-600'><a href="">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}