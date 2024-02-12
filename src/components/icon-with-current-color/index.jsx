import { AccountTackover, CardingFraud, ChevronDown } from '../../../icons'

export default function IconWithCurrentColor({  icon ,...props},) {
  switch (icon) {
    case 'chevron-down':
      return <ChevronDown {...props} />
    case 'account-tackover':
      return <AccountTackover {...props} />
    case 'carding-fraud':
      return <CardingFraud {...props} />
    case '':
      return (
        <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
          <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
        </svg>
      )

    default:
      return null
  }
}
