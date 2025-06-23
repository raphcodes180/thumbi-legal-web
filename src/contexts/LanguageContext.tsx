import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sw' | 'fr' | 'es' | 'zh' | 'de';
type Theme = 'light' | 'dark' | 'system';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    languages: 'Languages',
    
    // Language names (these stay the same regardless of selected language)
    english: 'English',
    kiswahili: 'Kiswahili', 
    french: 'Français',
    spanish: 'Español',
    mandarin: '中文',
    german: 'Deutsch',
    
    // Accessibility
    accessibility: 'Accessibility',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    systemMode: 'System',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Your Trusted Legal Partners',
    heroDescription: 'Professional legal services with integrity, expertise, and commitment to justice. We provide comprehensive legal solutions for individuals, businesses, and organizations across Kenya.',
    scheduleConsultation: 'Schedule Consultation',
    learnMore: 'Learn More',
    
    // About Section
    aboutTitle: 'About Us',
    aboutSubtitle: 'Dedicated to Legal Excellence',
    aboutDescription: 'With years of experience in the legal field, Anna & Co Advocates has established itself as a trusted name in providing comprehensive legal services. Our team of skilled advocates is committed to delivering personalized solutions that meet our clients\' unique needs.',
    ourMission: 'Our Mission',
    missionText: 'To provide exceptional legal services while maintaining the highest standards of professional integrity and client satisfaction.',
    ourVision: 'Our Vision',
    visionText: 'To be the leading law firm in Kenya, recognized for our expertise, innovation, and unwavering commitment to justice.',
    managingDirector: 'Managing Director',
    managingDirectorQuote: '"At Anna & Co Advocates, we believe that every client deserves dedicated representation and personalized attention. Our commitment to excellence drives us to achieve the best possible outcomes for those we serve."',
    
    // Services Section
    servicesTitle: 'Our Legal Services',
    servicesSubtitle: 'Comprehensive Legal Solutions',
    corporateLaw: 'Corporate Law',
    corporateDesc: 'Business formation, compliance, mergers & acquisitions, and corporate governance.',
    contractLaw: 'Contract Law',
    contractDesc: 'Contract drafting, review, negotiation, and dispute resolution.',
    civilLitigation: 'Civil Litigation',
    civilDesc: 'Court representation in civil matters, dispute resolution, and legal advocacy.',
    familyLaw: 'Family Law',
    familyDesc: 'Divorce, child custody, matrimonial property, and family dispute resolution.',
    landPropertyLaw: 'Land & Property Law',
    landPropertyDesc: 'Property transactions, land disputes, conveyancing, and real estate law.',
    countyNationalLaw: 'County & National Law',
    countyNationalDesc: 'Public law, administrative law, and government legal affairs.',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to discuss your legal needs? Contact us today for a consultation.',
    getInTouch: 'Contact Information',
    contactDescription: 'We are here to help you navigate your legal challenges. Reach out to us for professional legal advice and representation.',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    locationValue: 'Nairobi, Kenya',
    officeHours: 'Office Hours',
    mondayFriday: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 2:00 PM',
    sunday: 'Sunday: Closed',
    discussLegalNeeds: 'Discuss Your Legal Needs',
    
    // Footer
    practiceAreas: 'Practice Areas',
    allRightsReserved: 'All rights reserved.',
    legalDisclaimer: 'This website is for informational purposes only and does not constitute legal advice.',
  },
  
  sw: {
    // Navigation
    home: 'Nyumbani',
    about: 'Kuhusu',
    services: 'Huduma',
    contact: 'Wasiliana',
    languages: 'Lugha',
    
    // Language names (these stay the same regardless of selected language)
    english: 'English',
    kiswahili: 'Kiswahili',
    french: 'Français', 
    spanish: 'Español',
    mandarin: '中文',
    german: 'Deutsch',
    
    // Accessibility
    accessibility: 'Upatikanaji',
    darkMode: 'Hali ya Giza',
    lightMode: 'Hali ya Mwanga',
    systemMode: 'Mfumo',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Washirika Wako wa Kisheria Wanaoaminika',
    heroDescription: 'Huduma za kisheria za kitaaluma zenye uongozi, utaalamu, na kujitolea kwa haki. Tunatoa suluhisho kamili za kisheria kwa watu binafsi, biashara, na mashirika kote Kenya.',
    scheduleConsultation: 'Panga Ushauri',
    learnMore: 'Jifunze Zaidi',
    
    // About Section
    aboutTitle: 'Kuhusu Sisi',
    aboutSubtitle: 'Kujitolea kwa Ubora wa Kisheria',
    aboutDescription: 'Kwa miaka ya uzoefu katika uwanda wa kisheria, Anna & Co Advocates imejithibitisha kama jina la kuaminika katika kutoa huduma kamili za kisheria. Timu yetu ya mawakili wenye ujuzi imejitolea kutoa suluhisho za kibinafsi zinazokidhi mahitaji ya kipekee ya wateja wetu.',
    ourMission: 'Dhamira Yetu',
    missionText: 'Kutoa huduma bora za kisheria huku tukidumisha viwango vya juu vya uongozi wa kitaalamu na kuridhika kwa wateja.',
    ourVision: 'Maono Yetu',
    visionText: 'Kuwa kampuni ya mawakili inayoongoza nchini Kenya, inayotambuliwa kwa utaalamu wetu, uvumbuzi, na kujitolea bila ya kugeuzwa kwa haki.',
    managingDirector: 'Mkurugenzi Mkuu',
    managingDirectorQuote: '"Katika Anna & Co Advocates, tunaamini kwamba kila mteja anastahili uwakilishi wa kujitolea na umakini wa kibinafsi. Kujitolea kwetu kwa ubora kunaturuhusu kufikia matokeo bora zaidi kwa wale tunaowahudumia."',
    
    // Services Section
    servicesTitle: 'Huduma Zetu za Kisheria',
    servicesSubtitle: 'Suluhisho Kamili za Kisheria',
    corporateLaw: 'Sheria ya Kampuni',
    corporateDesc: 'Uundaji wa biashara, utii, michanganyiko na ununuzi, na utawala wa kikampuni.',
    contractLaw: 'Sheria ya Mikataba',
    contractDesc: 'Kuandika mikataba, ukaguzi, mazungumzo, na utatuzi wa migogoro.',
    civilLitigation: 'Kesi za Kiraia',
    civilDesc: 'Uwakilishi mahakamani katika mambo ya kiraia, utatuzi wa migogoro, na utetezi wa kisheria.',
    familyLaw: 'Sheria ya Familia',
    familyDesc: 'Talaka, ulinzi wa watoto, mali ya ndoa, na utatuzi wa migogoro ya kifamilia.',
    landPropertyLaw: 'Sheria ya Ardhi na Mali',
    landPropertyDesc: 'Miamala ya mali, migogoro ya ardhi, uhamisho, na sheria ya mali isiyohamishika.',
    countyNationalLaw: 'Sheria ya Kaunti na Kitaifa',
    countyNationalDesc: 'Sheria ya umma, sheria ya utawala, na mambo ya kisheria ya serikali.',
    
    // Contact Section
    contactTitle: 'Wasiliana Nasi',
    contactSubtitle: 'Uko tayari kujadili mahitaji yako ya kisheria? Wasiliana nasi leo kwa ushauri.',
    getInTouch: 'Maelezo ya Mawasiliano',
    contactDescription: 'Tuko hapa kukusaidia kupitia changamoto zako za kisheria. Tufikie kwa ushauri wa kitaalamu wa kisheria na uwakilishi.',
    phone: 'Simu',
    email: 'Barua Pepe',
    location: 'Mahali',
    locationValue: 'Nairobi, Kenya',
    officeHours: 'Masaa ya Ofisi',
    mondayFriday: 'Jumatatu - Ijumaa: 8:00 AM - 6:00 PM',
    saturday: 'Jumamosi: 9:00 AM - 2:00 PM',
    sunday: 'Jumapili: Imefungwa',
    discussLegalNeeds: 'Jadili Mahitaji Yako ya Kisheria',
    
    // Footer
    practiceAreas: 'Maeneo ya Utendaji',
    allRightsReserved: 'Haki zote zimehifadhiwa.',
    legalDisclaimer: 'Tovuti hii ni kwa madhumuni ya taarifa tu na haitoi ushauri wa kisheria.',
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    contact: 'Contact',
    languages: 'Langues',
    
    // Language names (these stay the same regardless of selected language)
    english: 'English',
    kiswahili: 'Kiswahili',
    french: 'Français',
    spanish: 'Español',
    mandarin: '中文',
    german: 'Deutsch',
    
    // Accessibility
    accessibility: 'Accessibilité',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    systemMode: 'Système',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Vos Partenaires Juridiques de Confiance',
    heroDescription: 'Services juridiques professionnels avec intégrité, expertise et engagement envers la justice. Nous fournissons des solutions juridiques complètes pour les particuliers, les entreprises et les organisations à travers le Kenya.',
    scheduleConsultation: 'Planifier une Consultation',
    learnMore: 'En Savoir Plus',
    
    // About Section
    aboutTitle: 'À Propos de Nous',
    aboutSubtitle: 'Dédiés à l\'Excellence Juridique',
    aboutDescription: 'Avec des années d\'expérience dans le domaine juridique, Anna & Co Advocates s\'est établi comme un nom de confiance dans la fourniture de services juridiques complets. Notre équipe d\'avocats qualifiés s\'engage à fournir des solutions personnalisées qui répondent aux besoins uniques de nos clients.',
    ourMission: 'Notre Mission',
    missionText: 'Fournir des services juridiques exceptionnels tout en maintenant les plus hauts standards d\'intégrité professionnelle et de satisfaction client.',
    ourVision: 'Notre Vision',
    visionText: 'Être le cabinet d\'avocats leader au Kenya, reconnu pour notre expertise, notre innovation et notre engagement inébranlable envers la justice.',
    managingDirector: 'Directrice Générale',
    managingDirectorQuote: '"Chez Anna & Co Advocates, nous croyons que chaque client mérite une représentation dédiée et une attention personnalisée. Notre engagement envers l\'excellence nous pousse à obtenir les meilleurs résultats possibles pour ceux que nous servons."',
    
    // Services Section
    servicesTitle: 'Nos Services Juridiques',
    servicesSubtitle: 'Solutions Juridiques Complètes',
    corporateLaw: 'Droit des Sociétés',
    corporateDesc: 'Formation d\'entreprise, conformité, fusions et acquisitions, et gouvernance d\'entreprise.',
    contractLaw: 'Droit des Contrats',
    contractDesc: 'Rédaction de contrats, révision, négociation et résolution de litiges.',
    civilLitigation: 'Litiges Civils',
    civilDesc: 'Représentation judiciaire en matières civiles, résolution de litiges et plaidoyer juridique.',
    familyLaw: 'Droit de la Famille',
    familyDesc: 'Divorce, garde d\'enfants, biens matrimoniaux et résolution de litiges familiaux.',
    landPropertyLaw: 'Droit Foncier et Immobilier',
    landPropertyDesc: 'Transactions immobilières, litiges fonciers, transfert de propriété et droit immobilier.',
    countyNationalLaw: 'Droit du Comté et National',
    countyNationalDesc: 'Droit public, droit administratif et affaires juridiques gouvernementales.',
    
    // Contact Section
    contactTitle: 'Contactez-Nous',
    contactSubtitle: 'Prêt à discuter de vos besoins juridiques ? Contactez-nous aujourd\'hui pour une consultation.',
    getInTouch: 'Informations de Contact',
    contactDescription: 'Nous sommes là pour vous aider à naviguer vos défis juridiques. Contactez-nous pour des conseils juridiques professionnels et une représentation.',
    phone: 'Téléphone',
    email: 'Email',
    location: 'Localisation',
    locationValue: 'Nairobi, Kenya',
    officeHours: 'Heures de Bureau',
    mondayFriday: 'Lundi - Vendredi: 8h00 - 18h00',
    saturday: 'Samedi: 9h00 - 14h00',
    sunday: 'Dimanche: Fermé',
    discussLegalNeeds: 'Discuter de Vos Besoins Juridiques',
    
    // Footer
    practiceAreas: 'Domaines de Pratique',
    allRightsReserved: 'Tous droits réservés.',
    legalDisclaimer: 'Ce site web est à des fins d\'information uniquement et ne constitue pas un conseil juridique.',
  },
  
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca',
    services: 'Servicios',
    contact: 'Contacto',
    languages: 'Idiomas',
    
    // Language names (these stay the same regardless of selected language)
    english: 'English',
    kiswahili: 'Kiswahili',
    french: 'Français',
    spanish: 'Español',
    mandarin: '中文',
    german: 'Deutsch',
    
    // Accessibility
    accessibility: 'Accesibilidad',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    systemMode: 'Sistema',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Sus Socios Legales de Confianza',
    heroDescription: 'Servicios legales profesionales con integridad, experiencia y compromiso con la justicia. Proporcionamos soluciones legales integrales para individuos, empresas y organizaciones en todo Kenia.',
    scheduleConsultation: 'Programar Consulta',
    learnMore: 'Aprender Más',
    
    // About Section
    aboutTitle: 'Acerca de Nosotros',
    aboutSubtitle: 'Dedicados a la Excelencia Legal',
    aboutDescription: 'Con años de experiencia en el campo legal, Anna & Co Advocates se ha establecido como un nombre de confianza en la provisión de servicios legales integrales. Nuestro equipo de abogados calificados está comprometido a entregar soluciones personalizadas que satisfagan las necesidades únicas de nuestros clientes.',
    ourMission: 'Nuestra Misión',
    missionText: 'Proporcionar servicios legales excepcionales mientras mantenemos los más altos estándares de integridad profesional y satisfacción del cliente.',
    ourVision: 'Nuestra Visión',
    visionText: 'Ser el bufete de abogados líder en Kenia, reconocido por nuestra experiencia, innovación y compromiso inquebrantable con la justicia.',
    managingDirector: 'Directora General',
    managingDirectorQuote: '"En Anna & Co Advocates, creemos que cada cliente merece representación dedicada y atención personalizada. Nuestro compromiso con la excelencia nos impulsa a lograr los mejores resultados posibles para aquellos a quienes servimos."',
    
    // Services Section
    servicesTitle: 'Nuestros Servicios Legales',
    servicesSubtitle: 'Soluciones Legales Integrales',
    corporateLaw: 'Derecho Corporativo',
    corporateDesc: 'Formación de empresas, cumplimiento, fusiones y adquisiciones, y gobierno corporativo.',
    contractLaw: 'Derecho de Contratos',
    contractDesc: 'Redacción de contratos, revisión, negociación y resolución de disputas.',
    civilLitigation: 'Litigios Civiles',
    civilDesc: 'Representación judicial en asuntos civiles, resolución de disputas y defensa legal.',
    familyLaw: 'Derecho de Familia',
    familyDesc: 'Divorcio, custodia de menores, bienes matrimoniales y resolución de disputas familiares.',
    landPropertyLaw: 'Derecho de Tierras y Propiedades',
    landPropertyDesc: 'Transacciones de propiedades, disputas de tierras, transferencia de propiedades y derecho inmobiliario.',
    countyNationalLaw: 'Derecho del Condado y Nacional',
    countyNationalDesc: 'Derecho público, derecho administrativo y asuntos legales gubernamentales.',
    
    // Contact Section
    contactTitle: 'Póngase en Contacto',
    contactSubtitle: '¿Listo para discutir sus necesidades legales? Contáctenos hoy para una consulta.',
    getInTouch: 'Información de Contacto',
    contactDescription: 'Estamos aquí para ayudarle a navegar sus desafíos legales. Contáctenos para asesoramiento legal profesional y representación.',
    phone: 'Teléfono',
    email: 'Correo Electrónico',
    location: 'Ubicación',
    locationValue: 'Nairobi, Kenia',
    officeHours: 'Horarios de Oficina',
    mondayFriday: 'Lunes - Viernes: 8:00 AM - 6:00 PM',
    saturday: 'Sábado: 9:00 AM - 2:00 PM',
    sunday: 'Domingo: Cerrado',
    discussLegalNeeds: 'Discuta Sus Necesidades Legales',
    
    // Footer
    practiceAreas: 'Áreas de Práctica',
    allRightsReserved: 'Todos los derechos reservados.',
    legalDisclaimer: 'Este sitio web es solo para fines informativos y no constituye asesoramiento legal.',
  },
  
  zh: {
    // Navigation
    home: '首页',
    about: '关于',
    services: '服务',
    contact: '联系',
    languages: '语言',
    
    // Language names (these stay the same regardless of selected language)
    english: 'English',
    kiswahili: 'Kiswahili',
    french: 'Français',
    spanish: 'Español',
    mandarin: '中文',
    german: 'Deutsch',
    
    // Accessibility
    accessibility: '无障碍访问',
    darkMode: '深色模式',
    lightMode: '浅色模式',
    systemMode: '系统',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: '您值得信赖的法律合作伙伴',
    heroDescription: '提供专业的法律服务，秉承诚信、专业和对正义的承诺。我们为肯尼亚的个人、企业和组织提供全面的法律解决方案。',
    scheduleConsultation: '预约咨询',
    learnMore: '了解更多',
    
    // About Section
    aboutTitle: '关于我们',
    aboutSubtitle: '致力于法律卓越',
    aboutDescription: '凭借多年的法律领域经验，Anna & Co Advocates已确立了自己作为提供全面法律服务的可信名称。我们熟练的律师团队致力于提供满足客户独特需求的个性化解决方案。',
    ourMission: '我们的使命',
    missionText: '提供卓越的法律服务，同时保持最高的专业诚信和客户满意度标准。',
    ourVision: '我们的愿景',
    visionText: '成为肯尼亚领先的律师事务所，以我们的专业知识、创新和对正义的坚定承诺而闻名。',
    managingDirector: '总经理',
    managingDirectorQuote: '"在Anna & Co Advocates，我们相信每个客户都值得专注的代理和个性化的关注。我们对卓越的承诺驱使我们为我们服务的客户实现最佳结果。"',
    
    // Services Section
    servicesTitle: '我们的法律服务',
    servicesSubtitle: '全面的法律解决方案',
    corporateLaw: '公司法',
    corporateDesc: '企业组建、合规、并购和公司治理。',
    contractLaw: '合同法',
    contractDesc: '合同起草、审查、谈判和争议解决。',
    civilLitigation: '民事诉讼',
    civilDesc: '民事案件的法庭代理、争议解决和法律辩护。',
    familyLaw: '家庭法',
    familyDesc: '离婚、子女监护、婚姻财产和家庭争议解决。',
    landPropertyLaw: '土地和财产法',
    landPropertyDesc: '财产交易、土地争议、产权转让和房地产法。',
    countyNationalLaw: '县和国家法',
    countyNationalDesc: '公法、行政法和政府法律事务。',
    
    // Contact Section
    contactTitle: '联系我们',
    contactSubtitle: '准备讨论您的法律需求？今天联系我们进行咨询。',
    getInTouch: '联系信息',
    contactDescription: '我们在这里帮助您解决法律挑战。联系我们获取专业的法律建议和代理。',
    phone: '电话',
    email: '邮箱',
    location: '位置',
    locationValue: '肯尼亚内罗毕',
    officeHours: '办公时间',
    mondayFriday: '周一至周五：上午8:00 - 下午6:00',
    saturday: '周六：上午9:00 - 下午2:00',
    sunday: '周日：休息',
    discussLegalNeeds: '讨论您的法律需求',
    
    // Footer
    practiceAreas: '执业领域',
    allRightsReserved: '版权所有。',
    legalDisclaimer: '本网站仅供信息目的，不构成法律建议。',
  },
  
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über Uns',
    services: 'Dienstleistungen',
    contact: 'Kontakt',
    languages: 'Sprachen',
    
    // Language names (these stay the same regardless of selected language)
    english: 'English',
    kiswahili: 'Kiswahili',
    french: 'Français',
    spanish: 'Español',
    mandarin: '中文',
    german: 'Deutsch',
    
    // Accessibility
    accessibility: 'Barrierefreiheit',
    darkMode: 'Dunkler Modus',
    lightMode: 'Heller Modus',
    systemMode: 'System',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Ihre Vertrauenswürdigen Rechtspartner',
    heroDescription: 'Professionelle Rechtsdienstleistungen mit Integrität, Fachwissen und Engagement für Gerechtigkeit. Wir bieten umfassende Rechtslösungen für Einzelpersonen, Unternehmen und Organisationen in ganz Kenia.',
    scheduleConsultation: 'Beratung Vereinbaren',
    learnMore: 'Mehr Erfahren',
    
    // About Section
    aboutTitle: 'Über Uns',
    aboutSubtitle: 'Der Rechtlichen Exzellenz Verpflichtet',
    aboutDescription: 'Mit jahrelanger Erfahrung im Rechtsbereich hat sich Anna & Co Advocates als vertrauensvoller Name bei der Bereitstellung umfassender Rechtsdienstleistungen etabliert. Unser Team qualifizierter Anwälte ist verpflichtet, personalisierte Lösungen zu liefern, die den einzigartigen Bedürfnissen unserer Kunden entsprechen.',
    ourMission: 'Unsere Mission',
    missionText: 'Außergewöhnliche Rechtsdienstleistungen zu erbringen, während wir die höchsten Standards professioneller Integrität und Kundenzufriedenheit aufrechterhalten.',
    ourVision: 'Unsere Vision',
    visionText: 'Die führende Anwaltskanzlei in Kenia zu sein, anerkannt für unser Fachwissen, unsere Innovation und unser unerschütterliches Engagement für Gerechtigkeit.',
    managingDirector: 'Geschäftsführerin',
    managingDirectorQuote: '"Bei Anna & Co Advocates glauben wir, dass jeder Kunde engagierte Vertretung und persönliche Aufmerksamkeit verdient. Unser Engagement für Exzellenz treibt uns an, die bestmöglichen Ergebnisse für die zu erzielen, denen wir dienen."',
    
    // Services Section
    servicesTitle: 'Unsere Rechtsdienstleistungen',
    servicesSubtitle: 'Umfassende Rechtslösungen',
    corporateLaw: 'Unternehmensrecht',
    corporateDesc: 'Unternehmensgründung, Compliance, Fusionen & Übernahmen und Unternehmensführung.',
    contractLaw: 'Vertragsrecht',
    contractDesc: 'Vertragserstellung, Überprüfung, Verhandlung und Streitbeilegung.',
    civilLitigation: 'Zivilprozess',
    civilDesc: 'Gerichtsvertretung in Zivilsachen, Streitbeilegung und rechtliche Interessenvertretung.',
    familyLaw: 'Familienrecht',
    familyDesc: 'Scheidung, Sorgerecht, Ehevermögen und Familienstreitbeilegung.',
    landPropertyLaw: 'Land- und Eigentumsrecht',
    landPropertyDesc: 'Immobilientransaktionen, Landstreitigkeiten, Eigentumsübertragung und Immobilienrecht.',
    countyNationalLaw: 'Bezirks- und Bundesrecht',
    countyNationalDesc: 'Öffentliches Recht, Verwaltungsrecht und Regierungsrechtsangelegenheiten.',
    
    // Contact Section
    contactTitle: 'Kontaktieren Sie Uns',
    contactSubtitle: 'Bereit, Ihre rechtlichen Bedürfnisse zu besprechen? Kontaktieren Sie uns heute für eine Beratung.',
    getInTouch: 'Kontaktinformationen',
    contactDescription: 'Wir sind hier, um Ihnen bei der Bewältigung Ihrer rechtlichen Herausforderungen zu helfen. Wenden Sie sich an uns für professionelle Rechtsberatung und Vertretung.',
    phone: 'Telefon',
    email: 'E-Mail',
    location: 'Standort',
    locationValue: 'Nairobi, Kenia',
    officeHours: 'Bürozeiten',
    mondayFriday: 'Montag - Freitag: 8:00 - 18:00',
    saturday: 'Samstag: 9:00 - 14:00',
    sunday: 'Sonntag: Geschlossen',
    discussLegalNeeds: 'Besprechen Sie Ihre Rechtlichen Bedürfnisse',
    
    // Footer
    practiceAreas: 'Praxisbereiche',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    legalDisclaimer: 'Diese Website dient nur zu Informationszwecken und stellt keine Rechtsberatung dar.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, theme, setTheme }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
