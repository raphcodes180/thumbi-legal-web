
import { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const languageOptions = [
    { value: 'en', label: t('english') },
    { value: 'sw', label: t('kiswahili') },
    { value: 'fr', label: t('french') },
    { value: 'es', label: t('spanish') },
    { value: 'zh', label: t('mandarin') },
    { value: 'de', label: t('german') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-900">
              Anna & Co Advocates
            </h1>
            <p className="text-sm text-blue-600 font-medium">Legal Excellence</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('contact')}
            </button>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-slate-600" />
              <Select value={currentLanguage} onValueChange={(value) => setLanguage(value as any)}>
                <SelectTrigger className="w-[140px] h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languageOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left"
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left"
              >
                {t('contact')}
              </button>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="h-4 w-4 text-slate-600" />
                  <span className="text-slate-700 font-medium">{t('languages')}</span>
                </div>
                <Select value={currentLanguage} onValueChange={(value) => setLanguage(value as any)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languageOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
