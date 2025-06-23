
import { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AccessibilitySettings from './AccessibilitySettings';
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

  // Fixed language options - these labels never change
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'sw', label: 'Kiswahili' },
    { value: 'fr', label: 'Français' },
    { value: 'es', label: 'Español' },
    { value: 'zh', label: '中文' },
    { value: 'de', label: 'Deutsch' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 dark:bg-slate-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Anna & Co Advocates
            </h1>
            <p className="text-sm text-blue-600 font-medium dark:text-blue-400">Legal Excellence</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400"
            >
              {t('services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400"
            >
              {t('contact')}
            </button>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-slate-600 dark:text-slate-400" />
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

            {/* Accessibility Settings */}
            <AccessibilitySettings />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <AccessibilitySettings />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 dark:bg-slate-900 dark:border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left dark:text-slate-300 dark:hover:text-blue-400"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left dark:text-slate-300 dark:hover:text-blue-400"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left dark:text-slate-300 dark:hover:text-blue-400"
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium w-full text-left dark:text-slate-300 dark:hover:text-blue-400"
              >
                {t('contact')}
              </button>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-700 font-medium dark:text-slate-300">{t('languages')}</span>
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
