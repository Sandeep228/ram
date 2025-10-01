import { Home, Facebook, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-bold">
                {language === 'en' ? 'Village Guest House' : 'गाँव गेस्ट हाउस'}
              </span>
            </div>
            <p className="text-gray-400">
              {language === 'en'
                ? 'Experience authentic village hospitality in the heart of rural India.'
                : 'ग्रामीण भारत के दिल में प्रामाणिक गाँव की मेहमाननवाजी का अनुभव करें।'}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-amber-500 transition-colors">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-500 transition-colors">
                  {t('rooms')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Connect With Us' : 'हमसे जुड़ें'}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025{' '}
            {language === 'en' ? 'Village Guest House' : 'गाँव गेस्ट हाउस'}.{' '}
            {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
