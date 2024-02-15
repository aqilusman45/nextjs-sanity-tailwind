import classnames from 'classnames'
import { groq } from 'next-sanity'

import Button from '../../components/button/Button'
import Heading from '../../components/heading'
import NextImage from '../../components/next-image'
import RichText from '../../components/rich-text'

export const TWO_COLUMN_HERO_SECTIO_FRAGMENT = groq`
 _type == 'twoColumnHeroSection' =>{
    ...,
        "desktopImage":desktopImage.asset->{
     ...,
   },
        "mobileImage":mobileImage.asset->{
     ...,
   },
        "logos":logos[].asset->{
     ...,
   },

  }
`

export default function TwoColumnHeroSection({
  otherClasses,
  buttons,
  desktopImage,
  heading,
  title,
  logos,
  mobileImage,
  subText,
  variant,
  _id,
  id,
}) {
  const twoColumnHeroSectionClasses = classnames(
    otherClasses,
    'pb-20 lg-xl:pb-0',
    variant === 'dark' ? 'hero-two-column-container' : 'bg-white',
  )
  return (
    <section
      id={_id ? _id : id}
      className={twoColumnHeroSectionClasses}
      data-testid="two-columnn-hero-sectionn"
    >
      <div className="mx-auto max-w-default px-4 lg:px-20 xl:px-108 ">
        <div className="flex flex-col items-center gap-6 py-14 lg:flex-row lg:py-20">
          <div className="w-full lg:w-2/4">
            <Heading
              type="h2"
              otherClasses={classnames(
                '',
                variant === 'dark' ? 'text-white' : 'text-blue',
              )}
            >
              {heading}
            </Heading>
            <RichText
              richText={subText}
              otherClasses={classnames(
                'mt-6 mb-8',
                variant === 'dark'
                  ? 'global-richtext-dark [&>p]:text-20'
                  : 'global-richtext-light [&>p]:text-20',
              )}
            />
            <div className="hidden items-center justify-center gap-4 lg:flex lg:justify-start">
              {buttons?.map((node, index) => {
                return <Button key={index} {...node} mode={variant} />
              })}
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            <NextImage
              {...desktopImage}
              otherClasses="w-full lg:block hidden"
            />
            <NextImage {...mobileImage} otherClasses="w-full lg:hidden" />
            <div className="mt-8 grid items-center gap-4 sm:grid-cols-2 lg:hidden">
              {buttons?.map((node, index) => {
                return (
                  <Button
                    key={index}
                    {...node}
                    mode={variant}
                    otherClasses="w-full !justify-center"
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex max-w-648 flex-col gap-6">
          <Heading
            type="h5"
            otherClasses={classnames(
              variant === 'dark' ? 'text-white' : 'text-blue',
            )}
          >
            {title}
          </Heading>
          <div className="grid grid-cols-4 items-center gap-x-12 gap-y-6 pr-14 sm:flex sm:justify-between lg:pr-0">
            {logos?.map((node, i) => {
              return (
                <div key={i} className="w-auto min-w-10">
                  <NextImage {...node} otherClasses="w-full" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
