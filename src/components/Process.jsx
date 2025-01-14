import { useTranslation } from 'react-i18next';

export default function Process() {
  const { t } = useTranslation();

  const steps = t('process.steps', { returnObjects: true });

  return (
    <section id="process" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center">{t('process.headline')}</h2>
      <ol className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="font-bold text-lg mr-4">{index + 1}.</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
