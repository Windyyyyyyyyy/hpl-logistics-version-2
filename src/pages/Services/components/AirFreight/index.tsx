import { useTranslation } from 'react-i18next';
import ServicesComponent from '..';
import AirFreightImage from '../../../../assets/images/air-freight.jpg';

const AirFreight = () => {
  const { t } = useTranslation();

  const whyChooseAirFreight = [
    {
      h4: `✅ ${t('services.air.whyChoose.content.fastReliable.label')}: `,
      span: t('services.air.whyChoose.content.fastReliable.desc'),
    },
    {
      h4: `✅ ${t('services.air.whyChoose.content.globalNetwork.label')}: `,
      span: t('services.air.whyChoose.content.globalNetwork.desc'),
    },
    {
      h4: `✅ ${t('services.air.whyChoose.content.secureHandling.label')}: `,
      span: t('services.air.whyChoose.content.secureHandling.desc'),
    },
    {
      h4: `✅ ${t('services.air.whyChoose.content.flexibleOptions.label')}: `,
      span: t('services.air.whyChoose.content.flexibleOptions.desc'),
    },
    {
      h4: `✅ ${t('services.air.whyChoose.content.customsSupport.label')}: `,
      span: t('services.air.whyChoose.content.customsSupport.desc'),
    },
  ];

  const servicesAirFreight = [
    t('services.air.airServices.express'),
    t('services.air.airServices.standard'),
    t('services.air.airServices.dangerousGoods'),
    t('services.air.airServices.tempControl'),
  ];

  return (
    <ServicesComponent
      title={t('services.air.title')}
      desc={t('services.air.desc')}
      image={AirFreightImage}
      whyChooseLabel={t('services.air.whyChoose.label')}
      whyChoose={whyChooseAirFreight}
      servicesLabel={t('services.air.airServices.label')}
      services={servicesAirFreight}
    />
  );
};

export default AirFreight;
