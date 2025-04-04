import Banner from '../../components/Banner';
import { Link, Outlet, useLocation } from 'react-router';
import { ChevronRight } from 'lucide-react';
import CommitmentImage from '../../assets/images/commitment.jpg';
import { useTranslation } from 'react-i18next';
import ServicesBanner from '../../assets/images/services_banner.webp';

const Services = () => {
  const { t } = useTranslation();
  const services = [
    { name: t('services.layout.sidebar.sea'), path: 'sea-freight' },
    { name: t('services.layout.sidebar.air'), path: 'air-freight' },
    { name: t('services.layout.sidebar.land'), path: 'land-transportation' },
    { name: t('services.layout.sidebar.support'), path: 'support-services' },
  ];

  const location = useLocation();
  const selectedService = location.pathname.split('/').pop();
  console.log(selectedService);
  return (
    <section>
      <div>
        <Banner
          imageUrl={ServicesBanner}
          title={t('services.layout.banner.title')}
          routes={[
            { label: t('services.layout.banner.stringUrl.baseUrl'), stringUrl: '', active: false },
            {
              label: t('services.layout.banner.stringUrl.currentUrl'),
              stringUrl: 'services',
              active: true,
            },
          ]}
        />
      </div>
      <div>
        <div className="mx-auto max-w-[1170px] px-[15px] py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Sidebar */}
            <div className="md:col-span-1">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.path}`}
                  className={`hover:bg-primary mb-1 flex cursor-pointer items-center justify-between bg-gray-100 p-4 hover:text-white ${selectedService === service.path ? 'bg-primary text-white' : ''}`}
                >
                  <span className="text-base">{service.name}</span>
                  <ChevronRight strokeWidth={3} />
                </Link>
              ))}
            </div>
            {/* Content */}
            <div className="md:col-span-3">
              <Outlet />
              <div className="mt-8 flex flex-col items-start gap-4 md:flex-row">
                {/* Image Section */}
                <div className="w-full overflow-hidden rounded-lg md:w-1/2">
                  <img
                    src={CommitmentImage}
                    alt="Team meeting"
                    className="w-full rounded-lg object-contain"
                  />
                </div>

                {/* Content Section */}
                <div className="flex w-full flex-col">
                  <h2 className="mb-4 text-xl font-bold">
                    {t('services.layout.ourCommitment.label')}
                  </h2>
                  <p className="text-justify text-sm leading-relaxed">
                    {t('services.layout.ourCommitment.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-50 p-6 md:flex-row md:space-y-0 md:space-x-4">
            <p className="mb-4 text-center text-lg md:mb-0 md:text-left">
              {t('services.layout.contact.label')}
            </p>
            <button className="bg-primary hover:bg-primary rounded px-6 py-3 text-white">
              {t('services.layout.contact.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
