import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

interface ContainerProps {
  small?: boolean
  medium?: boolean
  disabledWithEvents?: boolean
  variation?: string
}

export const Container = styled.button<ContainerProps>`
  position: relative;
  padding: 14px 32px;
  cursor: pointer;
  font-weight: 400;
  color: ${colors.white};
  font-size: 16px;
  background: ${colors.purple.main.dark};
  transition: 0.3s;
  border-radius: 8px;
  line-height: 20px;
  border: 2px solid ${colors.purple.main.dark};
  height: fit-content;

  :hover {
    background-color: ${colors.purple.main.darkness};
    color: #fff;
    border-color: ${colors.purple.main.darkness};
  }
  ${({ small }) =>
    small &&
    css`
      padding: 10px 16px;
    `}

  ${({ medium }) =>
    medium &&
    css`
      padding: 10px 32px;
    `}



  ${({ disabledWithEvents }) =>
    disabledWithEvents &&
    css`
      background: #afafaf;
      border-color: #afafaf;
      cursor: default !important;
      color: ${colors.purple.background.middle};

      :hover {
        background: #afafaf;
        border-color: #afafaf;
        color: ${colors.purple.background.middle};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${colors.gray.middleLight};
      cursor: default !important;
      border-color: ${colors.gray.middleLight};
      color: ${colors.purple.background.middle} !important;

      :hover {
        background: ${colors.gray.middleLight};
        border-color: ${colors.gray.middleLight};
        color: ${colors.purple.background.middle};
      }
    `}
`
