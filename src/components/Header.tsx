import { Home, Info, BedDouble, Grid2x2 as Grid, Phone, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-amber-600" />
            <span className="text-xl font-bold text-gray-800">
              {language === 'en' ? 'Village Guest House' : 'गाँव गेस्ट हाउस'}
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>{t('home')}</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>{t('about')}</span>
            </button>
            <button
              onClick={() => scrollToSection('rooms')}
              className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <BedDouble className="w-4 h-4" />
              <span>{t('rooms')}</span>
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <Grid className="w-4 h-4" />
              <span>{t('amenities')}</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t('contact')}</span>
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <Languages className="w-5 h-5 text-gray-600" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-md transition-colors ${
                language === 'en'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-3 py-1 rounded-md transition-colors ${
                language === 'hi'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              हिं
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
