import classnames from 'classnames'

import Button from '../button/Button'
import Heading from '../heading'
import IconWithCurrentColor from '../icon-with-current-color'
import RichText from '../rich-text'

export default function FeaturedCard({
  otherClasses,
  icon,
  button,
  heading,
  subText,
}) {
  const featuredCardClasses = classnames(
    otherClasses,
    'p-6 featured-card-container min-h-[330px] gap-14 flex flex-col justify-between group outline outline-[1px] outline-transparent hover:outline-blue-300/50 rounded transition-all duration-400',
  )
  return (
    <div className={featuredCardClasses} data-testid="featured-card">
      <div>
        <div className="w-fit rounded border-[1px] border-blue-300 p-4 text-blue-300 backdrop-blur transition-all duration-400 group-hover:bg-blue-300 group-hover:text-white">
          <IconWithCurrentColor
            icon={icon}
            className={classnames(
              'h-auto w-auto [&>g>path]:stroke-current [&>path]:stroke-current',
            )}
          />
        </div>
        {/* <NextImage {...icon} otherClasses="w-12 h-12 " /> */}
        <Heading type="h4" otherClasses="mt-6 mb-6 text-blue">
          {heading}
        </Heading>
        <RichText richText={subText} />
      </div>
      <Button {...button} mode="light" />
    </div>
  )
}
