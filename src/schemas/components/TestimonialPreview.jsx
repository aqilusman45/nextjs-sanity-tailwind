import React from 'react'
import SvgAnimator from '../../components/svg-animator';

const TestimonialPreview = ({title}) => {
    if(!title){
        return null
    }
  return (
    <div className='border-gradient-testimonial-and-stats-slider px-4 py-4  h-[200px]'>
      <SvgAnimator type={title} />
    </div>
  )
}

export default TestimonialPreview
