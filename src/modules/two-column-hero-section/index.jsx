import { groq } from 'next-sanity'
import classnames from 'classnames'
import NextImage from '../../components/next-image'
import Heading from '../../components/heading'
import RichText from '../../components/rich-text'
import Button from '../../components/button/Button'

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
}) {
  const twoColumnHeroSectionClasses = classnames(
    otherClasses,
    'pb-20',
    variant === 'dark' ? 'hero-two-column-container' : 'bg-white',
  )

  return (
    <section
      className={twoColumnHeroSectionClasses}
      data-testid="two-columnn-hero-sectionn"
    >
      <div className="mx-auto max-w-default px-4 lg:px-20 xl:px-108 ">
        <div className="flex flex-col items-center gap-6 py-20 lg:flex-row">
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
                'mt-10 mb-14',
                variant === 'dark'
                  ? 'global-richtext-dark'
                  : 'global-richtext-light',
              )}
            />
            <div className="flex items-center gap-4">
              {buttons?.map((node, index) => {
                return <Button key={index} {...node} />
              })}
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            <NextImage
              {...desktopImage}
              otherClasses="w-full lg:block hidden"
            />
            <NextImage {...mobileImage} otherClasses="w-full lg:hidden" />
          </div>
        </div>
        <div className="max-w-648 flex flex-col gap-6">
          <Heading
            type="h5"
            otherClasses={classnames(
              variant === 'dark' ? 'text-white' : 'text-blue',
            )}
          >
            {title}
          </Heading>
          <div className="grid grid-cols-3 items-center gap-x-12 gap-y-6 sm:flex sm:justify-between">
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