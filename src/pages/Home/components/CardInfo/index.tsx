import { useEffect } from 'react';
import type { CardInfo } from '../../../../types';
import initAOS from '../../../../utils/aos';

const CardInfo = ({ label, number }: CardInfo) => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="2sm:w-1/2 flex w-full justify-center px-2 py-2 lg:w-1/3 lg:px-4"
    >
      <div className="flex w-full flex-col items-center rounded-md bg-primary p-7 text-white lg:p-12">
        <p className="text-4xl font-semibold md:text-6xl lg:text-7xl">{number}</p>
        <p className="text-lg font-semibold">{label}</p>
      </div>
    </div>
  );
};

export default CardInfo;
