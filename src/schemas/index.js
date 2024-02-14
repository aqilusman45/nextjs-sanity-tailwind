import { author } from './documents/author'
import { category } from './documents/category'
import { featuredBlogSection } from './documents/featuredBlogSection'
import { featureSection } from './documents/featureSection'
import { navigation } from './documents/navigation'
import { netaceaDifference } from './documents/netaceaDifference'
import { netaceaWithOrWithout } from './documents/netaceaWithOrWithout'
import { page } from './documents/page'
import { post } from './documents/post'
import { productCardsSection } from './documents/productCardsSection'
import { testimonialAndStatsSlider } from './documents/testimonialAndStatsSlider'
import { bodyPortableText } from './objects/bodyPortableText'
import { button } from './objects/button'
import { checklistObject } from './objects/checklistObject'
import { iframe } from './objects/iframe'
import { img } from './objects/img'
import { navbarObject } from './objects/navbarObject'
import { socialsObject } from './objects/socialsObject'
import { staticSliceSections } from './objects/staticSliceSections'
import { twoColumnForm } from './objects/twoColumnForm'
import { twoColumnHeroSection } from './objects/twoColumnHeroSection'
import { videoWithTextSection } from './objects/videoWithTextSection'
import { youtube } from './objects/youtube'

export const schemaTypes = [
  page,
  navigation,
  navbarObject,
  img,
  button,
  socialsObject,
  bodyPortableText,
  post,
  author,
  category,
  iframe,
  youtube,
  twoColumnHeroSection,
  netaceaDifference,
  staticSliceSections,
  videoWithTextSection,
  testimonialAndStatsSlider,
  productCardsSection,
  featureSection,
  netaceaWithOrWithout,
  twoColumnForm,
  checklistObject,
  featuredBlogSection,
]

// Add name of the document here in quotations so the workflow works find on that name as well
export const documentTypesForWorkFlow = ['page', 'post']

export const STATIC_SLICES = [
  {
    sectionType: 'netaceaDifference',
    sectionTitle: 'Netacea Difference',
  },
  {
    sectionType: 'testimonialAndStatsSlider',
    sectionTitle: 'Testimonial And Stats Slider',
  },
  {
    sectionType: 'withOrWithoutNetacea',
    sectionTitle: 'With Or Without Netacea',
  },
  {
    sectionType: 'productCardsSection',
    sectionTitle: 'Product Cards Section',
  },
  {
    sectionType: 'featureSection',
    sectionTitle: 'Feature Section',
  },
  {
    sectionType: 'featuredBlogSection',
    sectionTitle: 'Featured Blog Section',
  },
]
