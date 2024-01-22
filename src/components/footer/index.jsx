import Link from 'next/link'

import Icon from '../icon'

export default function Footer() {
  return (
    <footer className=" bg-blue">
     
      <div className="max-w-default mx-auto px-4 lg:px-20 xl:px-108 pt-10 md:pt-20 pb-6">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 pb-92 border-b-[1px] border-b-blue-500 text-white">
            <div className="w-full md:w-2/4 xl:w-full flex flex-col gap-6 col-span-1 sm:col-span-2 md:col-span-4 xl:col-span-2 xl:pr-24">
              <Link href="/" className="border-b-[1px] border-b-blue-500 pb-6 group">
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
                  href="https://www.youtube.com/channel/UCMLXUedkowSUnn5rSXKUzCQ"
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
                  href="https://www.facebook.com/Netacea.corp/"
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
                  href="https://linkedin.com/company/netacea/"
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
                  href="https://twitter.com/netacea_ai"
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
                <Link href="/podcast/" className="group">
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
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="font-aeronik-pro text-12-less capitalize tracking-[0.48px] font-normal text-gray">
                  Why Netacea?
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Why Netacea?
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Bot Experts
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Analyst Recognition
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Case Studies
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-aeronik-pro text-12-less capitalize tracking-[0.48px] font-normal text-gray">
                  Our company
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    About Netacea
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Careers
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Leadership Team
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    In the News
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-aeronik-pro text-12-less capitalize tracking-[0.48px] font-normal text-gray">
                THREAT SOLUTIONS
              </p>
              <ul className="flex flex-col gap-3">
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Account Takeover
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Carding Fraud
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Credential Stuffing
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Fake Account Creation
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Loyalty Point Fraud
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Skewed Marketing Analytics
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Scalper Bots
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Web Scraping
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-aeronik-pro text-12-less capitalize tracking-[0.48px] font-normal text-gray">
                Industry SOLUTIONS
              </p>
              <ul className="flex flex-col gap-3">
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  eCommerce & Retail
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Bot Experts
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Financial Services
                </li>
                <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                  Telco & ISPs
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="font-aeronik-pro text-12-less capitalize tracking-[0.48px] font-normal text-gray">
                  Resources
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Technical Documentation
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Research & Reports
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Blog
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Events & Webinars
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Data Sheets
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-aeronik-pro text-12-less capitalize tracking-[0.48px] font-normal text-gray">
                  Education
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Podcast
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Glossary
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Knowledge Base
                  </li>
                  <li className="text-white text-base font-aeronik-pro font-normal hover:text-blue-200 ">
                    Gartner Report Hub
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col lg:flex-row gap-6 pb-10">
            <div className=" w-full lg:w-2/4">
              <p className="text-12-more font-aeronik-pro font-normal text-white ">
                Copyright © Netacea Limited, 2023. All rights reserved.{" "}
              </p>
              <p className="text-12-more font-aeronik-pro font-normal text-white pt-3">
                Netacea Limited is a company registered in England with company
                number 11566936, registered address 4th Floor Maybrook House, 40
                Blackfriars Street, Manchester, UK, M2 2EG and VAT number
                GB339164782.{" "}
              </p>
              <p className="text-12-more font-aeronik-pro font-normal text-white pt-3">
                Contact
                <Link
                  className="pl-1 text-12-more font-aeronik-pro font-normal text-green-300"
                  href="mailto:hello@netacea.com"
                >
                  hello@netacea.com.
                </Link>{" "}
              </p>
            </div>
            <div className="w-full lg:w-2/4 flex gap-4 flex-wrap sm:flex-nowrap sm:gap-6 items-start justify-center lg:justify-end">
              <p className="text-blue-100 tracking-[0.48px] text-12-less capitalize font-aeronik-pro font-normal hover:text-blue-200 ">
                Privacy Policy
              </p>
              <p className="text-blue-100 tracking-[0.48px]  text-12-less capitalize  font-aeronik-pro font-normal hover:text-blue-200 ">
                Terms & Conditions
              </p>
              <p className="text-blue-100 tracking-[0.48px]  text-12-less capitalize  font-aeronik-pro font-normal hover:text-blue-200 ">
                Acceptable Use
              </p>
              <p className="text-blue-100 tracking-[0.48px]  text-12-less capitalize  font-aeronik-pro font-normal hover:text-blue-200 ">
                Cookies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
