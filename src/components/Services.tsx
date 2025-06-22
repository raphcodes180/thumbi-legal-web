
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, FileText, Gavel, Users, Building, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Law",
      description: "Comprehensive business legal services including formation, governance, and compliance matters.",
      features: ["Business Registration", "Corporate Governance", "Compliance Advisory", "Commercial Contracts"]
    },
    {
      icon: FileText,
      title: "Contract Law",
      description: "Expert contract services from drafting to dispute resolution across all industries.",
      features: ["Contract Drafting", "Agreement Review", "Negotiation Support", "Breach Resolution"]
    },
    {
      icon: Gavel,
      title: "Civil Litigation",
      description: "Strategic litigation services with thorough preparation and skilled courtroom advocacy.",
      features: ["Court Representation", "Case Strategy", "Settlement Negotiation", "Appeals Process"]
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate legal support for family matters with sensitivity and expertise.",
      features: ["Divorce Proceedings", "Child Custody", "Matrimonial Property", "Family Mediation"]
    },
    {
      icon: MapPin,
      title: "Land & Property Law",
      description: "Comprehensive property legal services including transactions, disputes, and title matters.",
      features: ["Property Transactions", "Title Verification", "Land Disputes", "Conveyancing"]
    },
    {
      icon: Building,
      title: "County & National Legal Matters",
      description: "Specialized representation in government and administrative legal proceedings.",
      features: ["Administrative Law", "Government Relations", "Public Policy", "Regulatory Compliance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Legal Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive legal representation across multiple practice areas with professional excellence and personalized attention
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
                  <h4 className="font-semibold text-slate-800 text-sm">Key Services:</h4>
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
            Need legal assistance in a specialized area? We provide consultation across various fields of law.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-lg"
          >
            Discuss Your Legal Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
