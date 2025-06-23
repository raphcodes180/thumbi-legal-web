
import { Button } from '@/components/ui/button';
import { Shield, Scale, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-20 pb-16 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/85 to-slate-800/90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center py-20">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-6">
                <div className="p-3 bg-blue-100/20 backdrop-blur-sm rounded-full border border-blue-300/30">
                  <Scale className="h-8 w-8 text-blue-300" />
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="p-3 bg-blue-100/20 backdrop-blur-sm rounded-full border border-blue-300/30">
                  <Award className="h-8 w-8 text-blue-300" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {t('heroTitle')}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-8 font-semibold drop-shadow-md">
              {t('heroSubtitle')}
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium shadow-lg backdrop-blur-sm"
              >
                {t('scheduleConsultation')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium"
              >
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
