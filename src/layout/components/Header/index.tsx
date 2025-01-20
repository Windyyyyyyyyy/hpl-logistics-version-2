import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Search, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSubitem, setShowSubitem] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const languages = ['vi', 'en'];

  // Navigation items object with subitems
  const navigationItems = [
    {
      key: 'about',
      label: t('header.navigation.about'),
      path: '/about',
    },
    {
      key: 'services',
      label: t('header.navigation.services.label'),
      path: '/services/sea-freight',
      subitems: [
        {
          key: 'air',
          label: t('header.navigation.services.subItems.air'),
          path: '/services/air-freight',
        },
        {
          key: 'sea',
          label: t('header.navigation.services.subItems.sea'),
          path: '/services/sea-freight',
        },
        {
          key: 'land',
          label: t('header.navigation.services.subItems.land'),
          path: '/services/land-transportation',
        },
        {
          key: 'support',
          label: t('header.navigation.services.subItems.support'),
          path: '/services/support-services',
        },
      ],
    },
    {
      key: 'news',
      label: t('header.navigation.news'),
      path: '/news',
    },
    {
      key: 'contact',
      label: t('header.navigation.contact.label'),
      path: '/contact',
      subitems: [
        {
          key: 'quotation',
          label: t('header.navigation.contact.subItems.quotation'),
          path: '/contact',
        },

        {
          key: 'recruitment',
          label: t('header.navigation.contact.subItems.recruitment'),
          path: '/contact',
        },
      ],
    },
    {
      key: 'tracking',
      label: t('header.navigation.tracking'),
      path: '/tracking',
    },
  ];

  useEffect(() => {
    // Scroll listener to detect scrolling
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Set scrolled to true if any scrolling occurs
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpen = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleShow = (key: string) => {
    setShowSubitem(showSubitem === key ? null : key);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[100] h-[100px] w-full bg-transparent transition-all duration-300 ease-in-out max-lg:h-[70px] ${scrolled ? 'h-[70px] bg-white' : 'h-[100px] bg-transparent'}`}
    >
      <div className="relative z-[99] h-full">
        <div className="mx-auto h-full max-w-[1170px] px-[15px]">
          <div className="flex h-full w-full items-center max-lg:w-full max-lg:justify-between">
            {/* Burger Icon */}
            <div className="burger" onClick={handleOpen}>
              <div className="relative flex h-[40px] w-9 cursor-pointer flex-col justify-evenly lg:hidden">
                <span
                  className={`inline-block h-[2px] w-full ${scrolled ? 'bg-black' : 'bg-white'}`}
                ></span>
                <span
                  className={`inline-block h-[2px] w-full ${scrolled ? 'bg-black' : 'bg-white'}`}
                ></span>
                <span
                  className={`inline-block h-[2px] w-full ${scrolled ? 'bg-black' : 'bg-white'}`}
                ></span>
              </div>
            </div>

            {/* Logo */}
            <div className="flex h-full items-center">
              <Link to="/" className="h-full py-4">
                <img src="/hpl-logo.png" alt="logo HPL" className="h-full w-auto object-contain" />
              </Link>
            </div>

            {/* Navigation */}
            {/* flex shorthand: flex-grow, flex shrink, flex-basis */}
            <div className="flex h-full w-full max-lg:hidden">
              <nav className="mx-auto h-full px-[15px]">
                <ul className="flex h-full w-full items-center justify-center">
                  {navigationItems.map((item) => (
                    <li key={item.key} className="hover-visible-parent relative mx-9 my-3 flex">
                      <Link
                        to={item.path}
                        className={`group relative flex items-center text-lg font-medium ${scrolled ? 'text-black' : 'text-white'}`}
                      >
                        {item.label}

                        {/* Icon */}
                        {item.subitems && (
                          <div className="flex h-5 w-5">
                            <ChevronDown
                              color={scrolled ? '#000000' : '#ffffff'}
                              strokeWidth={3}
                              className="ml-1"
                            />
                          </div>
                        )}

                        <span className="absolute -bottom-1 right-0 h-[3px] w-0 rounded bg-primary transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                      </Link>
                      {item.subitems && (
                        <ul className="invisible absolute left-0 top-[100%] z-10 mt-2 flex min-w-60 max-w-80 translate-y-[-20px] flex-col rounded bg-white p-3 opacity-0 transition-all duration-300">
                          {item.subitems.map((subitem) => (
                            <li key={subitem.key} className="w-full">
                              <Link
                                to={subitem.path}
                                className="group relative flex py-3 font-medium hover:text-primary"
                              >
                                {subitem.label}
                                <span className="absolute bottom-1 right-0 h-[3px] w-0 rounded bg-primary transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              {/* Search */}
              <div className="mr-2 flex h-6 w-6">
                <Search color={`${scrolled ? '#000000' : '#ffffff'}`} />
              </div>

              {/* Language Mode */}
              <div className="flex items-center max-lg:hidden">
                {languages.map((language, index) => (
                  <div key={language} className="relative">
                    <Link
                      to="/"
                      className={`mx-3 py-3 font-medium uppercase ${i18n.resolvedLanguage === language ? (scrolled ? 'text-black' : 'text-white') : 'text-gray-300'}`}
                      onClick={() => i18n.changeLanguage(language)}
                    >
                      {language}
                    </Link>
                    {index < languages.length - 1 && ( // Add the separator for all except the last item
                      <span
                        className={`absolute right-0 top-1/2 h-4/5 w-[2px] translate-x-[50%] translate-y-[-50%] ${scrolled ? 'bg-black' : 'bg-white'}`}
                      ></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`fixed bottom-0 left-0 right-0 top-0 z-[100] bg-[rgba(0,0,0,0.3)] ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={handleOpen}
        ></div>

        {/* Sidebar Mobile */}
        <div
          className={`fixed bottom-0 left-0 top-0 z-[120] transform bg-white transition-transform duration-500 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex h-full w-full flex-col px-5 py-11 pt-0">
            {/* Logo HPL */}
            <div className="flex w-2/5">
              <Link to="/" className="py-4" onClick={handleOpen}>
                <img src="/hpl-logo.png" alt="HPL logo" />
              </Link>
            </div>

            {/* Close Button */}
            <div
              className="absolute right-0 top-0 cursor-pointer bg-primary p-3"
              onClick={handleOpen}
            >
              <X color="#ffffff" strokeWidth={2.5} />
            </div>
            <div>
              <div>
                {/* Language Mode */}
                <div className="my-3 -ml-3 flex">
                  {languages.map((language, index) => (
                    <div key={language} className="relative">
                      <Link
                        to="/"
                        className={`px-3 py-2 font-medium uppercase ${i18n.resolvedLanguage === language ? 'text-primary' : 'text-gray-400'}`}
                        onClick={() => i18n.changeLanguage(language)}
                      >
                        {language}
                      </Link>
                      {index < languages.length - 1 && ( // Add the separator for all except the last item
                        <span className="absolute right-0 top-1/2 h-4/5 w-[2px] translate-x-[50%] translate-y-[-50%] bg-black"></span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <ul>
                  {navigationItems.map((item) => (
                    <li key={item.key}>
                      <div className="group relative flex cursor-pointer items-center justify-between py-[10px] text-lg font-semibold">
                        <Link to={item.path} onClick={handleOpen} className="w-2/3">
                          {item.label}
                        </Link>
                        {item.subitems && (
                          <div
                            className="flex h-5 w-1/3 justify-end"
                            onClick={() => handleShow(item.key)}
                          >
                            <ChevronDown strokeWidth={3} />
                          </div>
                        )}
                        <span className="absolute bottom-2 right-0 h-[2px] w-0 rounded bg-primary transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                      </div>
                      {item.subitems && (
                        <ul
                          className={`overflow-hidden transition-all duration-300 ${showSubitem === item.key ? 'mb-3 ml-5 max-h-96 opacity-100' : 'mb-0 ml-0 max-h-0 opacity-0'}`}
                        >
                          {item.subitems.map((subitem) => (
                            <li key={subitem.key} className="w-full">
                              <Link
                                to={subitem.path}
                                className="group relative flex py-2 font-medium hover:text-primary"
                                onClick={() => {
                                  handleShow(item.key);
                                  handleOpen();
                                }}
                              >
                                {subitem.label}
                                <span className="absolute bottom-1 right-0 h-[3px] w-0 rounded bg-primary transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import Search from '../../../assets/icons/search.svg';
// import 'animate.css'; // Import Animate.css

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   // Scroll listener to update state when the page is scrolled
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`t fixed left-0 top-0 z-[100] w-full transition-all duration-300 ease-in-out ${
//         scrolled ? 'h-[80px] bg-blue-500' : 'h-[100px] bg-transparent'
//       }`}
//     >
//       <div className="relative z-[99] h-full">
//         <div className="mx-auto h-full max-w-[1170px]">
//           <div className="flex h-full w-full items-center">
//             {/* Logo */}
//             <div className="flex h-full items-center">
//               <Link to="/" className="h-full py-3">
//                 <img src="/hpl-logo.png" alt="logo HPL" className="h-full w-auto object-contain" />
//               </Link>
//             </div>

//             {/* Navigation */}
//             <div className="flex h-full w-full">
//               <nav className="mx-auto h-full px-4">
//                 <ul className="flex h-full w-full items-center justify-center">
//                   <li className="flex">
//                     <Link to="/" className="px-9 py-3 text-lg font-medium text-white">
//                       Giới thiệu
//                     </Link>
//                   </li>
//                   <li className="flex">
//                     <Link to="/" className="px-9 py-3 text-lg font-medium text-white">
//                       Dịch vụ
//                     </Link>
//                   </li>
//                   <li className="flex">
//                     <Link to="/" className="px-9 py-3 text-lg font-medium text-white">
//                       Tin tức
//                     </Link>
//                   </li>
//                   <li className="flex">
//                     <Link to="/" className="px-9 py-3 text-lg font-medium text-white">
//                       Liên hệ
//                     </Link>
//                   </li>
//                   <li className="flex">
//                     <Link to="/" className="px-9 py-3 text-lg font-medium text-white">
//                       Tracking
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             <div className="flex items-center">
//               {/* Search */}
//               <div className="mr-2 flex h-6 w-6">
//                 <img src={Search} alt="search" className="cursor-pointer" />
//               </div>

//               {/* Language Mode */}
//               <div className="flex items-center">
//                 <Link to="/" className="px-2 py-2 font-medium text-white">
//                   VI
//                 </Link>
//                 <span className="text-white">|</span>
//                 <Link to="/" className="px-2 py-2 font-medium text-white">
//                   EN
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
