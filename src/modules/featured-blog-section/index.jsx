import classnames from 'classnames'
import { groq } from 'next-sanity'

import Button, { BUTTON_FRAGMENT } from '../../components/button/Button'
import FeaturedBlogCard from '../../components/featured-blog-card'
import Heading from '../../components/heading'
import NextImage, { IMAGE_FRAGMENT } from '../../components/next-image'

export const FEATURED_BLOG_FRAGMENT = groq`
  _type == "featuredBlogSection" => {
    heading,
    variant,
    cards[]->{
      publishedAt,
      title,
      featured,
      author->{
        name
      },
      subDescription,
      categories[]->{
        title
      },
      "cardImage":cardImage.asset->{
        ${IMAGE_FRAGMENT}
      }
    },
    button{
     ${BUTTON_FRAGMENT}
    } 
  }
`

export default function FeaturedBlogSection({
  otherClasses,
  variant,
  heading,
  cards,
  button,
}) {
  const featuredBlogSectionClasses = classnames(
    otherClasses,
    'w-full py-20 lg:py-120 relative',
    variant === 'dark'
      ? 'featured-blog-dark-back'
      : 'bg-white featured-blog-light-back',
  )

  return (
    <section
      className={featuredBlogSectionClasses}
      data-testid="featured-blog-section"
    >
      <div className="mx-auto w-full max-w-default  px-4 lg:px-20 xl:px-108">
        <div className="mb-8 flex items-start justify-between lg:mb-14">
          <Heading
            type="h3"
            otherClasses={classnames(
              variant === 'dark' ? 'text-white' : 'text-blue',
            )}
          >
            {heading}
          </Heading>
          <Button {...button} mode={variant} otherClasses="hidden md:flex" />
        </div>
        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards?.map((node, i) => {
            return <FeaturedBlogCard key={i} {...node} variant={variant} />
          })}
        </div>
        <Button
          {...button}
          mode={variant}
          otherClasses="w-full !justify-center lg:justify-start mt-4x md:hidden"
        />
      </div>
    </section>
  )
}
