import type { ReactNode } from 'react'
import React from 'react'
import { Container } from './styles'

import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'

export type FinancialListItemModel = {
  title: string
  data?: string[]
  active?: boolean
  disabled?: boolean
  [key: string]: unknown
}

type FinanacialListItemProps = FinancialListItemModel & {
  icon?: ReactNode
  onClick?: () => void
  onRemove?: () => void
}

const FinancialListItem: React.FC<FinanacialListItemProps> = ({
  icon,
  title,
  active,
  disabled,
  children,
  onClick,
  onRemove,
}) => {
  function handleRemove(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.stopPropagation()
    onRemove && onRemove()
  }

  return (
    <Container active={active} disabled={disabled} onClick={onClick}>
      {icon}
      <div>
        <h5>{title}</h5>
        {children && <p>{children}</p>}
      </div>
      {(active || disabled) && (
        <button type="button" onClick={handleRemove}>
          <TimesCircleIcon />
        </button>
      )}
    </Container>
  )
}

export default FinancialListItem
