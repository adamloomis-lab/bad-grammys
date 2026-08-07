// Single source of truth for business facts — used across pages, footer, and
// JSON-LD schema. Pulled from the live Bad Grammy's Creations (Duda) site,
// the owner's Facebook page, and the product photo catalog.

export const company = {
  name: "Bad Grammy's Creations",
  tagline: 'One-of-a-Kind Gifts Made with Love',
  subTagline: 'Custom Embroidery & Personalized Creations for Every Occasion',
  shortBlurb:
    "Bad Grammy's Creations makes one-of-a-kind custom embroidery and personalized gifts in Northeast Ohio, from memory keepsake bears and Christmas stockings to monogrammed apparel, pillows, and custom spirit wear. If you can picture it, we can create it.",
  motto: 'Custom, cozy, and made with love, just like Grandma used to do.',
  phone: '(330) 472-8946',
  phoneHref: 'tel:+13304728946',
  // Owner has no public email or storefront address — sells via Facebook,
  // craft fairs, and direct message. Region-level service area only.
  // TODO(owner): confirm home city for LocalBusiness addressLocality if desired.
  region: 'Northeast Ohio',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100083201746826',
  },
} as const

// Service offerings — mirrors the Duda "What We Offer" page plus the signature
// memory-keepsake line that dominates the real product photos.
export const offerings = [
  {
    slug: 'memory-keepsakes',
    title: 'Memory Keepsake Bears',
    blurb:
      "Our most-loved creation. Send us a loved one's shirt, flannel, or favorite outfit and we hand-sew it into a huggable keepsake bear or animal, a comforting way to hold onto someone special.",
    icon: 'heart',
    image: '/images/gallery/creation-19.jpg',
    alt: "Three memory keepsake bears sewn from cardinal-print fabric, embroidered with Grandma and Mom on the feet, by Bad Grammy's Creations",
  },
  {
    slug: 'custom-embroidery',
    title: 'Custom Embroidery',
    blurb:
      "Stitch your story onto something special. Whether it's a name, date, or heartfelt message, we embroider on hoodies, pillows, hats, and just about anything else.",
    icon: 'needle',
    image: '/images/gallery/creation-16.jpg',
    alt: 'Burgundy t-shirt with a hand-embroidered pink rose design',
  },
  {
    slug: 'christmas-stockings',
    title: 'Christmas Stockings',
    blurb:
      "Make the mantle magical. Personalized embroidered stockings that become part of your family's tradition year after year.",
    icon: 'gift',
    image: '/images/gallery/creation-01.jpg',
    alt: 'Personalized green velvet Christmas stockings embroidered with names and a nativity design',
  },
  {
    slug: 'custom-pillows',
    title: 'Custom Pillows',
    blurb:
      'Comfort meets personality. Decorate your space with embroidered pillows that say exactly what you want.',
    icon: 'pillow',
    image: '/images/gallery/creation-05.jpg',
    alt: 'A pair of navy pillows embroidered with snowy pine trees and "Merry Christmas"',
  },
  {
    slug: 'apparel-hats',
    title: 'Hats, Hoodies & Tees',
    blurb:
      'Wear your personality. We embroider snapbacks, beanies, hoodies, and tees, from local team and spirit wear to birthdays and inside jokes. Custom apparel that actually means something.',
    icon: 'shirt',
    image: '/images/gallery/creation-31.jpg',
    alt: 'Black snapback cap embroidered with a red Norton "N" and panther logo on a stadium field',
  },
] as const

// Spirit Wear — school and team apparel. Timely push before the school year;
// pricing and details provided directly by the owner.
export const spiritWear = {
  title: 'Spirit Wear',
  lead: 'Show your school pride. We make custom spirit wear for any school, in most colors, and ready before the first bell.',
  detail: 'Add a name and class year down the sleeve to make it all theirs.',
  basePrice: 45,
  sleeveAddOn: 10,
  image: '/images/gallery/creation-35.jpg',
  alt: 'Model wearing a navy crewneck embroidered with "Kindergarten Teacher" in colorful lettering and the name Warner in alphabet blocks down the sleeve',
} as const

export const steps = [
  {
    title: 'Share your idea',
    body: 'Message us on Facebook or give us a call. Tell us the occasion, the names or dates, and what you have in mind.',
  },
  {
    title: 'We design it together',
    body: "We'll help you pick the item, colors, and lettering. And if you're sending clothing for a memory keepsake, we'll walk you through it.",
  },
  {
    title: 'Made with love, just for you',
    body: 'Every piece is stitched by hand, one at a time, and ready in time for the moment that matters.',
  },
] as const

export const promises = [
  {
    title: 'Truly one-of-a-kind',
    body: 'Nothing mass-produced. Every creation is made to order for one person, one family, one story.',
  },
  {
    title: 'If you can picture it, we can create it',
    body: 'Have an idea that isn’t on the list? That’s our favorite kind of project. Custom means your vision.',
  },
  {
    title: 'Made with a grandma’s heart',
    body: 'Cozy, careful, and personal. The kind of gift someone keeps forever.',
  },
] as const

export const faqs = [
  {
    q: 'How do I place an order?',
    a: "The easiest way is to message us on Facebook or call (330) 472-8946. Tell us what you're thinking and we'll take it from there. There's no online checkout, just a real conversation about your custom piece.",
  },
  {
    q: 'How do memory keepsake bears work?',
    a: "You send us a loved one's clothing (a flannel, a favorite shirt, a jersey) and we hand-sew it into a keepsake bear or animal. We'll talk through which garments work best and what details you'd like, like a name or date embroidered on the foot.",
  },
  {
    q: 'Can you make something that isn’t shown on the site?',
    a: 'Absolutely. Custom is what we do best. If you can picture it, we can usually create it. Just reach out and describe your idea.',
  },
  {
    q: 'How long does a custom piece take?',
    a: 'It depends on the project and the season (the holidays book up fast). Reach out as early as you can and we’ll give you a realistic timeline for your piece.',
  },
  {
    q: 'Where are you located?',
    a: "We're a home-based maker in Northeast Ohio and a regular at local craft fairs. Orders are handled directly by phone or Facebook message.",
  },
] as const
