import classNames from 'classnames'
import Image from 'next/image'
import { groq } from 'next-sanity'

export const IMAGE_FRAGMENT = groq`
   url,
     originalFilename,
     metadata{
      dimensions{
        width,
        height
      }
     }
`

const NextImage = ({ otherClasses, url, originalFilename, metadata }) => {
  const { dimensions: { width, height } = {} } = metadata || {}

  return (
    <Image
      src={url ? url : ''}
      className={classNames(otherClasses)}
      alt={originalFilename}
      width={width ? width : 200}
      height={height ? height : 200}
      priority
    />
  )
}

export default NextImage
