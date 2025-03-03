import SeaFreightImage from '../../../../assets/images/sea-freight.jpg';
import ServicesComponent from '..';
import { useTranslation } from 'react-i18next';

const SeaFreight = () => {
  const { t } = useTranslation();

  const whyChooseSeaFreight = [
    {
      h4: `✅ ${t('services.sea.whyChoose.content.globalNetwork.label')}: `,
      span: t('services.sea.whyChoose.content.globalNetwork.desc'),
    },
    {
      h4: `✅ ${t('services.sea.whyChoose.content.shippingOptions.label')}: `,
      span: t('services.sea.whyChoose.content.shippingOptions.desc'),
    },
    {
      h4: `✅ ${t('services.sea.whyChoose.content.transitTime.label')}: `,
      span: t('services.sea.whyChoose.content.transitTime.desc'),
    },
    {
      h4: `✅ ${t('services.sea.whyChoose.content.price.label')}: `,
      span: t('services.sea.whyChoose.content.price.desc'),
    },
    {
      h4: `✅ ${t('services.sea.whyChoose.content.doorToDoor.label')}: `,
      span: t('services.sea.whyChoose.content.doorToDoor.desc'),
    },
  ];

  const servicesSeaFreight = [
    t('services.sea.seaServices.fcl'),
    t('services.sea.seaServices.lcl'),
    t('services.sea.seaServices.custom'),
    t('services.sea.seaServices.warehousing'),
  ];

  return (
    <ServicesComponent
      title={t('services.sea.title')}
      desc={t('services.sea.desc')}
      image={SeaFreightImage}
      whyChooseLabel={t('services.sea.whyChoose.label')}
      whyChoose={whyChooseSeaFreight}
      servicesLabel={t('services.sea.seaServices.label')}
      services={servicesSeaFreight}
    />
  );
};

export default SeaFreight;
