import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center">{t('about.headline')}</h2>
      <p className="mt-4 text-center max-w-2xl mx-auto">{t('about.content')}</p>
    </section>
  );
}