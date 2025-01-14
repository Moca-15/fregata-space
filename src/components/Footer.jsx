import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      <div className="space-x-4">
        <a href="#about">{t('footer.about')}</a>
        <a href="#solutions">{t('footer.solutions')}</a>
        <a href="#contact">{t('footer.contact')}</a>
      </div>
      <p className="mt-4">© 2025 Fregata Space. {t('footer.rights')}</p>
    </footer>
  );
}
