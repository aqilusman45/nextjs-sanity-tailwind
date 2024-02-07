import dynamic from 'next/dynamic'

import { default as twoColumnHeroSection } from '../modules/two-column-hero-section/'
// import { default as videoWithTextSection } from '../modules/video-with-section/index'
const videoWithTextSection = dynamic(
  () => import('../modules/video-with-text-section/'),
  { ssr: false },
)
import { default as staticSliceSections } from '../modules/static-slice-sections/'
import { default as testimonialAndStatsSlider } from '../modules/testimonial-and-stats-slider/'
import { default as twoColumnForm } from '../modules/two-column-form/'

export const moduleComponents = {
  twoColumnHeroSection,
  videoWithTextSection,
  staticSliceSections,
  testimonialAndStatsSlider,
  twoColumnForm

}
