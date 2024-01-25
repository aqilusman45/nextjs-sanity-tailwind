import { groq } from 'next-sanity'
import classnames from 'classnames'
import NetaceaDifferenceSection, {
  NETACEA_DIFFERENCE,
} from '../netacea-difference-section'
import WithOrWithoutNetacea, {
  WITH_OR_WITHOUT_NETACEA_FRAGMET,
} from '../with-or-without-netacea'

export const STATIC_SLICE_SECTION = groq`
_type == 'staticSliceSections' =>{
  ...,
    "section":section->{
    ...,
    ${NETACEA_DIFFERENCE},
    ${WITH_OR_WITHOUT_NETACEA_FRAGMET}
   
  }
}
`

export default function StaticSliceSections({ section, storybook_Type }) {
  const type = section?._type || storybook_Type || 'netaceaDifference'
  switch (type) {
    case 'netaceaDifference':
      return <NetaceaDifferenceSection {...section} />
    case 'withOrWithoutNetacea':
      console.log(section)
      return <WithOrWithoutNetacea {...section} />
    default:
      return null
  }
}
