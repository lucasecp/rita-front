import styled, { css } from 'styled-components'
import { ReactComponent as WarningIcon } from '@/assets/icons/warning-red.svg'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/trash.svg'



export const Container = styled.li`
  > svg + svg {
    margin-left: 30px;
  }
  svg {
    cursor: pointer;
  }
`

interface IconProps {
  hidden: boolean
}

export const WarningIconStyled = styled(WarningIcon)<IconProps>`
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`

export const EyePurpleIconStyled = styled(EyePurpleIcon)<IconProps>`
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`

export const DeleteIconStyled = styled(DeleteIcon)<IconProps>`
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`
