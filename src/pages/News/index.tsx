import Banner from '../../components/Banner';
import { NewsCardProps } from '../../types';
import NewsCarousel from './components/NewsCarousel';

const News = () => {
  const NewsMarketCards: Array<NewsCardProps> = [
    {
      date: Date.now().toString(),
      title: 'Key Regulations on Import-Export Taxes',
      imageUrl: 'https://picsum.photos/200/300',
      imageAlt: 'news',
      description:
        'Import and export taxes are key economic policy tools used to regulate the flow of goods across national borders. These taxes represent financial obligations for individuals and organizations engaged in international trade.',
    },
    {
      date: Date.now().toString(),
      title: 'Dry Container Shipping',
      imageUrl: 'https://picsum.photos/200/300',
      imageAlt: 'news',
      description:
        'A dry container, also known as a general-purpose container, is specifically designed for transporting dry goods under normal temperature conditions. Certified to international ISO 668:1995(E) standards, these containers ensure safety and convenience for large-scale shipments.',
    },
    {
      date: Date.now().toString(),
      title: 'New Export and Import Tax Tariff Effective',
      imageUrl: 'https://picsum.photos/200/300',
      imageAlt: 'news',
      description:
        'The Government of Vietnam has issued Decree No. 26/2023/ND-CP, which outlines the new Export Tariff, Preferential Import Tariff, List of Goods, and specific tax rates such as absolute tax, mixed tax, and out-of-quota import tax.',
    },
    {
      date: Date.now().toString(),
      title: 'New Export and Import Tax Tariff Effective',
      imageUrl: 'https://picsum.photos/200/300',
      imageAlt: 'news',
      description:
        'The Government of Vietnam has issued Decree No. 26/2023/ND-CP, which outlines the new Export Tariff, Preferential Import Tariff, List of Goods, and specific tax rates such as absolute tax, mixed tax, and out-of-quota import tax.',
    },
  ];
  return (
    <section>
      <div>
        <Banner
          title="News"
          routes={[
            { label: 'Home', stringUrl: '', active: false },
            { label: 'News', stringUrl: 'news', active: true },
          ]}
        />
      </div>
      <div className="py-[60px] lg:py-[120px]">
        <div className="mx-auto h-full w-full max-w-[1170px] px-[15px]">
          <div className="flex flex-col gap-16">
            <div>
              <NewsCarousel title="Market News" posts={NewsMarketCards} />
            </div>
            <div>
              <NewsCarousel title="Specialized News" posts={NewsMarketCards} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
