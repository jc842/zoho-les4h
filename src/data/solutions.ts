export interface ZohoApp {
  id: string;
  name: string;
  category: "sales" | "finance" | "marketing" | "operations" | "collaboration";
  tagline: string;
  description: string;
  antillesBenefit: string;
  replaces: string[];
  featured?: boolean;
}

export interface ZohoCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  apps: ZohoApp[];
}

export const ZOHO_ONE_DETAILS = {
  name: "Zoho One",
  badge: "Système d'exploitation d'entreprise",
  headline: "Le système d'exploitation complet pour les entreprises antillaises",
  subheadline: "45+ applications intégrées dans une seule suite. Une seule facture, des données unifiées, zéro friction logicielle.",
  keyBenefits: [
    {
      title: "1 seule suite, 45+ applications",
      desc: "CRM, facturation, comptabilité, gestion de stock, support client, RH et signature électronique connectés en temps réel.",
      icon: "layers"
    },
    {
      title: "Économies massives prouvées (-40% à -70%)",
      desc: "Remplacez l'empilement ruineux de SaaS (HubSpot, Slack, Asana, Zapier, PandaDoc, QuickBooks) par une licence globale avantageuse.",
      icon: "trending-down"
    },
    {
      title: "Adapté au contexte Antilles-Guyane",
      desc: "Prise en compte des taux de TVA locaux (8.5%, 2.1%, exonérations), de l'Octroi de mer dans les stocks, et gestion multi-sociétés.",
      icon: "map-pin"
    },
    {
      title: "Déploiement & support local UTC-4",
      desc: "Accompagnement par Jean-Christophe Hutin, agent Zoho depuis 12 ans. Vos réunions et votre support sans décalage horaire avec l'Hexagone.",
      icon: "clock"
    }
  ],
  pricingModels: [
    {
      name: "Tarif Tous les Employés",
      popular: true,
      pricePerMonth: "37 €",
      period: "par employé / mois (facturé annuellement)",
      desc: "Idéal pour équiper l'ensemble de vos collaborateurs d'une solution moderne et unifiée.",
      highlights: [
        "Accès complet aux 45+ applications professionnelles",
        "Toutes les fonctionnalités entreprise incluses",
        "Console d'administration unique et sécurisée",
        "Comptabilité & Facturation Zoho Books",
        "CRM Ventes illimité",
        "Applications mobiles iOS et Android pour vos équipes terrain"
      ],
      ctaText: "Évaluer votre configuration"
    },
    {
      name: "Tarif Utilisateur Flexible",
      popular: false,
      pricePerMonth: "90 €",
      period: "par utilisateur flexible / mois (facturé annuellement)",
      desc: "Pour les entreprises qui souhaitent équiper uniquement certains postes clés (direction, commerciaux, comptables).",
      highlights: [
        "Aucune obligation d'équiper tous les salariés",
        "Accès à l'ensemble du catalogue Zoho One",
        "Gestion granulaire des droits d'accès",
        "Flexibilité pour ajuster selon vos recrutements",
        "Idéal pour tester ou pour des structures à fort effectif opérationnel"
      ],
      ctaText: "Demander conseil"
    }
  ],
  stats: [
    { label: "Années d'expérience Zoho", value: "12 ans" },
    { label: "Applications professionnelles unifiées", value: "45+" },
    { label: "Fuseau horaire d'intervention", value: "UTC-4 (Antilles)" },
    { label: "Économie moyenne sur les abonnements SaaS", value: "55%" }
  ]
};

