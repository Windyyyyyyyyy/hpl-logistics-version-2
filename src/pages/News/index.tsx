import Banner from '../../components/Banner';
import NewsImageBanner from '../../assets/images/news.jpg';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';

const News = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div>
        <Banner
          imageUrl={NewsImageBanner}
          title={t('news.layout.banner.title')}
          routes={[
            { label: t('news.layout.banner.stringUrl.baseUrl'), stringUrl: '', active: false },
            {
              label: t('news.layout.banner.stringUrl.currentUrl'),
              stringUrl: 'news',
              active: true,
            },
          ]}
        />
      </div>
      <div className="py-[60px] lg:py-[120px]">
        <div className="mx-auto h-full w-full max-w-[1170px] px-[15px]">
          <Outlet />
        </div> 
      </div>
    </section>
  );
};

export default News;
