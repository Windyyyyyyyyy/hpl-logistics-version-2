import LandTransImage from '../../../../assets/images/land-transportation.png';
import ServicesComponent from '..';
import { useTranslation } from 'react-i18next';

const LandTransportation = () => {
  const { t } = useTranslation();

  const whyChooseLandTransport = [
    {
      h4: `✅ ${t('services.land.whyChoose.content.extensiveNetwork.label')}: `,
      span: t('services.land.whyChoose.content.extensiveNetwork.desc'),
    },
    {
      h4: `✅ ${t('services.land.whyChoose.content.deliveryOptions.label')}: `,
      span: t('services.land.whyChoose.content.deliveryOptions.desc'),
    },
    {
      h4: `✅ ${t('services.land.whyChoose.content.onTime.label')}: `,
      span: t('services.land.whyChoose.content.onTime.desc'),
    },
    {
      h4: `✅ ${t('services.land.whyChoose.content.specialHandling.label')}: `,
      span: t('services.land.whyChoose.content.specialHandling.desc'),
    },
    {
      h4: `✅ ${t('services.land.whyChoose.content.tracking.label')}: `,
      span: t('services.land.whyChoose.content.tracking.desc'),
    },
  ];

  const servicesLandTransport = [
    t('services.land.landServices.ftl'),
    t('services.land.landServices.ltl'),
    t('services.land.landServices.express'),
    t('services.land.landServices.specialized'),
  ];

  return (
    <ServicesComponent
      title={t('services.land.title')}
      desc={t('services.land.desc')}
      image={LandTransImage}
      whyChoose={whyChooseLandTransport}
      whyChooseLabel={t('services.land.whyChoose.label')}
      services={servicesLandTransport}
      servicesLabel={t('services.land.landServices.label')}
    />
  );
};

export default LandTransportation;
