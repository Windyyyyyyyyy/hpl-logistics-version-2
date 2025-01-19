import { useEffect } from 'react';

import initAOS from '../../../../utils/aos';
import { MapPinnedIcon } from 'lucide-react';

const Location = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div className="w-full" data-aos="fade-right">
      <div className="relative bg-gray-100 p-8 pt-8">
        <div className="absolute top-0 inline-block translate-y-[-50%] rounded-[50%] bg-primary p-3">
          <MapPinnedIcon color="white" />
        </div>
        <div>
          <div className="pt-4 text-lg font-semibold md:text-2xl">
            <h2>Ho Chi Minh City</h2>
          </div>
          <div className="pt-4">
            <div className="mb-4">
              <h3 className="text-sm font-semibold md:text-lg">Address:</h3>
              <p className="text-sm md:text-lg">
                585 Tung Thien Vuong, Ward 12, District 8, Ho Chi Minh City
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold md:text-lg">Phone Number:</h3>
              <p className="text-sm md:text-lg">+(028) 221 15 806</p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold md:text-lg">Email:</h3>
              <p className="text-sm md:text-lg">info@hopphatlog.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
