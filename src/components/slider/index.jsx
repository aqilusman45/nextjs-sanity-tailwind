import clsx from 'classnames'
import React from 'react'
import SliderSection from 'react-slick'

export const Slider = ({
  otherClasses,
  children,
  customSettings,
  customClass,
  refs,
}) => {
  const sliderClasses = clsx(otherClasses)

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...customSettings,
  }
  return (
    <div className={sliderClasses} data-testid="slider">
      <SliderSection {...settings} className={customClass} ref={refs}>
        {children}
      </SliderSection>
    </div>
  )
}

export default Slider
