import { groq } from 'next-sanity'
import classnames from 'classnames'
import Heading from '../../components/heading'
import Button from '../../components/button/Button'
import FeaturedCard from '../../components/featured-card'

export const FEATURED_SECTION_FRAGMENT = groq`
 featuredCards[]{
     ...,
     "icon":icon.asset->{
...,}
   }
`

export default function FeaturedSection({
  otherClasses,
  heading,
  button,
  featuredCards,
  ...props
}) {
  const featuredSectionClasses = classnames(
    otherClasses,
    'w-full featured-section-container',
  )

  return (
    <section className={featuredSectionClasses} data-testid="featured-section">
      <div className="mx-auto max-w-default px-4 lg:px-6">
        <div className="featured-card-container-white relative w-full bg-white px-4 py-20 pt-20 lg:px-20 lg:pb-120">
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:gap-10">
            <Heading type="h3" otherClasses="">
              {heading}
            </Heading>
            <Button {...button} />
          </div>
          <div className="relative mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredCards.map((node, index) => {
              return <FeaturedCard key={index} {...node} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
