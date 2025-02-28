import { useEffect } from 'react';

import initAOS from '../../../../utils/aos';
import { MapPinnedIcon } from 'lucide-react';
import { LocationProps } from '../../../../types';

const Location = (props: LocationProps) => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div className="w-full" data-aos="fade-right">
      <div className="relative bg-gray-100 p-8 pt-8">
        <div className="bg-primary absolute top-0 inline-block translate-y-[-50%] rounded-[50%] p-3">
          <MapPinnedIcon color="white" />
        </div>
        <div>
          <div className="pt-4 text-lg font-semibold md:text-2xl">
            <h2>{props.city}</h2>
          </div>
          <div className="pt-4">
            <div className="mb-4">
              <h3 className="text-sm font-semibold md:text-lg">{props.addressLabel}</h3>
              <p className="text-sm md:text-lg">{props.address}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold md:text-lg">{props.phoneNumberLabel}</h3>
              <p className="text-sm md:text-lg">{props.phoneNumber}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold md:text-lg">{props.emailLabel}</h3>
              <p className="text-sm md:text-lg">{props.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
