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
      <div className="mx-auto w-full max-w-[1170px] px-[15px]">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
