import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import { Autoplay } from 'swiper/modules';
import CoscoLogo from '../../assets/images/cosco-shipping-logo.jpg';
import EvergreenLogo from '../../assets/images/evergreen-logo.jpg';
import WanHaiLogo from '../../assets/images/wanhailines-logo.jpg';
import TanCangLogo from '../../assets/images/tan-cang-shipping-logo-resized.png';
import OoclLogo from '../../assets/images/oocllogo-resized.png';
import MearkLogo from '../../assets/images/meark.png';
import GlsLogo from '../../assets/images/logo-gls.png';
import GemadeptLogo from '../../assets/images/logo-gemadept.png';
import KmtcLineLogo from '../../assets/images/kmtc-line-resized.jpg';

const PartnerMarquee = () => {
  const logoLst = [
    {
      imageUrl: CoscoLogo,
      altAttr: 'Logo 1',
    },
    {
      imageUrl: EvergreenLogo,
      altAttr: 'Logo 2',
    },
    {
      imageUrl: WanHaiLogo,
      altAttr: 'Logo 3',
    },
    {
      imageUrl: TanCangLogo,
      altAttr: 'Logo 4',
    },
    {
      imageUrl: OoclLogo,
      altAttr: 'Logo 5',
    },
    {
      imageUrl: MearkLogo,
      altAttr: 'Logo 5',
    },
    {
      imageUrl: GlsLogo,
      altAttr: 'Logo 5',
    },
    {
      imageUrl: GemadeptLogo,
      altAttr: 'Logo 5',
    },
    {
      imageUrl: KmtcLineLogo,
      altAttr: 'Logo 5',
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={120}
      slidesPerView="auto"
      loop={true}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={7000}
      className="mySwiper"
    >
      {logoLst.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="flex h-[70px] items-center justify-center">
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