export const ZOHO_CATEGORIES: ZohoCategory[] = [
  {
    id: "sales",
    name: "Ventes & Relation Client",
    tagline: "Pilotez votre cycle de vente de la prospection au closing",
    description: "Structurez vos opportunités commerciales, automatisez vos relances clients et améliorez le taux de conversion de vos équipes.",
    apps: [
      {
        id: "crm",
        name: "Zoho CRM",
        category: "sales",
        tagline: "Le CRM leader mondial pour booster vos ventes",
        description: "Gestion des prospects, pipeline commercial visuel, scoring prédictif Zia, relances automatisées et synchronisation e-mails / WhatsApp.",
        antillesBenefit: "Centralise tous vos clients de Guadeloupe, Martinique, St-Martin et Guyane avec historiques complets même en mobilité hors bureau.",
        replaces: ["Salesforce", "HubSpot CRM", "Pipedrive"],
        featured: true
      },
      {
        id: "bigin",
        name: "Bigin by Zoho CRM",
        category: "sales",
        tagline: "Le CRM simplifié axé sur les pipelines pour TPE",
        description: "Un CRM ultra-intuitif et rapide à prendre en main, pensé spécifiquement pour les très petites entreprises et indépendants.",
        antillesBenefit: "Mise en service en 48 heures sans complexité technique, parfait pour les artisans, prestataires et commerçants locaux.",
        replaces: ["Trello", "Fichiers Excel de suivi commercial"],
        featured: true
      },
      {
        id: "bookings",
        name: "Zoho Bookings",
        category: "sales",
        tagline: "Prise de rendez-vous en ligne synchronisée",
        description: "Permettez à vos clients et prospects de réserver directement un créneau dans votre agenda, avec paiement ou acompte optionnel.",
        antillesBenefit: "Gère nativement les décalages horaires (UTC-4 Caraïbes vs UTC+1 Hexagone / UTC-5 USA) sans aucun doublon.",
        replaces: ["Calendly", "Acuity Scheduling"]
      },
      {
        id: "salesiq",
        name: "Zoho SalesIQ",
        category: "sales",
        tagline: "Chat en direct, identification de visiteurs et chatbot IA",
        description: "Engagez les visiteurs de votre site web en direct, qualifiez les leads automatiquement 24/7 et transformez vos visites en rendez-vous.",
        antillesBenefit: "Répondez aux visiteurs locaux même en déplacement grâce à l'application mobile ultra-réactive.",
        replaces: ["Intercom", "Crisp", "Drift"]
      }
    ]
  },
  {
    id: "finance",
    name: "Finance, Facturation & Stocks",
    tagline: "Gérez votre trésorerie et vos obligations fiscales locales",
    description: "Conformité légale, facturation électronique, gestion rigoureuse des stocks et de l'approvisionnement maritime insulaire.",
    apps: [
      {
        id: "books",
        name: "Zoho Books",
        category: "finance",
        tagline: "Comptabilité et facturation certifiée en ligne",
        description: "Émission de devis et factures conformes, suivi des règlements clients, rapprochement bancaire automatique et relances des impayés.",
        antillesBenefit: "Paramétrage exact des taux de TVA Antilles (8.5%, 2.1%), exonérations Guyane/St-Martin et préparation des déclarations.",
        replaces: ["Sage 50", "EBP", "QuickBooks"],
        featured: true
      },
      {
        id: "inventory",
        name: "Zoho Inventory",
        category: "finance",
        tagline: "Gestion des stocks, commandes et réapprovisionnements",
        description: "Suivi multi-entrepôts, gestion des numéros de série/lots, synchronisation e-commerce et gestion des bons de livraison.",
        antillesBenefit: "Essentiel pour gérer les longs délais de fret maritime métropole-Antilles, les stocks tampons et les coûts de revient réels.",
        replaces: ["Gestion commerciale vieillissante", "Tableurs Excel instables"],
        featured: true
      },
      {
        id: "invoice",
        name: "Zoho Invoice",
        category: "finance",
        tagline: "Facturation 100% gratuite pour indépendants et TPE",
        description: "Solution simple et élégante de facturation, devis et gestion du temps passé, entièrement gratuite.",
        antillesBenefit: "Zéro coût de licence pour débuter immédiatement avec une image professionnelle impeccable.",
        replaces: ["Factures Word", "Excel"]
      },
      {
        id: "expense",
        name: "Zoho Expense",
        category: "finance",
        tagline: "Gestion automatisée des notes de frais et indemnités",
        description: "Numérisation des reçus par photo sur smartphone (OCR), respect des plafonds de frais et approbation en un clic.",
        antillesBenefit: "Idéal pour les équipes qui se déplacent entre îles ou sur les chantiers de Guadeloupe et Martinique.",
        replaces: ["Classeurs de reçus papier", "Expensify"]
      }
    ]
  },
  {
    id: "marketing",
    name: "Marketing & Communication",
    tagline: "Attirez de nouveaux clients et fidélisez votre base locale",
    description: "Campagnes e-mails, réseaux sociaux, formulaires web et analyse comportementale de vos prospects.",
    apps: [
      {
        id: "campaigns",
        name: "Zoho Campaigns",
        category: "marketing",
        tagline: "E-mail marketing et newsletters conformes RGPD",
        description: "Créez des campagnes d'e-mailing percutantes avec des modèles responsives, segmentation avancée et délivrabilité optimisée.",
        antillesBenefit: "Synchronisation native instantanée avec Zoho CRM pour cibler précisément vos clients par île, secteur ou historique.",
        replaces: ["Mailchimp", "Sendinblue / Brevo"]
      },
      {
        id: "social",
        name: "Zoho Social",
        category: "marketing",
        tagline: "Gestion et programmation de vos réseaux sociaux",
        description: "Planifiez vos publications sur Facebook, Instagram, LinkedIn, TikTok et X, suivez l'engagement et répondez aux messages privés.",
        antillesBenefit: "Programmation aux meilleurs horaires d'audience des Antilles (décalage de 5h/6h avec l'Hexagone pris en compte).",
        replaces: ["Buffer", "Hootsuite"]
      },
      {
        id: "forms",
        name: "Zoho Forms",
        category: "marketing",
        tagline: "Créateur de formulaires intelligents et réactifs",
        description: "Formulaires de contact, de devis, d'enquêtes ou d'inscription sans code avec logique conditionnelle avancée.",
        antillesBenefit: "Les prospects saisis alimentent directement le CRM sans aucune ressaisie manuelle ni perte de données.",
        replaces: ["Typeform", "Google Forms"]
      }
    ]
  },
  {
    id: "operations",
    name: "Opérations, Projets & Support",
    tagline: "Délivrez vos prestations dans les temps et fidélisez vos clients",
    description: "Coordination des chantiers et missions, support client par tickets omnicanaux et signature électronique légale.",
    apps: [
      {
        id: "projects",
        name: "Zoho Projects",
        category: "operations",
        tagline: "Gestion de projets, jalons, diagrammes de Gantt et temps",
        description: "Planifiez vos projets, assignez les tâches, suivez l'avancement en temps réel et analysez la rentabilité par mission.",
        antillesBenefit: "Parfait pour la gestion des chantiers BTP, des événements ou des missions de conseil réparties sur plusieurs îles.",
        replaces: ["Asana", "Monday.com", "Trello"]
      },
      {
        id: "desk",
        name: "Zoho Desk",
        category: "operations",
        tagline: "Service client omnicanal et gestion des tickets de support",
        description: "Centralisez les demandes clients reçues par e-mail, téléphone, chat et réseaux sociaux dans un portail de support unifié.",
        antillesBenefit: "Garantit qu'aucun client antillais ne reste sans réponse et mesure le temps de résolution de vos équipes.",
        replaces: ["Zendesk", "Freshdesk"]
      },
      {
        id: "sign",
        name: "Zoho Sign",
        category: "operations",
        tagline: "Signature électronique sécurisée conforme eIDAS",
        description: "Faites signer vos devis, contrats, baux ou ordres de mission en ligne avec valeur juridique probante et horodatage certifié.",
        antillesBenefit: "Élimine les allers-retours physiques entre la Guadeloupe, la Martinique, St-Martin ou l'Hexagone.",
        replaces: ["DocuSign", "Adobe Sign", "Yousign"],
        featured: true
      },
      {
        id: "cliq",
        name: "Zoho Cliq",
        category: "operations",
        tagline: "Messagerie d'équipe, visioconférence et canaux sécurisés",
        description: "Communiquez instantanément avec vos collaborateurs, créez des canaux par projet et lancez des appels audio/vidéo cryptés.",
        antillesBenefit: "Idéal pour le travail hybride et la coordination terrain / bureau sans coût supplémentaire par utilisateur.",
        replaces: ["Slack", "Microsoft Teams"]
      }
    ]
  }
];

