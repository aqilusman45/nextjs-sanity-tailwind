import { groq } from 'next-sanity'
import classnames from 'classnames'

export const fragment = groq`
`

export default function TwoColumnnHeroSectionn({otherClasses}) {

  const twoColumnnHeroSectionnClasses = classnames(otherClasses);
  
  return (
    <section className={twoColumnnHeroSectionnClasses} data-testid='two-columnn-hero-sectionn'>
        two-columnn-hero-sectionn Modules!
    </section>
  )
}

