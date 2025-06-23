import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, FileText, Gavel, Users, Building, MapPin, Shield, Scale, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 px-4">{t('servicesTitle')}</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-t-blue-600 dark:bg-slate-800 dark:border-slate-700 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                    <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-slate-900 dark:text-white leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{t('keyServices')}</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 text-xs">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strength & Authority Section with Lion Image */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 md:p-8 mb-8 md:mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t('strengthTitle')}
              </h3>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {t('strengthDescription')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{t('trustworthyAdvocacy')}</span>
                </div>
                <div className="flex items-center">
                  <Scale className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{t('fairRepresentation')}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{t('provenResults')}</span>
                </div>
                <div className="flex items-center">
                  <Gavel className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{t('expertAdvice')}</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto">
              <img 
                src="/lovable-uploads/c92fe079-9da5-43e3-8f00-e36e00c61e6d.png" 
                alt="Lion representing strength and authority in legal advocacy"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-base md:text-lg px-4">
            {t('specializedConsultation')}
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-md font-medium transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
          >
            {t('discussLegalNeeds')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
