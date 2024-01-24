import dynamic from 'next/dynamic'
import { default as twoColumnHeroSection } from '../modules/two-column-hero-section/index'
// import { default as videoWithTextSection } from '../modules/video-with-section/index'
const videoWithTextSection = dynamic(
  () => import('../modules/video-with-section/index'),
  { ssr: false },
)

export const moduleComponents = {
  twoColumnHeroSection,
  videoWithTextSection,
}
