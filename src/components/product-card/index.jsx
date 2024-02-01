import { create } from '@lottiefiles/lottie-interactivity'
import * as LottiePlayer from '@lottiefiles/lottie-player'
import classnames from 'classnames'
import { useEffect, useRef } from 'react'

import Button from '../button/Button'
import Heading from '../heading'
import RichText from '../rich-text'

export default function ProductCard({
  otherClasses,
  lottieFile: { url },
  subText,
  heading,
  index,
  button,
}) {
  const productCardClasses = classnames(
    otherClasses,
    'w-full p-6 product-card-component rounded hover:border-[1px]  hover:scale-105 transition-all duration-300 hover:border-blue-300',
  )
  const lottiee = useRef(null)

  useEffect(() => {
    lottiee.current.addEventListener('load', function (e) {
      create({
        mode: 'scroll',
        player: `#firstLottie-${index}`,
        actions: [
          {
            visibility: [0, 1],
            type: 'seek',
            frames: [50, 0],
          },
        ],
      })
    })
  }, [lottiee, index])

  return (
    <div className={productCardClasses} data-testid="product-card">
      <div className="flex justify-end">
        <lottie-player
          ref={lottiee} // 2. set the reference for the player
          id={`firstLottie-${index}`}
          mode="scroll"
          src={url}
          style={{ width: '160px', height: '160px' }}
        />
      </div>

      <Heading type="h3" otherClasses="mt-16 mb-6">
        {heading}
      </Heading>
      <div className="products-line-gradient h-[1px] w-full" />
      <RichText richText={subText} otherClasses="global-richtext-light my-6" />
      <Button {...button} mode="light" />
    </div>
  )
}
