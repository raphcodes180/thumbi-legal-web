
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
    excellenceTitle: 'Excellence in Legal Practice',
    excellenceDescription1: 'With years of experience in the legal field, Anna & Co Advocates has established itself as a trusted name in providing comprehensive legal services. Our team of skilled advocates is committed to delivering personalized solutions that meet our clients\' unique needs.',
    excellenceDescription2: 'We pride ourselves on maintaining the highest standards of professional integrity while building lasting relationships with our clients based on trust, transparency, and results.',
    foundationTitle: 'Our Foundation',
    professionalExcellence: 'Professional Excellence',
    integrity: 'Integrity',
    clientFocus: 'Client Focus',
    innovation: 'Innovation',
    resultsDriven: 'Results Driven',
    credentialsTitle: 'Professional Credentials',
    llbDegree: 'LLB (Bachelor of Laws)',
    legalEducation: 'Legal Education & Training',
    graduated: 'Graduated with Honors',
    admittedBar: 'Admitted to the Bar',
    licensedPractitioner: 'Licensed Legal Practitioner',
    kenyaSchoolLaw: 'Kenya School of Law',
    verification: 'Credential Verification',
    verifyCredentials: 'Verify Our Credentials',
    approachTitle: 'Our Approach',
    approach1: 'Comprehensive case analysis and strategic planning',
    approach2: 'Clear communication throughout the legal process',
    approach3: 'Timely and efficient resolution of legal matters',
    approach4: 'Personalized attention to each client\'s unique situation',
    managingDirector: 'Managing Director',
    managingDirectorQuote: 'At Anna & Co Advocates, we believe that every client deserves dedicated representation and personalized attention. Our commitment to excellence drives us to achieve the best possible outcomes for those we serve.',
    
    // Services Section
    servicesTitle: 'Our Legal Services',
    servicesSubtitle: 'Comprehensive legal solutions tailored to meet your specific needs with professional expertise and unwavering commitment to your success.',
    keyServices: 'Key Services:',
    specializedConsultation: 'Need specialized legal consultation? We offer personalized advice for complex legal matters.',
    discussLegalNeeds: 'Discuss Your Legal Needs',
    corporateLaw: 'Corporate Law',
    corporateDescription: 'Comprehensive business legal services including formation, compliance, mergers & acquisitions, and corporate governance to help your business thrive.',
    businessRegistration: 'Business Registration & Formation',
    corporateGovernance: 'Corporate Governance Advisory',
    complianceAdvisory: 'Regulatory Compliance Advisory',
    commercialContracts: 'Commercial Contract Management',
    contractLaw: 'Contract Law',
    contractDescription: 'Expert contract drafting, review, negotiation, and dispute resolution services to protect your interests and ensure favorable outcomes.',
    contractDrafting: 'Contract Drafting & Review',
    agreementReview: 'Legal Agreement Analysis',
    negotiationSupport: 'Negotiation Support',
    breachResolution: 'Breach of Contract Resolution',
    civilLitigation: 'Civil Litigation',
    litigationDescription: 'Professional court representation in civil matters, strategic dispute resolution, and comprehensive legal advocacy to protect your rights.',
    courtRepresentation: 'Court Representation',
    caseStrategy: 'Case Strategy Development',
    settlementNegotiation: 'Settlement Negotiation',
    appealsProcess: 'Appeals Process Management',
    familyLaw: 'Family Law',
    familyDescription: 'Compassionate legal support for family matters including divorce proceedings, child custody, matrimonial property, and family mediation services.',
    divorceProceedings: 'Divorce Proceedings',
    childCustody: 'Child Custody & Support',
    matrimonialProperty: 'Matrimonial Property Division',
    familyMediation: 'Family Mediation Services',
    landPropertyLaw: 'Land & Property Law',
    propertyDescription: 'Complete property legal services including transactions, title verification, land disputes resolution, and professional conveyancing services.',
    propertyTransactions: 'Property Transactions',
    titleVerification: 'Title Verification & Search',
    landDisputes: 'Land Disputes Resolution',
    conveyancing: 'Professional Conveyancing',
    countyNationalLaw: 'County & National Law',
    governmentDescription: 'Specialized public law services including administrative law, government relations, public policy advisory, and regulatory compliance.',
    administrativeLaw: 'Administrative Law',
    governmentRelations: 'Government Relations',
    publicPolicy: 'Public Policy Advisory',
    regulatoryCompliance: 'Regulatory Compliance',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to discuss your legal needs? Contact us today for a professional consultation and let us help you navigate your legal challenges.',
    getInTouch: 'Contact Information',
    contactDescription: 'We are here to help you navigate your legal challenges with professional expertise and personalized attention. Reach out to us for comprehensive legal advice and representation.',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    locationValue: 'Nairobi, Kenya',
    officeHours: 'Office Hours',
    mondayFriday: 'Monday - Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    
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
    
    // Accessibility
    accessibility: 'Upatikanaji',
    darkMode: 'Hali ya Giza',
    lightMode: 'Hali ya Mwanga',
    systemMode: 'Mfumo',
    
    // Hero Section
    heroTitle: 'Anna & Co Advocates',
    heroSubtitle: 'Washirika Wako wa Kisheria Wanaoaminika',
    heroDescription: 'Huduma za kisheria za kitaalamu zenye uongozi, utaalamu, na kujitolea kwa haki. Tunatoa suluhisho kamili za kisheria kwa watu binafsi, biashara, na mashirika kote Kenya.',
    scheduleConsultation: 'Panga Ushauri',
    learnMore: 'Jifunze Zaidi',
    
    // About Section
    aboutTitle: 'Kuhusu Sisi',
    aboutSubtitle: 'Kujitolea kwa Ubora wa Kisheria',
    excellenceTitle: 'Ubora katika Mazoezi ya Kisheria',
    excellenceDescription1: 'Kwa miaka ya uzoefu katika uwanda wa kisheria, Anna & Co Advocates imejithibitisha kama jina la kuaminika katika kutoa huduma kamili za kisheria. Timu yetu ya mawakili wenye ujuzi imejitolea kutoa suluhisho za kibinafsi zinazokidhi mahitaji ya kipekee ya wateja wetu.',
    excellenceDescription2: 'Tunajivunia kudumisha viwango vya juu vya uongozi wa kitaalamu huku tukijenga uhusiano wa kudumu na wateja wetu kulingana na imani, uwazi, na matokeo.',
    foundationTitle: 'Msingi Wetu',
    professionalExcellence: 'Ubora wa Kitaalamu',
    integrity: 'Uongozi',
    clientFocus: 'Umakini wa Mteja',
    innovation: 'Uvumbuzi',
    resultsDriven: 'Kuongozwa na Matokeo',
    credentialsTitle: 'Vyeti vya Kitaalamu',
    llbDegree: 'LLB (Shahada ya Kwanza ya Sheria)',
    legalEducation: 'Elimu na Mafunzo ya Kisheria',
    graduated: 'Alihitimu kwa Heshima',
    admittedBar: 'Amekubaliwa kwenye Baa',
    licensedPractitioner: 'Mtaalamu wa Kisheria aliye na Leseni',
    kenyaSchoolLaw: 'Chuo cha Sheria cha Kenya',
    verification: 'Uthibitisho wa Vyeti',
    verifyCredentials: 'Thibitisha Vyeti Vyetu',
    approachTitle: 'Mbinu Yetu',
    approach1: 'Uchambuzi wa kina wa kesi na mipango ya kimkakati',
    approach2: 'Mawasiliano wazi wakati wa mchakato wa kisheria',
    approach3: 'Utatuzi wa haraka na wa ufanisi wa mambo ya kisheria',
    approach4: 'Umakini wa kibinafsi kwa hali ya kipekee ya kila mteja',
    managingDirector: 'Mkurugenzi Mkuu',
    managingDirectorQuote: 'Katika Anna & Co Advocates, tunaamini kwamba kila mteja anastahili uwakilishi wa kujitolea na umakini wa kibinafsi. Kujitolea kwetu kwa ubora kunaturuhusu kufikia matokeo bora zaidi kwa wale tunaowahudumia.',
    
    // Services Section
    servicesTitle: 'Huduma Zetu za Kisheria',
    servicesSubtitle: 'Suluhisho kamili za kisheria zilizobinafsishwa kukidhi mahitaji yako maalum kwa utaalamu wa kitaalamu na kujitolea bila ya kugeuzwa kwa mafanikio yako.',
    keyServices: 'Huduma Muhimu:',
    specializedConsultation: 'Unahitaji ushauri maalum wa kisheria? Tunatoa ushauri wa kibinafsi kwa mambo magumu ya kisheria.',
    discussLegalNeeds: 'Jadili Mahitaji Yako ya Kisheria',
    corporateLaw: 'Sheria ya Kampuni',
    corporateDescription: 'Huduma kamili za kisheria za biashara ikiwa ni pamoja na uundaji, utii, michanganyiko na ununuzi, na utawala wa kikampuni kusaidia biashara yako kustawi.',
    businessRegistration: 'Usajili na Uundaji wa Biashara',
    corporateGovernance: 'Ushauri wa Utawala wa Kikampuni',
    complianceAdvisory: 'Ushauri wa Utii wa Sheria',
    commercialContracts: 'Usimamizi wa Mikataba ya Kibiashara',
    contractLaw: 'Sheria ya Mikataba',
    contractDescription: 'Huduma za mtaalamu za kuandika mikataba, ukaguzi, mazungumzo, na utatuzi wa migogoro ili kulinda maslahi yako na kuhakikisha matokeo mazuri.',
    contractDrafting: 'Kuandika na Kukagua Mikataba',
    agreementReview: 'Uchambuzi wa Makubaliano ya Kisheria',
    negotiationSupport: 'Msaada wa Majadiliano',
    breachResolution: 'Utatuzi wa Ukiukaji wa Mkataba',
    civilLitigation: 'Kesi za Kiraia',
    litigationDescription: 'Uwakilishi wa kitaalamu mahakamani katika mambo ya kiraia, utatuzi wa kimkakati wa migogoro, na utetezi kamili wa kisheria kulinda haki zako.',
    courtRepresentation: 'Uwakilishi Mahakamani',
    caseStrategy: 'Uundaji wa Mkakati wa Kesi',
    settlementNegotiation: 'Majadiliano ya Upatanisho',
    appealsProcess: 'Usimamizi wa Mchakato wa Rufaa',
    familyLaw: 'Sheria ya Familia',
    familyDescription: 'Msaada wa kisheria wa huruma kwa mambo ya kifamilia ikiwa ni pamoja na mchakato wa talaka, ulinzi wa watoto, mali ya ndoa, na huduma za upatanisho wa kifamilia.',
    divorceProceedings: 'Mchakato wa Talaka',
    childCustody: 'Ulinzi na Msaada wa Watoto',
    matrimonialProperty: 'Mgawanyo wa Mali ya Ndoa',
    familyMediation: 'Huduma za Upatanisho wa Kifamilia',
    landPropertyLaw: 'Sheria ya Ardhi na Mali',
    propertyDescription: 'Huduma kamili za kisheria za mali ikiwa ni pamoja na miamala, uthibitisho wa kiwango, utatuzi wa migogoro ya ardhi, na huduma za kitaalamu za uhamisho.',
    propertyTransactions: 'Miamala ya Mali',
    titleVerification: 'Uthibitisho na Utafutaji wa Kiwango',
    landDisputes: 'Utatuzi wa Migogoro ya Ardhi',
    conveyancing: 'Uhamisho wa Kitaalamu',
    countyNationalLaw: 'Sheria ya Kaunti na Kitaifa',
    governmentDescription: 'Huduma maalum za sheria ya umma ikiwa ni pamoja na sheria ya utawala, mahusiano ya serikali, ushauri wa sera za umma, na utii wa sheria.',
    administrativeLaw: 'Sheria ya Utawala',
    governmentRelations: 'Mahusiano ya Serikali',
    publicPolicy: 'Ushauri wa Sera za Umma',
    regulatoryCompliance: 'Utii wa Sheria',
    
    // Contact Section
    contactTitle: 'Wasiliana Nasi',
    contactSubtitle: 'Uko tayari kujadili mahitaji yako ya kisheria? Wasiliana nasi leo kwa ushauri wa kitaalamu na turuhusu tukusaidie kupitia changamoto zako za kisheria.',
    getInTouch: 'Maelezo ya Mawasiliano',
    contactDescription: 'Tuko hapa kukusaidia kupitia changamoto zako za kisheria kwa utaalamu wa kitaalamu na umakini wa kibinafsi. Tufikie kwa ushauri kamili wa kisheria na uwakilishi.',
    phone: 'Simu',
    email: 'Barua Pepe',
    location: 'Mahali',
    locationValue: 'Nairobi, Kenya',
    officeHours: 'Masaa ya Ofisi',
    mondayFriday: 'Jumatatu - Ijumaa',
    saturday: 'Jumamosi',
    sunday: 'Jumapili',
    
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
    excellenceTitle: 'Excellence en Pratique Juridique',
    excellenceDescription1: 'Avec des années d\'expérience dans le domaine juridique, Anna & Co Advocates s\'est établi comme un nom de confiance dans la fourniture de services juridiques complets. Notre équipe d\'avocats qualifiés s\'engage à fournir des solutions personnalisées qui répondent aux besoins uniques de nos clients.',
    excellenceDescription2: 'Nous sommes fiers de maintenir les plus hauts standards d\'intégrité professionnelle tout en construisant des relations durables avec nos clients basées sur la confiance, la transparence et les résultats.',
    foundationTitle: 'Notre Fondation',
    professionalExcellence: 'Excellence Professionnelle',
    integrity: 'Intégrité',
    clientFocus: 'Focus Client',
    innovation: 'Innovation',
    resultsDriven: 'Axé sur les Résultats',
    credentialsTitle: 'Références Professionnelles',
    llbDegree: 'LLB (Bachelor en Droit)',
    legalEducation: 'Éducation et Formation Juridique',
    graduated: 'Diplômé avec Honneurs',
    admittedBar: 'Admis au Barreau',
    licensedPractitioner: 'Praticien Juridique Licencié',
    kenyaSchoolLaw: 'École de Droit du Kenya',
    verification: 'Vérification des Références',
    verifyCredentials: 'Vérifiez Nos Références',
    approachTitle: 'Notre Approche',
    approach1: 'Analyse complète de cas et planification stratégique',
    approach2: 'Communication claire tout au long du processus juridique',
    approach3: 'Résolution rapide et efficace des questions juridiques',
    approach4: 'Attention personnalisée à la situation unique de chaque client',
    managingDirector: 'Directrice Générale',
    managingDirectorQuote: 'Chez Anna & Co Advocates, nous croyons que chaque client mérite une représentation dédiée et une attention personnalisée. Notre engagement envers l\'excellence nous pousse à obtenir les meilleurs résultats possibles pour ceux que nous servons.',
    
    // Services Section
    servicesTitle: 'Nos Services Juridiques',
    servicesSubtitle: 'Solutions juridiques complètes adaptées pour répondre à vos besoins spécifiques avec une expertise professionnelle et un engagement inébranlable envers votre succès.',
    keyServices: 'Services Clés :',
    specializedConsultation: 'Besoin d\'une consultation juridique spécialisée ? Nous offrons des conseils personnalisés pour les questions juridiques complexes.',
    discussLegalNeeds: 'Discuter de Vos Besoins Juridiques',
    corporateLaw: 'Droit des Sociétés',
    corporateDescription: 'Services juridiques d\'entreprise complets incluant la formation, la conformité, les fusions et acquisitions, et la gouvernance d\'entreprise pour aider votre entreprise à prospérer.',
    businessRegistration: 'Enregistrement et Formation d\'Entreprise',
    corporateGovernance: 'Conseil en Gouvernance d\'Entreprise',
    complianceAdvisory: 'Conseil en Conformité Réglementaire',
    commercialContracts: 'Gestion de Contrats Commerciaux',
    contractLaw: 'Droit des Contrats',
    contractDescription: 'Services experts de rédaction de contrats, révision, négociation et résolution de litiges pour protéger vos intérêts et assurer des résultats favorables.',
    contractDrafting: 'Rédaction et Révision de Contrats',
    agreementReview: 'Analyse d\'Accords Juridiques',
    negotiationSupport: 'Support de Négociation',
    breachResolution: 'Résolution de Rupture de Contrat',
    civilLitigation: 'Litiges Civils',
    litigationDescription: 'Représentation judiciaire professionnelle en matières civiles, résolution stratégique de litiges et plaidoyer juridique complet pour protéger vos droits.',
    courtRepresentation: 'Représentation Judiciaire',
    caseStrategy: 'Développement de Stratégie de Cas',
    settlementNegotiation: 'Négociation de Règlement',
    appealsProcess: 'Gestion du Processus d\'Appel',
    familyLaw: 'Droit de la Famille',
    familyDescription: 'Support juridique compatissant pour les questions familiales incluant les procédures de divorce, la garde d\'enfants, les biens matrimoniaux et les services de médiation familiale.',
    divorceProceedings: 'Procédures de Divorce',
    childCustody: 'Garde et Soutien d\'Enfants',
    matrimonialProperty: 'Division de Biens Matrimoniaux',
    familyMediation: 'Services de Médiation Familiale',
    landPropertyLaw: 'Droit Foncier et Immobilier',
    propertyDescription: 'Services juridiques immobiliers complets incluant les transactions, la vérification de titre, la résolution de litiges fonciers et les services professionnels de transfert de propriété.',
    propertyTransactions: 'Transactions Immobilières',
    titleVerification: 'Vérification et Recherche de Titre',
    landDisputes: 'Résolution de Litiges Fonciers',
    conveyancing: 'Transfert Professionnel',
    countyNationalLaw: 'Droit du Comté et National',
    governmentDescription: 'Services de droit public spécialisés incluant le droit administratif, les relations gouvernementales, le conseil en politique publique et la conformité réglementaire.',
    administrativeLaw: 'Droit Administratif',
    governmentRelations: 'Relations Gouvernementales',
    publicPolicy: 'Conseil en Politique Publique',
    regulatoryCompliance: 'Conformité Réglementaire',
    
    // Contact Section
    contactTitle: 'Contactez-Nous',
    contactSubtitle: 'Prêt à discuter de vos besoins juridiques ? Contactez-nous aujourd\'hui pour une consultation professionnelle et laissez-nous vous aider à naviguer vos défis juridiques.',
    getInTouch: 'Informations de Contact',
    contactDescription: 'Nous sommes là pour vous aider à naviguer vos défis juridiques avec une expertise professionnelle et une attention personnalisée. Contactez-nous pour des conseils juridiques complets et une représentation.',
    phone: 'Téléphone',
    email: 'Email',
    location: 'Localisation',
    locationValue: 'Nairobi, Kenya',
    officeHours: 'Heures de Bureau',
    mondayFriday: 'Lundi - Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    
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
    excellenceTitle: 'Excelencia en la Práctica Legal',
    excellenceDescription1: 'Con años de experiencia en el campo legal, Anna & Co Advocates se ha establecido como un nombre de confianza en la provisión de servicios legales integrales. Nuestro equipo de abogados calificados está comprometido a entregar soluciones personalizadas que satisfagan las necesidades únicas de nuestros clientes.',
    excellenceDescription2: 'Nos enorgullecemos de mantener los más altos estándares de integridad profesional mientras construimos relaciones duraderas con nuestros clientes basadas en confianza, transparencia y resultados.',
    foundationTitle: 'Nuestra Fundación',
    professionalExcellence: 'Excelencia Profesional',
    integrity: 'Integridad',
    clientFocus: 'Enfoque en el Cliente',
    innovation: 'Innovación',
    resultsDriven: 'Orientado a Resultados',
    credentialsTitle: 'Credenciales Profesionales',
    llbDegree: 'LLB (Licenciatura en Derecho)',
    legalEducation: 'Educación y Entrenamiento Legal',
    graduated: 'Graduado con Honores',
    admittedBar: 'Admitido en el Colegio',
    licensedPractitioner: 'Practicante Legal Licenciado',
    kenyaSchoolLaw: 'Escuela de Derecho de Kenia',
    verification: 'Verificación de Credenciales',
    verifyCredentials: 'Verificar Nuestras Credenciales',
    approachTitle: 'Nuestro Enfoque',
    approach1: 'Análisis integral de casos y planificación estratégica',
    approach2: 'Comunicación clara durante todo el proceso legal',
    approach3: 'Resolución oportuna y eficiente de asuntos legales',
    approach4: 'Atención personalizada a la situación única de cada cliente',
    managingDirector: 'Directora General',
    managingDirectorQuote: 'En Anna & Co Advocates, creemos que cada cliente merece representación dedicada y atención personalizada. Nuestro compromiso con la excelencia nos impulsa a lograr los mejores resultados posibles para aquellos a quienes servimos.',
    
    // Services Section
    servicesTitle: 'Nuestros Servicios Legales',
    servicesSubtitle: 'Soluciones legales integrales adaptadas para satisfacer sus necesidades específicas con experiencia profesional y compromiso inquebrantable con su éxito.',
    keyServices: 'Servicios Clave:',
    specializedConsultation: '¿Necesita consulta legal especializada? Ofrecemos asesoramiento personalizado para asuntos legales complejos.',
    discussLegalNeeds: 'Discuta Sus Necesidades Legales',
    corporateLaw: 'Derecho Corporativo',
    corporateDescription: 'Servicios legales empresariales integrales incluyendo formación, cumplimiento, fusiones y adquisiciones, y gobierno corporativo para ayudar a su empresa a prosperar.',
    businessRegistration: 'Registro y Formación de Empresas',
    corporateGovernance: 'Asesoría en Gobierno Corporativo',
    complianceAdvisory: 'Asesoría en Cumplimiento Regulatorio',
    commercialContracts: 'Gestión de Contratos Comerciales',
    contractLaw: 'Derecho de Contratos',
    contractDescription: 'Servicios expertos de redacción de contratos, revisión, negociación y resolución de disputas para proteger sus intereses y asegurar resultados favorables.',
    contractDrafting: 'Redacción y Revisión de Contratos',
    agreementReview: 'Análisis de Acuerdos Legales',
    negotiationSupport: 'Apoyo en Negociación',
    breachResolution: 'Resolución de Incumplimiento de Contrato',
    civilLitigation: 'Litigios Civiles',
    litigationDescription: 'Representación judicial profesional en asuntos civiles, resolución estratégica de disputas y defensa legal integral para proteger sus derechos.',
    courtRepresentation: 'Representación Judicial',
    caseStrategy: 'Desarrollo de Estrategia de Caso',
    settlementNegotiation: 'Negociación de Acuerdo',
    appealsProcess: 'Gestión del Proceso de Apelaciones',
    familyLaw: 'Derecho de Familia',
    familyDescription: 'Apoyo legal compasivo para asuntos familiares incluyendo procedimientos de divorcio, custodia de menores, propiedad matrimonial y servicios de mediación familiar.',
    divorceProceedings: 'Procedimientos de Divorcio',
    childCustody: 'Custodia y Manutención de Menores',
    matrimonialProperty: 'División de Propiedad Matrimonial',
    familyMediation: 'Servicios de Mediación Familiar',
    landPropertyLaw: 'Derecho de Tierras y Propiedades',
    propertyDescription: 'Servicios legales inmobiliarios completos incluyendo transacciones, verificación de títulos, resolución de disputas de tierras y servicios profesionales de transferencia.',
    propertyTransactions: 'Transacciones Inmobiliarias',
    titleVerification: 'Verificación y Búsqueda de Títulos',
    landDisputes: 'Resolución de Disputas de Tierras',
    conveyancing: 'Transferencia Profesional',
    countyNationalLaw: 'Derecho del Condado y Nacional',
    governmentDescription: 'Servicios especializados de derecho público incluyendo derecho administrativo, relaciones gubernamentales, asesoría en política pública y cumplimiento regulatorio.',
    administrativeLaw: 'Derecho Administrativo',
    governmentRelations: 'Relaciones Gubernamentales',
    publicPolicy: 'Asesoría en Política Pública',
    regulatoryCompliance: 'Cumplimiento Regulatorio',
    
    // Contact Section
    contactTitle: 'Póngase en Contacto',
    contactSubtitle: '¿Listo para discutir sus necesidades legales? Contáctenos hoy para una consulta profesional y permítanos ayudarle a navegar sus desafíos legales.',
    getInTouch: 'Información de Contacto',
    contactDescription: 'Estamos aquí para ayudarle a navegar sus desafíos legales con experiencia profesional y atención personalizada. Contáctenos para asesoramiento legal integral y representación.',
    phone: 'Teléfono',
    email: 'Correo Electrónico',
    location: 'Ubicación',
    locationValue: 'Nairobi, Kenia',
    officeHours: 'Horarios de Oficina',
    mondayFriday: 'Lunes - Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    
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
    excellenceTitle: '法律实践中的卓越',
    excellenceDescription1: '凭借多年的法律领域经验，Anna & Co Advocates已确立了自己作为提供全面法律服务的可信名称。我们熟练的律师团队致力于提供满足客户独特需求的个性化解决方案。',
    excellenceDescription2: '我们自豪地保持最高的专业诚信标准，同时与客户建立基于信任、透明度和结果的持久关系。',
    foundationTitle: '我们的基础',
    professionalExcellence: '专业卓越',
    integrity: '诚信',
    clientFocus: '客户专注',
    innovation: '创新',
    resultsDriven: '结果导向',
    credentialsTitle: '专业资格',
    llbDegree: 'LLB（法学学士）',
    legalEducation: '法律教育与培训',
    graduated: '荣誉毕业',
    admittedBar: '获准执业',
    licensedPractitioner: '持牌法律执业者',
    kenyaSchoolLaw: '肯尼亚法学院',
    verification: '资格验证',
    verifyCredentials: '验证我们的资格',
    approachTitle: '我们的方法',
    approach1: '全面的案例分析和战略规划',
    approach2: '在整个法律过程中进行清晰的沟通',
    approach3: '及时有效地解决法律问题',
    approach4: '对每个客户独特情况的个性化关注',
    managingDirector: '总经理',
    managingDirectorQuote: '在Anna & Co Advocates，我们相信每个客户都值得专注的代理和个性化的关注。我们对卓越的承诺驱使我们为我们服务的客户实现最佳结果。',
    
    // Services Section
    servicesTitle: '我们的法律服务',
    servicesSubtitle: '全面的法律解决方案，量身定制以满足您的特定需求，具有专业的专业知识和对您成功的坚定承诺。',
    keyServices: '核心服务：',
    specializedConsultation: '需要专业的法律咨询吗？我们为复杂的法律问题提供个性化建议。',
    discussLegalNeeds: '讨论您的法律需求',
    corporateLaw: '公司法',
    corporateDescription: '全面的商业法律服务，包括成立、合规、并购和公司治理，帮助您的企业蓬勃发展。',
    businessRegistration: '企业注册与成立',
    corporateGovernance: '公司治理咨询',
    complianceAdvisory: '监管合规咨询',
    commercialContracts: '商业合同管理',
    contractLaw: '合同法',
    contractDescription: '专业的合同起草、审查、谈判和争议解决服务，保护您的利益并确保有利的结果。',
    contractDrafting: '合同起草与审查',
    agreementReview: '法律协议分析',
    negotiationSupport: '谈判支持',
    breachResolution: '违约解决',
    civilLitigation: '民事诉讼',
    litigationDescription: '民事案件的专业法庭代理、战略争议解决和全面的法律辩护，保护您的权利。',
    courtRepresentation: '法庭代理',
    caseStrategy: '案件策略开发',
    settlementNegotiation: '和解谈判',
    appealsProcess: '上诉程序管理',
    familyLaw: '家庭法',
    familyDescription: '家庭事务的同情法律支持，包括离婚程序、子女监护、婚姻财产和家庭调解服务。',
    divorceProceedings: '离婚程序',
    childCustody: '子女监护与抚养',
    matrimonialProperty: '婚姻财产分割',
    familyMediation: '家庭调解服务',
    landPropertyLaw: '土地和财产法',
    propertyDescription: '完整的房地产法律服务，包括交易、产权验证、土地争议解决和专业的产权转让服务。',
    propertyTransactions: '房地产交易',
    titleVerification: '产权验证与搜索',
    landDisputes: '土地争议解决',
    conveyancing: '专业产权转让',
    countyNationalLaw: '县和国家法',
    governmentDescription: '专业的公法服务，包括行政法、政府关系、公共政策咨询和监管合规。',
    administrativeLaw: '行政法',
    governmentRelations: '政府关系',
    publicPolicy: '公共政策咨询',
    regulatoryCompliance: '监管合规',
    
    // Contact Section
    contactTitle: '联系我们',
    contactSubtitle: '准备讨论您的法律需求？今天联系我们进行专业咨询，让我们帮助您解决法律挑战。',
    getInTouch: '联系信息',
    contactDescription: '我们在这里帮助您以专业的专业知识和个性化的关注解决法律挑战。联系我们获取全面的法律建议和代理。',
    phone: '电话',
    email: '邮箱',
    location: '位置',
    locationValue: '肯尼亚内罗毕',
    officeHours: '办公时间',
    mondayFriday: '周一至周五',
    saturday: '周六',
    sunday: '周日',
    
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
    excellenceTitle: 'Exzellenz in der Rechtspraxis',
    excellenceDescription1: 'Mit jahrelanger Erfahrung im Rechtsbereich hat sich Anna & Co Advocates als vertrauensvoller Name bei der Bereitstellung umfassender Rechtsdienstleistungen etabliert. Unser Team qualifizierter Anwälte ist verpflichtet, personalisierte Lösungen zu liefern, die den einzigartigen Bedürfnissen unserer Kunden entsprechen.',
    excellenceDescription2: 'Wir sind stolz darauf, die höchsten Standards professioneller Integrität aufrechtzuerhalten und dabei dauerhafte Beziehungen zu unseren Kunden aufzubauen, die auf Vertrauen, Transparenz und Ergebnissen basieren.',
    foundationTitle: 'Unser Fundament',
    professionalExcellence: 'Professionelle Exzellenz',
    integrity: 'Integrität',
    clientFocus: 'Kundenfokus',
    innovation: 'Innovation',
    resultsDriven: 'Ergebnisorientiert',
    credentialsTitle: 'Berufliche Qualifikationen',
    llbDegree: 'LLB (Bachelor der Rechtswissenschaften)',
    legalEducation: 'Rechtliche Bildung und Ausbildung',
    graduated: 'Mit Auszeichnung Absolviert',
    admittedBar: 'Zur Anwaltschaft Zugelassen',
    licensedPractitioner: 'Lizenzierter Rechtspraktiker',
    kenyaSchoolLaw: 'Rechtsschule Kenia',
    verification: 'Qualifikationsverifizierung',
    verifyCredentials: 'Unsere Qualifikationen Verifizieren',
    approachTitle: 'Unser Ansatz',
    approach1: 'Umfassende Fallanalyse und strategische Planung',
    approach2: 'Klare Kommunikation während des gesamten Rechtsprozesses',
    approach3: 'Zeitnahe und effiziente Lösung rechtlicher Angelegenheiten',
    approach4: 'Persönliche Aufmerksamkeit für die einzigartige Situation jedes Kunden',
    managingDirector: 'Geschäftsführerin',
    managingDirectorQuote: 'Bei Anna & Co Advocates glauben wir, dass jeder Kunde engagierte Vertretung und persönliche Aufmerksamkeit verdient. Unser Engagement für Exzellenz treibt uns an, die bestmöglichen Ergebnisse für die zu erzielen, denen wir dienen.',
    
    // Services Section
    servicesTitle: 'Unsere Rechtsdienstleistungen',
    servicesSubtitle: 'Umfassende Rechtslösungen, maßgeschneidert für Ihre spezifischen Bedürfnisse mit professioneller Expertise und unerschütterlichem Engagement für Ihren Erfolg.',
    keyServices: 'Hauptdienstleistungen:',
    specializedConsultation: 'Benötigen Sie spezialisierte Rechtsberatung? Wir bieten personalisierte Beratung für komplexe Rechtsangelegenheiten.',
    discussLegalNeeds: 'Besprechen Sie Ihre Rechtlichen Bedürfnisse',
    corporateLaw: 'Unternehmensrecht',
    corporateDescription: 'Umfassende Unternehmensrechtsdienstleistungen einschließlich Gründung, Compliance, Fusionen & Übernahmen und Unternehmensführung, um Ihrem Unternehmen zum Erfolg zu verhelfen.',
    businessRegistration: 'Unternehmensregistrierung & Gründung',
    corporateGovernance: 'Beratung zur Unternehmensführung',
    complianceAdvisory: 'Regulatorische Compliance-Beratung',
    commercialContracts: 'Verwaltung Kommerzieller Verträge',
    contractLaw: 'Vertragsrecht',
    contractDescription: 'Experten-Dienstleistungen für Vertragserstellung, Überprüfung, Verhandlung und Streitbeilegung zum Schutz Ihrer Interessen und zur Sicherstellung günstiger Ergebnisse.',
    contractDrafting: 'Vertragserstellung & Überprüfung',
    agreementReview: 'Analyse Rechtlicher Vereinbarungen',
    negotiationSupport: 'Verhandlungsunterstützung',
    breachResolution: 'Lösung von Vertragsbrüchen',
    civilLitigation: 'Zivilprozess',
    litigationDescription: 'Professionelle Gerichtsvertretung in Zivilsachen, strategische Streitbeilegung und umfassende rechtliche Interessenvertretung zum Schutz Ihrer Rechte.',
    courtRepresentation: 'Gerichtsvertretung',
    caseStrategy: 'Entwicklung von Fallstrategien',
    settlementNegotiation: 'Vergleichsverhandlung',
    appealsProcess: 'Verwaltung des Berufungsverfahrens',
    familyLaw: 'Familienrecht',
    familyDescription: 'Mitfühlende rechtliche Unterstützung für Familienangelegenheiten einschließlich Scheidungsverfahren, Sorgerecht, Ehevermögen und Familienmediationsdienste.',
    divorceProceedings: 'Scheidungsverfahren',
    childCustody: 'Sorgerecht & Unterhalt für Kinder',
    matrimonialProperty: 'Aufteilung von Ehevermögen',
    familyMediation: 'Familienmediationsdienste',
    landPropertyLaw: 'Land- und Eigentumsrecht',
    propertyDescription: 'Vollständige Immobilienrechtsdienstleistungen einschließlich Transaktionen, Titelverifizierung, Landstreitbeilegung und professionelle Eigentumsübertragungsdienste.',
    propertyTransactions: 'Immobilientransaktionen',
    titleVerification: 'Titelverifizierung & Suche',
    landDisputes: 'Beilegung von Landstreitigkeiten',
    conveyancing: 'Professionelle Eigentumsübertragung',
    countyNationalLaw: 'Bezirks- und Bundesrecht',
    governmentDescription: 'Spezialisierte öffentliche Rechtsdienstleistungen einschließlich Verwaltungsrecht, Regierungsbeziehungen, Beratung zu öffentlichen Richtlinien und regulatorische Compliance.',
    administrativeLaw: 'Verwaltungsrecht',
    governmentRelations: 'Regierungsbeziehungen',
    publicPolicy: 'Beratung zu Öffentlichen Richtlinien',
    regulatoryCompliance: 'Regulatorische Compliance',
    
    // Contact Section
    contactTitle: 'Kontaktieren Sie Uns',
    contactSubtitle: 'Bereit, Ihre rechtlichen Bedürfnisse zu besprechen? Kontaktieren Sie uns heute für eine professionelle Beratung und lassen Sie uns Ihnen bei der Bewältigung Ihrer rechtlichen Herausforderungen helfen.',
    getInTouch: 'Kontaktinformationen',
    contactDescription: 'Wir sind hier, um Ihnen bei der Bewältigung Ihrer rechtlichen Herausforderungen mit professioneller Expertise und persönlicher Aufmerksamkeit zu helfen. Wenden Sie sich an uns für umfassende Rechtsberatung und Vertretung.',
    phone: 'Telefon',
    email: 'E-Mail',
    location: 'Standort',
    locationValue: 'Nairobi, Kenia',
    officeHours: 'Bürozeiten',
    mondayFriday: 'Montag - Freitag',
    saturday: 'Samstag',
    sunday: 'Sonntag',
    
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
