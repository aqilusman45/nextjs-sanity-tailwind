import {
  AccountTackover,
  ActiveBotProtection,
  BotAttackIntel,
  BussinessLoginIcon,
  CardingFraud,
  ChevronDown,
  CostlyToAttack,
  CredentialStuffing,
  FakeAccountCreation,
  FileIcon,
  LoyaltyPointFraud,
  MarketingAnalytics,
  NavbarSearchIcon,
  NoComplexity,
  PlanMoreEffectively,
  ScalperBots,
  ScaperIcon,
  SkewedAnalytics,
  WebScrapping,
} from '../../../icons'

export default function IconWithCurrentColor({ icon, ...props }) {
  switch (icon) {
    case 'chevron-down':
      return <ChevronDown {...props} />
    case 'file-icon':
      return <FileIcon {...props} />
    case 'search-icon':
      return <NavbarSearchIcon {...props} />
    // link icon
    case 'active-bot-protection':
      return <ActiveBotProtection {...props} />
    case 'bot-attack-intel':
      return <BotAttackIntel {...props} />
    case 'bussiness-login-icon':
      return <BussinessLoginIcon {...props} />
    case 'account-tackover':
      return <AccountTackover {...props} />
    case 'carding-fraud':
      return <CardingFraud {...props} />
    case 'credential-stuffing':
      return <CredentialStuffing {...props} />
    case 'marketing-analytics':
      return <MarketingAnalytics {...props} />
    case 'scaper-icon':
      return <ScaperIcon {...props} />
    case 'fake-account-creation':
      return <FakeAccountCreation {...props} />
    case 'loyalty-point-fraud':
      return <LoyaltyPointFraud {...props} />
    case 'scalper-bots':
      return <ScalperBots {...props} />
    case 'skewed-analytics':
      return <SkewedAnalytics {...props} />
    case 'web-scrapping':
      return <WebScrapping {...props} />
    // Netacea Differences
    case 'no-complexity':
      return <NoComplexity {...props} />
    case 'costly-to-attack':
      return <CostlyToAttack {...props} />
    case 'plan-more-effectively':
      return <PlanMoreEffectively {...props} />

    default:
      return null
  }
}
