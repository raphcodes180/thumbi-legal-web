
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-4">Anna & Co Advocates</h3>
            <p className="text-slate-300 mb-4 text-sm md:text-base">
              {t('heroSubtitle')}
            </p>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              {t('heroDescription')}
            </p>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">{t('practiceAreas')}</h4>
            <ul className="space-y-2 text-slate-300 text-sm md:text-base">
              <li>{t('corporateLaw')}</li>
              <li>{t('contractLaw')}</li>
              <li>{t('civilLitigation')}</li>
              <li>{t('familyLaw')}</li>
              <li>{t('landPropertyLaw')}</li>
              <li>{t('countyNationalLaw')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">{t('contact')}</h4>
            <div className="text-slate-300 space-y-2 text-sm md:text-base">
              <p className="break-words">{t('phone')}: +254 700 111 222</p>
              <p className="break-words">{t('email')}: annadvocates@gmail.com</p>
              <p className="break-words">{t('location')}: {t('locationValue')}</p>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">{t('officeHours')}</h4>
            <div className="text-slate-300 space-y-2 text-sm md:text-base">
              <p>{t('mondayFriday')}: 8:00 AM - 6:00 PM</p>
              <p>{t('saturday')}: 9:00 AM - 2:00 PM</p>
              <p>{t('sunday')}: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-slate-400 text-xs md:text-sm">
            © {new Date().getFullYear()} Anna & Co Advocates. {t('allRightsReserved')}
          </p>
          <p className="text-slate-500 text-xs mt-2 px-4 leading-relaxed">
            {t('legalDisclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
