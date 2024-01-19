import clsx from 'classnames'
import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'

export const NextImage = (props) => {
  if (!props?.asset) {
    return null
  }
  const src = urlForImage(props)?.url()
  const { otherClasses } = props
  return (
    <Image
      src={src}
      width={100}
      height={100}
      alt={props?.caption}
      className={clsx(otherClasses)}
      {...props}
    />
  )
}

export default NextImage
