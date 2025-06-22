
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, FileText, Gavel, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Law",
      description: "Business formation, contracts, compliance, and corporate governance matters for businesses of all sizes.",
      features: ["Business Registration", "Contract Drafting", "Compliance Advisory", "Corporate Restructuring"]
    },
    {
      icon: FileText,
      title: "Contract Law",
      description: "Comprehensive contract services including drafting, review, negotiation, and dispute resolution.",
      features: ["Contract Drafting", "Agreement Review", "Negotiation Support", "Dispute Resolution"]
    },
    {
      icon: Gavel,
      title: "Civil Litigation",
      description: "Professional representation in civil disputes with strategic advocacy and thorough preparation.",
      features: ["Case Assessment", "Court Representation", "Settlement Negotiation", "Appeals"]
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate legal support for family matters with sensitivity and professional expertise.",
      features: ["Divorce Proceedings", "Child Custody", "Property Division", "Mediation Services"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Legal Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive legal representation across multiple practice areas with personalized attention to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <service.icon className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 text-sm">Key Services:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className="text-slate-400 mr-2 text-xs">•</span>
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
            Don't see your specific legal need listed? I provide consultation across various areas of law.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Discuss Your Legal Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
