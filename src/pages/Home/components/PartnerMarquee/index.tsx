import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import { Autoplay } from 'swiper/modules';

const PartnerMarquee = () => {
  const logoLst = [
    {
      imageUrl: '',
      altAttr: 'Logo 1',
    },
    {
      imageUrl: '',
      altAttr: 'Logo 2',
    },
    {
      imageUrl: '',
      altAttr: 'Logo 3',
    },
    {
      imageUrl: '',
      altAttr: 'Logo 4',
    },
    {
      imageUrl: '',
      altAttr: 'Logo 5',
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView="auto"
      loop={true}
      autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={7000}
      className="mySwiper"
    >
      {logoLst.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="flex aspect-[16/5] h-[150px] w-auto items-center bg-gray-200">
            <img
              src={logo.imageUrl}
              alt={logo.altAttr}
              className="h-full object-contain"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnerMarquee;
