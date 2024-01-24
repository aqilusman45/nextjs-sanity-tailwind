import { groq } from 'next-sanity'

import { moduleComponents } from '~/lib/modules'
import { TWO_COLUMN_HERO_SECTIO_FRAGMENT } from '../modules/two-column-hero-section'
import { VIDEO_WITH_SECTIO_FRAGMET } from '../modules/video-with-section'
import { STATIC_SLICE_SECTION } from '../modules/static-slice-sections'

export const MODULE_FRAGMENT = groq`
  modules[] {
    ...,
    ${TWO_COLUMN_HERO_SECTIO_FRAGMENT},
    ${VIDEO_WITH_SECTIO_FRAGMET}
    ${STATIC_SLICE_SECTION}

  }
`
// Declare the below format fragment in above fragment
// ${projectsHighlightFragment},

export default function ModuleRenderer({ modules = [] }) {
  return modules?.map((module) => {
    // @ts-ignore
    const Component = moduleComponents[module._type]

    if (!Component) {
      // eslint-disable-next-line no-console
      console.error(`No component found for module type "${module._type}"`)
      return null
    }

    return (
      <div key={module._key}>
        <Component {...module} />
      </div>
    )
  })
}
