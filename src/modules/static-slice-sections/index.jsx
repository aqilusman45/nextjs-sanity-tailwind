import { groq } from 'next-sanity'
import classnames from 'classnames'

export const fragment = groq`
`

export default function StaticSliceSections({otherClasses}) {

  const staticSliceSectionsClasses = classnames(otherClasses);
  
  return (
    <section className={staticSliceSectionsClasses} data-testid='static-slice-sections'>
        static-slice-sections Modules!
    </section>
  )
}

