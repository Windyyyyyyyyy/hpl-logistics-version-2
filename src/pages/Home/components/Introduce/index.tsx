import { Link } from 'react-router';
import IntroduceImage from '../../../../assets/images/introduce.webp';
import { useEffect } from 'react';
import initAOS from '../../../../utils/aos';
import { IntroduceProps } from '../../../../types';

const Introduce = (props: IntroduceProps) => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex h-full w-full flex-col" data-aos="fade-right">
        <div className="md:pr-2">
          <p className="text-sm font-normal md:text-base">{props.content}</p>
        </div>
        <div className="mt-7 flex">
          <Link to="/about" className="bg-primary rounded-md px-4 py-2 font-semibold text-white">
            {props.button}
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
