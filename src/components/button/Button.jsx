import classnames from 'classnames'
import { ReactComponent as ArrowRightBlue } from 'icons/arrow-right-blue.svg'
import { ReactComponent as ArrowRightDark } from 'icons/arrow-right-dark.svg'
import { ReactComponent as ArrowRightGreen } from 'icons/arrow-right-green.svg'
import { ReactComponent as ArrowRightWhite } from 'icons/arrow-right-white.svg'
import Link from 'next/link'
import { groq } from 'next-sanity'

export const BUTTON_FRAGMENT = groq`
    label,
    variant,
    externalLink,
    slug
`
export default function Button({
  label = '',
  variant = 'primary',
  otherClasses,
  slug,
  onClick,
  external,
  type,
  mode = 'light',
}) {
  const buttonClasses = classnames(
    otherClasses,
    'flex justify-between items-center gap-2 whitespace-nowrap min-width-120 cursor-pointer group transition-all duration-400 ',
    variant === 'primary' &&
      `${
        mode === 'light'
          ? 'px-4 py-3 bg-blue-300 h-10 rounded text-base text-white font-aeronik-pro hover:bg-blue-400 '
          : 'px-4 py-3 bg-green-300 h-10 rounded text-base text-blue-600 font-aeronik-pro hover:bg-green-400 '
      }`,
    variant === 'primary-arrow' &&
      `${
        mode === 'light'
          ? `px-4 py-3 bg-blue-300 h-10 rounded text-base text-white font-aeronik-pro hover:bg-blue-400  `
          : `px-4 py-3 bg-green-300 h-10 rounded text-base text-blue-600 font-aeronik-pro hover:bg-green-400 `
      }`,
    variant === 'secondary' &&
      `${
        mode === 'light'
          ? 'px-4 py-3 h-10  bg-transparent text-base text-blue-300 border-[1px] border-blue-300 font-aeronik-pro rounded hover:bg-blue-400 hover:border-blue-400 hover:text-white '
          : 'px-4 py-3 h-10  bg-transparent text-base text-green-300 border-[1px] border-green-300 font-aeronik-pro  rounded hover:bg-green-400 hover:border-green-400 hover:text-blue'
      }`,
    variant === 'secondary-arrow' &&
      `${
        mode === 'light'
          ? 'px-4 py-3 h-10 bg-transparent text-base text-blue-300 border-[1px] border-blue-300 font-aeronik-pro rounded hover:bg-blue-400 hover:border-blue-400 hover:text-white'
          : 'px-4 py-3 h-10 bg-transparent text-base text-green-300 border-[1px] border-green-300 font-aeronik-pro rounded hover:bg-green-400 hover:border-green-400 hover:text-blue '
      }`,
    variant === 'text-link' &&
      `${
        mode === 'light'
          ? 'bg-transparent text-base text-blue-300 font-aeronik-pro hover:text-blue-200 '
          : 'bg-transparent text-base text-green-300 font-aeronik-pro hover:text-green'
      }`,
    variant === 'text-link-arrow' &&
      `${
        mode === 'light'
          ? 'bg-transparent text-base text-blue-300 font-aeronik-pro hover:text-blue-200'
          : 'bg-transparent text-base text-green-300 font-aeronik-pro hover:text-green'
      }`,
  )

  const withIconWhite = variant === 'primary-arrow'
  const withIconBlue = variant === 'secondary-arrow'
  const withIconTextLink = variant === 'text-link-arrow'

  if (type === 'button') {
    return (
      <button
        onClick={(e) => {
          onClick && onClick(form, e)
        }}
        className={buttonClasses}
        data-testid="button"
      >
        {label}
        {withIconWhite &&
          (mode === 'light' ? (
            <ArrowRightWhite className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
          ) : (
            <ArrowRightDark className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
          ))}
        {withIconBlue &&
          (mode === 'light' ? (
            <ArrowRightBlue className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
          ) : (
            <ArrowRightGreen className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
          ))}
        {withIconTextLink &&
          (mode === 'light' ? (
            <ArrowRightBlue className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
          ) : (
            <ArrowRightGreen className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
          ))}
      </button>
    )
  }
  const { current } = slug || {}

  return (
    <Link
      className={classnames('w-fit', buttonClasses)}
      href={
        external
          ? `${current}`
          : current?.startsWith('/')
          ? `${current}`
          : `/${current}`
      }
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : ''}
    >
      {label}
      {withIconWhite &&
        (mode === 'light' ? (
          <ArrowRightWhite className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
        ) : (
          <ArrowRightDark className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
        ))}
      {withIconBlue &&
        (mode === 'light' ? (
          <ArrowRightBlue className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
        ) : (
          <ArrowRightGreen className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
        ))}
      {withIconTextLink &&
        (mode === 'light' ? (
          <ArrowRightBlue className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
        ) : (
          <ArrowRightGreen className="svg translate-x-0  translate-y-[3px] transition-all duration-400 ease-out group-hover:translate-x-1" />
        ))}
    </Link>
  )
}
