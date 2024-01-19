import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import ImageUrlBuilder from '@sanity/image-url'
import clsx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import clientConfig from '../../../client-config'
import Button from '../button/Button'

const builder = ImageUrlBuilder({
  ...clientConfig.sanity,
})

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value)
  return (
    <Image
      width={width}
      height={height}
      src={builder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="eager"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}
export const RichText = ({ richText, otherClasses, toggleFunc }) => {
  const richTextClasses = clsx(otherClasses, 'relative')

  const ButtonComponent = (props) => {
    const data = props.value
    // const { toggleFunc } = rest;
    return (
      <Button {...data} onClick={() => toggleFunc(data?.form, data?.tab)} />
    )
  }
  return (
    <div className={richTextClasses}>
      <PortableText
        value={richText}
        components={{
          types: {
            image: SampleImageComponent,
            button: ButtonComponent,
          },
          marks: {
            link: ({ children, value }) => {
              const { href } = value
              const rel = !href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined
              if (href === 'tel:(888) 939-3309') {
                return (
                  <Link href={href} target="_self" rel={rel}>
                    {children}
                  </Link>
                )
              } else {
                return (
                  <Link href={href} target={rel && '_blank'} rel={rel}>
                    {children}
                  </Link>
                )
              }
            },
          },
        }}
      />
    </div>
  )
}

export default RichText
