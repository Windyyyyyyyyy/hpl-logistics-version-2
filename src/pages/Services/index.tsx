import Banner from '../../components/Banner';
import { Link, Outlet, useLocation } from 'react-router';
import { ChevronRight } from 'lucide-react';
import CommitmentImage from '../../assets/images/commitment.jpg';

const Services = () => {
  const services = [
    { name: 'Sea Freight', path: 'sea-freight' },
    { name: 'Air Freight', path: 'air-freight' },
    { name: 'Land Transportation', path: 'land-transportation' },
    { name: 'Support Services', path: 'support-services' },
  ];

  const location = useLocation();
  const selectedService = location.pathname.split('/').pop();
  console.log(selectedService);
  return (
    <section>
      <div>
        <Banner
          imageUrl=""
          title="Services"
          routes={[
            { label: 'Home', stringUrl: '', active: false },
            { label: 'Services', stringUrl: 'services', active: true },
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
                  className={`hover:bg-primary flex cursor-pointer items-center justify-between border-b bg-gray-100 p-4 hover:text-white ${selectedService === service.path ? 'bg-primary text-white' : ''}`}
                >
                  <span>{service.name}</span>
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
                  <h2 className="mb-4 text-xl font-bold">OUR COMMITMENT</h2>
                  <p className="text-justify text-sm leading-relaxed">
                    We are committed to providing excellent and unparalleled service to ensure the
                    satisfaction of all customers. No matter where your quote is located or your
                    cargo, our global reach, local flexibility, and strategic networks empower us to
                    deliver innovative and cost-effective logistic solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-50 p-6 md:flex-row md:space-y-0 md:space-x-4">
            <p className="mb-4 text-center text-lg md:mb-0 md:text-left">
              Have you question or need any help for work consultant
            </p>
            <button className="bg-primary hover:bg-primary rounded px-6 py-3 text-white">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
