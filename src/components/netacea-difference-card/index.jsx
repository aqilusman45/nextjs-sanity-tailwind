import { groq } from 'next-sanity'
import classnames from 'classnames'
import NextImage from '../next-image'
import Heading from '../heading'
import RichText from '../rich-text'

export const fragment = groq`
`

export default function NetaceaDifferenceCard({otherClasses,image,heading,subText}) {

  const netaceaDifferenceCardClasses = classnames(
    otherClasses,"difference-card-border p-6 flex flex-col gap-6"
  )
  
  return (
    <div className={netaceaDifferenceCardClasses} data-testid='netacea-difference-card'>
     <NextImage {...image} />
     <Heading type="h4" otherClasses="capitalize font-aeronik-pro text-white max-w-[50%] " >{heading}</Heading>
     <RichText richText={subText} otherClasses="global-richtext-dark" />
    </div>
  )
}

