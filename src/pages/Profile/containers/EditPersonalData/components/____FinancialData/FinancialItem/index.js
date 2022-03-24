import React from 'react'
import { Container } from './styles'

import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'

export const FinancialItem = ({
  icon,
  title,
  active,
  disabled,
  children,
  onClick,
  onRemove,
}) => {
  function handleRemove(event) {
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
