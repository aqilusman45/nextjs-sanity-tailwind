import classnames from 'classnames'

import Heading from '../heading'
import NextImage from '../next-image'
import RichText from '../rich-text'
import IconWithCurrentColor from '../icon-with-current-color'

export default function NetaceaDifferenceCard({
  otherClasses,
  image,
  subText,
  variant,
  icon,
}) {
  const netaceaDifferenceCardClasses = classnames(
    otherClasses,
    ' w-full rounded group cursor-pointer',
    variant === 'light'
      ? 'netacea-difference-card-light'
      : 'netacea-difference-card-dark',
  )

  return (
    <div
      className={netaceaDifferenceCardClasses}
      data-testid="netacea-difference-card"
    >
      <div
        className={classnames(
          'flex h-full flex-col gap-6 rounded-[3px] p-6 transition-all duration-300',
          variant === 'light' ? 'bg-white' : 'bg-blue-500',
        )}
      >
        <span
          className={classnames(
            'flex h-12 w-12 items-center justify-center rounded border-[1px] transition-all duration-400',
            variant === 'light'
              ? 'border-blue-300 text-blue-300 group-hover:bg-blue-300 group-hover:text-white'
              : 'border-green-300 text-green-300 group-hover:bg-green-300 group-hover:text-blue',
          )}
        >
          <IconWithCurrentColor
            icon={icon}
            className="[&>path]:stroke-current"
          />
        </span>
        <RichText
          richText={subText}
          otherClasses={classnames(
            variant === 'light'
              ? 'global-richtext-light'
              : 'global-richtext-dark',
            '[&>p]:mt-6',
          )}
        />
      </div>
    </div>
  )
}
