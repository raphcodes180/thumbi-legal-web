
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Annastacia Muringo Thumbi
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700 mb-8 font-light">
              Legal Counsel & Advocate
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Providing dedicated legal representation with fresh perspectives and unwavering commitment to justice. 
              Your trusted partner in navigating complex legal matters with professionalism and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 text-lg font-medium"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
