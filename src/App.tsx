import { HashRouter, Route, Routes } from 'react-router';
import { About, Contact, Home, News, PageNotFound, Services, Tracking } from './pages';
import MainLayout from './layout';
import SeaFreight from './pages/Services/components/SeaFreight';
import AirFreight from './pages/Services/components/AirFreight';
import LandTransportation from './pages/Services/components/LandTrans';
import SupportServices from './pages/Services/components/SupportServices';
import ServicesIntro from './pages/Services/components/ServicesIntro';
import ScrollToTop from './components/ScrollToTop';
import NewsDetail from './pages/News/components/NewsDetail';
import NewsCarousel from './pages/News/components/NewsCarousel';

const AppRoutes = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
            <Route index element={<ServicesIntro />} />
            <Route path="sea-freight" element={<SeaFreight />} />
            <Route path="air-freight" element={<AirFreight />} />
            <Route path="land-transportation" element={<LandTransportation />} />
            <Route path="support-services" element={<SupportServices />} />
          </Route>
          <Route path="/news" element={<News />}>
            <Route index element={<NewsCarousel />} />
            <Route path=":id" element={<NewsDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracking" element={<Tracking />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
