import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './ServicesCarousel.css';
import { ChevronRight } from 'lucide-react';
import { Pagination } from 'swiper/modules';
import { ServicesCarouselProps } from '../../../../types';

const ServicesCarousel = (props: ServicesCarouselProps) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="service-carousel w-full">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // when window width is >= 640px
            500: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {props.services.map((service, index) => (
            <SwiperSlide key={index} className="px-[15px]">
              <div className="h-full w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                {/* Image container with aspect ratio */}
                <div className="relative h-48 overflow-hidden bg-gray-200 md:h-56 lg:h-64">
                  <img
                    src={service.imageUrl}
                    alt="service image"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content section */}
                <div className="p-4">
                  {/* Title */}
                  <h2 className="hover:text-primary mb-2 line-clamp-2 text-lg font-semibold text-gray-800 transition-colors duration-200 md:text-xl">
                    {service.label}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Link
          to="/services"
          className="bg-primary flex items-center rounded px-5 py-3 text-base font-bold text-white"
        >
          <p className="mr-2">{props.button}</p>
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default ServicesCarousel;
