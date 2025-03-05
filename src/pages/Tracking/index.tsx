import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../../components/Banner';
import TrackingBannerImage from '../../assets/images/tracking.jpg';

const Tracking = () => {
  const { t } = useTranslation();
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', trackingNumber);
  };

  return (
    <section>
      <div>
        <Banner
          imageUrl={TrackingBannerImage}
          title={t('tracking.title')}
          routes={[
            { label: t('tracking.breadcrumb.home'), stringUrl: '', active: false },
            { label: t('tracking.breadcrumb.tracking'), stringUrl: 'tracking', active: true },
          ]}
        />
      </div>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-[1170px] px-[15px] py-[60px] lg:py-[120px]">
          <div className="mx-auto w-full lg:max-w-2xl">
            {/* Card Container */}
            <div className="space-y-6 rounded-lg bg-gray-100 p-8 shadow-sm">
              {/* Header */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">{t('tracking.lookup.title')}</h1>
                <p className="mt-2 text-gray-600">{t('tracking.lookup.description')}</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="tracking" className="block text-sm font-medium text-gray-700">
                    {t('tracking.lookup.input_label')}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <input
                      id="tracking"
                      name="tracking"
                      type="text"
                      required
                      className="focus:border-primary focus:ring-primary relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:z-10 focus:ring-2 focus:outline-none"
                      placeholder={t('tracking.lookup.input_placeholder')}
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary focus:ring-primary rounded-md border border-transparent px-7 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none max-sm:mt-3 sm:w-1/4"
                    >
                      {t('tracking.lookup.search_button')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
