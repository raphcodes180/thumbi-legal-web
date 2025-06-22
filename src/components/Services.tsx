
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, FileText, Gavel, Users, Building, MapPin } from 'lucide-react';
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
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('servicesTitle')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-t-blue-600">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 text-sm">{t('keyServices')}</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className="text-blue-600 mr-2 text-xs">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            {t('specializedConsultation')}
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-lg"
          >
            {t('discussLegalNeeds')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
