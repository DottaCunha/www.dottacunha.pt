export const languages = {
  en: 'English',
  pt: 'Português',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';
export const supportedLangs = Object.keys(languages) as Lang[];

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in Touch',

    // Projects (shared keys used across pages)
    'projects.units': 'units',

    // Project statuses
    'status.completed': 'Completed',
    'status.underConstruction': 'Under Construction',
    'status.comingSoon': 'Coming Soon',

    // CTA (shared keys used on about + projects pages)
    'cta.primary': 'Get in Touch',
    'cta.secondary': 'Browse Projects',

    // Projects page
    'projectsPage.inquire': 'Inquire',
    'projectsPage.area': 'Area',
    'projectsPage.year': 'Year',
    'projectsPage.ctaHeading': 'Interested?',
    'projectsPage.ctaDesc': 'Contact us to learn about availability, pricing, and upcoming projects.',

    // Project detail page
    'projectDetail.back': 'All Projects',
    'projectDetail.units': 'Available Units',
    'projectDetail.typology': 'Typology',
    'projectDetail.area': 'Area',
    'projectDetail.price': 'Price',
    'projectDetail.status': 'Status',
    'projectDetail.totalUnits': 'Units',
    'projectDetail.inquire': 'Inquire About This Project',
    'projectDetail.noUnits': 'Unit information coming soon.',
    'unitStatus.available': 'Available',
    'unitStatus.reserved': 'Reserved',
    'unitStatus.sold': 'Sold',

    // Unit detail page
    'unitDetail.back': 'Back to Project',
    'unitDetail.bedrooms': 'Bedrooms',
    'unitDetail.bathrooms': 'Bathrooms',
    'unitDetail.floor': 'Floor',
    'unitDetail.orientation': 'Orientation',
    'unitDetail.features': 'Features',
    'unitDetail.floorPlan': 'Floor Plan',
    'unitDetail.gallery': 'Gallery',
    'unitDetail.inquire': 'Inquire About This Unit',

    // Contact page
    'contactPage.label': 'Get in Touch',
    'contactPage.heading': 'Contact',
    'contactPage.formTitle': 'Send a Message',
    'contactPage.formSubtitle': "We'll get back to you within 24 hours.",
    'contactPage.firstName': 'First Name',
    'contactPage.lastName': 'Last Name',
    'contactPage.email': 'Email',
    'contactPage.phone': 'Phone',
    'contactPage.phoneOptional': '(optional)',
    'contactPage.subject': 'Subject',
    'contactPage.selectTopic': 'Select a topic...',
    'contactPage.topicBuying': "I'm interested in buying",
    'contactPage.topicInvesting': 'Investment opportunity',
    'contactPage.topicPartnership': 'Development partnership',
    'contactPage.topicCareers': 'Careers',
    'contactPage.topicGeneral': 'General inquiry',
    'contactPage.message': 'Message',
    'contactPage.messagePlaceholder': 'Tell us about your project...',
    'contactPage.submit': 'Send Message',
    'contactPage.officeLabel': 'Office',
    'contactPage.address': 'Address',
    'contactPage.hoursLabel': 'Hours',
    'contactPage.monFri': 'Monday – Friday',
    'contactPage.sat': 'Saturday',
    'contactPage.sun': 'Sunday',
    'contactPage.byAppointment': 'By appointment',
    'contactPage.closed': 'Closed',
    'contactPage.followLabel': 'Follow',
    'contactPage.mapPlaceholder': 'Map — Add Google Maps embed here',

    // Footer
    'footer.description': 'Building exceptional residential spaces in Portugal. From concept to completion.',
    'footer.startConversation': 'Start a Conversation',
    'footer.navigation': 'Navigation',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.social': 'Social',
    'footer.development': 'Development',
    'footer.architecture': 'Architecture',
    'footer.projectManagement': 'Project Management',
    'footer.investmentAdvisory': 'Investment Advisory',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },

  pt: {
    // Nav
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.services': 'Serviços',
    'nav.contact': 'Contacto',
    'nav.cta': 'Fale Connosco',

    // Projects (shared keys used across pages)
    'projects.units': 'unidades',

    // Project statuses
    'status.completed': 'Concluído',
    'status.underConstruction': 'Em Construção',
    'status.comingSoon': 'Brevemente',

    // CTA (shared keys used on about + projects pages)
    'cta.primary': 'Fale Connosco',
    'cta.secondary': 'Ver Projetos',

    // Projects page
    'projectsPage.inquire': 'Saber Mais',
    'projectsPage.area': 'Área',
    'projectsPage.year': 'Ano',
    'projectsPage.ctaHeading': 'Interessado?',
    'projectsPage.ctaDesc': 'Contacte-nos para saber sobre disponibilidade, preços e projetos futuros.',

    // Project detail page
    'projectDetail.back': 'Todos os Projetos',
    'projectDetail.units': 'Frações Disponíveis',
    'projectDetail.typology': 'Tipologia',
    'projectDetail.area': 'Área',
    'projectDetail.price': 'Preço',
    'projectDetail.status': 'Estado',
    'projectDetail.totalUnits': 'Frações',
    'projectDetail.inquire': 'Saber Mais Sobre Este Projeto',
    'projectDetail.noUnits': 'Informação de frações brevemente disponível.',
    'unitStatus.available': 'Disponível',
    'unitStatus.reserved': 'Reservado',
    'unitStatus.sold': 'Vendido',

    // Unit detail page
    'unitDetail.back': 'Voltar ao Projeto',
    'unitDetail.bedrooms': 'Quartos',
    'unitDetail.bathrooms': 'Casas de Banho',
    'unitDetail.floor': 'Andar',
    'unitDetail.orientation': 'Orientação',
    'unitDetail.features': 'Características',
    'unitDetail.floorPlan': 'Planta',
    'unitDetail.gallery': 'Galeria',
    'unitDetail.inquire': 'Saber Mais Sobre Esta Fração',

    // Contact page
    'contactPage.label': 'Fale Connosco',
    'contactPage.heading': 'Contacto',
    'contactPage.formTitle': 'Envie uma Mensagem',
    'contactPage.formSubtitle': 'Respondemos em 24 horas.',
    'contactPage.firstName': 'Primeiro Nome',
    'contactPage.lastName': 'Apelido',
    'contactPage.email': 'Email',
    'contactPage.phone': 'Telefone',
    'contactPage.phoneOptional': '(opcional)',
    'contactPage.subject': 'Assunto',
    'contactPage.selectTopic': 'Selecione um tópico...',
    'contactPage.topicBuying': 'Estou interessado em comprar',
    'contactPage.topicInvesting': 'Oportunidade de investimento',
    'contactPage.topicPartnership': 'Parceria de desenvolvimento',
    'contactPage.topicCareers': 'Carreiras',
    'contactPage.topicGeneral': 'Inquérito geral',
    'contactPage.message': 'Mensagem',
    'contactPage.messagePlaceholder': 'Fale-nos do seu projeto...',
    'contactPage.submit': 'Enviar Mensagem',
    'contactPage.officeLabel': 'Escritório',
    'contactPage.address': 'Morada',
    'contactPage.hoursLabel': 'Horário',
    'contactPage.monFri': 'Segunda – Sexta',
    'contactPage.sat': 'Sábado',
    'contactPage.sun': 'Domingo',
    'contactPage.byAppointment': 'Com marcação',
    'contactPage.closed': 'Encerrado',
    'contactPage.followLabel': 'Siga-nos',
    'contactPage.mapPlaceholder': 'Mapa — Adicione o Google Maps aqui',

    // Footer
    'footer.description': 'Construímos espaços residenciais excecionais em Portugal. Do conceito à conclusão.',
    'footer.startConversation': 'Iniciar Conversa',
    'footer.navigation': 'Navegação',
    'footer.services': 'Serviços',
    'footer.contact': 'Contacto',
    'footer.social': 'Redes Sociais',
    'footer.development': 'Promoção',
    'footer.architecture': 'Arquitetura',
    'footer.projectManagement': 'Gestão de Projeto',
    'footer.investmentAdvisory': 'Consultoria de Investimento',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
  },
};
