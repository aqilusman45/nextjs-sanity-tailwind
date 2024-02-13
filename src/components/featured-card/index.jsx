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
    'w-full featured-card-container-main cursor-pointer',
  )

  console.log(icon)
  return (
    <div className={featuredCardClasses} data-testid="featured-card">
      <div className="featured-card-container group flex min-h-[330px] flex-col justify-between gap-14 rounded-[3px] p-6 transition-all duration-400">
        <div>
          <div className="w-fit rounded border-[1px] border-blue-300 p-4 text-blue-300 backdrop-blur transition-all duration-400 group-hover:bg-blue-300 group-hover:text-white">
            <IconWithCurrentColor
              icon={icon}
              className={classnames(
                'h-auto w-auto [&>g>path]:stroke-current [&>path]:stroke-current ',
                icon === 'carding-fraud' &&
                  'group-hover:last:[&>path]:fill-white',
              )}
            />
          </div>
          {/* <NextImage {...icon} otherClasses="w-12 h-12 " /> */}
          <Heading type="h4" otherClasses="mt-5 mb-4 text-blue">
            {heading}
          </Heading>
          <RichText richText={subText} />
        </div>
        <Button {...button} mode="light" />
      </div>
    </div>
  )
}
