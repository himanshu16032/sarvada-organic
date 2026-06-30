export const SITE_URL = "https://sarvadaorganic.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const STORE_ID = `${SITE_URL}/#store`;
export const EMAIL = "hello@sarvadaorganic.com";
export const SOCIAL_LINKS = [
  "https://sarvadaorganic.shop",
  "https://www.instagram.com/sarvadaorganic",
  "https://www.facebook.com/sarvadaorganic",
  "https://www.youtube.com/@sarvadaorganic",
];

export const RETURN_POLICY_URL = `${SITE_URL}/returns-refunds`;
export const SHIPPING_POLICY_URL = `${SITE_URL}/shipping-policy`;
export const PRIVACY_POLICY_URL = `${SITE_URL}/privacy`;
export const TERMS_URL = `${SITE_URL}/terms`;
export const CORRECTIONS_POLICY_URL = `${SITE_URL}/corrections-policy`;
export const CONTACT_URL = `${SITE_URL}/contact`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Sarvada Organic",
    alternateName: ["Sarva Organic", "Sarvaorganic", "Sarvada"],
    legalName: "Sarvada Organic Pvt. Ltd.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.svg`,
    },
    image: `${SITE_URL}/hero-plants.jpg`,
    description:
      "Sarvada Organic makes 100% pure vermicompost for Indian homes. No silt, no preservatives, no fillers.",
    foundingDate: "2018",
    slogan: "Pure vermicompost. No silt. No preservatives.",
    email: EMAIL,
    areaServed: { "@type": "Country", name: "India" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: EMAIL,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sarvada Organic Farm",
      addressCountry: "IN",
    },
    sameAs: SOCIAL_LINKS,
    publishingPrinciples: `${SITE_URL}/blog`,
    correctionsPolicy: CORRECTIONS_POLICY_URL,
    ethicsPolicy: TERMS_URL,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Sarvada Organic",
    alternateName: "Sarvaorganic",
    description:
      "Buy 100% pure vermicompost online in India. No silt, no preservatives.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function storeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "@id": STORE_ID,
    name: "Sarvada Organic Store",
    url: SITE_URL,
    image: `${SITE_URL}/hero-plants.jpg`,
    priceRange: "₹149 - ₹2499",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash on Delivery, UPI, Visa, Mastercard, RuPay, Razorpay",
    areaServed: { "@type": "Country", name: "India" },
    parentOrganization: { "@id": ORG_ID },
    hasMerchantReturnPolicy: merchantReturnPolicy(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "3247",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function merchantReturnPolicy() {
  return {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "IN",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 7,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/FreeReturn",
    url: RETURN_POLICY_URL,
  };
}

export function shippingDetails() {
  return {
    "@type": "OfferShippingDetails",
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "IN",
    },
    shippingRate: {
      "@type": "MonetaryAmount",
      value: "0",
      currency: "INR",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 2,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 3,
        maxValue: 7,
        unitCode: "DAY",
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}
