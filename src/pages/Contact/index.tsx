import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../../components/Banner';
import ContactBannerImage from '../../assets/images/contact.webp';

const Contact = () => {
  const { t } = useTranslation();
  const [cargoType, setCargoType] = useState('FCL');

  const inputClass =
    'w-full px-3 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-secondary-t focus:border-primary text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-500';
  const labelClass = 'block text-sm font-medium text-gray-700';
  const labelDisabledClass = 'block text-sm font-medium text-gray-400';
  const requiredClass = 'text-red-500 text-sm';

  const handleCargoTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCargoType(event.target.value);
  };

  return (
    <section>
      <div>
        <Banner
          imageUrl={ContactBannerImage}
          title={t('contact.title')}
          routes={[
            { label: t('contact.breadcrumb.home'), stringUrl: '', active: false },
            { label: t('contact.breadcrumb.contact'), stringUrl: 'contact', active: true },
          ]}
        />
      </div>
      <div className="mx-auto max-w-[1170px] bg-white px-[15px] py-[60px] lg:py-[120px]">
        <div className="w-full rounded-lg bg-gray-100 p-6">
          <h1 className="text-primary mb-6 text-center text-xl">{t('contact.form.heading')}</h1>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h2 className="mb-4 text-base font-medium">
                    {t('contact.form.contact_information')}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>
                        {t('contact.form.first_last_name')} <span className={requiredClass}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={t('contact.form.first_last_name_placeholder')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {t('contact.form.phone')} <span className={requiredClass}>*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder={t('contact.form.phone_placeholder')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {t('contact.form.email')} <span className={requiredClass}>*</span>
                      </label>
                      <input
                        type="email"
                        placeholder={t('contact.form.email_placeholder')}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-base font-medium">{t('contact.form.goods_details')}</h2>
                  <div>
                    <label className={labelClass}>{t('contact.form.type_of_goods')}</label>
                    <input
                      type="text"
                      placeholder={t('contact.form.type_of_goods_placeholder')}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <h2 className="mb-4 text-base font-medium">{t('contact.form.goods_details')}</h2>
                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>
                        {t('contact.form.transportation.label')}{' '}
                        <span className={requiredClass}>*</span>
                      </label>
                      <select className={inputClass}>
                        <option value="ocean">
                          {t('contact.form.transportation.options.sea')}
                        </option>
                        <option value="air">{t('contact.form.transportation.options.air')}</option>
                        <option value="land">
                          {t('contact.form.transportation.options.land')}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        {t('contact.form.shipment_type')} <span className={requiredClass}>*</span>
                      </label>
                      <select
                        value={cargoType}
                        onChange={handleCargoTypeChange}
                        className={inputClass}
                      >
                        <option value="">{t('contact.form.shipment_type')}</option>
                        <option value="FCL">FCL</option>
                        <option value="LCL">LCL</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={cargoType === 'LCL' ? labelDisabledClass : labelClass}>
                          {t('contact.form.container_type')}
                        </label>
                        <select className={inputClass} disabled={cargoType === 'LCL'}>
                          <option value="">{t('contact.form.container_type')}</option>
                          <option value="20RF">20'RF</option>
                          <option value="20DC">20'DC</option>
                          <option value="20HC">20'HC</option>
                          <option value="40RF">40'RF</option>
                          <option value="40DC">40'DC</option>
                          <option value="40HC">40'HC</option>
                        </select>
                      </div>
                      <div>
                        <label className={cargoType === 'LCL' ? labelDisabledClass : labelClass}>
                          {t('contact.form.container_number')}
                        </label>
                        <input
                          type="text"
                          placeholder={t('contact.form.container_number')}
                          className={inputClass}
                          disabled={cargoType === 'LCL'}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={cargoType === 'FCL' ? labelDisabledClass : labelClass}>
                          {t('contact.form.weight')}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder={t('contact.form.weight_placeholder')}
                            className={inputClass}
                            disabled={cargoType === 'FCL'}
                          />
                          <span className="absolute top-1 right-1 text-black">
                            {t('contact.form.kg')}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className={cargoType === 'FCL' ? labelDisabledClass : labelClass}>
                          {t('contact.form.volume')}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder={t('contact.form.volume_placeholder')}
                            className={inputClass}
                            disabled={cargoType === 'FCL'}
                          />
                          <span className="absolute top-1 right-1 text-black">
                            {t('contact.form.m3')}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>{t('contact.form.origin')}</label>
                        <input
                          type="text"
                          placeholder={t('contact.form.origin_placeholder')}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>{t('contact.form.destination')}</label>
                        <input
                          type="text"
                          placeholder={t('contact.form.destination_placeholder')}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        {t('contact.form.estimated_departure_date')}
                      </label>
                      <div className="relative">
                        <input type="date" className={inputClass} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-base font-medium">
                    {t('contact.form.support_services')}
                  </h2>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-primary h-4 w-4 rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {t('contact.form.cargo_insurance')}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-primary h-4 w-4 rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {t('contact.form.customs_declaration')}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-secondary-two hover:bg-primary w-full rounded px-4 py-2 text-white transition-colors"
            >
              {t('contact.form.send_button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
