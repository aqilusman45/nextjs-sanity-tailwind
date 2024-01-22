import classnames from 'classnames'
import Link from 'next/link'

import Icon from '../icon/index'
export default function Button({
  label = '',
  variant = 'primary',
  otherClasses,
  slug,
  onClick,
  external,
  mode = 'light',
}) {
  const buttonClasses = classnames(
    otherClasses,
    variant === 'primary' &&
      `${
        mode === 'light'
          ? 'px-4 py-2 bg-blue-300 text-base text-white font-aeronik-pro rounded hover:bg-blue-500 transition-all duration-300'
          : 'px-4 py-2 bg-green-300 text-base text-blue-600 font-aeronik-pro rounded hover:bg-green-400 transition-all duration-300'
      }`,
    variant === 'primary-arrow' &&
      `${
        mode === 'light'
          ? `px-4 py-2 bg-blue-300 text-base text-white font-aeronik-pro rounded hover:bg-blue-500 transition-all duration-300 flex items-center gap-2  `
          : `px-4 py-2 bg-green-300 text-base text-blue-600 font-aeronik-pro rounded hover:bg-green-400 transition-all duration-300 flex items-center gap-2`
      }`,
    variant === 'secondary' &&
      `${
        mode === 'light'
          ? 'px-4 py-[7px] bg-transparent text-base text-blue-300 border-[1px] border-blue-300 font-aeronik-pro rounded hover:bg-blue-300 hover:text-white transition-all duration-300 flex items-center gap-2'
          : 'px-4 py-[7px] bg-transparent text-base text-green-300 border-[1px] border-green-300 font-aeronik-pro  rounded hover:bg-green-300 hover:text-blue-600 transition-all duration-300 flex items-center gap-2'
      }`,
    variant === 'secondary-arrow' &&
      `${
        mode === 'light'
          ? 'px-4 py-[7px] bg-transparent text-base text-blue-300 border-[1px] border-blue-300 font-aeronik-pro rounded hover:bg-blue-300 hover:text-white transition-all duration-300 flex items-center gap-2 flex items-center gap-2 group'
          : 'px-4 py-[7px] bg-transparent text-base text-green-300 border-[1px] border-green-300 font-aeronik-pro rounded hover:bg-green-300 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 flex items-center gap-2 group'
      }`,
    variant === 'text-link' &&
      `${
        mode === 'light'
          ? 'bg-transparent text-base text-blue-300 font-aeronik-pro hover:text-blue-500 transition-all duration-300 '
          : 'bg-transparent text-base text-green-300 font-aeronik-pro hover:text-green-400 transition-all duration-300'
      }`,
    variant === 'text-link-arrow' &&
      `${
        mode === 'light'
          ? 'bg-transparent text-base text-blue-300 font-aeronik-pro hover:text-blue-500 transition-all duration-300 flex gap-2  items-center group'
          : 'bg-transparent text-base text-green-300 font-aeronik-pro hover:text-green-400 transition-all duration-300 flex gap-2 items-center group'
      }`,
  )

  const withIconWhite = variant === 'primary-arrow'
  const withIconBlue = variant === 'secondary-arrow'
  const withIconTextLink = variant === 'text-link-arrow'

  if (onClick) {
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
            <Icon icon="arrow-right-white" iconHeight={8} iconWidth={14} />
          ) : (
            <Icon icon="arrow-right-dark" iconHeight={8} iconWidth={14} />
          ))}
        {withIconBlue &&
          (mode === 'light' ? (
            <>
              <Icon
                icon="arrow-right-blue"
                iconHeight={8}
                iconWidth={14}
                otherClasses="group-hover:hidden"
              />
              <Icon
                icon="arrow-right-white"
                iconHeight={8}
                iconWidth={14}
                otherClasses="group-hover:block hidden"
              />
            </>
          ) : (
            <>
              <Icon
                icon="arrow-right-green"
                iconHeight={8}
                iconWidth={14}
                otherClasses="group-hover:hidden"
              />
              <Icon
                icon="arrow-right-dark"
                iconHeight={8}
                iconWidth={14}
                otherClasses="group-hover:block hidden"
              />
            </>
          ))}
        {withIconTextLink &&
          (mode === 'light' ? (
            <>
              <Icon
                icon="arrow-right-blue"
                iconHeight={8}
                iconWidth={14}
                otherClasses="group-hover:hidden"
              />
              <Icon
                icon="arrow-right-dark-blue"
                iconHeight={8}
                iconWidth={14}
                otherClasses="group-hover:block hidden"
              />
            </>
          ) : (
            <>
              <Icon
                icon="arrow-right-green"
                iconHeight={8}
                iconWidth={14}
                otherClasses="group-hover:hidden"
              />
              <Icon
                icon="arrow-right-green-dark"
                iconHeight={8}
                iconWidth={14}
                otherClasses="group-hover:block hidden"
              />
            </>
          ))}
      </button>
    )
  }
  const { current } = slug

  return (
    <Link
      className={classnames('w-fit', buttonClasses)}
      href={external ? `${current}` : `/${current}`}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : ''}
    >
      {label}
      {withIconWhite &&
        (mode === 'light' ? (
          <Icon icon="arrow-right-white" iconHeight={8} iconWidth={14} />
        ) : (
          <Icon icon="arrow-right-dark" iconHeight={8} iconWidth={14} />
        ))}
      {withIconBlue &&
        (mode === 'light' ? (
          <>
            <Icon
              icon="arrow-right-blue"
              iconHeight={8}
              iconWidth={14}
              otherClasses="group-hover:hidden"
            />
            <Icon
              icon="arrow-right-white"
              iconHeight={8}
              iconWidth={14}
              otherClasses="group-hover:block hidden"
            />
          </>
        ) : (
          <>
            <Icon
              icon="arrow-right-green"
              iconHeight={8}
              iconWidth={14}
              otherClasses="group-hover:hidden"
            />
            <Icon
              icon="arrow-right-dark"
              iconHeight={8}
              iconWidth={14}
              otherClasses="group-hover:block hidden"
            />
          </>
        ))}
      {withIconTextLink &&
        (mode === 'light' ? (
          <>
            <Icon
              icon="arrow-right-blue"
              iconHeight={8}
              iconWidth={14}
              otherClasses="group-hover:hidden"
            />
            <Icon
              icon="arrow-right-dark-blue"
              iconHeight={8}
              iconWidth={14}
              otherClasses="group-hover:block hidden"
            />
          </>
        ) : (
          <>
            <Icon
              icon="arrow-right-green"
              iconHeight={8}
              iconWidth={14}
              otherClasses="group-hover:hidden"
            />
            <Icon
              icon="arrow-right-green-dark"
              iconHeight={8}
              iconWidth={14}
              otherClasses="group-hover:block hidden"
            />
          </>
        ))}
    </Link>
  )
}
