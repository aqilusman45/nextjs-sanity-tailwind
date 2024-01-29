import Link from 'next/link'

import Icon from '../icon'
import RichText from '../rich-text'

export default function Footer({
  contactHref,
  contactTitle,
  copyright,
  facebookUrl,
  footerLinks,
  linkedInUrl,
  links,
  podcastUrl,
  twitterUrl,
  youtubeUrl,
}) {
  return (
    <footer className=" bg-blue">
      <div className="mx-auto max-w-default px-4 pb-6 pt-10 md:pt-20 lg:px-16 xl:px-108">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-6 border-b-[1px] border-b-blue-500 pb-92 text-white sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
            <div className="col-span-1 flex w-full flex-col gap-6 sm:col-span-2 md:col-span-4 md:w-2/4 xl:col-span-2 xl:w-full xl:pr-24">
              <Link href="/" className="group w-fit">
                <Icon
                  icon="footer-netacea-logo"
                  iconHeight={88}
                  iconWidth={88}
                  otherClasses="block group-hover:hidden"
                />
                <Icon
                  icon="footer-netace-blue-logo"
                  iconHeight={88}
                  iconWidth={88}
                  otherClasses="hidden group-hover:block"
                />
              </Link>
              <hr className="mb-6 border-[1px] border-blue-500" />
              <div className="flex w-full gap-6">
                <Link
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Icon
                    icon="youtube"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="block group-hover:hidden"
                  />
                  <Icon
                    icon="youtube-blue"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="hidden group-hover:block"
                  />
                </Link>
                <Link
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Icon
                    icon="facebook"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="block group-hover:hidden"
                  />
                  <Icon
                    icon="facebook-blue"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="hidden group-hover:block"
                  />
                </Link>
                <Link
                  href={linkedInUrl}
                  target="_blank"
                  className="group"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="linkedin"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="block group-hover:hidden"
                  />
                  <Icon
                    icon="linkedin-blue"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="hidden group-hover:block"
                  />
                </Link>
                <Link
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Icon
                    icon="twitter"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="block group-hover:hidden"
                  />
                  <Icon
                    icon="twitter-blue"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="hidden group-hover:block"
                  />
                </Link>
                <Link href={podcastUrl?.current} className="group">
                  <Icon
                    icon="podcast"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="block group-hover:hidden"
                  />
                  <Icon
                    icon="podcast-blue"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses="hidden group-hover:block"
                  />
                </Link>
              </div>
            </div>
            {footerLinks?.map(({ parentLinks }, i) => {
              return (
                <div key={i} className="flex flex-col gap-10">
                  {parentLinks?.map(({ childLinks, title }) => {
                    return (
                      <div key={title} className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                          <p className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-gray">
                            {title}
                          </p>
                          <ul className="flex flex-col gap-3">
                            {childLinks?.map(({ title, slug: { current } }) => {
                              return (
                                <li key={title}>
                                  <Link
                                    className="font-aeronik-pro text-base font-normal text-white hover:text-blue-200"
                                    href={`/${current}`}
                                  >
                                    {title}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
          <div className="flex flex-col gap-6 pb-10 pt-6 lg:flex-row">
            <div className=" w-full lg:w-2/4">
              <RichText
                richText={copyright}
                otherClasses="[&>p]:text-12-more [&>p]:text-white [&>p]:font-normal [&>p]:font-normal [&>p]:font-aeronik-pro [&>p]:pb-3"
              />

              <p className="font-aeronik-pro text-12-more font-normal text-white">
                Contact
                <Link
                  className="pl-1 font-aeronik-pro text-12-more font-normal text-green-300 hover:text-green-400"
                  href={contactHref}
                >
                  {contactTitle}
                </Link>
              </p>
            </div>
            <div className="flex w-full flex-wrap items-start justify-center gap-4 sm:flex-nowrap sm:gap-6 lg:w-2/4 lg:justify-end">
              {links?.map(({ title, slug: { current } }) => {
                return (
                  <Link
                    key={title}
                    className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-blue-100 hover:text-blue-200"
                    href={`/${current}`}
                  >
                    {title}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
