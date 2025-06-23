import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface LanguageContextProps {
  language: string;
  currentLanguage: string;
  setLanguage: (language: string) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    languages: 'Languages',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Expert Legal Representation & Advisory Services',
    heroDescription: 'Providing comprehensive legal solutions with integrity, expertise, and dedication. Your trusted partners in navigating complex legal matters across Kenya.',
    scheduleConsultation: 'Schedule Consultation',
    learnMore: 'Learn More',
    
    // About Section  
    aboutTitle: 'About Anna & Co Advocates',
    aboutSubtitle: 'With over a decade of experience in Kenyan law, Anna & Co Advocates has established itself as a leading legal firm committed to delivering exceptional results for our clients.',
    excellenceTitle: 'Excellence in Legal Practice',
    excellenceDescription1: 'At Anna & Co Advocates, we understand that every legal matter is unique and requires personalized attention. Our approach combines deep legal expertise with innovative solutions to achieve the best possible outcomes for our clients.',
    excellenceDescription2: 'We pride ourselves on building lasting relationships with our clients, based on trust, transparency, and exceptional service delivery. Our team is dedicated to protecting your interests while providing strategic legal guidance.',
    foundationTitle: 'Our Foundation',
    professionalExcellence: 'Professional Excellence',
    integrity: 'Integrity',
    clientFocus: 'Client Focus',
    innovation: 'Innovation',
    resultsDriven: 'Results Driven',
    credentialsTitle: 'Professional Credentials',
    llbDegree: 'LLB Degree',
    legalEducation: 'Bachelor of Laws from University of Nairobi',
    graduated: 'Graduated with Honors',
    admittedBar: 'Admitted to the Bar',
    licensedPractitioner: 'Licensed Legal Practitioner',
    kenyaSchoolLaw: 'Kenya School of Law Graduate',
    verification: 'Verification',
    verifyCredentials: 'Verify Credentials at KSL',
    approachTitle: 'Our Approach',
    approach1: 'Client-centered legal solutions',
    approach2: 'Strategic case analysis and planning',
    approach3: 'Transparent communication throughout',
    approach4: 'Results-oriented representation',
    managingDirector: 'Managing Director',
    managingDirectorQuote: 'Justice is not just about the law; it\'s about ensuring every client receives fair, competent, and dedicated representation that protects their rights and interests.',
    
    // Services Section
    servicesTitle: 'Our Legal Services',
    servicesSubtitle: 'Comprehensive legal solutions tailored to meet your specific needs across various practice areas.',
    keyServices: 'Key Services:',
    
    // Practice Areas
    corporateLaw: 'Corporate Law',
    corporateDescription: 'Comprehensive corporate legal services including business formation, governance, and compliance advisory to help your business thrive.',
    contractLaw: 'Contract Law',
    contractDescription: 'Expert contract drafting, review, and dispute resolution services to protect your business interests and relationships.',
    civilLitigation: 'Civil Litigation',
    litigationDescription: 'Professional representation in civil matters with strategic approach to achieve favorable outcomes in court proceedings.',
    familyLaw: 'Family Law',
    familyDescription: 'Compassionate legal support for family matters including divorce, custody, and matrimonial property disputes.',
    landPropertyLaw: 'Land & Property Law',
    propertyDescription: 'Complete real estate legal services from property transactions to land dispute resolution and title verification.',
    countyNationalLaw: 'County & National Law',
    governmentDescription: 'Specialized legal services in administrative law, government relations, and regulatory compliance matters.',
    
    // Service Features
    businessRegistration: 'Business Registration',
    corporateGovernance: 'Corporate Governance',
    complianceAdvisory: 'Compliance Advisory',
    commercialContracts: 'Commercial Contracts',
    contractDrafting: 'Contract Drafting',
    agreementReview: 'Agreement Review',
    negotiationSupport: 'Negotiation Support',
    breachResolution: 'Breach Resolution',
    courtRepresentation: 'Court Representation',
    caseStrategy: 'Case Strategy',
    settlementNegotiation: 'Settlement Negotiation',
    appealsProcess: 'Appeals Process',
    divorceProceedings: 'Divorce Proceedings',
    childCustody: 'Child Custody',
    matrimonialProperty: 'Matrimonial Property',
    familyMediation: 'Family Mediation',
    propertyTransactions: 'Property Transactions',
    titleVerification: 'Title Verification',
    landDisputes: 'Land Disputes',
    conveyancing: 'Conveyancing',
    administrativeLaw: 'Administrative Law',
    governmentRelations: 'Government Relations',
    publicPolicy: 'Public Policy',
    regulatoryCompliance: 'Regulatory Compliance',
    
    // Strength Section
    strengthTitle: 'Strength & Authority in Legal Advocacy',
    strengthDescription: 'Like the king of the jungle, we bring unmatched strength, courage, and authority to every legal challenge. Our firm stands as a formidable advocate for your rights.',
    trustworthyAdvocacy: 'Trustworthy Advocacy',
    fairRepresentation: 'Fair Representation',
    provenResults: 'Proven Results',
    expertAdvice: 'Expert Advice',
    
    specializedConsultation: 'Need specialized legal consultation? We\'re here to help with tailored solutions.',
    discussLegalNeeds: 'Discuss Your Legal Needs',
    
    // Contact Section
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with our legal experts for professional consultation and representation.',
    contactDescription: 'Ready to discuss your legal needs? Contact Anna & Co Advocates today for expert legal advice and representation.',
    getInTouch: 'Get in Touch',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    locationValue: 'Nairobi, Kenya',
    officeHours: 'Office Hours',
    mondayFriday: 'Monday - Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    
    // Contact Form
    sendMessage: 'Send Message',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    message: 'Message',
    
    // Footer
    practiceAreas: 'Practice Areas',
    allRightsReserved: 'All rights reserved.',
    legalDisclaimer: 'This website is for informational purposes only and does not constitute legal advice. Consult with our qualified advocates for specific legal matters.',
    
    // Accessibility
    accessibility: 'Accessibility',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    systemMode: 'System Mode'
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    about: 'Kuhusu',
    services: 'Huduma',
    contact: 'Wasiliana',
    languages: 'Lugha',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Huduma za Uwakilishi na Ushauri wa Kitaaluma',
    heroDescription: 'Kutoa suluhisho kamili za kisheria kwa uongozi, utaalamu, na kujitolea. Washirika wako wa kuaminika katika kuongoza mambo magumu ya kisheria nchini Kenya.',
    scheduleConsultation: 'Panga Mazungumzo',
    learnMore: 'Jifunze Zaidi',
    
    // About Section
    aboutTitle: 'Kuhusu Anna & Co Advocates',
    aboutSubtitle: 'Kwa zaidi ya muongo mmoja wa tajriba katika sheria za Kenya, Anna & Co Advocates imejiimarisha kama kampuni ya kisheria inayoongoza inayojitoa kutoa matokeo ya kipekee kwa wateja wetu.',
    excellenceTitle: 'Ubora katika Utendaji wa Kisheria',
    excellenceDescription1: 'Katika Anna & Co Advocates, tunaelewa kwamba kila suala la kisheria ni la kipekee na linahitaji umakini wa kibinafsi. Mbinu yetu inachanganya utaalamu wa kina wa kisheria na suluhisho za ubunifu kufikia matokeo bora zaidi kwa wateja wetu.',
    excellenceDescription2: 'Tunajivunia kujenga mahusiano na wateja wetu, kulingana na imani, uwazi, na utoaji wa huduma ya kipekee. Timu yetu imejitolea kulinda maslahi yako wakati ikitoa mwongozo wa kimkakati wa kisheria.',
    foundationTitle: 'Msingi Wetu',
    professionalExcellence: 'Ubora wa Kitaaluma',
    integrity: 'Uongozi',
    clientFocus: 'Kuelekezwa kwa Mteja',
    innovation: 'Ubunifu',
    resultsDriven: 'Kuelekezwa na Matokeo',
    credentialsTitle: 'Vyeti vya Kitaaluma',
    llbDegree: 'Shahada ya LLB',
    legalEducation: 'Shahada ya Kwanza ya Sheria kutoka Chuo Kikuu cha Nairobi',
    graduated: 'Alihitimu kwa Heshima',
    admittedBar: 'Amekubaliwa kwa Bar',
    licensedPractitioner: 'Muumaji wa Kisheria Aliyeidhinishwa',
    kenyaSchoolLaw: 'Mhitimu wa Shule ya Sheria ya Kenya',
    verification: 'Uthibitisho',
    verifyCredentials: 'Thibitisha Vyeti katika KSL',
    approachTitle: 'Mbinu Yetu',
    approach1: 'Suluhisho za kisheria zinazoelekezwa kwa mteja',
    approach2: 'Uchambuzi wa kimkakati wa kesi na upangaji',
    approach3: 'Mawasiliano ya uwazi katika mchakato wote',
    approach4: 'Uwakilishi unaolenga matokeo',
    managingDirector: 'Mkurugenzi Mtendaji',
    managingDirectorQuote: 'Haki si kuhusu sheria tu; ni kuhusu kuhakikisha kila mteja anapokea uwakilishi wa haki, wa uwezo, na wa kujitolea unaolinda haki na maslahi yao.',
    
    // Services Section
    servicesTitle: 'Huduma Zetu za Kisheria',
    servicesSubtitle: 'Suluhisho kamili za kisheria zilizoundwa kulingana na mahitaji yako mahususi katika maeneo mbalimbali ya utendaji.',
    keyServices: 'Huduma Kuu:',
    
    // Practice Areas
    corporateLaw: 'Sheria za Kijamii',
    corporateDescription: 'Huduma kamili za kisheria za kijamii ikiwa ni pamoja na uundaji wa biashara, utawala, na ushauri wa kufuata sheria ili kusaidia biashara yako kustawi.',
    contractLaw: 'Sheria za Mikataba',
    contractDescription: 'Huduma za utaalamu za kutunga mikataba, ukaguzi, na suluhu la migogoro ili kulinda maslahi ya biashara yako na mahusiano.',
    civilLitigation: 'Mashtaka ya Kiraia',
    litigationDescription: 'Uwakilishi wa kitaaluma katika mambo ya kiraia na mbinu za kimkakati kufikia matokeo mazuri katika hatua za mahakama.',
    familyLaw: 'Sheria za Kifamilia',
    familyDescription: 'Msaada wa kisheria wa huruma kwa mambo ya kifamilia ikiwa ni pamoja na talaka, ulinzi, na migogoro ya mali ya ndoa.',
    landPropertyLaw: 'Sheria za Ardhi na Mali',
    propertyDescription: 'Huduma kamili za kisheria za mali isiyohamishika kutoka kwa miamala ya mali hadi suluhu la migogoro ya ardhi na uthibitisho wa hati.',
    countyNationalLaw: 'Sheria za Kaunti na Taifa',
    governmentDescription: 'Huduma maalum za kisheria katika sheria za utawala, mahusiano ya serikali, na mambo ya kufuata kanuni.',
    
    // Service Features
    businessRegistration: 'Usajili wa Biashara',
    corporateGovernance: 'Utawala wa Kijamii',
    complianceAdvisory: 'Ushauri wa Kufuata Sheria',
    commercialContracts: 'Mikataba ya Kibiashara',
    contractDrafting: 'Kutunga Mikataba',
    agreementReview: 'Ukaguzi wa Makubaliano',
    negotiationSupport: 'Msaada wa Majadiliano',
    breachResolution: 'Suluhu la Kuvunja',
    courtRepresentation: 'Uwakilishi wa Mahakama',
    caseStrategy: 'Mkakati wa Kesi',
    settlementNegotiation: 'Majadiliano ya Suluhu',
    appealsProcess: 'Mchakato wa Rufaa',
    divorceProceedings: 'Hatua za Talaka',
    childCustody: 'Ulinzi wa Watoto',
    matrimonialProperty: 'Mali ya Ndoa',
    familyMediation: 'Upatanisho wa Kifamilia',
    propertyTransactions: 'Miamala ya Mali',
    titleVerification: 'Uthibitisho wa Hati',
    landDisputes: 'Migogoro ya Ardhi',
    conveyancing: 'Uhamisho wa Mali',
    administrativeLaw: 'Sheria za Utawala',
    governmentRelations: 'Mahusiano ya Serikali',
    publicPolicy: 'Sera za Umma',
    regulatoryCompliance: 'Kufuata Kanuni',
    
    // Strength Section
    strengthTitle: 'Nguvu na Mamlaka katika Utetezi wa Kisheria',
    strengthDescription: 'Kama mfalme wa mwituni, tunaleta nguvu isiyolingana, ujasiri, na mamlaka kwa kila changamoto ya kisheria. Kampuni yetu inasimama kama mtetezi mkuu wa haki zako.',
    trustworthyAdvocacy: 'Utetezi wa Kuaminika',
    fairRepresentation: 'Uwakilishi wa Haki',
    provenResults: 'Matokeo Yaliyothibitishwa',
    expertAdvice: 'Ushauri wa Utaalamu',
    
    specializedConsultation: 'Unahitaji mazungumzo maalum ya kisheria? Tuko hapa kusaidia kwa suluhisho zilizoandaliwa.',
    discussLegalNeeds: 'Jadili Mahitaji Yako ya Kisheria',
    
    // Contact Section
    contactTitle: 'Wasiliana Nasi',
    contactSubtitle: 'Ungana na wataalam wetu wa kisheria kwa mazungumzo ya kitaalamu na uwakilishi.',
    contactDescription: 'Uko tayari kujadili mahitaji yako ya kisheria? Wasiliana na Anna & Co Advocates leo kwa ushauri wa utaalamu wa kisheria na uwakilishi.',
    getInTouch: 'Wasiliana',
    phone: 'Simu',
    email: 'Barua Pepe',
    location: 'Mahali',
    locationValue: 'Nairobi, Kenya',
    officeHours: 'Masaa ya Ofisi',
    mondayFriday: 'Jumatatu - Ijumaa',
    saturday: 'Jumamosi',
    sunday: 'Jumapili',
    
    // Contact Form
    sendMessage: 'Tuma Ujumbe',
    fullName: 'Jina Kamili',
    emailAddress: 'Anwani ya Barua Pepe',
    message: 'Ujumbe',
    
    // Footer
    practiceAreas: 'Maeneo ya Utendaji',
    allRightsReserved: 'Haki zote zimehifadhiwa.',
    legalDisclaimer: 'Tovuti hii ni kwa madhumuni ya taarifa tu na hairatisi ushauri wa kisheria. Shiriki na mawakili wetu wenye sifa kwa mambo mahususi ya kisheria.',
    
    // Accessibility
    accessibility: 'Upatikanaji',
    lightMode: 'Hali ya Mwanga',
    darkMode: 'Hali ya Giza',
    systemMode: 'Hali ya Mfumo'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme || 'system';
    }
    return 'system';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
    }
  }, [theme]);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      currentLanguage: language,
      setLanguage, 
      theme,
      setTheme,
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
