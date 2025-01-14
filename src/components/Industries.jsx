import { useTranslation } from 'react-i18next';

export default function Industries() {
  const { t } = useTranslation();

  const industries = t('industries.list', { returnObjects: true });

  return (
    <section id="industries" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center">{t('industries.headline')}</h2>
      <ul className="mt-8 space-y-4">
        {industries.map((industry, index) => (
          <li key={index} className="flex items-start">
            <span className="font-bold text-lg mr-4">✔</span>
            <p>{industry}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
