import { ReactComponent as Facebook } from 'icons/facebook.svg'
import { ReactComponent as FooterNetaceaLogo } from 'icons/footer-netacea-logo.svg'
import { ReactComponent as Linkedin } from 'icons/linkedin.svg'
import { ReactComponent as Podcast } from 'icons/podcast.svg'
import { ReactComponent as Twitter } from 'icons/twitter.svg'
import { ReactComponent as Youtube } from 'icons/youtube.svg'
import Link from 'next/link'

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
              <div className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="footer w-fit text-white transition-all duration-400 hover:text-green-300"
                >
                  <FooterNetaceaLogo className="svg-fill-currentColor " />
                </Link>
                <div className="flex w-full items-center gap-6 border-t-[1px] border-t-blue-500 pt-6 ">
                  <Link
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-all duration-400 hover:text-green-300"
                  >
                    <Youtube className=" svg-fill-currentColor" />
                  </Link>
                  <Link
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-all duration-400 hover:text-green-300"
                  >
                    <Facebook className="svg-fill-currentColor" />
                  </Link>
                  <Link
                    href={linkedInUrl}
                    target="_blank"
                    className="text-white transition-all duration-400 hover:text-green-300"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="svg-fill-currentColor" />
                  </Link>
                  <Link
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-all duration-400 hover:text-green-300"
                  >
                    <Twitter className="svg-fill-currentColor" />
                  </Link>
                  <Link
                    href={podcastUrl?.current}
                    className="text-white transition-all duration-400 hover:text-green-300"
                  >
                    <Podcast className="svg-fill-currentColor" />
                  </Link>
                </div>
              </div>
            </div>
            {footerLinks?.map(({ parentLinks }, i) => {
              return (
                <div key={i} className="flex flex-col gap-10">
                  {parentLinks?.map(({ childLinks, title }) => {
                    return (
                      <div key={title} className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                          <p className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-footer">
                            {title}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {childLinks?.map(({ title, slug: { current } }) => {
                              return (
                                <li key={title}>
                                  <Link
                                    className="font-aeronik-pro text-base font-normal text-white transition-all duration-400 hover:text-green-300"
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
                otherClasses="[&>p]:text-12-more [&>p]:text-white [&>p]:font-normal  [&>p]:font-aeronik-pro [&>p]:pb-3"
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
                    className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-white transition-all duration-400 hover:text-green-300"
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
