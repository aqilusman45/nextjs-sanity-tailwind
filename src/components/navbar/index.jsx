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
    <nav className="fixed left-0 top-0 z-50 w-full bg-blue-600">
      <div className="relative mx-auto flex w-full max-w-default items-center justify-between px-4 py-2 lg:px-16 lg:py-0 xl:px-108">
        <div className="flex items-center justify-between gap-10 lg:justify-start lg:gap-4 xl:gap-10">
          <Link href="/">
            <NextImage {...logo} otherClasses="w-28 h-5" />
          </Link>
          <div
            className={classNames(
              'mobile-nav-main-container absolute left-0 top-14 flex w-full flex-col justify-between overflow-auto bg-blue-600 px-4 py-10 lg:static lg:left-auto lg:top-auto lg:w-auto lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0',
              state.toggle ? 'block' : 'hidden lg:block',
            )}
          >
            <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-3 xl:gap-6">
              {nestedLinks?.map((node, index) => {
                return (
                  <li
                    key={`${index}-${node?.title}`}
                    className="menu-container group flex w-full flex-col items-start lg:h-88 lg:w-auto lg:flex-row lg:items-center"
                  >
                    <div className="flex w-full items-center justify-between gap-1 lg:w-auto lg:justify-start">
                      <Link
                        href={node?.slug?.current}
                        className="w-fit font-aeronik-pro text-20 font-normal text-white lg:w-auto lg:text-base"
                      >
                        {node?.title}
                      </Link>
                      {node?.subLinks?.length > 0 && (
                        <Icon
                          icon="chevron-down"
                          iconHeight={16}
                          iconWidth={16}
                          otherClasses="group-hover:rotate-180 transition-all duration-300"
                        />
                      )}
                    </div>
                    {node?.subLinks?.length > 0 && (
                      <div
                        className={classNames(
                          'category-menu-link mx-auto w-full bg-blue-600 group-hover:mt-6 lg:absolute lg:left-2/4 lg:top-88 lg:-translate-x-2/4 lg:px-8 lg:group-hover:mt-0 lg:group-hover:py-8',
                          node?.subLinks?.length === 1 && 'lg:max-w-80',
                          node?.subLinks?.length === 2 && 'lg:max-w-720',
                          node?.subLinks?.length === 3 && 'lg:max-w-1320',
                        )}
                      >
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
                        <div
                          className={classNames(
                            'grid gap-6 lg:gap-16 xl:gap-28',
                            node?.subLinks?.length === 1 && 'lg:grid-cols-1',
                            node?.subLinks?.length === 2 && 'lg:grid-cols-2',
                            node?.subLinks?.length === 3 && 'lg:grid-cols-3',
                          )}
                        >
                          {node.subLinks.map((nestedNode, index) => {
                            return (
                              <div
                                key={`${index}-${nestedNode?.category}`}
                                className="group/nested-menu menu-container-nested flex flex-col hover:gap-4 lg:gap-6 lg:hover:gap-6"
                              >
                                {nestedNode.url ? (
                                  <div className="flex justify-between">
                                    <Link
                                      href={nestedNode?.slug?.current.startsWith("/")?`${nestedNode?.slug?.current}`:`/${nestedNode?.slug?.current}`}
                                      className=" font-aeronik-pro text-lg font-normal text-white/50 lg:justify-start lg:text-xs"
                                    >
                                      {nestedNode?.category}
                                    </Link>
                                    <Icon
                                      icon="chevron-down"
                                      iconHeight={16}
                                      iconWidth={16}
                                      otherClasses="lg:hidden block group-hover/nested-menu:rotate-180 transition-all duration-300"
                                    />
                                  </div>
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
                                  {nestedNode?.links.map((linksNode, index) => {
                                    return (
                                      <li
                                        key={`${index}-${linksNode?.title}`}
                                        className="border-b-[1px] border-b-blue-200 py-4 "
                                      >
                                        <Link
                                          href={linksNode?.slug?.current.startsWith("/")?`${linksNode?.slug?.current}`:`/${linksNode?.slug?.current}`}
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
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
            {button?.length > 0 && (
              <div className="w-full lg:hidden">
                <Button
                  {...button[0]}
                  otherClasses="w-full block text-center justify-center"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 xl:gap-6">
          <button className="flex items-center gap-1">
            <span className="block h-6 w-6 xl:h-4 xl:w-4">
              <Icon
                icon="navbar-search-icon"
                iconHeight="100%"
                iconWidth="100%"
              />
            </span>
            <span className="hidden font-aeronik-pro text-base text-white xl:block">
              Search
            </span>
          </button>
          {button?.map((node, i) => {
            return (
              <Button
                {...node}
                key={i}
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
