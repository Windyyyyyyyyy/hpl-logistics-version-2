// const Home = () => {
//   return (
//     <>
//       <section className="block">
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.49] to-black"></div>
//           <div className="z-[-2] w-full">
//             <img
//               src="https://kflv.vn/wp-content/uploads/2024/05/hban-scaled.jpg"
//               alt=""
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="mx-auto h-full w-full max-w-[1170px] px-[15px]">
//             <div className="z-10 flex flex-col items-center justify-center py-[100px] text-white">
//               <h1>Hop Phat Logistics</h1>
//               <p>"If you want to go fast, go alone. If you want to go far, go together"</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

import CardInfo from './components/CardInfo';
import Introduce from './components/Introduce';
import Location from './components/Location';
import Map from './components/Map';
import PartnerMarquee from '../../components/PartnerMarquee';
import ServiceImage from '../../assets/images/services.webp';
import CardServices from './components/CardServices';
import { Plane, Truck, Ship, Package } from 'lucide-react';
import Quotation from './components/Quotation';
import { useTranslation } from 'react-i18next';

// export default Home;

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Banner */}
      <section className="block">
        <div className="relative h-[400px] md:h-[600px] lg:h-[750px]">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.49] to-black"></div>

          {/* Responsive Image */}
          <img
            src="https://kflv.vn/wp-content/uploads/2024/05/hban-scaled.jpg"
            alt="Background"
            className="absolute inset-0 z-[-2] h-full w-full object-cover"
          />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl font-bold uppercase md:text-5xl lg:text-7xl">
              Hop Phat Logistics
            </h1>
            <p className="mt-4 text-sm md:text-lg lg:text-xl">
              "If you want to go fast, go alone. If you want to go far, go together"
            </p>
          </div>
        </div>
      </section>

      {/* Card Info */}
      <section className="lg:-translate-y-[50%]">
        <div className="py-10 lg:py-0">
          <div className="mx-auto h-full w-full max-w-[1170px]">
            <div className="flex flex-wrap justify-center">
              <CardInfo label={t('home.body.statistic.order')} number="3597" />
              <CardInfo label={t('home.body.statistic.customer')} number="1576" />
              <CardInfo label={t('home.body.statistic.mass')} number="8500" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduce */}
      <section>
        <div className="mx-auto w-full max-w-[1170px] px-[15px] pt-[15px] lg:pt-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Hop Phat Logistics</h2>
            <p className="text-primary mt-2 text-base font-semibold md:text-xl">
              {t('home.body.introduction.slogan')}
            </p>
          </div>
          <div className="mt-12">
            <Introduce
              content={t('home.body.introduction.content')}
              button={t('home.body.introduction.button')}
            />
          </div>
        </div>
      </section>

      {/* Partner Marquee */}
      <section className="my-16">
        <div className="mx-auto w-full max-w-[1170px] px-[15px]">
          <div className="overflow-hidden">
            <PartnerMarquee />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mb-24">
        <div className="bg-secondary-one flex py-[80px]">
          <div className="mx-auto w-full max-w-[1170px] px-[15px]">
            <div className="flex w-full flex-col md:flex-row">
              <div className="flex w-full flex-col md:w-4/5">
                <div className="text-white">
                  <h2 className="mb-2 text-3xl font-bold lg:text-4xl">
                    {t('home.body.ourServices.label')}
                  </h2>
                  <p className="text-base">{t('home.body.ourServices.subLabel')}</p>
                </div>
                <div className="mt-10 flex h-full flex-col flex-wrap md:-ml-[15px] md:flex-row">
                  <CardServices
                    icon={Truck}
                    title={t('home.body.ourServices.serviceList.land.label')}
                    desc={t('home.body.ourServices.serviceList.land.content')}
                    button={t('home.body.ourServices.serviceList.land.button')}
                  />
                  <CardServices
                    icon={Plane}
                    title={t('home.body.ourServices.serviceList.air.label')}
                    desc={t('home.body.ourServices.serviceList.air.content')}
                    button={t('home.body.ourServices.serviceList.air.button')}
                  />
                  <CardServices
                    icon={Ship}
                    title={t('home.body.ourServices.serviceList.sea.label')}
                    desc={t('home.body.ourServices.serviceList.sea.content')}
                    button={t('home.body.ourServices.serviceList.sea.button')}
                  />
                  <CardServices
                    icon={Package}
                    title={t('home.body.ourServices.serviceList.support.label')}
                    desc={t('home.body.ourServices.serviceList.support.content')}
                    button={t('home.body.ourServices.serviceList.support.button')}
                  />
                </div>
              </div>
              <div className="mt-8 mr-0 md:mt-0 md:w-2/5 md:pl-4">
                <img
                  src={ServiceImage}
                  alt="services image"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotation */}
      <section>
        <div className="mx-auto w-full max-w-[1170px] px-[15px]">
          <div className="text-center text-3xl font-bold text-black lg:text-4xl">
            <p>{t('home.body.ourQuotation.label')}</p>
          </div>
          <div className="mt-14 mb-24">
            <Quotation />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="mb-24">
        <div className="mx-auto w-full max-w-[1170px] px-[15px]">
          <div className="w-full">
            <div className="text-center text-3xl font-bold text-black lg:text-4xl">
              <p>{t('home.body.ourLocation.label')}</p>
            </div>
            <div className="mt-12 w-full">
              <div className="flex flex-col md:flex-row">
                <Location
                  city={t('home.body.ourLocation.city')}
                  addressLabel={t('home.body.ourLocation.address.label')}
                  address={t('home.body.ourLocation.address.content')}
                  phoneNumberLabel={t('home.body.ourLocation.phoneNumber.label')}
                  phoneNumber={t('home.body.ourLocation.phoneNumber.content')}
                  emailLabel={t('home.body.ourLocation.email.label')}
                  email={t('home.body.ourLocation.email.content')}
                />
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
