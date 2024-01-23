import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import Button from '../button/Button'
import Heading from '../heading'
import Icon from '../icon'
import NextImage from '../next-image'

export default function Navbar({ button, logo, nestedLinks }) {
  const [state, setState] = useState({
    toggle: false,
  })
  return (
    <nav className="fixed left-0 top-0 w-full bg-blue-600">
      <div className="xl:px-108 relative mx-auto flex w-full max-w-default items-center justify-between px-4 py-2 lg:px-20 lg:py-0">
        <div className="flex items-center justify-between gap-10 lg:justify-start">
          <Link href="/">
            <NextImage {...logo} otherClasses="w-28 h-5" />
          </Link>
          <div
            className={classNames(
              'mobile-nav-main-container absolute left-0 top-14 flex w-full flex-col justify-between overflow-auto bg-blue-600 px-4 py-10 lg:static lg:left-auto lg:top-auto lg:w-auto lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0',
              state.toggle ? 'block' : 'hidden lg:block',
            )}
          >
            <ul className="flex flex-col items-center gap-6 lg:flex-row">
              {/* <li className="menu-container lg:h-88 group flex w-full flex-col items-start lg:w-auto lg:flex-row lg:items-center">
                <Link
                  href="/"
                  className="hidden items-center gap-1 font-aeronik-pro text-base font-normal text-white lg:flex"
                >
                  Solutions
                  <Icon
                    icon="chevron-down"
                    iconHeight={16}
                    iconWidth={16}
                    otherClasses="group-hover:rotate-180 transition-all duration-300"
                  />
                </Link>
                <button className="flex w-full items-center justify-between gap-1 font-aeronik-pro text-20 font-normal text-white lg:hidden">
                  Solutions
                  <Icon
                    icon="chevron-down"
                    iconHeight={16}
                    iconWidth={16}
                    otherClasses="group-hover:rotate-180 transition-all duration-300"
                  />
                </button>
                <div className="max-w-1320 lg:top-88  mx-auto w-full  bg-blue-600 group-hover:mt-6 lg:absolute lg:left-2/4 lg:-translate-x-2/4 lg:px-8 lg:group-hover:mt-0 lg:group-hover:py-8">
                  <div className="mb-10 hidden lg:flex lg:justify-between">
                    <Heading type="h4" otherClasses="text-white">
                      Solutions
                    </Heading>
                    <Button
                      label="View all"
                      variant="text-link-arrow"
                      mode="dark"
                      slug={{ current: '/' }}
                    />
                  </div>
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-16 xl:gap-28">
                    <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                      <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                        Solutions by product
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="lg:hidden block group-hover/nested-menu:rotate-180 transition-all duration-300"
                        />
                      </p>
                      <ul className="group-hover/nested-menu:block lg:block">
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="active-bot-protection"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Active Bot Protection
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bot-attack-intel"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Bot Attack Intel Feed
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bussiness-login-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Business Logic Intel Service
                          </Link>
                        </li>
                      </ul>
                      <Button
                        label="View All"
                        variant="text-link-arrow"
                        mode="dark"
                        otherClasses="hidden lg:flex"
                        slug={{ current: '/' }}
                      />
                    </div>
                    <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                      <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                        Solutions For Threats
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="group-hover/nested-menu:rotate-180 transition-all duration-300 lg:hidden"
                        />
                      </p>
                      <ul className="group-hover/nested-menu:block lg:block">
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="account-tackover"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Account takeover
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="carding-fraud"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Carding fraud
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="credential-stuffing"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Credential stuffing
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="credential-stuffing"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Fake account creation
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="credential-stuffing"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Loyalty point fraud
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="marketing-analytics"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Skewed marketing analytics
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="scaper-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Scalper bots
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="scaper-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Web scraping
                          </Link>
                        </li>
                      </ul>
                      <Button
                        label="View All"
                        variant="text-link-arrow"
                        mode="dark"
                        otherClasses="hidden lg:flex"
                        slug={{ current: '/' }}
                      />
                    </div>
                    <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                      <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                        Solutions For INdustry
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="group-hover/nested-menu:rotate-180 transition-all duration-300 lg:hidden"
                        />
                      </p>
                      <ul className="group-hover/nested-menu:block lg:block">
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="account-tackover"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            eCommerce & Retail
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="account-tackover"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Financial Services
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="account-tackover"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Telco & ISPs
                          </Link>
                        </li>
                      </ul>
                      <Button
                        label="View All"
                        variant="text-link-arrow"
                        mode="dark"
                        otherClasses="hidden lg:flex"
                        slug={{ current: '/' }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-container lg:h-88 group relative flex w-full flex-col items-start lg:w-auto lg:flex-row lg:items-center">
                <Link
                  href="/"
                  className="hidden items-center gap-1 font-aeronik-pro text-base font-normal text-white lg:flex"
                >
                  Why Netacea
                  <Icon
                    icon="chevron-down"
                    iconHeight={16}
                    iconWidth={16}
                    otherClasses="group-hover:rotate-180 transition-all duration-300"
                  />
                </Link>
                <button className="flex w-full items-center justify-between gap-1 font-aeronik-pro text-20 font-normal text-white lg:hidden">
                  Why Netacea
                  <Icon
                    icon="chevron-down"
                    iconHeight={16}
                    iconWidth={16}
                    otherClasses="group-hover:rotate-180 transition-all duration-300"
                  />
                </button>
                <div className="lg:top-88  lg:min-w-720 mx-auto w-full  bg-blue-600 group-hover:mt-6 lg:absolute lg:left-2/4 lg:-translate-x-2/4 lg:px-8 lg:group-hover:mt-0 lg:group-hover:py-8">
                  <div className="mb-10 hidden lg:flex lg:justify-between">
                    <Heading type="h4" otherClasses="text-white">
                      Why Netacea
                    </Heading>
                    <Button
                      label="View all"
                      variant="text-link-arrow"
                      mode="dark"
                      slug={{ current: '/' }}
                    />
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-20 ">
                    <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                      <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                        WHY NETACEA
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="lg:hidden block group-hover/nested-menu:rotate-180 transition-all duration-300"
                        />
                      </p>
                      <ul className="group-hover/nested-menu:block lg:block">
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="active-bot-protection"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            WHY NETACEA
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bot-attack-intel"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Bot Experts
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bussiness-login-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Analyst Recognition
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bussiness-login-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Case Studies
                          </Link>
                        </li>
                      </ul>
                      <Button
                        label="View All"
                        variant="text-link-arrow"
                        mode="dark"
                        otherClasses="hidden lg:flex"
                        slug={{ current: '/' }}
                      />
                    </div>
                    <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                      <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                        HOW NETACEA WORKS
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="group-hover/nested-menu:rotate-180 transition-all duration-300 lg:hidden"
                        />
                      </p>
                      <ul className="group-hover/nested-menu:block lg:block">
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="account-tackover"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Our Agentless Technology
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="carding-fraud"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Active Threat Database
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="credential-stuffing"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Intent Analytics
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="credential-stuffing"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Integrations
                          </Link>
                        </li>
                      </ul>
                      <Button
                        label="View All"
                        variant="text-link-arrow"
                        mode="dark"
                        otherClasses="hidden lg:flex"
                        slug={{ current: '/' }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-container lg:h-88 group flex w-full flex-col items-start lg:w-auto lg:flex-row lg:items-center">
                <Link
                  href="/"
                  className="hidden items-center gap-1 font-aeronik-pro text-base font-normal text-white lg:flex"
                >
                  Pricing
                </Link>
                <button className="flex w-full items-center justify-between gap-1 font-aeronik-pro text-20 font-normal text-white lg:hidden">
                  Pricing
                </button>
              </li>
              <li className="menu-container lg:h-88 group relative flex w-full flex-col items-start lg:w-auto lg:flex-row lg:items-center">
                <Link
                  href="/"
                  className="hidden items-center gap-1 font-aeronik-pro text-base font-normal text-white lg:flex"
                >
                  Resource Hub
                  <Icon
                    icon="chevron-down"
                    iconHeight={16}
                    iconWidth={16}
                    otherClasses="group-hover:rotate-180 transition-all duration-300"
                  />
                </Link>
                <button className="flex w-full items-center justify-between gap-1 font-aeronik-pro text-20 font-normal text-white lg:hidden">
                  Resource Hub
                  <Icon
                    icon="chevron-down"
                    iconHeight={16}
                    iconWidth={16}
                    otherClasses="group-hover:rotate-180 transition-all duration-300"
                  />
                </button>
                <div className="lg:top-88  lg:min-w-720 mx-auto w-full  bg-blue-600 group-hover:mt-6 lg:absolute lg:left-2/4 lg:-translate-x-2/4 lg:px-8 lg:group-hover:mt-0 lg:group-hover:py-8">
                  <div className="mb-10 hidden lg:flex lg:justify-between">
                    <Heading type="h4" otherClasses="text-white">
                      Resource Hub
                    </Heading>
                    <Button
                      label="View all"
                      variant="text-link-arrow"
                      mode="dark"
                      slug={{ current: '/' }}
                    />
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-20 ">
                    <div className="group/nested-menu menu-container-nested flex flex-col  hover:gap-4 lg:gap-6 lg:hover:gap-6">
                      <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                        RESOURCES
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="lg:hidden block group-hover/nested-menu:rotate-180 transition-all duration-300"
                        />
                      </p>
                      <ul className="group-hover/nested-menu:block lg:block">
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="active-bot-protection"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Technical Documentation
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bot-attack-intel"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Research & Reports
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bussiness-login-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Blog
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bussiness-login-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Events & Webinars
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bussiness-login-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Data Sheets
                          </Link>
                        </li>
                      </ul>
                      <Button
                        label="View All"
                        variant="text-link-arrow"
                        mode="dark"
                        otherClasses="hidden lg:flex"
                        slug={{ current: '/' }}
                      />
                    </div>
                    <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                      <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                        EDUCATION
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="group-hover/nested-menu:rotate-180 transition-all duration-300 lg:hidden"
                        />
                      </p>
                      <ul className="group-hover/nested-menu:block lg:block">
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="account-tackover"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Podcast
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="carding-fraud"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Glossary
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="credential-stuffing"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Knowledge Base
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="credential-stuffing"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Gartner Report Hub
                          </Link>
                        </li>
                      </ul>
                      <Button
                        label="View All"
                        variant="text-link-arrow"
                        mode="dark"
                        otherClasses="hidden lg:flex"
                        slug={{ current: '/' }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-container lg:h-88 group relative flex w-full flex-col items-start lg:w-auto lg:flex-row lg:items-center">
                <Link
                  href="/"
                  className="hidden items-center gap-1 font-aeronik-pro text-base font-normal text-white lg:flex"
                >
                  Company
                  <Icon
                    icon="chevron-down"
                    iconHeight={16}
                    iconWidth={16}
                    otherClasses="group-hover:rotate-180 transition-all duration-300"
                  />
                </Link>
                <button className="flex w-full items-center justify-between gap-1 font-aeronik-pro text-20 font-normal text-white lg:hidden">
                  Company
                  <Icon
                    icon="chevron-down"
                    iconHeight={16}
                    iconWidth={16}
                    otherClasses="group-hover:rotate-180 transition-all duration-300"
                  />
                </button>
                <div className="lg:top-88  mx-auto w-full bg-blue-600  group-hover:mt-6 lg:absolute lg:left-2/4 lg:min-w-80 lg:-translate-x-2/4 lg:px-8 lg:group-hover:mt-0 lg:group-hover:py-8">
                  <div className="mb-10 hidden lg:flex lg:justify-between">
                    <Heading type="h4" otherClasses="text-white">
                      Company
                    </Heading>
                    <Button
                      label="View all"
                      variant="text-link-arrow"
                      mode="dark"
                      slug={{ current: '/' }}
                    />
                  </div>
                  <div className="grid gap-6 lg:gap-20 ">
                    <div className="flex flex-col  gap-6 hover:gap-4 lg:hover:gap-6">
                      <p className="hidden justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:flex lg:justify-start lg:text-xs">
                        OUR COMPANY
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="lg:hidden block group-hover/nested-menu:rotate-180 transition-all duration-300"
                        />
                      </p>
                      <ul className="">
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="active-bot-protection"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            About Netacea
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bot-attack-intel"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Careers
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bussiness-login-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            In the News
                          </Link>
                        </li>
                        <li className="border-b-[1px] border-b-blue-200 py-4 ">
                          <Link
                            href="/"
                            className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                          >
                            <Icon
                              icon="bussiness-login-icon"
                              iconHeight={16}
                              iconWidth={16}
                            />
                            Contact
                          </Link>
                        </li>
                      </ul>
                      <Button
                        label="View All"
                        variant="text-link-arrow"
                        mode="dark"
                        otherClasses="hidden lg:flex"
                        slug={{ current: '/' }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-container lg:h-88 group flex w-full flex-col items-start lg:w-auto lg:flex-row lg:items-center">
                <Link
                  href="/"
                  className="hidden items-center gap-1 font-aeronik-pro text-base font-normal text-white lg:flex"
                >
                  Partners
                </Link>
                <button className="flex w-full items-center justify-between gap-1 font-aeronik-pro text-20 font-normal text-white lg:hidden">
                  Partners
                </button>
              </li> */}
              {nestedLinks.map((node) => {
                return (
                  <li className="menu-container lg:h-88 group flex w-full flex-col items-start lg:w-auto lg:flex-row lg:items-center">
                    <Link
                      href={node?.slug?.current}
                      className="hidden items-center gap-1 font-aeronik-pro text-base font-normal text-white lg:flex"
                    >
                      {node?.title}
                      <Icon
                        icon="chevron-down"
                        iconHeight={16}
                        iconWidth={16}
                        otherClasses="group-hover:rotate-180 transition-all duration-300"
                      />
                    </Link>
                    <button className="flex w-full items-center justify-between gap-1 font-aeronik-pro text-20 font-normal text-white lg:hidden">
                      {node?.title}
                      <Icon
                        icon="chevron-down"
                        iconHeight={16}
                        iconWidth={16}
                        otherClasses="group-hover:rotate-180 transition-all duration-300"
                      />
                    </button>
                    <div className="max-w-1320 lg:top-88  mx-auto w-full  bg-blue-600 group-hover:mt-6 lg:absolute lg:left-2/4 lg:-translate-x-2/4 lg:px-8 lg:group-hover:mt-0 lg:group-hover:py-8">
                      <div className="mb-10 hidden lg:flex lg:justify-between">
                        <Heading type="h4" otherClasses="text-white">
                          {node?.title}
                        </Heading>
                        <Button
                          label="View all"
                          variant="text-link-arrow"
                          mode="dark"
                          slug={node?.slug}
                        />
                      </div>
                      <div className="grid gap-6 lg:grid-cols-3 lg:gap-16 xl:gap-28">
                        {node.subLinks.map((nestedNode) => {
                          // console.log(nestedNode)
                          return (
                            <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                              {nestedNode.url ? (
                                <Link
                                  href={`/${nestedNode?.slug?.current}`}
                                  className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs"
                                >
                                  {nestedNode?.category}
                                  <Icon
                                    icon="chevron-down"
                                    iconHeight={16}
                                    iconWidth={16}
                                    otherClasses="lg:hidden block group-hover/nested-menu:rotate-180 transition-all duration-300"
                                  />
                                </Link>
                              ) : (
                                <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                                  {nestedNode?.category}
                                  <Icon
                                    icon="chevron-down"
                                    iconHeight={16}
                                    iconWidth={16}
                                    otherClasses="lg:hidden block group-hover/nested-menu:rotate-180 transition-all duration-300"
                                  />
                                </p>
                              )}
                              <ul className="group-hover/nested-menu:block lg:block">
                                {nestedNode?.links.map((linksNode) => {
                                  return (
                                    <li className="border-b-[1px] border-b-blue-200 py-4 ">
                                      <Link
                                        href={`/${linksNode?.slug?.current}`}
                                        className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                                      >
                                        <Icon
                                          icon={linksNode?.icon}
                                          iconHeight={16}
                                          iconWidth={16}
                                        />
                                        {linksNode?.title}
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                              <Button
                                {...nestedNode?.button}
                                otherClasses="hidden lg:flex"
                              />
                            </div>
                          )
                        })}
                        {/* <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                          <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                            Solutions For Threats
                            <Icon
                              icon="chevron-down"
                              iconHeight={16}
                              iconWidth={16}
                              otherClasses="group-hover/nested-menu:rotate-180 transition-all duration-300 lg:hidden"
                            />
                          </p>
                          <ul className="group-hover/nested-menu:block lg:block">
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="account-tackover"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Account takeover
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="carding-fraud"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Carding fraud
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="credential-stuffing"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Credential stuffing
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="credential-stuffing"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Fake account creation
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="credential-stuffing"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Loyalty point fraud
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="marketing-analytics"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Skewed marketing analytics
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="scaper-icon"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Scalper bots
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="scaper-icon"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Web scraping
                              </Link>
                            </li>
                          </ul>
                          <Button
                            label="View All"
                            variant="text-link-arrow"
                            mode="dark"
                            otherClasses="hidden lg:flex"
                            slug={{ current: '/' }}
                          />
                        </div>
                        <div className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6">
                          <p className="flex justify-between font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs">
                            Solutions For INdustry
                            <Icon
                              icon="chevron-down"
                              iconHeight={16}
                              iconWidth={16}
                              otherClasses="group-hover/nested-menu:rotate-180 transition-all duration-300 lg:hidden"
                            />
                          </p>
                          <ul className="group-hover/nested-menu:block lg:block">
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="account-tackover"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                eCommerce & Retail
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="account-tackover"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Financial Services
                              </Link>
                            </li>
                            <li className="border-b-[1px] border-b-blue-200 py-4 ">
                              <Link
                                href="/"
                                className="flex items-center gap-4 font-aeronik-pro text-base font-normal text-white transition-all duration-300 hover:text-blue-200"
                              >
                                <Icon
                                  icon="account-tackover"
                                  iconHeight={16}
                                  iconWidth={16}
                                />
                                Telco & ISPs
                              </Link>
                            </li>
                          </ul>
                          <Button
                            label="View All"
                            variant="text-link-arrow"
                            mode="dark"
                            otherClasses="hidden lg:flex"
                            slug={{ current: '/' }}
                          />
                        </div> */}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="w-full lg:hidden">
              <Button
                label="Login"
                variant="primary"
                mode="dark"
                otherClasses="w-full block text-center justify-center"
                slug={{ current: '/' }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-6">
          <button className="flex items-center gap-1">
            <Icon icon="navbar-search-icon" iconHeight={14} iconWidth={14} />
            <span className="hidden font-aeronik-pro text-base text-white lg:block">
              Search
            </span>
          </button>
          {button.map((node, i) => {
            return (
              <Button
                {...node}
                otherClasses={classNames(i === 0 && 'lg:flex hidden')}
              />
            )
          })}

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1 overflow-hidden lg:hidden"
            onClick={() =>
              setState((prev) => ({
                ...prev,
                toggle: !state.toggle,
              }))
            }
          >
            <span
              className={classNames(
                'block h-[2px] w-6 rounded bg-white transition-all duration-300',
                state.toggle
                  ? 'translate-x-0 translate-y-[6px] rotate-[45deg]'
                  : '',
              )}
            ></span>
            <span
              className={classNames(
                'block h-[2px] w-6 rounded bg-white transition-all duration-300',
                state.toggle ? 'translate-x-10' : '',
              )}
            ></span>
            <span
              className={classNames(
                'block h-[2px] w-6 rounded bg-white transition-all duration-300',
                state.toggle ? '-translate-y-[6px] rotate-[-45deg]' : '',
              )}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
