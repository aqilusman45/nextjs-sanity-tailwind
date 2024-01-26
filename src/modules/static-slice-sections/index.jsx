import { groq } from 'next-sanity'
import NetaceaDifferenceSection, {
  NETACEA_DIFFERENCE,
} from '../netacea-difference-section'
import WithOrWithoutNetacea, {
  WITH_OR_WITHOUT_NETACEA_FRAGMET,
} from '../with-or-without-netacea'
import TestimonialAndStatsSlider, {
  TESTIMONIAL_AND_STATS_SLIDER,
} from '../testimonial-and-stats-slider'
import ProductCardSection, {
  PRODUCT_CARD_SECTION_FRAGMENT,
} from '../product-card-section'
import FeaturedSection, { FEATURED_SECTION_FRAGMENT } from '../featured-section'

export const STATIC_SLICE_SECTION = groq`
_type == 'staticSliceSections' =>{
  ...,
    "section":section->{
    ...,
    ${NETACEA_DIFFERENCE},
    ${WITH_OR_WITHOUT_NETACEA_FRAGMET},
    ${TESTIMONIAL_AND_STATS_SLIDER},
    ${PRODUCT_CARD_SECTION_FRAGMENT},
    ${FEATURED_SECTION_FRAGMENT},

  }
}
`

export default function StaticSliceSections({ section, storybook_Type }) {
  const type = section?._type || storybook_Type || 'netaceaDifference'
  switch (type) {
    case 'netaceaDifference':
      return <NetaceaDifferenceSection {...section} />
    case 'withOrWithoutNetacea':
      return <WithOrWithoutNetacea {...section} />
    case 'testimonialAndStatsSlider':
      return <TestimonialAndStatsSlider {...section} />
    case 'featureSection':
      return <FeaturedSection {...section} />
    case 'productCardsSection':
      return <ProductCardSection {...section} />
    default:
      return null
  }
}
