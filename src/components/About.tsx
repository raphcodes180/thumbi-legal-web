
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Matrix3D from './Matrix3D';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-background to-secondary overflow-hidden">
      {/* 3D Matrix Background with legal terms and company values */}
      <Matrix3D speed={0.3} opacity={0.12} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('aboutTitle')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Managing Director Section */}
        <div className="mb-16">
          <Card className="max-w-5xl mx-auto shadow-xl border-l-4 border-l-primary bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/c92fe079-9da5-43e3-8f00-e36e00c61e6d.png" 
                    alt="Annastacia Thumbi - Managing Director, Anna & Co Advocates"
                    className="w-64 h-64 rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <blockquote className="text-lg text-foreground leading-relaxed italic">
                      "{t('managingDirectorQuote')}"
                    </blockquote>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <p className="font-semibold text-foreground text-lg">Annastacia Thumbi</p>
                    <p className="text-primary font-medium">{t('managingDirector')}</p>
                    <p className="text-muted-foreground">Anna & Co Advocates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {t('excellenceTitle')}
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              {t('excellenceDescription1')}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {t('excellenceDescription2')}
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">{t('foundationTitle')}</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">{t('professionalExcellence')}</Badge>
                <Badge variant="secondary" className="px-3 py-1">{t('integrity')}</Badge>
                <Badge variant="secondary" className="px-3 py-1">{t('clientFocus')}</Badge>
                <Badge variant="secondary" className="px-3 py-1">{t('innovation')}</Badge>
                <Badge variant="secondary" className="px-3 py-1">{t('resultsDriven')}</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-xl border-l-4 border-l-primary bg-card/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-foreground mb-4">{t('credentialsTitle')}</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-muted pl-4">
                    <h5 className="font-semibold text-foreground">{t('llbDegree')}</h5>
                    <p className="text-muted-foreground">{t('legalEducation')}</p>
                    <p className="text-sm text-muted-foreground">{t('graduated')}</p>
                  </div>
                  <div className="border-l-4 border-muted pl-4">
                    <h5 className="font-semibold text-foreground">{t('admittedBar')}</h5>
                    <p className="text-muted-foreground">{t('licensedPractitioner')}</p>
                    <p className="text-sm text-muted-foreground">{t('kenyaSchoolLaw')}</p>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h5 className="font-semibold text-foreground flex items-center gap-2">
                      {t('verification')}
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </h5>
                    <a 
                      href="https://ksl.ac.ke/verification" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      {t('verifyCredentials')}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-xl bg-card/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-foreground mb-4">{t('approachTitle')}</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t('approach1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t('approach2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t('approach3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t('approach4')}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
