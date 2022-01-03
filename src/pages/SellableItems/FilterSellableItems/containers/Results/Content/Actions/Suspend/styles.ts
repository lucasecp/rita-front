import styled, { css } from 'styled-components'

import { ReactComponent as SuspenseIcon } from '@/assets/icons/suspense.svg'

interface SuspendIconProps {
  hidden: boolean
}

export const SuspendIcon = styled(SuspenseIcon)<SuspendIconProps>`
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`
