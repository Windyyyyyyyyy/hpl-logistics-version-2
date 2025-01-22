import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import throttle from '../../utils/throttle';

const ScrollToTopWithButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  console.log('start');

  //the button scroll to top is visible when scroll
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 500);

    //add scroll event for window
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  console.log('end');
  return (
    <div
      className={`fixed bottom-8 right-2 transition-all duration-500 ease-linear md:right-6 ${isVisible ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-10 opacity-0'}`}
      onClick={handleScrollToTopClick}
    >
      <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[50%] border border-primary text-primary shadow-sm">
        <ChevronUp />
      </div>
    </div>
  );
};

export default ScrollToTopWithButton;
