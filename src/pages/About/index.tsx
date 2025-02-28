import Banner from '../../components/Banner';
import HPLLogo from '../../../src/assets/logo/hpl-logo.png';
import PartnerMarquee from '../../components/PartnerMarquee';
import ServicesCarousel from './components/ServicesCarousel';
import Strengths from './components/Strengths';
import { useEffect } from 'react';
import initAOS from '../../utils/aos';
import { useTranslation } from 'react-i18next';
import { CheckCheck, ClockArrowDown, Truck, Users } from 'lucide-react';
import SupportService from '../../assets/images/support-services.png';
import SeaFreight from '../../assets/images/sea-freight.jpg';
import AirFreight from '../../assets/images/air-freight.jpg';
import LandFreight from '../../assets/images/land-transportation.png';
import InternationalShipping from '../../assets/images/International-shipping.jpg';
import DomesticShipping from '../../assets/images/domestic-shipping.jpg';
import ImportExport from '../../assets/images/import-export.jpg';
import CustomDeclarance from '../../assets/images/customs-declaration.jpg';
import AboutBackground from '../../assets/images/introduce.webp';

const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    initAOS();
  });
  const h2Style = 'text-center text-2xl font-bold md:text-3xl mb-[60px]';
  return (
    <section>
      <div>
        <Banner
          imageUrl={AboutBackground}
          title={t('about.banner.title')}
          routes={[
            { label: t('about.banner.routes.home'), stringUrl: '', active: false },
            { label: t('about.banner.routes.about'), stringUrl: 'about', active: true },
          ]}
        />
      </div>
      <div className="mx-auto w-full max-w-[1170px] px-[15px]">
        <div className="pt-[60px] lg:pt-[120px]">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Hop Phat Logistics</h2>
            <h4 className="text-primary mt-2 text-base font-semibold md:text-xl">
              {t('about.introduction.slogan')}
            </h4>
          </div>
          <div className="mt-[60px]">
            <div className="mb-[60px]" data-aos="fade-in">
              <p className="text-base sm:text-lg">{t('about.introduction.content')}</p>
            </div>
            <div className="flex w-full justify-center" data-aos="fade-in">
              <img src={HPLLogo} alt="logo" className="2sm:w-1/2 h-full w-full" />
            </div>
            <div className="mt-[120px]" data-aos="fade-up">
              <h2 className={h2Style}>{t('about.strengths.title')}</h2>
              <Strengths
                strengths={[
                  {
                    icon: Truck,
                    label: t('about.strengths.subItems.routes.label'),
                    desc: t('about.strengths.subItems.routes.desc'),
                  },
                  {
                    icon: CheckCheck,
                    label: t('about.strengths.subItems.handling.label'),
                    desc: t('about.strengths.subItems.handling.desc'),
                  },
                  {
                    icon: Users,
                    label: t('about.strengths.subItems.experience.label'),
                    desc: t('about.strengths.subItems.experience.desc'),
                  },
                  {
                    icon: ClockArrowDown,
                    label: t('about.strengths.subItems.saveTime.label'),
                    desc: t('about.strengths.subItems.saveTime.desc'),
                  },
                ]}
              />
            </div>
            <div className="mt-[60px]" data-aos="fade-up">
              <h2 className={h2Style}>{t('about.ourService.title')}</h2>
              <ServicesCarousel
                services={[
                  {
                    imageUrl: InternationalShipping,
                    label: t('about.ourService.subItems.interShipping'),
                  },
                  {
                    imageUrl: DomesticShipping,
                    label: t('about.ourService.subItems.domesticShipping'),
                  },
                  {
                    imageUrl: CustomDeclarance,
                    label: t('about.ourService.subItems.customsClearance'),
                  },
                  {
                    imageUrl: ImportExport,
                    label: t('about.ourService.subItems.importExport'),
                  },
                  {
                    imageUrl: AirFreight,
                    label: t('about.ourService.subItems.air'),
                  },
                  {
                    imageUrl: SeaFreight,
                    label: t('about.ourService.subItems.sea'),
                  },
                  {
                    imageUrl: LandFreight,
                    label: t('about.ourService.subItems.land'),
                  },
                  {
                    imageUrl: SupportService,
                    label: t('about.ourService.subItems.support'),
                  },
                ]}
                button={t('about.ourService.button')}
              />
            </div>
            <div className="my-[60px]" data-aos="fade-up">
              <h2 className={h2Style}>{t('about.ourPartner')}</h2>
              <PartnerMarquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
