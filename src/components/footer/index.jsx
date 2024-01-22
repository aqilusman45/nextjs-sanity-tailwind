import Link from 'next/link'

import Icon from '../icon'

export default function Footer() {
  return (
    <footer className=" bg-blue">
      <div className="mx-auto max-w-default px-108 pb-6 pt-20">
        <div className="flex flex-col">
          <div className="grid grid-cols-6 gap-6 border-b-[1px] border-b-blue-500 pb-92 text-white">
            <div className="col-span-2 flex w-full flex-col gap-6 pr-24">
              <Link href="/" className="border-b-[1px] border-b-blue-500 pb-6">
                <Icon
                  icon="footer-netacea-logo"
                  iconHeight={88}
                  iconWidth={88}
                />
              </Link>
              <div className="flex w-full gap-6">
                <Link
                  href="https://www.youtube.com/channel/UCMLXUedkowSUnn5rSXKUzCQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="youtube"
                    iconHeight={24}
                    iconWidth={24}
                    otherClasses=""
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/Netacea.corp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="facebook" iconHeight={24} iconWidth={24} />
                </Link>
                <Link
                  href="https://linkedin.com/company/netacea/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="linkedin" iconHeight={24} iconWidth={24} />
                </Link>
                <Link
                  href="https://twitter.com/netacea_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="twitter" iconHeight={24} iconWidth={24} />
                </Link>
                <Link href="/podcast/">
                  <Icon icon="podcast" iconHeight={24} iconWidth={24} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-[#506071]">
                  Why Netacea?
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-white">Why Netacea?</li>
                  <li className="text-white">Bot Experts</li>
                  <li className="text-white">Analyst Recognition</li>
                  <li className="text-white">Case Studies</li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-[#506071]">
                  Our company
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-white">About Netacea</li>
                  <li className="text-white">Careers</li>
                  <li className="text-white">Leadership Team</li>
                  <li className="text-white">In the News</li>
                  <li className="text-white">Contact</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-[#506071]">
                THREAT SOLUTIONS
              </p>
              <ul className="flex flex-col gap-3">
                <li className="text-white">Account Takeover</li>
                <li className="text-white">Carding Fraud</li>
                <li className="text-white">Credential Stuffing</li>
                <li className="text-white">Fake Account Creation</li>
                <li className="text-white">Loyalty Point Fraud</li>
                <li className="text-white">Skewed Marketing Analytics</li>
                <li className="text-white">Scalper Bots</li>
                <li className="text-white">Web Scraping</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-[#506071]">
                Industry SOLUTIONS
              </p>
              <ul className="flex flex-col gap-3">
                <li className="text-white">eCommerce & Retail</li>
                <li className="text-white">Bot Experts</li>
                <li className="text-white">Financial Services</li>
                <li className="text-white">Telco & ISPs</li>
              </ul>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-[#506071]">
                  Resources
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-white">Technical Documentation</li>
                  <li className="text-white">Research & Reports</li>
                  <li className="text-white">Blog</li>
                  <li className="text-white">Events & Webinars</li>
                  <li className="text-white">Data Sheets</li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-aeronik-pro text-12-less font-normal capitalize tracking-[0.48px] text-[#506071]">
                  Education
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-white">Podcast</li>
                  <li className="text-white">Glossary</li>
                  <li className="text-white">Knowledge Base</li>
                  <li className="text-white">Gartner Report Hub</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white">Bottom</div>
        </div>
      </div>
    </footer>
  )
}
