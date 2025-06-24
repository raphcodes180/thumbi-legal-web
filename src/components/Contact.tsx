
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('contactTitle')}</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <Card className="h-full shadow-xl dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-4 md:mb-6">{t('getInTouch')}</h3>
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 md:mb-8">
                  {t('contactDescription')}
                </p>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">{t('phone')}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">+254 700 111 222</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">{t('email')}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base break-all">annadvocates@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">{t('location')}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">{t('locationValue')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full shadow-xl dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">{t('officeHours')}</h3>
                </div>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="border-l-4 border-blue-200 dark:border-blue-600 pl-3 md:pl-4">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm md:text-base">{t('mondayFriday')}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">8:00 AM - 6:00 PM</p>
                  </div>
                  <div className="border-l-4 border-slate-200 dark:border-slate-600 pl-3 md:pl-4">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm md:text-base">{t('saturday')}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">9:00 AM - 2:00 PM</p>
                  </div>
                  <div className="border-l-4 border-slate-200 dark:border-slate-600 pl-3 md:pl-4">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm md:text-base">{t('sunday')}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">Closed</p>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base py-2 md:py-3">
                  {t('discussLegalNeeds')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
