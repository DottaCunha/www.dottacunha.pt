export const languages = {
  en: "English",
  pt: "Português",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "pt";
export const supportedLangs = Object.keys(languages) as Lang[];

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.cta": "Get in Touch",

    // Projects (shared keys used across pages)
    "projects.units": "units",
    "projects.viewAll": "View all projects",

    // Project statuses
    "status.completed": "Completed",
    "status.underConstruction": "Under Construction",
    "status.comingSoon": "Coming Soon",

    // CTA (shared keys used on about + projects pages)
    "cta.primary": "Get in Touch",
    "cta.secondary": "Browse Projects",

    // Projects page
    "projectsPage.inquire": "View project",
    "projectsPage.area": "Area",
    "projectsPage.year": "Year",
    "projectsPage.ctaHeading": "Interested?",
    "projectsPage.ctaDesc":
      "Contact us to learn about availability, pricing, and upcoming projects.",

    // Project detail page
    "projectDetail.back": "All Projects",
    "projectDetail.units": "Units",
    "projectDetail.typology": "Typology",
    "projectDetail.area": "Area",
    "projectDetail.price": "Price",
    "projectDetail.status": "Status",
    "projectDetail.totalUnits": "Units",
    "projectDetail.inquire": "Request information",
    "projectDetail.noUnits": "Unit information coming soon.",
    "unitStatus.available": "Available",
    "unitStatus.reserved": "Reserved",
    "unitStatus.sold": "Sold",

    // Unit detail page
    "unitDetail.back": "Back to the project",
    "unitDetail.bedrooms": "Bedrooms",
    "unitDetail.bathrooms": "Bathrooms",
    "unitDetail.floor": "Floor",
    "unitDetail.orientation": "Orientation",
    "unitDetail.features": "Highlights",
    "unitDetail.floorPlan": "Floor Plan",
    "unitDetail.gallery": "Gallery",
    "unitDetail.inquire": "Request information",

    // Contact page
    "contactPage.label": "Get in Touch",
    "contactPage.heading": "Contact",
    "contactPage.formTitle": "Send a Message",
    "contactPage.firstName": "First Name",
    "contactPage.lastName": "Last Name",
    "contactPage.email": "Email",
    "contactPage.phone": "Phone",
    "contactPage.phoneOptional": "(optional)",
    "contactPage.subject": "Subject",
    "contactPage.selectTopic": "Select a topic...",
    "contactPage.topicBuying": "I'm interested in buying",
    "contactPage.topicInvesting": "Investment opportunity",
    "contactPage.topicPartnership": "Development partnership",
    "contactPage.topicCareers": "Careers",
    "contactPage.topicGeneral": "General inquiry",
    "contactPage.message": "Message",
    "contactPage.messagePlaceholder": "Tell us about your project...",
    "contactPage.submit": "Send Message",
    "contactPage.officeLabel": "Office",
    "contactPage.address": "Address",
    "contactPage.hoursLabel": "Hours",
    "contactPage.monFri": "Monday – Friday",
    "contactPage.sat": "Saturday",
    "contactPage.sun": "Sunday",
    "contactPage.byAppointment": "By appointment",
    "contactPage.closed": "Closed",
    "contactPage.followLabel": "Follow",

    // Footer
    "footer.description": "Homes for better living.",
    "footer.startConversation": "Start a Conversation",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.social": "Social",
    "footer.development": "Development",
    "footer.architecture": "Architecture",
    "footer.projectManagement": "Project Management",
    "footer.investmentAdvisory": "Investment Advisory",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie preferences",

    // Projects: extra labels
    "site.description":
      "Dotta & Cunha: residential real estate development in Portugal.",
    "map.recenter": "Recentre the map",
    "projectDetail.disclaimer":
      "Non-binding information, subject to change. Illustrative images and plans.",
    "travel.walk": "on foot",
    "travel.transit": "by public transport",
    "travel.car": "by car",
    "projectType.Apartments": "Apartments",
    "unitDetail.apartment": "Unit",
    "unitDetail.energy": "Energy rating",
    "unitDetail.plansHeading": "Floor plan and areas",
    "unitDetail.areasNote":
      "Areas are approximate and for information only. Furniture is illustrative, follows the interior design project and is not included.",
    "unitDetail.others": "Other units",
    "unitDetail.projectLink": "Finishes and location",
    "projectType.Villa": "Villa",
    "projectType.Commercial": "Commercial",
    "projectDetail.typologies": "Typologies",
    "projectDetail.completion": "Completion",
    "projectDetail.brochure": "Download brochure",
    "unitDetail.grossArea": "Gross built area",
    "unitDetail.grossAreaShort": "Gross area",
    "carousel.previous": "Previous photo",
    "carousel.next": "Next photo",

    // Project inquiry form
    "inquiry.label": "More information",
    "inquiry.heading": "Contact",
    "inquiry.body":
      "Leave us your contact details and we'll get back to you soon.",
    "inquiry.name": "Name",
    "inquiry.email": "Email",
    "inquiry.phone": "Phone",
    "inquiry.optional": "(optional)",
    "inquiry.unit": "Unit of interest",
    "inquiry.message": "Message",
    "inquiry.submit": "Send request",
    "inquiry.success": "We have received your request. Thank you.",

    // Forms
    "form.privacyNote":
      "We use your details only to respond to your inquiry. See our",

    // Cookie consent banner
    "cookies.title": "Cookies",
    "cookies.text":
      "We use cookies to understand how the site is used and whether our ads work. We only activate them with your permission.",
    "cookies.more": "Privacy Policy",
    "cookies.accept": "Accept all",
    "cookies.decline": "Decline all",
    "cookies.customize": "Customize",
    "cookies.save": "Save choice",
    "cookies.analytics": "Statistics",
    "cookies.analyticsDesc":
      "Pages viewed and where visits come from (Google Analytics).",
    "cookies.marketing": "Advertising",
    "cookies.marketingDesc":
      "Results of our ads on Facebook and Instagram (Meta).",
  },

  pt: {
    // Nav
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.services": "Serviços",
    "nav.contact": "Contacto",
    "nav.cta": "Fale Connosco",

    // Projects (shared keys used across pages)
    "projects.units": "unidades",
    "projects.viewAll": "Ver todos os projetos",

    // Project statuses
    "status.completed": "Concluído",
    "status.underConstruction": "Em Construção",
    "status.comingSoon": "Brevemente",

    // CTA (shared keys used on about + projects pages)
    "cta.primary": "Fale Connosco",
    "cta.secondary": "Ver Projetos",

    // Projects page
    "projectsPage.inquire": "Ver projeto",
    "projectsPage.area": "Área",
    "projectsPage.year": "Ano",
    "projectsPage.ctaHeading": "Interessado?",
    "projectsPage.ctaDesc":
      "Contacte-nos para saber sobre disponibilidade, preços e projetos futuros.",

    // Project detail page
    "projectDetail.back": "Todos os Projetos",
    "projectDetail.units": "Unidades",
    "projectDetail.typology": "Tipologia",
    "projectDetail.area": "Área",
    "projectDetail.price": "Preço",
    "projectDetail.status": "Estado",
    "projectDetail.totalUnits": "Unidades",
    "projectDetail.inquire": "Pedir informações",
    "projectDetail.noUnits": "Informação de unidades brevemente disponível.",
    "unitStatus.available": "Disponível",
    "unitStatus.reserved": "Reservado",
    "unitStatus.sold": "Vendido",

    // Unit detail page
    "unitDetail.back": "Voltar ao projeto",
    "unitDetail.bedrooms": "Quartos",
    "unitDetail.bathrooms": "Casas de Banho",
    "unitDetail.floor": "Piso",
    "unitDetail.orientation": "Orientação",
    "unitDetail.features": "Destaques",
    "unitDetail.floorPlan": "Planta",
    "unitDetail.gallery": "Galeria",
    "unitDetail.inquire": "Pedir informações",

    // Contact page
    "contactPage.label": "Fale Connosco",
    "contactPage.heading": "Contacto",
    "contactPage.formTitle": "Envie uma Mensagem",
    "contactPage.firstName": "Primeiro Nome",
    "contactPage.lastName": "Apelido",
    "contactPage.email": "Email",
    "contactPage.phone": "Telefone",
    "contactPage.phoneOptional": "(opcional)",
    "contactPage.subject": "Assunto",
    "contactPage.selectTopic": "Selecione um tópico...",
    "contactPage.topicBuying": "Estou interessado em comprar",
    "contactPage.topicInvesting": "Oportunidade de investimento",
    "contactPage.topicPartnership": "Parceria de desenvolvimento",
    "contactPage.topicCareers": "Carreiras",
    "contactPage.topicGeneral": "Inquérito geral",
    "contactPage.message": "Mensagem",
    "contactPage.messagePlaceholder": "Fale-nos do seu projeto...",
    "contactPage.submit": "Enviar Mensagem",
    "contactPage.officeLabel": "Escritório",
    "contactPage.address": "Morada",
    "contactPage.hoursLabel": "Horário",
    "contactPage.monFri": "Segunda – Sexta",
    "contactPage.sat": "Sábado",
    "contactPage.sun": "Domingo",
    "contactPage.byAppointment": "Com marcação",
    "contactPage.closed": "Encerrado",
    "contactPage.followLabel": "Siga-nos",

    // Footer
    "footer.description": "Homes for better living.",
    "footer.startConversation": "Iniciar Conversa",
    "footer.navigation": "Navegação",
    "footer.services": "Serviços",
    "footer.contact": "Contacto",
    "footer.social": "Redes Sociais",
    "footer.development": "Promoção",
    "footer.architecture": "Arquitetura",
    "footer.projectManagement": "Gestão de Projeto",
    "footer.investmentAdvisory": "Consultoria de Investimento",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
    "footer.cookies": "Preferências de cookies",

    // Projects: extra labels
    "site.description":
      "Dotta & Cunha: promoção imobiliária residencial em Portugal.",
    "map.recenter": "Recentrar o mapa",
    "projectDetail.disclaimer":
      "Informação não vinculativa, sujeita a alterações. Imagens e plantas ilustrativas.",
    "travel.walk": "a pé",
    "travel.transit": "de transportes",
    "travel.car": "de carro",
    "projectType.Apartments": "Apartamentos",
    "unitDetail.apartment": "Apartamento",
    "unitDetail.energy": "Classe energética",
    "unitDetail.plansHeading": "Planta e áreas",
    "unitDetail.areasNote":
      "As áreas são aproximadas e meramente indicativas. O mobiliário é ilustrativo, segue o projeto de interiores e não está incluído.",
    "unitDetail.others": "Outras unidades",
    "unitDetail.projectLink": "Acabamentos e localização",
    "projectType.Villa": "Moradia",
    "projectType.Commercial": "Comercial",
    "projectDetail.typologies": "Tipologias",
    "projectDetail.completion": "Conclusão",
    "projectDetail.brochure": "Descarregar brochura",
    "unitDetail.grossArea": "Área bruta de construção",
    "unitDetail.grossAreaShort": "Área bruta",
    "carousel.previous": "Fotografia anterior",
    "carousel.next": "Fotografia seguinte",

    // Project inquiry form
    "inquiry.label": "Mais informações",
    "inquiry.heading": "Contacto",
    "inquiry.body":
      "Deixe-nos o seu contacto e respondemos em breve.",
    "inquiry.name": "Nome",
    "inquiry.email": "Email",
    "inquiry.phone": "Telefone",
    "inquiry.optional": "(opcional)",
    "inquiry.unit": "Unidade de interesse",
    "inquiry.message": "Mensagem",
    "inquiry.submit": "Enviar pedido",
    "inquiry.success": "Recebemos o seu pedido. Obrigado.",

    // Forms
    "form.privacyNote":
      "Utilizamos os seus dados apenas para responder ao seu pedido. Consulte a nossa",

    // Cookie consent banner
    "cookies.title": "Cookies",
    "cookies.text":
      "Usamos cookies para perceber como o site é utilizado e se os nossos anúncios funcionam. Só os ativamos com a sua autorização.",
    "cookies.more": "Política de Privacidade",
    "cookies.accept": "Aceitar todos",
    "cookies.decline": "Recusar todos",
    "cookies.customize": "Personalizar",
    "cookies.save": "Guardar escolha",
    "cookies.analytics": "Estatísticas",
    "cookies.analyticsDesc":
      "Páginas vistas e origem das visitas (Google Analytics).",
    "cookies.marketing": "Publicidade",
    "cookies.marketingDesc":
      "Resultados dos nossos anúncios no Facebook e Instagram (Meta).",
  },
};
