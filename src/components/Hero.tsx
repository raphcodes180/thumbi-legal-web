
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
      className="relative pt-20 pb-16 min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop")',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/85 to-slate-800/90"></div>
      
      {/* Lioness Image - Positioned as design element */}
      <div className="absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 opacity-20 md:opacity-30">
        <img 
          src="/lovable-uploads/c92fe079-9da5-43e3-8f00-e36e00c61e6d.png"
          alt="Lioness representing strength and justice"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-white/20"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="text-center py-20 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {t('heroTitle')}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-200 mb-8 font-semibold drop-shadow-md">
              {t('heroSubtitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-sm px-4">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 text-base md:text-lg font-medium shadow-lg backdrop-blur-sm"
              >
                {t('scheduleConsultation')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm px-6 md:px-8 py-3 text-base md:text-lg font-medium bg-white/10"
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
