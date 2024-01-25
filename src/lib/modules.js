import dynamic from 'next/dynamic'
import { default as twoColumnHeroSection } from '../modules/two-column-hero-section/index'
// import { default as videoWithTextSection } from '../modules/video-with-section/index'
const videoWithTextSection = dynamic(
  () => import('../modules/video-with-text-section/index'),
  { ssr: false },
)
import { default as staticSliceSections } from '../modules/static-slice-sections/index'
import { default as testimonialAndStatsSlider } from '../modules/testimonial-and-stats-slider/index'

export const moduleComponents = {
  twoColumnHeroSection,
  videoWithTextSection,
  staticSliceSections,
  testimonialAndStatsSlider
}
