import classnames from 'classnames'
import { groq } from 'next-sanity'

import Button from '../button/Button'
import Heading from '../heading'
import RichText from '../rich-text'

export const fragment = groq`
`

export default function ProductCard({
  otherClasses,
  videoFile,
  subText,
  heading,
  button,
}) {
  const productCardClasses = classnames(
    otherClasses,
    'w-full p-6 product-card-component rounded',
  )

  return (
    <div className={productCardClasses} data-testid="product-card">
      <div className="flex justify-end">
        <video
          src={videoFile?.url}
          muted
          loop
          playsInline
          autoPlay
          controls={false}
          className="h-40 w-40"
        />
      </div>

      <Heading type="h3" otherClasses="mt-16 mb-6">
        {heading}
      </Heading>
      <div className="products-line-gradient h-[1px] w-full" />
      <RichText richText={subText} otherClasses="global-richtext-light my-6" />
      <Button {...button} />
    </div>
  )
}
