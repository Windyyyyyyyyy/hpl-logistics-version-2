import { NewsCardProps } from '../../../../types';
import 'swiper/css';
import 'swiper/css/pagination';
import './NewsCarousel.css';
import { useTranslation } from 'react-i18next';
import Carousel from './components/Carousel';

const NewsCarousel = () => {
  const { t } = useTranslation();
  const NewsMarketCards: Array<NewsCardProps> = [
    {
      _id: '1',
      date: Date.now().toString(),
      title: 'Key Regulations on Import-Export Taxes',
      imageUrl: 'https://picsum.photos/200/300',
      imageAlt: 'news',
      description:
        'Import and export taxes are key economic policy tools used to regulate the flow of goods across national borders. These taxes represent financial obligations for individuals and organizations engaged in international trade.',
    },
    {
      _id: '2',
      date: Date.now().toString(),
      title: 'Dry Container Shipping',
      imageUrl: 'https://picsum.photos/200/300',
      imageAlt: 'news',
      description:
        'A dry container, also known as a general-purpose container, is specifically designed for transporting dry goods under normal temperature conditions. Certified to international ISO 668:1995(E) standards, these containers ensure safety and convenience for large-scale shipments.',
    },
    {
      _id: '3',
      date: Date.now().toString(),
      title: 'New Export and Import Tax Tariff Effective',
      imageUrl: 'https://picsum.photos/200/300',
      imageAlt: 'news',
      description:
        'The Government of Vietnam has issued Decree No. 26/2023/ND-CP, which outlines the new Export Tariff, Preferential Import Tariff, List of Goods, and specific tax rates such as absolute tax, mixed tax, and out-of-quota import tax.',
    },
    {
      _id: '4',
      date: Date.now().toString(),
      title: 'New Export and Import Tax Tariff Effective',
      imageUrl: 'https://picsum.photos/200/300',
      imageAlt: 'news',
      description:
        'The Government of Vietnam has issued Decree No. 26/2023/ND-CP, which outlines the new Export Tariff, Preferential Import Tariff, List of Goods, and specific tax rates such as absolute tax, mixed tax, and out-of-quota import tax.',
    },
  ];
  return (
    <div className="flex flex-col gap-16">
      <div data-aos="fade-up">
        <div className="flex flex-col items-center gap-6">
          <Carousel
            title={t('news.post.marketNews.title')}
            posts={NewsMarketCards}
            button={t('news.button')}
          />
          <Carousel
            title={t('news.post.specializedNews.title')}
            posts={NewsMarketCards}
            button={t('news.button')}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
