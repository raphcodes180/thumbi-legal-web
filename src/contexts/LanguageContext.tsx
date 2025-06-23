import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
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
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Expert Legal Representation & Advisory Services',
    heroDescription: 'Providing comprehensive legal solutions with integrity, expertise, and dedication. Your trusted partners in navigating complex legal matters across Kenya.',
    scheduleConsultation: 'Schedule Consultation',
    learnMore: 'Learn More',
    
    // About Section  
    aboutTitle: 'About Anna & Co Advocates',
    aboutDescription: 'With over a decade of experience in Kenyan law, Anna & Co Advocates has established itself as a leading legal firm committed to delivering exceptional results for our clients.',
    ourMission: 'Our Mission',
    missionText: 'To provide accessible, professional, and results-driven legal services that protect our clients\' interests and uphold the principles of justice.',
    ourVision: 'Our Vision',
    visionText: 'To be the most trusted legal advisory firm in Kenya, known for our expertise, integrity, and commitment to client success.',
    whyChooseUs: 'Why Choose Us',
    expertLawyers: 'Expert Lawyers',
    expertDescription: 'Our team consists of highly qualified advocates with extensive experience.',
    provenTrack: 'Proven Track Record',
    trackDescription: 'Successful representation in hundreds of cases across various practice areas.',
    clientFocused: 'Client-Focused Approach',
    clientDescription: 'We prioritize our clients\' needs and provide personalized legal solutions.',
    
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
    darkMode: 'Dark Mode',
    language: 'Language'
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    about: 'Kuhusu',
    services: 'Huduma',
    contact: 'Wasiliana',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Huduma za Uwakilishi na Ushauri wa Kitaaluma',
    heroDescription: 'Kutoa suluhisho kamili za kisheria kwa uongozi, utaalamu, na kujitolea. Washirika wako wa kuaminika katika kuongoza mambo magumu ya kisheria nchini Kenya.',
    scheduleConsultation: 'Panga Mazungumzo',
    learnMore: 'Jifunze Zaidi',
    
    // About Section
    aboutTitle: 'Kuhusu Anna & Co Advocates',
    aboutDescription: 'Kwa zaidi ya muongo mmoja wa tajriba katika sheria za Kenya, Anna & Co Advocates imejiimarisha kama kampuni ya kisheria inayoongoza inayojitoa kutoa matokeo ya kipekee kwa wateja wetu.',
    ourMission: 'Utume Wetu',
    missionText: 'Kutoa huduma za kisheria zinazofikiwa, za kitaaluma, na zinazolenga matokeo ambazi yanaunga mkono maslahi ya wateja wetu na kuunga mkono misingi ya haki.',
    ourVision: 'Maono Yetu',
    visionText: 'Kuwa kampuni ya ushauri wa kisheria inayoaminika zaidi nchini Kenya, inayojulikana kwa utaalamu wetu, uwazi, na kujitolea kwa mafanikio ya wateja.',
    whyChooseUs: 'Kwa Nini Utuchague',
    expertLawyers: 'Wanasheria Wataalam',
    expertDescription: 'Timu yetu ina mawakili wenye sifa za juu na tajriba kubwa.',
    provenTrack: 'Rekodi Iliyothibitishwa',
    trackDescription: 'Uwakilishi wa mafanikio katika mamia ya kesi katika maeneo mbalimbali ya utendaji.',
    clientFocused: 'Mbinu Inayolenga Mteja',
    clientDescription: 'Tunaweka kipaumbele mahitaji ya wateja wetu na kutoa suluhisho za kisheria za kibinafsi.',
    
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
    darkMode: 'Hali ya Giza',
    language: 'Lugha'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
