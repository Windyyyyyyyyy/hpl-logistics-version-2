import Banner from '../../components/Banner';

const News = () => {
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
      <div></div>
    </section>
  );
};

export default News;
