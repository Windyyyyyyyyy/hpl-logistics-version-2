import { Link } from 'react-router';
import IntroduceImage from '../../../../assets/images/introduce.webp';
import { useEffect } from 'react';
import initAOS from '../../../../utils/aos';

const Introduce = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex h-full w-full flex-col" data-aos="fade-right">
        <div className="md:pr-2">
          <p className="text-base font-normal md:text-lg">
            Welcome to Hop Phat Logistics, where we provide comprehensive and efficient logistics
            solutions! As a young and dynamic company, we take pride in our creativity, dedication,
            and deep understanding of the transportation industry. With a professional team and
            cutting-edge technology, Hop Phat Logistics is committed to being your trusted partner
            on every journey, optimizing time, costs, and enhancing supply chain value. Let us turn
            your transportation challenges into opportunities for growth!
          </p>
        </div>
        <div className="mt-7 flex">
          <Link to="/" className="rounded-md bg-primary px-4 py-2 font-semibold text-white">
            See more ...
          </Link>
        </div>
      </div>
      <div className="group mt-7 w-full md:mt-0 md:pl-2" data-aos="fade-left">
        <img
          src={IntroduceImage}
          alt="introduce image"
          className="w-full object-cover transition-transform duration-300 group-hover:scale-100"
        />
      </div>
    </div>
  );
};
export default Introduce;
