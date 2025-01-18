import { Link } from 'react-router';
import type { CardServices } from '../../../../types';
import { useEffect } from 'react';
import initAOS from '../../../../utils/aos';

const CardServices = ({ ...props }: CardServices) => {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="w-full pt-7 md:w-1/2 md:px-[14px]" data-aos="zoom-in">
      <div className="relative h-full overflow-hidden rounded border-[0.1px] px-8 py-8">
        <div className="absolute -right-7 -top-9 h-24 w-24 rounded-[50%] bg-primary">
          <img src={props.icon} alt="service icon" className="absolute bottom-5 left-6" />
        </div>
        <div className="flex flex-col text-white">
          <div className="mb-5">
            <h3 className="text-lg font-bold md:text-2xl">{props.title}</h3>
            <p className="mt-2 text-sm md:text-base">{props.desc}</p>
          </div>
          <div className="text-lg font-bold text-primary">
            <Link to="/">View details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
