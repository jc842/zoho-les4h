export interface AudienceSegment {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  painPoints: {
    problem: string;
    reality: string;
  }[];
  zohoSolution: {
    headline: string;
    description: string;
    recommendedApps: string[];
    outcomes: string[];
  };
  localContext: string;
  caseStudyExample: {
    clientType: string;
    territory: string;
    before: string;
    after: string;
    metric: string;
  };
}

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: "retail-distribution",
    slug: "commerces-import-export-distribution",
    title: "Commerces, Grossistes & Import-Export",
    subtitle: "Maîtrisez vos approvisionnements maritimes, vos stocks multi-dépôts et vos marges réelles",
    badge: "Distribution & Retail",
    icon: "shopping-bag",
    painPoints: [
      {
        problem: "Délais de fret et rupture de stock",
        reality: "Avec 2 à 4 semaines de transit maritime depuis l'Hexagone, une mauvaise visibilité sur les stocks tampon entraîne des ruptures coûteuses ou du sur-stockage."
      },
      {
        problem: "Calcul complexe des coûts de revient",
        reality: "Intégrer le fret maritime, l'assurance, l'Octroi de mer et les taxes portuaires dans les prix de vente est un calvaire sans outil automatisé."
      },
      {
        problem: "Déconnexion entre magasins, entrepôt et site web",
        reality: "Les commandes e-commerce ne se décomptent pas en temps réel des stocks magasin, créant des litiges et des erreurs de livraison."
      }
    ],
    zohoSolution: {
      headline: "Zoho Inventory + Zoho Books + Zoho CRM",
      description: "Un écosystème commercial unifié pour piloter les achats métropole/USA, le suivi des conteneurs, les stocks multi-établissements (Guadeloupe, Martinique, Guyane) et la facturation directe.",
      recommendedApps: ["Zoho Inventory", "Zoho Books", "Zoho CRM", "Zoho Commerce"],
      outcomes: [
        "Suivi des commandes fournisseurs et prévisions de réapprovisionnement adaptées aux délais maritimes",
        "Calcul automatisé des coûts de revient intégrant fret et taxes d'importation",
        "Synchronisation en temps réel de vos stocks en boutique, entrepôt et boutique en ligne",
        "Facturation conforme avec gestion de la TVA locale (8.5%) et de l'Octroi de mer"
      ]
    },
    localContext: "Le commerce antillais ne fonctionne pas comme en métropole. L'insularité impose une gestion ultra-rigoureuse des flux physiques et financiers. Nos 12 ans d'expérience permettent de paramétrer vos règles d'import dès le premier jour.",
    caseStudyExample: {
      clientType: "Distributeur d'équipements nautiques et quincaillerie",
      territory: "Martinique & Guadeloupe",
      before: "3 logiciels incompatibles, calculs de marges sur tableurs manuels, 15 jours de décalage dans les inventaires.",
      after: "Zoho One déployé sur 12 postes : inventaire centralisé en temps réel, commandes fournisseurs automatisées, facturation mobile en magasin.",
      metric: "-65% de ruptures de stock en haute saison"
    }
  },
  {
    id: "services-consulting",
    slug: "services-conseil-professions-liberales",
    title: "Sociétés de Services, Consultants & Conseil",
    subtitle: "Structurez votre pipeline commercial, signez vos devis en ligne et automatisez votre facturation",
    badge: "Services & Tertiaire",
    icon: "briefcase",
    painPoints: [
      {
        problem: "Temps perdu sur les relances et la prospection",
        reality: "Les devis envoyés par e-mail sans relance structurée tombent dans l'oubli, causant une perte directe de chiffre d'affaires."
      },
      {
        problem: "Lenteur des signatures physiques de contrats",
        reality: "Faire signer un contrat entre Fort-de-France, Pointe-à-Pitre, Marigot ou Paris prend des jours voire des semaines avec le papier et les scans."
      },
      {
        problem: "Facturation des prestations et suivi du temps",
        reality: "Difficulté à facturer au temps réel passé sur chaque dossier client, retards de facturation et relances manuelles des impayés."
      }
    ],
    zohoSolution: {
      headline: "Zoho One Suite Ventes & Affaires",
      description: "Combinaison puissante de Zoho CRM, Zoho Sign, Zoho Books et Zoho Projects pour automatiser 80% des tâches administratives répétitives de votre cabinet ou agence.",
      recommendedApps: ["Zoho CRM", "Zoho Sign", "Zoho Books", "Zoho Projects", "Zoho Bookings"],
      outcomes: [
        "Prise de rendez-vous automatique via Zoho Bookings synchronisé avec votre agenda",
        "Génération de devis en 2 clics et signature électronique certifiée eIDAS sur smartphone",
        "Facturation récurrente et prélèvements SEPA automatisés pour vos contrats d'abonnement",
        "Suivi de la rentabilité de chaque mission et affectation des temps des consultants"
      ]
    },
    localContext: "Pour les prestataires antillais, la réactivité et la crédibilité numérique font toute la différence face aux concurrents nationaux ou régionaux. Un portail client moderne valorise immédiatement votre image.",
    caseStudyExample: {
      clientType: "Cabinet de conseil en ingénierie et formation",
      territory: "Guadeloupe & Saint-Martin",
      before: "Relances devis aléatoires, contrats signés sur papier scanné, 45 jours de délai moyen de paiement.",
      after: "Workflow automatisé : Devis Zoho CRM -> Signature Zoho Sign -> Facture d'acompte Zoho Books -> Rappel automatique. Délais divisés par 3.",
      metric: "+32% de taux de conversion des devis"
    }
  },
  {
    id: "tourism-hospitality",
    slug: "tourisme-hotellerie-location-saisonniere",
    title: "Tourisme, Hôtellerie & Location Saisonnière",
    subtitle: "Centralisez les voyageurs du monde entier, vos réservations et vos communications omnicanales",
    badge: "Tourisme & Hôtellerie",
    icon: "sun",
    painPoints: [
      {
        problem: "Éparpillement des canaux de réservation et messages",
        reality: "Gérer à la fois Airbnb, Booking, e-mails directs, WhatsApp et appels téléphoniques sur smartphone conduit inévitablement à des oublis."
      },
      {
        problem: "Gestion du décalage horaire avec les clients",
        reality: "Les voyageurs européens ou américains contactent votre établissement en dehors de vos heures de bureau aux Antilles, exigeant des réponses instantanées."
      },
      {
        problem: "Fidélisation et vente de services additionnels",
        reality: "Peu d'établissements exploitent la base de données de leurs anciens clients pour proposer des séjours récurrents ou des prestations partenaires (excursions, voitures)."
      }
    ],
    zohoSolution: {
      headline: "Zoho CRM + Zoho SalesIQ + Zoho Campaigns",
      description: "Une plateforme d'engagement client complète pour convertir les demandes directes, envoyer des parcours d'accueil automatisés et fidéliser votre clientèle touristique.",
      recommendedApps: ["Zoho CRM", "Zoho SalesIQ", "Zoho Campaigns", "Zoho Forms", "Zoho Desk"],
      outcomes: [
        "Chatbot intelligent sur votre site web qualifiant les demandes et répondant 24/7 en français et anglais",
        "Carnet d'accueil numérique et e-mails de pré-séjour envoyés automatiquement aux voyageurs",
        "Centralisation des demandes conciergerie, navettes et activités dans un portail de tickets unifié",
        "Campagnes d'e-mailing ciblées pour relancer les vacanciers aux périodes de réservation clé"
      ]
    },
    localContext: "Moteur économique des Antilles, le tourisme exige une expérience voyageur irréprochable. Avec nos solutions Zoho, vous reprenez le contrôle sur vos réservations directes et réduisez votre dépendance aux commissions des OTAs.",
    caseStudyExample: {
      clientType: "Gestionnaire de 25 villas de luxe et éco-lodges",
      territory: "Martinique & Saint-Barthélemy",
      before: "Messages WhatsApp éparpillés sur 3 téléphones différents, pas de suivi des demandes de séjour directes, commissions de plateformes élevées.",
      after: "Zoho CRM relié au site web et à WhatsApp Business : attribution automatique des demandes, fiches clients unifiées, relances ciblées hors saison.",
      metric: "+40% de réservations directes sans commission"
    }
  },
  {
    id: "construction-field-services",
    slug: "btp-artisans-entreprises-intervention",
    title: "BTP, Artisans & Entreprises d'Intervention",
    subtitle: "Chiffrez rapidement sur le terrain, signez sur place et suivez vos chantiers en temps réel",
    badge: "BTP & Terrain",
    icon: "tool",
    painPoints: [
      {
        problem: "Devis rédigés tard le soir après la journée de chantier",
        reality: "Fatigués après le terrain, les artisans tardent à envoyer les devis, ce qui fait souvent remporter le chantier au premier qui répond."
      },
      {
        problem: "Gestion des factures de situation et des acomptes",
        reality: "Dans le BTP aux Antilles, le suivi de trésorerie par acompte et par situation d'avancement est vital pour ne pas se mettre en danger financier."
      },
      {
        problem: "Coordination des équipes mobiles sans liaison bureau",
        reality: "Les fiches d'intervention papier se perdent, les photos de fin de chantier restent sur les téléphones personnels des ouvriers."
      }
    ],
    zohoSolution: {
      headline: "Zoho Mobile Suite : Devis terrain + Factures d'avancement",
      description: "Des outils 100% exploitables sur smartphone et tablette pour créer un devis devant le client, faire signer sur écran et planifier les interventions d'équipe.",
      recommendedApps: ["Zoho Books", "Zoho CRM", "Zoho Projects", "Zoho Sign", "Zoho Forms"],
      outcomes: [
        "Émission de devis professionnels directement sur tablette avec catalogue de prix articles et main-d'œuvre",
        "Signature électronique immédiate du bon de commande sur place par le client",
        "Émission des factures de situation d'avancement et suivi strict des règlements d'acomptes",
        "Formulaires de réception de chantier avec photos géolocalisées et signature contradictoire"
      ]
    },
    localContext: "Le secteur du BTP aux Antilles fait face à des contraintes fortes : humidité, intempéries, approvisionnement matériaux et délais de paiement. Avoir une gestion numérique rigoureuse sur smartphone protège votre trésorerie.",
    caseStudyExample: {
      clientType: "Entreprise générale de second œuvre et électricité (14 salariés)",
      territory: "Guadeloupe",
      before: "Devis sur calepin papier le week-end, retards de facturation d'acomptes, trésorerie constamment sous tension.",
      after: "Zoho Books sur tablette pour les conducteurs de travaux : devis validés sur le chantier, facturation d'acompte instantanée, relances automatiques.",
      metric: "Délai moyen d'encaissement d'acompte passé de 28 jours à 3 jours"
    }
  }
];

