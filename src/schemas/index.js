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
]

// Add name of the document here in quotations so the workflow works find on that name as well
export const documentTypesForWorkFlow = ['page']



export const STATIC_SLICES = [
  {
    sectionType: 'netaceaDifference',
    sectionTitle: 'Netacea Difference',
  },
]