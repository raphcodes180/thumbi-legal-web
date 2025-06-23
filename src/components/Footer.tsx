
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anna & Co Advocates</h3>
            <p className="text-slate-300 mb-4">
              {t('heroSubtitle')}
            </p>
            <p className="text-slate-400 text-sm">
              {t('heroDescription')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('practiceAreas')}</h4>
            <ul className="space-y-2 text-slate-300">
              <li>{t('corporateLaw')}</li>
              <li>{t('contractLaw')}</li>
              <li>{t('civilLitigation')}</li>
              <li>{t('familyLaw')}</li>
              <li>{t('landPropertyLaw')}</li>
              <li>{t('countyNationalLaw')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <div className="text-slate-300 space-y-2">
              <p>{t('phone')}: +254 700 111 222</p>
              <p>{t('email')}: annadvocates@gmail.com</p>
              <p>{t('location')}: {t('locationValue')}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('officeHours')}</h4>
            <div className="text-slate-300 space-y-2">
              <p>{t('mondayFriday')}: 8:00 AM - 6:00 PM</p>
              <p>{t('saturday')}: 9:00 AM - 2:00 PM</p>
              <p>{t('sunday')}: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Anna & Co Advocates. {t('allRightsReserved')}
          </p>
          <p className="text-slate-500 text-xs mt-2">
            {t('legalDisclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
