import { groq } from 'next-sanity'
import classnames from 'classnames'
import Heading from '../../components/heading'
import NextImage from '../../components/next-image'
import RichText from '../../components/rich-text'
import Icon from '../../components/icon'

export const WITH_OR_WITHOUT_NETACEA_FRAGMET = groq`
    "logo":logo.asset->{
      ...,
    },
    "backPattern":backPattern.asset->{
      ...,
    },

`

export default function WithOrWithoutNetacea({
  otherClasses,
  backPattern,
  heading,
  logo,
  subText,
  variant,
  thead,
  tbody,
}) {
  const withOrWithoutNetaceaClasses = classnames(
    otherClasses,
    'w-full py-20 lg:py-120 ',
    variant === 'dark' ? 'with-or-without-netacea-continer' : 'bg-white',
  )

  return (
    <section
      className={withOrWithoutNetaceaClasses}
      data-testid="with-or-without-netacea"
    >
      <div className="relative mx-auto flex w-full max-w-default flex-col gap-10 px-4 lg:flex-row lg:gap-16 lg:px-20 xl:gap-20 xl:px-108">
        <NextImage
          {...backPattern}
          otherClasses="w-auto h-auto absolute left-0 bottom-0 lg:block hidden"
        />
        <div className="relative w-full lg:w-2/5">
          <div className="flex flex-col items-center gap-10 lg:flex-row xl:gap-14">
            <NextImage {...logo} otherClasses="min-w-[75px] h-20" />
            <div
              className={classnames(
                'h-[1px] w-full',
                variant === 'dark'
                  ? 'border-gradient-container-dark'
                  : 'border-gradient-container-light',
              )}
            ></div>
          </div>
          <Heading
            type="h3"
            otherClasses={classnames(
              'mt-4 mb-8',
              variant === 'dark' ? 'text-white' : 'text-blue',
            )}
          >
            {heading}
          </Heading>
          <RichText
            richText={subText}
            otherClasses={classnames(
              '',
              variant === 'dark'
                ? 'global-richtext-dark'
                : 'global-richtext-light',
            )}
          />
        </div>
        <div className="relative w-full lg:w-3/5 ">
          <div className="grid grid-cols-2">
            {thead?.map((node, index) => {
              return (
                <Heading
                  key={index}
                  type="h4"
                  otherClasses={classnames(
                    'text-center  ',
                    variant === 'dark' ? 'text-white' : 'text-blue',
                    thead.length - 1 === index
                      ? '!text-green-300 rounded list-last-heading py-[23px]'
                      : 'py-6',
                  )}
                >
                  {node}
                </Heading>
              )
            })}
          </div>
          <ul className="conatiner-list mt-2 grid grid-cols-2 overflow-hidden rounded border-[1px] border-[#1655C7]">
            {tbody.map(({ withNetacea, withoutNetacea }, i) => {
              return (
                <>
                  <li className="flex items-start gap-2 border-b-[1px] border-r-[1px] border-blue-500 bg-blue-400 px-2 py-4 font-aeronik-pro text-base font-normal text-white lg:p-4">
                    <Icon
                      icon="checklist-cancel-icon"
                      iconHeight={20}
                      iconWidth={20}
                      otherClasses="min-w-[20px] min-h-[20px] translate-y-[2px]"
                    />
                    {withoutNetacea}
                  </li>
                  <li className="flex items-start gap-2 border-b-[1px] border-blue-500 bg-blue-400 px-2 py-4 font-aeronik-pro text-base font-normal text-white lg:p-4">
                    <Icon
                      icon="checklist-check-icon"
                      iconHeight={20}
                      iconWidth={20}
                      otherClasses="min-w-[20px] min-h-[20px] translate-y-[2px]"
                    />
                    {withNetacea}
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
