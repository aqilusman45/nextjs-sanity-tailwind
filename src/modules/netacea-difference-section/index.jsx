import classnames from 'classnames'
import Image from 'next/image'
import { groq } from 'next-sanity'

import Button, { BUTTON_FRAGMENT } from '../../components/button/Button'
import Heading from '../../components/heading'
import NetaceaDifferenceCard from '../../components/netacea-difference-card'

export const NETACEA_DIFFERENCE = groq`
  _type =="netaceaDifference"=>{
         button{
          ${BUTTON_FRAGMENT}
         },
         heading,
         variant,
         cards[]{
           icon,
           subText
         }
       }
`

export default function NetaceaDifferenceSection({
  otherClasses,
  heading,
  button,
  cards,
  variant,
  _id,
  id,
}) {
  const netaceaDifferenceSectionClasses = classnames(
    otherClasses,
    variant === 'light'
      ? 'background-gradient-difference-section-light'
      : 'background-gradient-difference-section',
    ' relative w-full lg:pb-30 lg:pt-40 pt-20',
  )

  return (
    <section
      id={_id ? _id : id}
      className={netaceaDifferenceSectionClasses}
      data-testid="netacea-difference-section"
    >
      {variant === 'light' ? (
        <Image
          src="/images/difference-section-background-light.png"
          width={1229}
          height={604}
          className="absolute right-0 top-0 hidden h-full w-3/4 lg:block"
          alt="background"
        />
      ) : (
        <Image
          src="/images/difference-section-background.png"
          width={1229}
          height={604}
          className="absolute right-0 top-0 hidden h-full w-3/4 lg:block"
          alt="background"
        />
      )}
      <div className="relative mx-auto max-w-default px-4 lg:px-20 xl:px-108">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <Heading
            type="h3"
            otherClasses={classnames(
              variant === 'light' ? 'text-blue' : 'text-white',
              'capitalize font-aeronik-pro font-normal w-full lg:max-w-760 xl:max-w-full',
            )}
          >
            {heading}
          </Heading>
          <Button {...button} mode={variant} otherClasses="lg:flex hidden" />
        </div>
        <div className="grid grid-cols-1 items-stretch gap-10 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {cards?.map((node, index) => {
            return (
              <NetaceaDifferenceCard {...node} key={index} variant={variant} />
            )
          })}
        </div>
        <Button
          {...button}
          mode={variant}
          otherClasses="lg:hidden mt-4 w-full !justify-center"
        />
      </div>
    </section>
  )
}
