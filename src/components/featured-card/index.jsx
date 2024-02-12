import classnames from 'classnames'

import Button from '../button/Button'
import Heading from '../heading'
import RichText from '../rich-text'
import IconWithCurrentColor from '../icon-with-current-color'


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
console.log(icon);
  return (
    <div className={featuredCardClasses} data-testid="featured-card">
      <div>
        <div className='p-4 border-[1px] border-blue-300 w-fit rounded backdrop-blur text-blue-300 group-hover:bg-blue-300 group-hover:text-white transition-all duration-400'>

        <IconWithCurrentColor icon={icon} className="h-auto w-auto [&>path]:stroke-current" />
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
