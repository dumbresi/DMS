import { siteContact } from "./site-contact";

const siteUrl = siteContact.websiteUrl.replace(/\/$/, "");

export const siteSeo = {
  siteUrl,
  siteName: siteContact.company,
  title: "Dhira Medical Services | Biomedical & Healthcare Supply | Navi Mumbai",
  description:
    "Dhira Medical Services is a biomedical and healthcare supply company based in Navi Mumbai, Maharashtra, India. We provide medical equipment, biomedical engineering, hospital furniture, medical gas pipelines, consumables and turnkey healthcare solutions.",
  keywords: [
    "Dhira Medical Services",
    "biomedical services Navi Mumbai",
    "healthcare supply Maharashtra",
    "medical equipment India",
    "hospital furniture",
    "medical gas pipeline",
    "biomedical engineering",
    "turnkey hospital solutions",
  ].join(", "),
  locale: "en_IN",
  ogImage: `${siteUrl}/og-image.jpg`,
  address: {
    locality: "Navi Mumbai",
    region: "Maharashtra",
    country: "IN",
    countryName: "India",
  },
} as const;

/** Schema.org JSON-LD for Google / search engines (MedicalBusiness + WebSite). */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${siteSeo.siteUrl}/#organization`,
        name: siteContact.company,
        alternateName: "DMS",
        description: siteSeo.description,
        url: siteSeo.siteUrl,
        logo: `${siteSeo.siteUrl}/favicon.ico`,
        image: siteSeo.ogImage,
        email: siteContact.email,
        telephone: siteContact.phoneTel,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteSeo.address.locality,
          addressRegion: siteSeo.address.region,
          addressCountry: siteSeo.address.country,
        },
        areaServed: {
          "@type": "Country",
          name: siteSeo.address.countryName,
        },
        knowsAbout: [
          "Biomedical engineering",
          "Medical equipment supply",
          "Healthcare supply services",
          "Hospital furniture",
          "Medical gas pipelines",
          "Medical consumables",
          "Turnkey hospital solutions",
        ],
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": `${siteSeo.siteUrl}/#website`,
        url: siteSeo.siteUrl,
        name: siteContact.company,
        description: siteSeo.description,
        publisher: { "@id": `${siteSeo.siteUrl}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
}
