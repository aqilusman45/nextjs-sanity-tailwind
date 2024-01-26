import { groq } from 'next-sanity'
import classnames from 'classnames'
import NextImage from '../next-image'
import Heading from '../heading'
import RichText from '../rich-text'
import Button from '../button/Button'

export const fragment = groq`
`

export default function FeaturedCard({
  otherClasses,
  icon,
  button,
  heading,
  subText,
}) {
  const featuredCardClasses = classnames(
    otherClasses,
    'p-6 featured-card-container min-h-[330px] gap-10 flex flex-col justify-between',
  )

  return (
    <div className={featuredCardClasses} data-testid="featured-card">
      <div>
        <NextImage {...icon} otherClasses="w-12 h-12" />
        <Heading type="h4" otherClasses="mt-8 mb-10 text-blue">
          {heading}
        </Heading>
        <RichText richText={subText} />
      </div>
      <Button {...button} />
    </div>
  )
}