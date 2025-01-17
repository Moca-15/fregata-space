import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" 
           style={{ backgroundImage: "url('/src/assets/def_bg.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
            {t('homepage.headline')}
          </h1>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            {t('homepage.subheadline')}
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
              onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
            >
              {t('homepage.ctaLearnMore')}
            </button>
            <button
              className="px-6 py-3 text-blue-600 bg-white border border-blue-600 hover:bg-gray-100 rounded-md transition"
              onClick={() => alert(t('homepage.ctaRequestDemo'))}
            >
              {t('homepage.ctaRequestDemo')}
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about-section" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {t('about.headline')}
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          {t('about.content')}
        </p>
      </div>
    </section>
  );
}
