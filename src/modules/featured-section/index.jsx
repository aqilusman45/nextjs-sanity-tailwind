import classnames from 'classnames'
import { groq } from 'next-sanity'
import { useState } from 'react'

import Button, { BUTTON_FRAGMENT } from '../../components/button/Button'
import FeaturedCard from '../../components/featured-card'
import Heading from '../../components/heading'

export const FEATURED_SECTION_FRAGMENT = groq`
 _type == 'featureSection' =>{
         ...,
         button{
          ${BUTTON_FRAGMENT}
         },
         heading,
         featuredCards[]{
           icon,
           subText,
           button{
            ${BUTTON_FRAGMENT}
           },
           heading,
         }
       }
`

export default function FeaturedSection({
  otherClasses,
  heading,
  button,
  featuredCards,
  _id,
  id,
}) {
  const featuredSectionClasses = classnames(
    otherClasses,
    'w-full featured-section-container ',
  )

  const [state, setState] = useState(false)

  return (
    <section
      id={_id ? _id : id}
      className={featuredSectionClasses}
      data-testid="featured-section"
    >
      <div className="mx-auto max-w-default px-4 lg:px-6">
        <div className="featured-card-container-white relative w-full rounded-bl bg-white px-4 pb-20  lg:px-20 lg:pb-120">
          <div className="featured-section-form-line mb-10 h-[1px] w-full lg:hidden"></div>
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:gap-10">
            <Heading type="h3" otherClasses="">
              {heading}
            </Heading>
            <Button {...button} otherClasses="lg:flex hidden" />
          </div>
          <div
            className={classnames(
              'relative mt-10 grid h-auto gap-6 transition-all duration-400 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
              state
                ? 'max-h-auto'
                : 'featured-cards-container max-h-[1000px] overflow-hidden lg:max-h-fit ',
            )}
          >
            {featuredCards.map((node, index) => {
              return <FeaturedCard key={index} {...node} />
            })}
          </div>
          <Button
            label={state ? 'Hide list' : 'Show full list'}
            variant="text-link"
            type="button"
            otherClasses="w-full text-center mb-10 lg:hidden !justify-center mt-6"
            onClick={() => setState(!state)}
          />
          <Button {...button} otherClasses="lg:hidden !justify-center w-full" />
        </div>
      </div>
    </section>
  )
}
