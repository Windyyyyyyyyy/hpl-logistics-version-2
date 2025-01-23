import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopWithButton from '../components/ScrollToTopWithButton';
import ContactButton from '../components/ContactButton';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ContactButton />
      <ScrollToTopWithButton />
    </>
  );
};

export default MainLayout;
