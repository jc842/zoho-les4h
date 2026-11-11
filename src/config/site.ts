/**
 * Configuration centrale du site zoho.les4h.fr
 * Point unique de vérité : coordonnées, réseaux, identité, scripts tiers.
 */
export const SITE = {
  url: "https://zoho.les4h.fr",
  name: "LES4H · Solutions Zoho Antilles",
  title: "Solutions Zoho en Martinique, Guadeloupe & Caraïbes | LES4H Agent Certifié",
  description: "Intégrateur et Agent Zoho depuis 12 ans aux Antilles (Guadeloupe, Martinique, Guyane, Saint-Martin). Déploiement Zoho One, Zoho CRM, formation et accompagnement local de proximité sans décalage horaire.",
  author: "Jean-Christophe Hutin",
  experienceYears: 12,
  twitter: "@les4hcdo",
  location: "Guadeloupe · Martinique · Saint-Martin · Guyane",
  timezone: "America/Guadeloupe", // UTC-4
} as const;

/** Numéro unique utilisé partout (WhatsApp + tel:). */
export const CONTACT = {
  phoneE164: "+33184162275",
  phoneDisplay: "+33 1 84 16 22 75",
  whatsappNumber: "33184162275",
  email: "contact@les4h.fr",
  bookingUrl: "https://les4h.zohobookings.eu/#/customer/audit-zoho",
} as const;

/** Zoho SalesIQ — widget de prise de RDV / chat. */
export const SALESIQ = {
  enabled: true,
  src: "https://salesiq.zohopublic.eu/widget?wc=siq4959208bdfcf113ebbd8fcd864644da982fde1559de1434d84a8dac50d66314a",
} as const;

/** Écosystème des sites du groupe LES4H */
export const SUBSITES = [
  {
    href: "https://les4h.fr",
    label: "LES4H · Conseil Digital & CDO",
  },
  {
    href: "https://cyber.les4h.fr",
    label: "Cybersécurité pour PME",
  },
  {
    href: "https://presence.les4h.fr",
    label: "Présence Web en 4H",
  },
  {
    href: "https://bootik.les4h.fr",
    label: "Boutique en ligne clé en main",
  },
  {
    href: "https://ia.les4h.fr",
    label: "Formation IA pour dirigeants",
  },
  {
    href: "https://invest.les4h.fr",
    label: "Actifs digitaux",
  },
  {
    href: "https://vrms.les4h.fr",
    label: "Gestion location saisonnière",
  },
] as const;

export const SOCIAL = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/les4hcdo" },
  { name: "Facebook", href: "https://www.facebook.com/les4hcdo" },
  { name: "X / Twitter", href: "https://x.com/les4hcdo" },
  { name: "YouTube", href: "https://www.youtube.com/@les4hcdo" },
] as const;

/** Entité légale */
export const LEGAL = {
  raisonSociale: "Jean-Christophe Hutin — LES4H",
  formeJuridique: "Entrepreneur individuel",
  siret: "403 218 704 00027",
  ville: "Sainte-Rose",
  codePostal: "97115",
  pays: "France (Guadeloupe)",
} as const;

/** Lien WhatsApp pré-rempli pour Zoho */
export function whatsappLink(subject: string = "Demande d'informations Zoho"): string {
  const text = `Bonjour Jean-Christophe, je vous contacte depuis zoho.les4h.fr au sujet de : ${subject}.`;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
