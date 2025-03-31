import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      {/* Main content container */}
      <div className="mx-auto max-w-lg text-center">
        {/* 404 Number */}
        <h1 className="text-[120px] leading-none font-bold text-gray-800 sm:text-[180px] md:text-[220px]">
          {t('404.title')}
        </h1>

        {/* Not Found Text */}
        <h2 className="mb-4 text-2xl font-medium text-gray-600 sm:text-3xl md:text-4xl">
          {t('404.text')}
        </h2>

        {/* Error Message */}
        <p className="mb-8 text-sm text-gray-500 sm:text-base md:text-lg">{t('404.message')}</p>

        {/* Optional: Back to Home Button */}
        <button
          onClick={() => window.history.back()}
          className="rounded-lg bg-gray-700 px-6 py-2 text-white transition-colors duration-300 hover:bg-gray-600"
        >
          {t('404.back_button')}
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
