
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, FileText, Gavel, Users, Building, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Matrix3D from './Matrix3D';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Briefcase,
      title: t('corporateLaw'),
      description: t('corporateDescription'),
      features: [t('businessRegistration'), t('corporateGovernance'), t('complianceAdvisory'), t('commercialContracts')]
    },
    {
      icon: FileText,
      title: t('contractLaw'),
      description: t('contractDescription'),
      features: [t('contractDrafting'), t('agreementReview'), t('negotiationSupport'), t('breachResolution')]
    },
    {
      icon: Gavel,
      title: t('civilLitigation'),
      description: t('litigationDescription'),
      features: [t('courtRepresentation'), t('caseStrategy'), t('settlementNegotiation'), t('appealsProcess')]
    },
    {
      icon: Users,
      title: t('familyLaw'),
      description: t('familyDescription'),
      features: [t('divorceProceedings'), t('childCustody'), t('matrimonialProperty'), t('familyMediation')]
    },
    {
      icon: MapPin,
      title: t('landPropertyLaw'),
      description: t('propertyDescription'),
      features: [t('propertyTransactions'), t('titleVerification'), t('landDisputes'), t('conveyancing')]
    },
    {
      icon: Building,
      title: t('countyNationalLaw'),
      description: t('governmentDescription'),
      features: [t('administrativeLaw'), t('governmentRelations'), t('publicPolicy'), t('regulatoryCompliance')]
    }
  ];

  return (
    <section id="services" className="relative py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* 3D Matrix Background - Regular speed */}
      <Matrix3D speed={1} opacity={0.3} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('servicesTitle')}</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-xl h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-t-blue-600 dark:bg-slate-800 dark:border-slate-700 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3 md:pb-4 p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-slate-900 dark:text-white leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{t('keyServices')}</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-slate-600 dark:text-slate-400 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 text-xs flex-shrink-0 mt-0.5">•</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center px-4">
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm md:text-base">
            {t('specializedConsultation')}
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-medium transition-colors shadow-lg text-sm md:text-base"
          >
            {t('discussLegalNeeds')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
