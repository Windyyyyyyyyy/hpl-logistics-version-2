import Banner from '../../components/Banner';

const About = () => {
  return (
    <section>
      <div>
        <Banner
          title="About"
          routes={[
            { label: 'Home', stringUrl: '', active: false },
            { label: 'About', stringUrl: 'about', active: true },
          ]}
        />
      </div>
      <div></div>
    </section>
  );
};

export default About;
