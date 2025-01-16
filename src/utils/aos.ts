import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const initAOS = () => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
};

export default initAOS;
