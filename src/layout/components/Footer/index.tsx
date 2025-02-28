import { Link } from 'react-router';
import WhiteLogo from '../../../assets/images/white-hpl-logo.png';
import { Facebook, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const footerLst = [
    {
      title: t('home.footer.quickLinks.label'),
      links: [
        {
          title: t('home.footer.quickLinks.subItems.about'),
          link: '/about',
        },
        {
          title: t('home.footer.quickLinks.subItems.news'),
          link: '/news',
        },
        {
          title: t('home.footer.quickLinks.subItems.tracking'),
          link: '/tracking',
        },
        {
          title: t('home.footer.quickLinks.subItems.ourPartner'),
          link: '/about',
        },
      ],
    },
    {
      title: t('home.footer.services.label'),
      links: [
        {
          title: t('home.footer.services.subItems.sea'),
          link: '/services/sea-freight',
        },
        {
          title: t('home.footer.services.subItems.land'),
          link: '/services/land-transportation',
        },
        {
          title: t('home.footer.services.subItems.air'),
          link: '/services/air-freight',
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="bg-secondary-one relative text-white">
        <div className="mx-auto w-full max-w-[1170px]">
          <div className="flex flex-row flex-wrap py-12">
            <div className="w-full px-[15px] pb-7 lg:w-2/5">
              <aside className="flex flex-col">
                <div className="2sm:w-2/5 mb-6 h-full w-full lg:w-2/4">
                  <Link to="/">
                    <img src={WhiteLogo} alt="Logo HPL" className="object-cover" />
                  </Link>
                </div>
                <div className="text-2xl font-bold sm:text-3xl">
                  <h1 className="uppercase">Hop Phat Logistics</h1>
                </div>
                <div className="">
                  <h3>Hop Phat - Cooperation and development</h3>
                </div>
                <div className="mt-6 flex">
                  <Link
                    to="/"
                    className="mr-3 transition-all duration-300 hover:translate-y-[-5px]"
                  >
                    <Facebook />
                  </Link>
                  <Link to="/" className="transition-all duration-300 hover:translate-y-[-5px]">
                    <Linkedin />
                  </Link>
                </div>
              </aside>
            </div>
            {footerLst.map((item, index) => (
              <div key={index} className="2sm:w-2/4 w-full px-[15px] pb-7 lg:w-1/5 lg:pb-0">
                <aside className="flex flex-col">
                  <div className="mb-6 text-xl font-semibold">
                    <h3>{item.title}</h3>
                  </div>
                  <ul className="text-base">
                    {item.links.map((link, idx) => (
                      <li key={idx} className="py-2">
                        <Link to={link.link} className="hover:text-secondary-two">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            ))}
            {/* <div className="2sm:w-2/4 w-full px-[15px] pb-7 lg:w-1/5 lg:pb-0">
              <aside className="flex flex-col">
                <div className="mb-6 text-xl font-semibold">
                  <h3>Quick Links</h3>
                </div>
                <ul className="text-base">
                  <li className="py-2">
                    <Link to="/about" className="hover:text-secondary-two">
                      About Us
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/news" className="hover:text-secondary-two">
                      News
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/tracking" className="hover:text-secondary-two">
                      Tracking
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/about" className="hover:text-secondary-two">
                      Our Partner
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="2sm:w-2/4 w-full px-[15px] pb-7 lg:w-1/5 lg:pb-0">
              <aside className="flex flex-col items-start">
                <div className="mb-6 text-xl font-semibold">
                  <h3>Services</h3>
                </div>
                <ul className="text-base">
                  <li className="py-2">
                    <Link to="/services/sea-freight" className="hover:text-secondary-two">
                      Sea Freight
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/services/land-transportation" className="hover:text-secondary-two">
                      Land Transportation
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/services/air-freight" className="hover:text-secondary-two">
                      Air Freight
                    </Link>
                  </li>
                </ul>
              </aside>
            </div> */}
            <div className="px-[15px] sm:w-full lg:w-1/5">
              <aside className="flex flex-col">
                <div className="mb-6 text-xl font-semibold">
                  <h3>{t('home.footer.contact.label')}</h3>
                </div>
                <div className="text-base">
                  <p className="py-2">{t('home.footer.contact.subItems.address')}</p>
                  <p className="py-2">{t('home.footer.contact.subItems.phone')}</p>
                  <p className="py-2">{t('home.footer.contact.subItems.email')}</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
