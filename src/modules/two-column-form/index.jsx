import classnames from 'classnames'
import Image from 'next/image'
import { groq } from 'next-sanity'
import { useState } from 'react'

import Button from '../../components/button/Button'
import DynamicForms from '../../components/dynamic-forms'
import Heading from '../../components/heading'
import Input from '../../components/input'
import RichText from '../../components/rich-text'
import Select from '../../components/select'
import TextArea from '../../components/text-area'
import { countries } from '../../utils/helpers'
export const TWO_COLUMN_FORM = groq`
_type == 'twoColumnForm' =>{
    ...
  }
`

export default function TwoColumnForm({
  _id,
  id,
  otherClasses,
  subText,
  form,
  heading,
  description,
  variant,
}) {
  const twoColumnFormClasses = classnames(
    otherClasses,
    'relative w-full ',
    variant === 'dark'
      ? 'two-column-container bg-blue-500'
      : 'two-column-container-light bg-neutral-200',
  )

  return (
    <section
      id={_id ? _id : id}
      className={twoColumnFormClasses}
      data-testid="two-column-form"
    >
      <Image
        src="/images/two-column-pattern.png"
        alt="background-pattern"
        className=" absolute right-0 top-0 hidden h-full lg:block"
        width={700}
        height={200}
      />
      <div className="mx-auto max-w-default">
        <div className=" relative flex w-full flex-col gap-10 px-4 py-20 lg:flex-row lg:gap-20 lg:px-20 lg:py-120 xl:px-120">
          <div className="flex w-full flex-col gap-10 lg:w-2/4">
            <Heading
              type="h2"
              otherClasses={classnames(
                'max-w-450 capitalize font-aeronik-pro',
                variant === 'dark' ? 'text-white' : 'text-blue',
              )}
            >
              {heading}
            </Heading>
            <RichText
              variant={variant}
              richText={subText}
              otherClasses={classnames(
                'max-w-450',
                variant === 'dark'
                  ? 'global-richtext-dark '
                  : 'global-richtext-light',
              )}
            />
          </div>
          <div className="two-column-form h-[1px] w-full lg:hidden "></div>
          <div className="w-full text-white lg:w-2/4">
            <RichText
              richText={description}
              otherClasses={classnames(
                variant === 'dark'
                  ? 'global-richtext-dark '
                  : 'global-richtext-light',
              )}
            />
            <DynamicForms
              form={form}
              variant={variant}
              otherClasses="mt-4 lg:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
