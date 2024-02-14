import classnames from 'classnames'
import { groq } from 'next-sanity'

import Button from '../button/Button'
import Heading from '../heading'
import IconWithCurrentColor from '../icon-with-current-color'
import NextImage from '../next-image'
import RichText from '../rich-text'

export const fragment = groq`
`

export default function FeaturedBlogCard({
  otherClasses,
  author,
  cardImage,
  featured,
  subDescription,
  title,
  publishedAt,
  variant,
}) {
  const featuredBlogCardClasses = classnames(
    otherClasses,
    'group featured-blog-box-shadow h-full flex flex-col ',
  )

  const originalDate = new Date(publishedAt)
  const year = originalDate.getFullYear().toString().substr(-2)
  const month = (originalDate.getMonth() + 1).toString().padStart(2, '0')
  const day = originalDate.getDate().toString().padStart(2, '0')
  const formattedDate = `${month}/${day}/${year}`

  return (
    <div className={featuredBlogCardClasses} data-testid="featured-blog-card">
      <NextImage
        {...cardImage}
        otherClasses="w-full rounded-t min-h-282 h-282"
      />
      <div className="featured-blog-card-inner h-full w-full rounded-b transition-all duration-400">
        <div className="flex h-full w-full flex-col justify-between gap-10 rounded-b-[3px] bg-white p-6">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={classnames(
                    'rounded border-[1px] border-blue-300 p-2 text-blue-300',
                  )}
                >
                  <IconWithCurrentColor
                    icon="file-icon"
                    className="[&>path]:stroke-current"
                  />
                </span>
                <p className="text-xs font-normal text-blue">Blog</p>
              </div>
              <div className="flex gap-1">
                <p className="text-sm leading-normal text-blue">{`${author?.name} |`}</p>
                <p className="text-sm leading-normal text-blue">{` ${formattedDate}`}</p>
              </div>
            </div>
            <Heading type="h4" otherClasses="text-blue">
              {title}
            </Heading>
            <RichText richText={subDescription} otherClasses="mt-6" />
          </div>
          <Button label="Read Now" variant="text-link-arrow" mode="light" />
        </div>
      </div>
    </div>
  )
}
