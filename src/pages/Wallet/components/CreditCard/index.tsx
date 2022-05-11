// import type { ReactNode } from 'react'
import React, { useState } from 'react'

// import { ReactComponent as AlipayLogo } from '@/assets/logo/credit-cards/alipay.svg'
// import { ReactComponent as AmexLogo } from '@/assets/logo/credit-cards/amex.svg'
// import { ReactComponent as DinersLogo } from '@/assets/logo/credit-cards/diners.svg'
// import { ReactComponent as DiscoverLogo } from '@/assets/logo/credit-cards/discover.svg'
// import { ReactComponent as EloLogo } from '@/assets/logo/credit-cards/elo.svg'
// import { ReactComponent as HiperLogo } from '@/assets/logo/credit-cards/hiper.svg'
// import { ReactComponent as HipercardLogo } from '@/assets/logo/credit-cards/hipercard.svg'
// import { ReactComponent as JCBLogo } from '@/assets/logo/credit-cards/jcb.svg'
// import { ReactComponent as MaestroLogo } from '@/assets/logo/credit-cards/maestro.svg'
// import { ReactComponent as MastercardLogo } from '@/assets/logo/credit-cards/mastercard.svg'
// import { ReactComponent as MirLogo } from '@/assets/logo/credit-cards/mir.svg'
// import { ReactComponent as PaypalLogo } from '@/assets/logo/credit-cards/paypal.svg'
// import { ReactComponent as UnionPayLogo } from '@/assets/logo/credit-cards/unionpay.svg'
import { ReactComponent as VisaLogo } from '@/assets/logo/credit-cards/visa.svg'
import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'
import { Container } from './styles'

// const creditCardLogos: Record<string, ReactNode> = {
//   alipay: <AlipayLogo />,
//   amex: <AmexLogo />,
//   diners: <DinersLogo />,
//   discover: <DiscoverLogo />,
//   elo: <EloLogo />,
//   hiper: <HiperLogo />,
//   hipercard: <HipercardLogo />,
//   jcb: <JCBLogo />,
//   maestro: <MaestroLogo />,
//   mastercard: <MastercardLogo />,
//   mir: <MirLogo />,
//   paypal: <PaypalLogo />,
//   unionpay: <UnionPayLogo />,
//   visa: <VisaLogo />,
// }

type WalletCreditCardProps = {
  name: string
  expirationDate: string
  number?: string
  lastFourDigits?: string
  hasRemoveButton?: boolean
  onClick?: () => void
  onRemove?: () => void
}

export const WalletCreditCard: React.FC<WalletCreditCardProps> = ({
  number = '',
  lastFourDigits: lastFourDigitsFromProps = '',
  name,
  expirationDate,
  hasRemoveButton = false,
  onClick,
  onRemove,
}) => {
  const [lastFourDigits] = useState(lastFourDigitsFromProps || number.slice(-4))

  function handleRemove(event: any) {
    event.stopPropagation()
    onRemove && onRemove()
  }

  return (
    <Container onClick={() => onClick && onClick()}>
      <div>
        <h4>****.****.****.{lastFourDigits}</h4>
        <h5>{name}</h5>
      </div>
      <div>
        <span>{expirationDate}</span>
        <VisaLogo />
      </div>
      {hasRemoveButton && (
        <button type="button" onClick={handleRemove}>
          <TimesCircleIcon />
        </button>
      )}
    </Container>
  )
}
