import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  const features = t('features.list', { returnObjects: true });

  return (
    <section id="features" className="p-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center">{t('features.headline')}</h2>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="font-bold text-lg mr-4">✔</span>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
