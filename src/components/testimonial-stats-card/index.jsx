import classnames from 'classnames'
import { groq } from 'next-sanity'

import Button from '../button/Button'
import RichText from '../rich-text'
import SvgAnimator from '../svg-animator'

export const fragment = groq`
`

export default function TestimonialStatsCard({
  otherClasses,
  text,
  button,
  graph,
  onClick,
}) {
  const testimonialStatsCardClasses = classnames(
    otherClasses,
    'flex flex-col lg:flex-row gap-6 w-full items-center',
  )

  return (
    <div
      className={testimonialStatsCardClasses}
      data-testid="testimonial-stats-card"
    >
      <div className="w-full px-2 pt-20 text-white lg:w-2/4 lg:pt-0 xl:px-5 ">
        <SvgAnimator type={graph} otherClasses="" />
      </div>
      <div className="relative mt-14 flex h-full w-full flex-col gap-6 px-0 lg:w-2/4 lg:gap-10 lg:px-8 xl:px-16">
        <RichText
          richText={text}
          otherClasses="[&>p]:text-white [&>p]:font-aeronik-pro [&>p]:header-3 [&>p]:font-normal [&>p]:capitalize "
        />
        <Button {...button} otherClasses="z-10" />
      </div>
    </div>
  )
}
