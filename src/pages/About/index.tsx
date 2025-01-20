import Banner from '../../components/Banner';
import HPLLogo from '../../../public/hpl-logo.png';
import PartnerMarquee from '../../components/PartnerMarquee';
import ServicesCarousel from './components/ServicesCarousel';
import Strengths from './components/Strengths';
import { useEffect } from 'react';
import initAOS from '../../utils/aos';

const About = () => {
  useEffect(() => {
    initAOS();
  });
  const h2Style = 'text-center text-2xl font-bold md:text-3xl mb-[60px]';
  return (
    <section>
      <div>
        <Banner
          title="About"
          routes={[
            { label: 'Home', stringUrl: '', active: false },
            { label: 'About', stringUrl: 'about', active: true },
          ]}
        />
      </div>
      <div className="mx-auto w-full max-w-[1170px] px-[15px]">
        <div className="pt-[60px] lg:pt-[120px]">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold md:text-5xl">Hop Phat Logistics</h2>
            <h4 className="mt-2 text-base font-semibold text-primary md:text-xl">
              Efficiency - Safety - Reliability
            </h4>
          </div>
          <div className="mt-[60px]">
            <div className="mb-[60px]" data-aos="fade-in">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure id
                accusamus, eaque magnam temporibus dolorem. Eaque praesentium error, sunt saepe
                nesciunt aut adipisci maxime illum eveniet illo consequatur architecto!
              </p>
            </div>
            <div className="flex w-full justify-center" data-aos="fade-in">
              <img src={HPLLogo} alt="logo" className="h-full w-1/2" />
            </div>
            <div className="mt-[120px]" data-aos="fade-up">
              <h2 className={h2Style}>Why Choose Us</h2>
              <Strengths />
            </div>
            <div className="mt-[60px]" data-aos="fade-up">
              <h2 className={h2Style}>Our Services</h2>
              <ServicesCarousel />
            </div>
            <div className="mt-[60px]" data-aos="fade-up">
              <h2 className={h2Style}>Our Partner</h2>
              <PartnerMarquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
