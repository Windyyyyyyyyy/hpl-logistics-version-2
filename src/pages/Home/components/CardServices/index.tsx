import { Link } from 'react-router';
import type { CardServicesProps } from '../../../../types';
import { useEffect } from 'react';
import initAOS from '../../../../utils/aos';

const CardServices = ({ ...props }: CardServicesProps) => {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="w-full pt-7 md:w-1/2 md:px-[14px]" data-aos="zoom-in">
      <div className="relative h-full overflow-hidden rounded border-[0.2px] border-gray-200 px-8 py-8">
        <div className="bg-primary absolute -top-9 -right-7 h-24 w-24 rounded-[50%]">
          {<props.icon className="absolute bottom-5 left-6" color="white" size={26} />}
        </div>
        <div className="flex flex-col text-white">
          <div className="mb-5">
            <h3 className="text-lg font-bold md:text-2xl">{props.title}</h3>
            <p className="mt-2 text-sm md:text-base">{props.desc}</p>
          </div>
          <div className="text-primary text-lg font-bold">
            <Link to="/">View details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
