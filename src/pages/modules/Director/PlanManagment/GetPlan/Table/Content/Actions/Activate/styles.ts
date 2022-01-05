import styled, { css } from 'styled-components'

import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'

interface ActivateIconProps {
  hidden: boolean
}

export const ActivateIcon = styled(ActiveIcon)<ActivateIconProps>`
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`
