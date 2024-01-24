import { groq } from 'next-sanity'
import classnames from 'classnames'
import NetaceaDifferenceSection, { NETACEA_DIFFERENCE } from '../netacea-difference-section';

export const STATIC_SLICE_SECTION = groq`
_type == 'staticSliceSections' =>{
  ...,
    "section":section->{
    ...,
    ${NETACEA_DIFFERENCE}
   
  }
}
`

export default function StaticSliceSections({section,storybook_Type}) {
  const type = section?._type || storybook_Type || "netaceaDifference"
  switch (type) {
    case "netaceaDifference":
      return (
        <NetaceaDifferenceSection {...section} />
      );
    default:
      return null;
  }
}

