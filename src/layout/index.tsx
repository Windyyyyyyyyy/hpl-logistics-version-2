import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopWithButton from '../components/ScrollToTopWithButton';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopWithButton />
    </>
  );
};

export default MainLayout;
