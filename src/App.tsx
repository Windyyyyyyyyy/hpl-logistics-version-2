import { HashRouter, Route, Routes } from 'react-router';
import { About, Contact, Home, News, PageNotFound, Services, Tracking } from './pages';
import MainLayout from './layout';
import SeaFreight from './pages/Services/components/SeaFreight';
import AirFreight from './pages/Services/components/AirFreight';
import LandTransportation from './pages/Services/components/LandTrans';
import SupportServices from './pages/Services/components/SupportServices';
import ScrollToTop from './components/ScrollToTop';

const AppRoutes = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/" element={<Services />}>
            <Route path="sea-freight" element={<SeaFreight />} />
            <Route path="air-freight" element={<AirFreight />} />
            <Route path="land-transportation" element={<LandTransportation />} />
            <Route path="support-services" element={<SupportServices />} />
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracking" element={<Tracking />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
