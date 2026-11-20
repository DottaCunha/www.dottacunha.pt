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
    "contactPage.email": "Email",
    "contactPage.phone": "Phone",
    "contactPage.phoneOptional": "(optional)",
    "contactPage.subject": "Subject",
    "contactPage.selectTopic": "Select a topic...",
    "contactPage.topicBuying": "I'm interested in buying",
    "contactPage.topicInvesting": "Investment opportunity",
    "contactPage.topicPartnership": "Development partnership",
    "contactPage.topicGeneral": "General inquiry",
    "contactPage.message": "Message",
    "contactPage.submit": "Send message",

    // Footer
    "footer.description": "Homes for better living.",
    "footer.startConversation": "Get in Touch",
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
    "unitDetail.elevation": "Front of the building, with this apartment's floors highlighted",
    "unitDetail.areasNote":
      "Areas are approximate and for information only. Furniture is illustrative, follows the interior design project and is not included.",
    "unitDetail.others": "Other units",
    "unitDetail.projectLink": "Location",
    "projectType.Villa": "Villa",
    "projectType.Commercial": "Commercial",
    "projectDetail.typologies": "Typologies",
    "projectDetail.completion": "Completion",
    "projectDetail.brochure": "View brochure",
    "projectDetail.brochureShort": "Brochure",
    "projectDetail.brochureVerb": "View",
    "unitDetail.grossArea": "Gross built area",
    "unitDetail.areas": "Areas",
    "unitDetail.details": "Details",
    "unitDetail.finishes": "Finishes",
    "unitDetail.finishesBody":
      "The kitchen and the bathrooms are different in each unit. Floors, ceilings, window frames and wardrobes are the same throughout the building.",
    "unitDetail.finishesLink": "Project finishes",
    "unitDetail.grossAreaShort": "Gross area",
    "carousel.previous": "Previous photo",
    "carousel.next": "Next photo",
    "lightbox.open": "Enlarge",
    "lightbox.close": "Close",
    "lightbox.previous": "Previous",
    "lightbox.next": "Next",

    // Project inquiry form
    "inquiry.label": "Send a message",
    "inquiry.heading": "More information",
    "inquiry.body":
      "Leave us your contact details and we'll get back to you as soon as possible.",
    "inquiry.name": "Name",
    "inquiry.email": "Email",
    "inquiry.phone": "Phone",
    "inquiry.optional": "(optional)",
    "inquiry.unit": "Unit of interest",
    "inquiry.message": "Message",
    "inquiry.submit": "Send message",
    "inquiry.success": "We have received your message. Thank you.",

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
    "nav.cta": "Fale connosco",

    // Projects (shared keys used across pages)
    "projects.units": "unidades",
    "projects.viewAll": "Ver todos os projetos",

    // Project statuses
    "status.completed": "Concluído",
    "status.underConstruction": "Em construção",
    "status.comingSoon": "Brevemente",

    // CTA (shared keys used on about + projects pages)
    "cta.primary": "Fale connosco",
    "cta.secondary": "Ver projetos",

    // Projects page
    "projectsPage.inquire": "Ver projeto",
    "projectsPage.area": "Área",
    "projectsPage.year": "Ano",
    "projectsPage.ctaHeading": "Interessado?",
    "projectsPage.ctaDesc":
      "Contacte-nos para saber sobre disponibilidade, preços e projetos futuros.",

    // Project detail page
    "projectDetail.back": "Todos os projetos",
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
    "unitDetail.bathrooms": "Casas de banho",
    "unitDetail.floor": "Piso",
    "unitDetail.orientation": "Orientação",
    "unitDetail.features": "Destaques",
    "unitDetail.floorPlan": "Planta",
    "unitDetail.gallery": "Galeria",
    "unitDetail.inquire": "Pedir informações",

    // Contact page
    "contactPage.label": "Fale connosco",
    "contactPage.heading": "Contacto",
    "contactPage.email": "Email",
    "contactPage.phone": "Telefone",
    "contactPage.phoneOptional": "(opcional)",
    "contactPage.subject": "Assunto",
    "contactPage.selectTopic": "Selecione um tópico...",
    "contactPage.topicBuying": "Estou interessado em comprar",
    "contactPage.topicInvesting": "Oportunidade de investimento",
    "contactPage.topicPartnership": "Parceria num projeto",
    "contactPage.topicGeneral": "Outro assunto",
    "contactPage.message": "Mensagem",
    "contactPage.submit": "Enviar mensagem",

    // Footer
    "footer.description": "Homes for better living.",
    "footer.startConversation": "Fale connosco",
    "footer.navigation": "Navegação",
    "footer.services": "Serviços",
    "footer.contact": "Contacto",
    "footer.social": "Redes sociais",
    "footer.development": "Promoção",
    "footer.architecture": "Arquitetura",
    "footer.projectManagement": "Gestão de projeto",
    "footer.investmentAdvisory": "Consultoria de investimento",
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
    "unitDetail.elevation": "Alçado frontal, com os pisos deste apartamento assinalados",
    "unitDetail.areasNote":
      "As áreas são aproximadas e meramente indicativas. O mobiliário é ilustrativo, segue o projeto de interiores e não está incluído.",
    "unitDetail.others": "Outras unidades",
    "unitDetail.projectLink": "Localização",
    "projectType.Villa": "Moradia",
    "projectType.Commercial": "Comercial",
    "projectDetail.typologies": "Tipologias",
    "projectDetail.completion": "Conclusão",
    "projectDetail.brochure": "Ver brochura",
    "projectDetail.brochureShort": "Brochura",
    "projectDetail.brochureVerb": "Ver",
    "unitDetail.grossArea": "Área bruta de construção",
    "unitDetail.areas": "Áreas",
    "unitDetail.details": "Características",
    "unitDetail.finishes": "Acabamentos",
    "unitDetail.finishesBody":
      "A cozinha e as casas de banho são diferentes em cada unidade. Pavimentos, tectos, caixilharias e roupeiros são iguais em todo o edifício.",
    "unitDetail.finishesLink": "Acabamentos do projeto",
    "unitDetail.grossAreaShort": "Área bruta",
    "carousel.previous": "Fotografia anterior",
    "carousel.next": "Fotografia seguinte",
    "lightbox.open": "Ampliar",
    "lightbox.close": "Fechar",
    "lightbox.previous": "Anterior",
    "lightbox.next": "Seguinte",

    // Project inquiry form
    "inquiry.label": "Envie uma mensagem",
    "inquiry.heading": "Mais informações",
    "inquiry.body":
      "Deixe-nos o seu contacto e respondemos assim que possível.",
    "inquiry.name": "Nome",
    "inquiry.email": "Email",
    "inquiry.phone": "Telefone",
    "inquiry.optional": "(opcional)",
    "inquiry.unit": "Unidade de interesse",
    "inquiry.message": "Mensagem",
    "inquiry.submit": "Enviar mensagem",
    "inquiry.success": "Recebemos a sua mensagem. Obrigado.",

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
