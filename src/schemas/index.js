import { navigation } from './documents/navigation'
import { page } from './documents/page'
import { bodyPortableText } from './objects/bodyPortableText'
import { button } from './objects/button'
import { iframe } from './objects/iframe'
import { img } from './objects/img'
import { navbarObject } from './objects/navbarObject'
import { socialsObject } from './objects/socialsObject'
import { youtube } from './objects/youtube'
import { twoColumnHeroSection } from './objects/twoColumnHeroSection'
import { netaceaDifference } from './documents/netaceaDifference'
import { staticSliceSections } from './objects/staticSliceSections'
import { videoWithTextSection } from './objects/videoWithTextSection'
import { testimonialAndStatsSlider } from './documents/testimonialAndStatsSlider'
import { withOrWithoutNetacea } from './documents/withOrWithOutNetacea'
import { productCardsSection } from './documents/productCardsSection'

export const schemaTypes = [
  page,
  navigation,
  navbarObject,
  img,
  button,
  socialsObject,
  bodyPortableText,
  iframe,
  youtube,
  twoColumnHeroSection,
  netaceaDifference,
  staticSliceSections,
  videoWithTextSection,
  testimonialAndStatsSlider,
  withOrWithoutNetacea,
  productCardsSection,
]

// Add name of the document here in quotations so the workflow works find on that name as well
export const documentTypesForWorkFlow = ['page']

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
]
