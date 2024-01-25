import { groq } from 'next-sanity'
import classnames from 'classnames'
import NextImage from '../next-image'
import Heading from '../heading'
import RichText from '../rich-text'

export const fragment = groq`
`

export default function NetaceaDifferenceCard({otherClasses,image,heading,subText,variant}) {

  const netaceaDifferenceCardClasses = classnames(
    otherClasses,variant==="light"?"bg-white":"difference-card-border", " p-6 flex flex-col gap-6"
  )
  
  return (
    <div className={netaceaDifferenceCardClasses} data-testid='netacea-difference-card'>
     <NextImage {...image} />
     <Heading type="h4" otherClasses={classnames( variant==="light"?"text-blue":"text-white","capitalize font-aeronik-pro max-w-[50%] ")} >{heading}</Heading>
     <RichText richText={subText} otherClasses={classnames( variant==="light" ?".global-richtext-light":"global-richtext-dark")} />
    </div>
  )
}

