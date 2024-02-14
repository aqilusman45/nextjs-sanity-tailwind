import classnames from 'classnames'
import dynamic from 'next/dynamic'
import { groq } from 'next-sanity'
import { useEffect, useRef, useState } from 'react'

const ReactStars = dynamic(() => import('react-stars'), { ssr: false })
import Button, { BUTTON_FRAGMENT } from '../../components/button/Button'
import Heading from '../../components/heading'
import Icon from '../../components/icon'
import RichText from '../../components/rich-text'
import Slider from '../../components/slider'

const TestimonialStatsCard = dynamic(
  () => import('../../components/testimonial-stats-card'),
  { ssr: false },
)

export const TESTIMONIAL_AND_STATS_SLIDER = groq`
_type == 'testimonialAndStatsSlider' => {
       ...,
       heading,
       button{
        ${BUTTON_FRAGMENT}
       },
       statsCards[]{
         description,
         stats
       },
       sliderCards[]{
         graph,
         button{
          ${BUTTON_FRAGMENT}
         },
         text,
       },
       testimonial{
       button{
        ${BUTTON_FRAGMENT}
       },
         name,
       rating,
       subText
         
       }
     }
`
export default function TestimonialAndStatsSlider({
  otherClasses,
  heading,
  button,
  statsCards,
  testimonial,
  _id,
  sliderCards,
  id,
}) {
  const testimonialAndStatsSliderClasses = classnames(
    otherClasses,
    'background-gradient-testimonial-and-stats-slider',
  )

  const [index, setIndex] = useState(0)

  const sliderRef = useRef(null)

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index)
  }

  function NextArrow(props) {
    const { onClick, currentSlide } = props
    useEffect(() => {
      setIndex(currentSlide)
    }, [currentSlide])
    return null
  }
  function PrevArrow(props) {
    return null
  }

  const settings = {
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    // autoplay:true,
    // autoplaySpeed:2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <section
      id={_id ? _id : id}
      className={testimonialAndStatsSliderClasses}
      data-testid="testimonial-and-stats-slider"
    >
      <div className="mx-auto flex max-w-default flex-col gap-6 px-4  pb-104 pt-20 lg:px-20 lg:pb-152 lg:pt-6 xl:px-108 ">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <Heading
            type="h3"
            otherClasses={classnames(
              'capitalize font-aeronik-pro font-normal text-white w-full text-center lg:text-start lg:max-w-760 xl:max-w-full',
            )}
          >
            {heading}
          </Heading>
          <Button {...button} mode="dark" />
        </div>
        <div className="border-gradient-testimonial-and-stats-slider mt-10 p-8 text-white lg:p-4 xl:p-10">
          <div className="flex w-full flex-col gap-0 lg:flex-row lg:gap-6">
            <div className="w-2/4 text-white"></div>
            <div className="-mb-10 flex w-2/4 gap-4 px-0 lg:px-8 xl:px-16">
              <button
                className="z-10 hover:scale-110"
                onClick={() => goToSlide(index - 1)}
              >
                <Icon
                  icon="slider-arrow-green"
                  iconHeight={32}
                  iconWidth={32}
                />
              </button>
              <button
                className="z-10 rotate-180 hover:scale-110"
                onClick={() => goToSlide(index + 1)}
              >
                <Icon
                  icon="slider-arrow-green"
                  otherClasses=""
                  iconHeight={32}
                  iconWidth={32}
                />
              </button>
            </div>
          </div>
          <Slider
            refs={sliderRef}
            customSettings={settings}
            customClass="relative testimonial-slider"
          >
            {sliderCards?.map((node, i) => {
              return (
                <TestimonialStatsCard
                  onClick={goToSlide}
                  {...node}
                  key={i}
                  mode="dark"
                />
              )
            })}
          </Slider>
        </div>
        {(statsCards?.length > 0 ||
          (Object.keys(testimonial)?.length > 0 && testimonial?.rating)) && (
          <div className="flex w-full flex-col gap-6 text-white lg:flex-row ">
            {Object.keys(testimonial)?.length > 0 && testimonial?.rating && (
              <div className="border-gradient-testimonial-and-stats-slider flex w-full flex-col gap-20  p-8 lg:w-2/4 lg:justify-between lg:gap-0 lg:p-10">
                <div className="flex flex-col gap-6">
                  <ReactStars
                    value={testimonial?.rating}
                    count={5}
                    size={20}
                    color1={'#dfeefd'}
                    color2={'#ABF57A'}
                  />
                  <RichText
                    otherClasses="[&>p]:text-2xl [&>p]:font-aeronik-pro  [&>p]:font-normal [&>p]:capitalize [&>p]:text-white "
                    richText={testimonial?.subText}
                  />
                  <p className="font-aeronik-pro text-16 font-normal leading-6 text-white">
                    {testimonial?.name}
                  </p>
                </div>
                {testimonial?.button?.slug?.current && (
                  <Button
                    {...testimonial?.button}
                    otherClasses="text-wrap"
                    mode="dark"
                  />
                )}
              </div>
            )}
            {statsCards?.length > 0 && (
              <div
                className={classnames(
                  'border-gradient-testimonial-and-stats-slider grid w-full p-8 lg:p-10 ',
                  !Object.keys(testimonial)?.length > 0 && !testimonial?.rating
                    ? 'grid-cols-1  gap-20 md:grid-cols-2 lg:w-full lg:grid-cols-4 '
                    : 'grid-cols-1  gap-20 md:grid-cols-2 lg:w-2/4',
                )}
              >
                {statsCards?.map(({ stats, description }, i) => {
                  return (
                    <div
                      key={stats}
                      className="flex flex-col gap-4 border-t-[1px] border-t-blue-400 text-white"
                    >
                      <p className="h2 pt-4 capitalize !text-green-300">
                        {stats}
                      </p>

                      <p className="font-aeronik-pro text-16 font-normal leading-6 text-white ">
                        {description}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
