import classnames from 'classnames'
import dynamic from 'next/dynamic'
import { groq } from 'next-sanity'

import Button from '../../components/button/Button'
import Heading from '../../components/heading'
import NextImage from '../../components/next-image'

const ProductCard = dynamic(() => import('../../components/product-card'), {
  ssr: false,
})

export const PRODUCT_CARD_SECTION_FRAGMENT = groq`
 "backVector":backVector.asset->{
    ...,
  },
 "productCards":cards[]{
    ...,
    "lottieFile":lottieFile.asset->{
      ...
    },
    "backVector":backVector.asset->{
      ...,
    }
  }
`

export default function ProductCardSection({
  otherClasses,
  heading,
  button,
  productCards,
  backVector,
  ...props
}) {
  const productCardSectionClasses = classnames(
    otherClasses,
    'w-full product-card-section-main-container',
  )

  return (
    <section
      className={productCardSectionClasses}
      data-testid="product-card-section"
    >
      <div className="mx-auto max-w-default px-4 lg:px-6">
        <div className="product-card-container-white relative w-full bg-white px-4 py-20 lg:px-20 lg:py-120">
          <NextImage
            {...backVector}
            otherClasses="w-auto absolute top-0 z-10 right-0 h-full lg:block hidden"
          />
          <div className="relative z-20 flex flex-col items-start justify-between gap-6 md:flex-row md:gap-10">
            <Heading type="h3" otherClasses="">
              {heading}
            </Heading>
            <Button {...button} mode="light" />
          </div>
          <div className="relative z-20 mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCards.map((node, index) => {
              return <ProductCard key={index} {...node} index={index} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
