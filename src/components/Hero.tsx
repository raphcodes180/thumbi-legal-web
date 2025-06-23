
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
      className="relative pt-16 md:pt-20 pb-8 md:pb-16 min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/85 to-slate-800/90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="text-center py-12 md:py-20 flex flex-col justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="p-2 md:p-3 bg-blue-100/20 backdrop-blur-sm rounded-full border border-blue-300/30">
                  <Scale className="h-6 w-6 md:h-8 md:w-8 text-blue-300" />
                </div>
                <div className="p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="p-2 md:p-3 bg-blue-100/20 backdrop-blur-sm rounded-full border border-blue-300/30">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-blue-300" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg px-4">
              {t('heroTitle')}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 mb-6 md:mb-8 font-semibold drop-shadow-md px-4">
              {t('heroSubtitle')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-sm px-4">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 text-base md:text-lg font-medium shadow-lg backdrop-blur-sm w-full sm:w-auto"
              >
                {t('scheduleConsultation')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm px-6 md:px-8 py-3 text-base md:text-lg font-medium bg-white/10 w-full sm:w-auto"
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
