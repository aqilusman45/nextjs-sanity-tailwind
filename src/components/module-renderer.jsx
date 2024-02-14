import { groq } from 'next-sanity'

import { moduleComponents } from '~/lib/modules'

import { STATIC_SLICE_SECTION } from '../modules/static-slice-sections'
import { TWO_COLUMN_FORM } from '../modules/two-column-form'
import { TWO_COLUMN_HERO_SECTIO_FRAGMENT } from '../modules/two-column-hero-section'
import { VIDEO_WITH_SECTIO_FRAGMET } from '../modules/video-with-text-section'

export const MODULE_FRAGMENT = groq`
  modules[] {
    ...,
    ${TWO_COLUMN_HERO_SECTIO_FRAGMENT},
    ${VIDEO_WITH_SECTIO_FRAGMET},
    ${STATIC_SLICE_SECTION},
    ${TWO_COLUMN_FORM}

  }
`
// Declare the below format fragment in above fragment
// ${projectsHighlightFragment},

export default function ModuleRenderer({ _id, modules = [] }) {
  return modules?.map((module) => {
    // @ts-ignore
    const Component = moduleComponents[module._type]

    if (!Component) {
      // eslint-disable-next-line no-console
      console.error(`No component found for module type "${module._type}"`)
      return null
    }

    return <Component key={module._key} id={_id} {...module} />
  })
}
