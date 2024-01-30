import classNames from 'classnames'
import Image from 'next/image'

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
