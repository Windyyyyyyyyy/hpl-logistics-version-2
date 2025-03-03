import { useTranslation } from 'react-i18next';
import ServicesComponent from '..';
import SupportServicesImage from '../../../../assets/images/support-services.png';

const SupportServices = () => {
  const { t } = useTranslation();

  const whyChooseSupportServices = [
    {
      h4: `✅ ${t('services.support.whyChoose.content.endToEnd.label')}: `,
      span: t('services.support.whyChoose.content.endToEnd.desc'),
    },
    {
      h4: `✅ ${t('services.support.whyChoose.content.customsExpertise.label')}: `,
      span: t('services.support.whyChoose.content.customsExpertise.desc'),
    },
    {
      h4: `✅ ${t('services.support.whyChoose.content.secureWarehousing.label')}: `,
      span: t('services.support.whyChoose.content.secureWarehousing.desc'),
    },
    {
      h4: `✅ ${t('services.support.whyChoose.content.insurance.label')}: `,
      span: t('services.support.whyChoose.content.insurance.desc'),
    },
    {
      h4: `✅ ${t('services.support.whyChoose.content.customerSupport.label')}: `,
      span: t('services.support.whyChoose.content.customerSupport.desc'),
    },
  ];

  const servicesSupport = [
    t('services.support.supportServices.customs'),
    t('services.support.supportServices.warehousing'),
    t('services.support.supportServices.packing'),
    t('services.support.supportServices.consulting'),
  ];

  return (
    <ServicesComponent
      title={t('services.support.title')}
      desc={t('services.support.desc')}
      image={SupportServicesImage}
      whyChoose={whyChooseSupportServices}
      whyChooseLabel={t('services.support.whyChoose.label')}
      servicesLabel={t('services.support.supportServices.label')}
      services={servicesSupport}
    />
  );
};

export default SupportServices;
