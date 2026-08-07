import { company, offerings, faqs } from '../data/site'

// Production target domain. Canonicals, sitemap, OG and schema all point here so
// SEO value lands on the live host the moment DNS flips from the old Duda site.
export const SITE_URL = 'https://www.badgrammyscreation.com'

const OG_IMAGE = '/images/og-cover.jpg'

export const abs = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

// Netlify serves pages with a trailing slash; keep canonical/sitemap URLs aligned.
export const pageUrl = (path: string) =>
  abs(path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`)

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeGoodsStore', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: company.name,
    url: SITE_URL,
    image: abs(OG_IMAGE),
    logo: abs('/images/logo.png'),
    telephone: company.phone,
    priceRange: '$$',
    description: company.shortBlurb,
    slogan: company.tagline,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'OH',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Northeast Ohio' },
    makesOffer: offerings.map((o) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Product', name: o.title, description: o.blurb },
    })),
    knowsAbout: [
      'Custom embroidery',
      'Memory keepsake bears',
      'Personalized Christmas stockings',
      'Monogrammed apparel',
      'Handmade personalized gifts',
    ],
    sameAs: [company.social.facebook],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: pageUrl(it.path),
    })),
  }
}

export type PageMeta = {
  title: string
  description: string
  canonical: string
  ogImage: string
  jsonLd: object[]
}

export function getPageMeta(rawPath: string): PageMeta {
  const path = rawPath !== '/' ? rawPath.replace(/\/$/, '') : '/'
  const ogImage = abs(OG_IMAGE)

  switch (path) {
    case '/':
      return {
        title: "Bad Grammy's Creations | Custom Embroidery & Personalized Gifts",
        description: `${company.shortBlurb} Call ${company.phone}.`,
        canonical: pageUrl('/'),
        ogImage,
        jsonLd: [localBusinessSchema(), websiteSchema(), faqSchema()],
      }
    case '/what-we-offer':
      return {
        title: "What We Offer | Custom Embroidery & Keepsakes | Bad Grammy's Creations",
        description:
          'Memory keepsake bears, personalized Christmas stockings, custom embroidered apparel and pillows, plus spirit wear for any school. Made to order in Northeast Ohio. If you can picture it, we can create it.',
        canonical: pageUrl('/what-we-offer'),
        ogImage,
        jsonLd: [
          localBusinessSchema(),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'What We Offer', path: '/what-we-offer' },
          ]),
        ],
      }
    case '/spirit-wear':
      return {
        title: "Spirit Wear | Custom School Socks, Sweatshirts & Apparel | Bad Grammy's Creations",
        description:
          'Custom embroidered spirit wear for any school in Northeast Ohio: team socks, sweatshirts and apparel in most colors, ready before the first bell. Add a name and class year on the sleeve. From $45.',
        canonical: pageUrl('/spirit-wear'),
        ogImage,
        jsonLd: [
          localBusinessSchema(),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Spirit Wear', path: '/spirit-wear' },
          ]),
        ],
      }
    case '/gallery':
      return {
        title: "Gallery | Handmade Custom Creations | Bad Grammy's Creations",
        description:
          "Browse real custom pieces from Bad Grammy's Creations, including memory keepsake bears, embroidered stockings, spirit wear, monogrammed apparel and pillows, all handmade in Northeast Ohio.",
        canonical: pageUrl('/gallery'),
        ogImage,
        jsonLd: [
          localBusinessSchema(),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
          ]),
        ],
      }
    case '/contact':
      return {
        title: "Contact | Order a Custom Creation | Bad Grammy's Creations",
        description: `Have a custom idea or a question? Message us on Facebook or call ${company.phone}. Bad Grammy's Creations makes one-of-a-kind personalized gifts in Northeast Ohio.`,
        canonical: pageUrl('/contact'),
        ogImage,
        jsonLd: [
          localBusinessSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: pageUrl('/contact'),
            about: { '@id': `${SITE_URL}/#business` },
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ],
      }
    case '/privacy':
      return {
        title: "Privacy Policy | Bad Grammy's Creations",
        description: "How Bad Grammy's Creations collects, uses, and protects your information.",
        canonical: pageUrl('/privacy'),
        ogImage,
        jsonLd: [localBusinessSchema()],
      }
    case '/terms':
      return {
        title: "Terms of Service | Bad Grammy's Creations",
        description: "The terms that govern your use of the Bad Grammy's Creations website.",
        canonical: pageUrl('/terms'),
        ogImage,
        jsonLd: [localBusinessSchema()],
      }
    case '/accessibility':
      return {
        title: "Accessibility Statement | Bad Grammy's Creations",
        description: "Our commitment to making the Bad Grammy's Creations website accessible to everyone.",
        canonical: pageUrl('/accessibility'),
        ogImage,
        jsonLd: [localBusinessSchema()],
      }
    default:
      return {
        title: "Page Not Found | Bad Grammy's Creations",
        description:
          "Sorry, we couldn't find that page. Bad Grammy's Creations makes custom embroidery and personalized gifts in Northeast Ohio.",
        canonical: pageUrl(path),
        ogImage,
        jsonLd: [localBusinessSchema()],
      }
  }
}

export const ALL_ROUTES: string[] = [
  '/',
  '/what-we-offer',
  '/spirit-wear',
  '/gallery',
  '/contact',
  '/privacy',
  '/terms',
  '/accessibility',
]
