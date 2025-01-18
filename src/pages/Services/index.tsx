import Banner from '../../components/Banner';

const Services = () => {
  return (
    <section>
      <div>
        <Banner
          title="Services"
          routes={[
            { label: 'Home', stringUrl: '', active: false },
            { label: 'Services', stringUrl: 'services', active: true },
          ]}
        />
      </div>
      <div></div>
    </section>
  );
};

export default Services;
