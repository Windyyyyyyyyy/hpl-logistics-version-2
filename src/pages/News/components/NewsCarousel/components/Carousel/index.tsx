import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from '../../components/NewsCard';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { CarouselProps } from '../../../../../../types';
const Carousel = ({ ...props }: CarouselProps) => {
  return (
    <>
      <div className="mb-7 text-2xl font-bold md:text-4xl">
        <h2>{props.title}</h2>
      </div>
      <div className="swiper-container w-full">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            550: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {props.posts.map((post, index) => (
            <SwiperSlide key={index} className="px-[15px]">
              <NewsCard
                _id={post._id}
                date={post.date}
                title={post.title}
                imageUrl={post.imageUrl}
                description={post.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Link
          to="/"
          className="bg-primary flex items-center rounded px-5 py-3 text-base font-bold text-white"
        >
          <p className="mr-2">{props.button}</p>
          <ChevronRight />
        </Link>
      </div>
    </>
  );
};

export default Carousel;
