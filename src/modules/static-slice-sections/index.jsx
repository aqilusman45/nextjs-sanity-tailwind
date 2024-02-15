import { groq } from 'next-sanity'

import FeaturedBlogSection, {
  FEATURED_BLOG_FRAGMENT,
} from '../featured-blog-section/index'
import FeaturedSection, { FEATURED_SECTION_FRAGMENT } from '../featured-section'
import NetaceaDifferenceSection, {
  NETACEA_DIFFERENCE,
} from '../netacea-difference-section'
import ProductCardSection, {
  PRODUCT_CARD_SECTION_FRAGMENT,
} from '../product-card-section'
import TestimonialAndStatsSlider, {
  TESTIMONIAL_AND_STATS_SLIDER,
} from '../testimonial-and-stats-slider'
import WithOrWithoutNetacea, {
  WITH_OR_WITHOUT_NETACEA_FRAGMET,
} from '../with-or-without-netacea'

export const STATIC_SLICE_SECTION = groq`
_type == 'staticSliceSections' =>{
  "netaceaDifferenceSection":section->{
    ${NETACEA_DIFFERENCE}
  },
  "testimonialAndStatsSlider":section->{
    ${TESTIMONIAL_AND_STATS_SLIDER}
  },
  "withOrWithOutNetacea":section->{
    ${WITH_OR_WITHOUT_NETACEA_FRAGMET}
  },
  "productCardSection":section->{
    ${PRODUCT_CARD_SECTION_FRAGMENT},
  },
  "featuredProduct":section->{
    ${FEATURED_SECTION_FRAGMENT}
  },
  "featuredBlogSection":section->{
    ${FEATURED_BLOG_FRAGMENT}
  }
}
`

export default function StaticSliceSections({
  id,
  featuredBlogSection,
  netaceaDifferenceSection,
  withOrWithOutNetacea,
  testimonialAndStatsSlider,
  productCardSection,
  featuredProduct,
}) {
  return (
    <>
      {Object?.values(featuredBlogSection || {})?.length > 0 && (
        <FeaturedBlogSection id={id} {...featuredBlogSection} />
      )}
      {Object?.values(netaceaDifferenceSection || {})?.length > 0 && (
        <NetaceaDifferenceSection id={id} {...netaceaDifferenceSection} />
      )}
      {Object?.values(withOrWithOutNetacea || {})?.length > 0 && (
        <WithOrWithoutNetacea id={id} {...withOrWithOutNetacea} />
      )}
      {Object?.values(testimonialAndStatsSlider || {})?.length > 0 && (
        <TestimonialAndStatsSlider id={id} {...testimonialAndStatsSlider} />
      )}
      {Object?.values(productCardSection || {})?.length > 0 && (
        <ProductCardSection id={id} {...productCardSection} />
      )}
      {Object?.values(featuredProduct || {})?.length > 0 && (
        <FeaturedSection id={id} {...featuredProduct} />
      )}
    </>
  )
}
