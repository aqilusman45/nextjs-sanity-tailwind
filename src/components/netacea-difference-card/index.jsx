import classnames from 'classnames'

import Heading from '../heading'
import NextImage from '../next-image'
import RichText from '../rich-text'

export default function NetaceaDifferenceCard({
  otherClasses,
  image,
  subText,
  variant,
}) {
  const netaceaDifferenceCardClasses = classnames(
    otherClasses,
    variant === 'light'
      ? 'bg-white hover:border-blue-300'
      : 'difference-card-border hover:border-green-300/50',
    ' p-6 flex flex-col gap-6 hover:border-[1px]  hover:scale-105 transition-all duration-300',
  )

  return (
    <div
      className={netaceaDifferenceCardClasses}
      data-testid="netacea-difference-card"
    >
      <NextImage {...image} />
      <RichText
        richText={subText}
        otherClasses={classnames(
          variant === 'light'
            ? 'global-richtext-light'
            : 'global-richtext-dark',
        )}
      />
    </div>
  )
}
