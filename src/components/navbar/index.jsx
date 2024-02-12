import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import Button from '../button/Button'
import Heading from '../heading'
import Icon from '../icon'
import NextImage from '../next-image'
import { ChevronDown } from 'icons'
import { FileIcon, NavbarSearchIcon } from '../../../icons'
import RichText from '../rich-text'

export default function Navbar({ button, logo, nestedLinks }) {
  const [state, setState] = useState({
    toggle: false,
    toggleTab: '',
  })

  const handleClickNavTab = (e) => {
    setState((prev) => ({
      ...prev,
      toggleTab: state.toggleTab === e ? null : e,
    }))
  }

  console.log(state)

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-blue-600">
      <div className="relative mx-auto flex w-full max-w-default items-center justify-between px-4 py-4 lg:px-16 lg:py-0 xl:px-108">
        <div className="flex items-center justify-between gap-10 lg:justify-start lg:gap-4 xl:gap-10">
          <Link href="/">
            <NextImage {...logo} otherClasses="w-28 h-5" />
          </Link>
          <div
            className={classNames(
              'mobile-nav-main-container absolute left-0 top-14 flex w-full flex-col justify-between gap-10 overflow-auto bg-blue-600 px-4 py-10 lg:static lg:left-auto lg:top-auto lg:w-auto lg:gap-0 lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0',
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
                    {node?.subLinks?.length > 0 ? (
                      <button
                        onClick={() => handleClickNavTab(node.title)}
                        className="flex w-full items-center justify-between gap-1 lg:w-auto lg:justify-start"
                      >
                        <p className="w-fit font-aeronik-pro text-20 font-normal text-white lg:w-auto lg:text-base">
                          {node?.title}
                        </p>
                        {node?.subLinks?.length > 0 && <ChevronDown />}
                      </button>
                    ) : (
                      <Link
                        href={node?.slug?.current}
                        className="flex w-full items-center justify-between gap-1 lg:w-auto lg:justify-start"
                      >
                        <p className="w-fit font-aeronik-pro text-20 font-normal text-white lg:w-auto lg:text-base">
                          {node?.title}
                        </p>
                        {node?.subLinks?.length > 0 && <ChevronDown />}
                      </Link>
                    )}

                    {node?.subLinks?.length > 0 && (
                      <div
                        onMouseLeave={() =>
                          setState((prev) => ({
                            ...prev,
                            toggleTab: '',
                          }))
                        }
                        className={classNames(
                          'mx-auto h-auto w-full bg-blue-600 transition-all duration-300 lg:absolute lg:left-2/4 lg:top-88 lg:max-w-1320 lg:-translate-x-2/4 lg:px-8',
                          state.toggleTab === node.title
                            ? 'mt-6 max-h-[700px] overflow-visible lg:mt-0 lg:py-8'
                            : 'max-h-[0px] overflow-hidden',
                        )}
                      >
                        <div
                          className={classNames(
                            'mb-10 hidden transition-all delay-300 duration-500 lg:flex lg:justify-between',
                            state.toggleTab === node.title
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        >
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
                            'grid gap-6 transition-all delay-300 duration-500 lg:grid-cols-3 lg:gap-16 xl:gap-28',
                            state.toggleTab === node.title
                              ? 'opacity-100'
                              : 'opacity-0',
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
                                      href={
                                        nestedNode?.slug?.current.startsWith(
                                          '/',
                                        )
                                          ? `${nestedNode?.slug?.current}`
                                          : `/${nestedNode?.slug?.current}`
                                      }
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
                                          href={
                                            linksNode?.slug?.current.startsWith(
                                              '/',
                                            )
                                              ? `${linksNode?.slug?.current}`
                                              : `/${linksNode?.slug?.current}`
                                          }
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
                          {node?.name && (
                            <div className="w-full border-l-[1px] border-l-blue-500 pl-6">
                              <NextImage
                                {...node.blogImage}
                                otherClasses="w-full"
                              />
                              <div className="my-6 flex justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="rounded border-[1px] border-green-300 p-2">
                                    <FileIcon />
                                  </span>
                                  <p className="text-xs font-normal text-white">
                                    Blog
                                  </p>
                                </div>
                                <div className="flex gap-1">
                                  <p className="text-sm text-white">
                                    {`${node.name} |`}
                                  </p>
                                  <p className="text-sm text-white">
                                    {` ${node.publishAt}`}
                                  </p>
                                </div>
                              </div>
                              <Heading
                                type="h5"
                                otherClasses="text-20 text-white mb-5"
                              >
                                {node.heading}
                              </Heading>
                              <RichText
                                richText={node.subText}
                                otherClasses="global-richtext-dark"
                              />
                              <Button {...node.button} otherClasses="mt-10" />
                            </div>
                          )}
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
                  otherClasses="w-full block text-center !justify-center"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 xl:gap-6">
          <button className="hidden items-center gap-1 lg:flex">
            <NavbarSearchIcon className="h-4 w-4" />
            <span className="hidden font-aeronik-pro text-base text-white xl:block">
              Search
            </span>
          </button>
          {button?.map((node, i) => {
            return (
              <Button
                {...node}
                key={i}
                otherClasses={classNames(
                  'lg:flex hidden',
                  i === 0 && '',
                  i === 1 &&
                    ' [&>svg]:xs:block px-2 xs:px-4 py-1 xs:py-2 [&>svg]:hidden',
                )}
              />
            )
          })}
          <button
            className="flex h-4 w-4 flex-col items-center justify-center gap-1 overflow-hidden lg:hidden"
            onClick={() =>
              setState((prev) => ({
                ...prev,
                toggle: !state.toggle,
              }))
            }
          >
            <span
              className={classNames(
                'block h-[2px]   bg-white transition-all duration-300',
                state.toggle
                  ? 'w-4 translate-x-0 translate-y-[6px] rotate-[45deg]'
                  : 'w-[10px] translate-x-[3px]',
              )}
            ></span>
            <span
              className={classNames(
                'block h-[2px]  bg-white transition-all duration-300',
                state.toggle ? 'w-4 translate-x-10' : 'w-[10px]',
              )}
            ></span>
            <span
              className={classNames(
                'block h-[2px] bg-white transition-all duration-300',
                state.toggle
                  ? 'w-4 -translate-y-[6px] rotate-[-45deg]'
                  : 'w-[10px] translate-x-[-3px]',
              )}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
