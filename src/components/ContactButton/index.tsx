import { MessageCircleMore, Phone } from 'lucide-react';
import MessengerIcon from '../../assets/icons/facebook-messenger.svg';
import ZaloIcon from '../../assets/icons/zalo.svg';
import { useState } from 'react';

const ContactButton = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const buttonStyle =
    'flex h-11 w-11 cursor-pointer items-center justify-center rounded-[50%] border border-primary p-2 text-primary shadow-sm hover:bg-primary hover:text-white';

  return (
    <div className="fixed bottom-[85px] right-2 flex flex-col gap-2 transition-all duration-500 ease-linear md:right-6">
      <div className="relative z-50">
        <div
          className={`absolute bottom-0 flex flex-col gap-2 ${
            isShow ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'
          } transition-all duration-300 ease-linear`}
        >
          <a href="https://zalo.me/0977937806" className={buttonStyle}>
            <img src={MessengerIcon} alt="messenger icon" className="h-full w-full" />
          </a>

          <a href="https://zalo.me/0977937806" className={buttonStyle}>
            <img src={ZaloIcon} alt="zalo icon" />
          </a>

          <div className={buttonStyle}>
            <Phone />
          </div>
        </div>
      </div>
      <div
        className="hover:shadow-custom-one z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-[50%] border border-primary text-primary shadow-sm transition-all duration-300"
        onClick={handleShow}
      >
        <MessageCircleMore />
      </div>
    </div>
  );
};

export default ContactButton;
