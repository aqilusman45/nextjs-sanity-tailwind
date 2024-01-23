import Link from "next/link";

import Icon from "../icon";
import RichText from "../rich-text";

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
      <div className="max-w-default mx-auto px-4 lg:px-20 xl:px-108 pt-10 md:pt-20 pb-6">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 pb-92 border-b-[1px] border-b-blue-500 text-white">
            <div className="w-full md:w-2/4 xl:w-full flex flex-col gap-6 col-span-1 sm:col-span-2 md:col-span-4 xl:col-span-2 xl:pr-24">
              <Link
                href="/"
                className="border-b-[1px] border-b-blue-500 pb-6 group"
              >
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
            {footerLinks?.map(({parentLinks}) => {
              return (
                <div className="flex flex-col gap-10">
                  {parentLinks?.map(({childLinks,title}) => {
                    return (
                      <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                          <p className="font-aeronik-pro text-12-less capitalize tracking-[0.48px] font-normal text-gray">
                            {title}
                          </p>
                          <ul className="flex flex-col gap-3">
                            {
                              childLinks?.map(({title,slug:{current}})=>{
                                return (
                                  <li><Link className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200" href={`/${current}`}>{title}</Link></li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="pt-6 flex flex-col lg:flex-row gap-6 pb-10">
            <div className=" w-full lg:w-2/4">
              <RichText
                richText={copyright}
                otherClasses="[&>p]:text-12-more [&>p]:text-white [&>p]:font-normal [&>p]:font-normal [&>p]:font-aeronik-pro [&>p]:pb-3"
              />

              <p className="text-12-more font-aeronik-pro font-normal text-white">
                Contact
                <Link
                  className="pl-1 text-12-more font-aeronik-pro font-normal text-green-300 hover:text-green-400"
                  href={contactHref}
                >
                  {contactTitle}
                </Link>
              </p>
            </div>
            <div className="w-full lg:w-2/4 flex gap-4 flex-wrap sm:flex-nowrap sm:gap-6 items-start justify-center lg:justify-end">
              {links?.map(({ title, slug: { current } }) => {
                return (
                  <Link
                    key={title}
                    className="text-blue-100 tracking-[0.48px] text-12-less capitalize font-aeronik-pro font-normal hover:text-blue-200"
                    href={`/${current}`}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
