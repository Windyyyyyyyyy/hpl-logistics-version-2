import { Link } from 'react-router';
import WhiteLogo from '../../../assets/images/white-hpl-logo.png';
import { Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="relative bg-secondary-one text-white">
        <div className="mx-auto w-full max-w-[1170px]">
          <div className="flex flex-row flex-wrap py-12">
            <div className="w-full px-[15px] pb-7 lg:w-2/5">
              <aside className="flex flex-col">
                <div className="mb-6 h-full w-full 2sm:w-2/5 lg:w-2/4">
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
            <div className="w-full px-[15px] pb-7 2sm:w-2/4 lg:w-1/5 lg:pb-0">
              <aside className="flex flex-col">
                <div className="mb-6 text-xl font-semibold">
                  <h3>Quick Links</h3>
                </div>
                <ul className="text-base">
                  <li className="py-2">
                    <Link to="/" className="hover:text-secondary-two">
                      About Us
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/" className="hover:text-secondary-two">
                      News
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/" className="hover:text-secondary-two">
                      Tracking
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/" className="hover:text-secondary-two">
                      Our Partner
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="w-full px-[15px] pb-7 2sm:w-2/4 lg:w-1/5 lg:pb-0">
              <aside className="flex flex-col items-start">
                <div className="mb-6 text-xl font-semibold">
                  <h3>Services</h3>
                </div>
                <ul className="text-base">
                  <li className="py-2">
                    <Link to="/" className="hover:text-secondary-two">
                      Sea Freight
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/" className="hover:text-secondary-two">
                      Land Freight
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="" className="hover:text-secondary-two">
                      Air Freight
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="px-[15px] sm:w-full lg:w-1/5">
              <aside className="flex flex-col">
                <div className="mb-6 text-xl font-semibold">
                  <h3>Contact</h3>
                </div>
                <div className="text-base">
                  <p className="py-2">
                    585 Tung Thien Vuong, Ward 12, District 8, Ho Chi Minh City
                  </p>
                  <p className="py-2">+(028) 221 15 806</p>
                  <p className="py-2">info@hopphatlog.com</p>
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
