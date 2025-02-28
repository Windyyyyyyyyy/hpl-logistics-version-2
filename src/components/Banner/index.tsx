import type { Banner } from '../../types';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

const Banner = ({ ...props }: Banner) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="absolute inset-0 -z-[2] flex h-full bg-gray-200">
        <img src={props.imageUrl} alt="image banner" className="h-full w-full object-cover" />
      </div>
      <div className="mx-auto max-w-[1170px] px-[15px] text-white">
        <div className="relative flex min-h-[400px] flex-col justify-center py-6 pt-[100px]">
          <h2 className="text-4xl font-bold md:text-6xl">{props.title}</h2>
          <div className="mt-3 py-1">
            <ul className="flex">
              {props.routes.map((route, index) => (
                <li
                  key={index}
                  className={`hover:text-primary relative flex items-center text-base transition-all duration-300 md:text-lg ${route.active ? 'font-bold' : ''}`}
                >
                  <Link to={`/${route.stringUrl}`}>{route.label}</Link>
                  {index < props.routes.length - 1 && (
                    <div className="translate-y-[5%] font-normal">
                      <ChevronRight strokeWidth={2} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
