import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import ImageUrlBuilder from '@sanity/image-url'
import clsx from 'classnames'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

import clientConfig from '../../../client-config'
import Button from '../button/Button'
import Heading from '../heading'
import Icon from '../icon'

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

export const RichText = ({
  richText,
  otherClasses,
  toggleFunc,
  variant = 'dark',
}) => {
  const richTextClasses = clsx(otherClasses, 'relative')

  const ButtonComponent = (props) => {
    const data = props.value
    // const { toggleFunc } = rest;
    return (
      <Button {...data} onClick={() => toggleFunc(data?.form, data?.tab)} />
    )
  }

  const ChecklistComponent = ({ value }) => {
    const { heading, list } = value
    return (
      <div className="flex flex-col gap-6">
        {heading && (
          <Heading
            otherClasses={classNames(
              'font-aeronik-pro caapitalize tracking-[0.48px]',
              variant === 'dark' ? '!text-green-300' : '!text-blue',
            )}
            type="h6"
          >
            {heading}
          </Heading>
        )}
        <div className="flex flex-col gap-4">
          {list?.map((node, index) => {
            return (
              <div className="flex items-start gap-2" key={index}>
                <Icon
                  icon={
                    variant === 'dark' ? 'checklist-green' : 'checklist-blue'
                  }
                  iconHeight={16}
                  iconWidth={16}
                  otherClasses="translate-y-1"
                />
                <p
                  className={classNames(
                    '!mb-0 font-aeronik-pro text-base font-normal',
                    variant === 'dark' ? 'text-white' : 'text-blue',
                  )}
                >
                  {node}
                </p>
              </div>
            )
          })}
        </div>
      </div>
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
            checklistObject: ChecklistComponent,
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
