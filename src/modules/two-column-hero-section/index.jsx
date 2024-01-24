import { groq } from 'next-sanity'
import classnames from 'classnames'
import NextImage from '../../components/next-image'

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
  logos,
  mobileImage,
  subText,
  variant,
}) {
  const twoColumnHeroSectionClasses = classnames(otherClasses, 'mt-88')

  console.log(mobileImage)
  return (
    <section
      className={twoColumnHeroSectionClasses}
      data-testid="two-columnn-hero-sectionn"
    >
      <div className="mx-auto max-w-default px-108 ">
        <div className="flex items-center gap-6 py-20">
          <div className="w-full lg:w-2/4"></div>
          <div className="w-full lg:w-2/4">
            <NextImage
              {...desktopImage}
              otherClasses="w-full lg:block hidden"
            />
            <NextImage {...mobileImage} otherClasses="w-full lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  )
}
