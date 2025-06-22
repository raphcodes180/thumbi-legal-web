
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Annastacia</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A dedicated legal professional committed to providing exceptional representation and counsel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Professional Excellence & Fresh Perspective
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              As a recent graduate with a passion for the law, I bring fresh insights, 
              current legal knowledge, and an unwavering commitment to client service. 
              My approach combines thorough preparation, meticulous attention to detail, 
              and compassionate advocacy.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I understand that legal matters can be overwhelming, which is why I prioritize 
              clear communication, accessibility, and personalized attention for every client. 
              My goal is to make the legal process as smooth and understandable as possible.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-900">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">Integrity</Badge>
                <Badge variant="secondary" className="px-3 py-1">Excellence</Badge>
                <Badge variant="secondary" className="px-3 py-1">Dedication</Badge>
                <Badge variant="secondary" className="px-3 py-1">Innovation</Badge>
                <Badge variant="secondary" className="px-3 py-1">Client-First</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-lg">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Education & Qualifications</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-slate-200 pl-4">
                    <h5 className="font-semibold text-slate-800">Law Degree</h5>
                    <p className="text-slate-600">Bachelor of Laws (LLB)</p>
                    <p className="text-sm text-slate-500">Recently graduated with distinction</p>
                  </div>
                  <div className="border-l-4 border-slate-200 pl-4">
                    <h5 className="font-semibold text-slate-800">Bar Admission</h5>
                    <p className="text-slate-600">Licensed to Practice Law</p>
                    <p className="text-sm text-slate-500">Admitted to the Bar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Professional Approach</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">•</span>
                    Comprehensive case analysis and preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">•</span>
                    Clear communication throughout the process
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">•</span>
                    Personalized attention to each client's needs
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">•</span>
                    Modern approach with traditional values
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
