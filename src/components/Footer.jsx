import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      <div className="space-x-4">
        <a href="/information">{t('footer.about')}</a>
        <a href="/solutions">{t('footer.solutions')}</a>
        <a href="/contact">{t('footer.contact')}</a>
      </div>
      <p className="mt-4"> {t('footer.rights')}</p>
      {/* <div class="socialmedia">
            <a class = "Facebook">
                <a href="https://www.facebook.com/" target="_blank"><img src = "https://images.seeklogo.net/2016/09/facebook-icon-preview-1.png" width="50px" height="50px"></a>
            </a>
            <a class = "Instagram">
                <a href="https://www.instagram.com/"><img src = "https://images.seeklogo.net/2016/06/Instagram-logo.png"  width="50px" height="50px"></a>
            </a>
            <a class = "Youtube">
                <a href="https://www.youtube.com/channel/" target="_blank"><img src = "https://images.seeklogo.net/2016/06/YouTube-icon.png" width="50px" height="50px"></a>
            </a>
            <a class = preorder>
                <button style = "background-color: white;">Pre-Order</button>
    
            </a>
        </div> */}

    </footer>
  );
}
