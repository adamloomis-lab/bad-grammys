// The full photo catalog, scraped from the live Bad Grammy's Creations gallery.
// Categories drive the filter on the Gallery page. Alt text is written from a
// real review of each photo so it's accurate for SEO and screen readers.

export type GalleryCategory =
  | 'Memory Keepsakes'
  | 'Stockings'
  | 'Apparel'
  | 'Hats'
  | 'Bags'
  | 'Pillows'
  | 'Kitchen & Home'
  | 'Baby'

export type GalleryItem = {
  src: string
  alt: string
  category: GalleryCategory
}

export const galleryItems: GalleryItem[] = [
  { src: '/images/gallery/creation-19.jpg', category: 'Memory Keepsakes', alt: 'Three memory keepsake bears sewn from cardinal-print fabric, embroidered with Grandma and Mom on the feet' },
  { src: '/images/gallery/creation-01.jpg', category: 'Stockings', alt: 'Personalized green velvet Christmas stockings embroidered with the names Christopher and Paul and a nativity design' },
  { src: '/images/gallery/creation-03.jpg', category: 'Memory Keepsakes', alt: 'Memory keepsake bear sewn from a hunting shirt with the monogram A.R.W. embroidered on its feet' },
  { src: '/images/gallery/creation-10.jpg', category: 'Baby', alt: 'Plush cream baby bunny with the name Dexter embroidered in gold on its ear' },
  { src: '/images/gallery/creation-16.jpg', category: 'Apparel', alt: 'Burgundy t-shirt with a hand-embroidered pink rose bouquet' },
  { src: '/images/gallery/creation-04.jpg', category: 'Bags', alt: 'A craft-fair table of personalized embroidered zip pouches, each stitched with a different name' },
  { src: '/images/gallery/creation-05.jpg', category: 'Pillows', alt: 'A pair of navy throw pillows embroidered with snowy pine trees and the words Merry Christmas' },
  { src: '/images/gallery/creation-02.jpg', category: 'Memory Keepsakes', alt: 'Memory keepsake bear, badger, and cat sewn from red plaid flannel and Harley-Davidson shirts' },
  { src: '/images/gallery/creation-24.jpg', category: 'Hats', alt: 'Red and gray knit beanies embroidered with the Panthers team name' },
  { src: '/images/gallery/creation-07.jpg', category: 'Pillows', alt: 'A pair of burgundy velvet pillows with ornate white embroidered medallions' },
  { src: '/images/gallery/creation-06.jpg', category: 'Memory Keepsakes', alt: 'Memory keepsake bear sewn from pink and blue gingham with the name Gramps embroidered on its foot' },
  { src: '/images/gallery/creation-13.jpg', category: 'Kitchen & Home', alt: 'Funny embroidered tea towels featuring sassy chickens and playful sayings' },
  { src: '/images/gallery/creation-08.jpg', category: 'Kitchen & Home', alt: 'Embroidered aprons with funny sayings including "It\'s not burnt, it\'s flavor"' },
  { src: '/images/gallery/creation-26.jpg', category: 'Memory Keepsakes', alt: 'Two memory keepsake bears sewn from plaid shirts, one with a gold bow and one with a white bow' },
  { src: '/images/gallery/creation-11.jpg', category: 'Bags', alt: 'Embroidered canvas tote bags with a corgi design and a fox design' },
  { src: '/images/gallery/creation-20.jpg', category: 'Apparel', alt: 'Burgundy hoodie with a pink sugar-skull and floral embroidery on the back' },
  { src: '/images/gallery/creation-09.jpg', category: 'Memory Keepsakes', alt: 'Memory keepsake bear sewn from a Chicago Bears shirt with a name embroidered on its foot' },
  { src: '/images/gallery/creation-17.jpg', category: 'Kitchen & Home', alt: 'A floral cornflower-embroidered potholder and trivet set' },
  { src: '/images/gallery/creation-22.jpg', category: 'Apparel', alt: 'A young boy wearing a personalized gray hoodie embroidered with his name Dexter and a dinosaur' },
  { src: '/images/gallery/creation-14.jpg', category: 'Memory Keepsakes', alt: 'Three memory keepsake bears sewn from a child\'s clothing and quilt fabric' },
  { src: '/images/gallery/creation-12.jpg', category: 'Kitchen & Home', alt: 'Three embroidered aprons including a "Mr. Good Looking is Cooking" design' },
  { src: '/images/gallery/creation-23.jpg', category: 'Apparel', alt: 'Black hoodie with a teal sugar-skull and floral embroidery on the back' },
  { src: '/images/gallery/creation-18.jpg', category: 'Memory Keepsakes', alt: 'Memory keepsake bear sewn from blue plaid flannel with a white satin bow' },
  { src: '/images/gallery/creation-25.jpg', category: 'Bags', alt: 'Handmade Minnie Mouse crossbody bag with red polka-dot pockets' },
  { src: '/images/gallery/creation-21.jpg', category: 'Apparel', alt: 'Black crewneck sweatshirt with embroidered skeleton hands forming a heart' },
  { src: '/images/gallery/creation-15.jpg', category: 'Apparel', alt: 'Gray hoodie with a gold sugar-skull and floral embroidery on the back, shown at a craft fair' },
]

export const galleryCategories: GalleryCategory[] = [
  'Memory Keepsakes',
  'Stockings',
  'Apparel',
  'Hats',
  'Bags',
  'Pillows',
  'Kitchen & Home',
  'Baby',
]
