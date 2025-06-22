
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Anna & Co Advocates</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A distinguished legal practice committed to delivering exceptional legal services with unwavering professionalism
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Excellence in Legal Practice
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Anna & Co Advocates stands as a beacon of legal excellence, providing comprehensive 
              legal services across diverse practice areas. Our commitment to professional integrity, 
              meticulous attention to detail, and client-centered approach sets us apart in the legal landscape.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We understand that legal matters require not just expertise, but also empathy and clear communication. 
              Our approach ensures that every client receives personalized attention and strategic guidance 
              tailored to their unique circumstances.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-900">Our Foundation</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800">Professional Excellence</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800">Integrity</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800">Client Focus</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800">Innovation</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800">Results-Driven</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-xl border-l-4 border-l-blue-600">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Professional Credentials</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-slate-200 pl-4">
                    <h5 className="font-semibold text-slate-800">Bachelor of Laws (LLB)</h5>
                    <p className="text-slate-600">Comprehensive legal education</p>
                    <p className="text-sm text-slate-500">Graduated with distinction</p>
                  </div>
                  <div className="border-l-4 border-slate-200 pl-4">
                    <h5 className="font-semibold text-slate-800">Admitted to the Bar</h5>
                    <p className="text-slate-600">Licensed Legal Practitioner</p>
                    <p className="text-sm text-slate-500">Kenya School of Law</p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h5 className="font-semibold text-slate-800 flex items-center gap-2">
                      Verification
                      <ExternalLink className="h-4 w-4 text-blue-600" />
                    </h5>
                    <a 
                      href="https://ksl.ac.ke/verification" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Verify credentials at Kenya School of Law
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-xl">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Our Approach</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Comprehensive legal analysis and strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Transparent communication at every step
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Tailored solutions for each client's needs
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Modern practice with time-tested principles
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
