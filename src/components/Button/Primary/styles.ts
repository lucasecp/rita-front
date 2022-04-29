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
  background: ${({ theme }) => theme.main};
  transition: 0.3s;
  border-radius: 8px;
  line-height: 20px;
  border: 2px solid ${({ theme }) => theme.main};
  height: fit-content;

  :hover {
    background-color: ${({ theme }) => theme.darkness};
    color: #fff;
    border-color: ${({ theme }) => theme.darkness};
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
      color: ${({ theme }) => theme.light};

      :hover {
        background: #afafaf;
        border-color: #afafaf;
        color: ${({ theme }) => theme.light};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${colors.gray.middleLight};
      cursor: default !important;
      border-color: ${colors.gray.middleLight};
      color: ${({ theme }) => theme.light} !important;

      :hover {
        background: ${colors.gray.middleLight};
        border-color: ${colors.gray.middleLight};
        color: ${({ theme }) => theme.light};
      }
    `}

    ${(props) =>
    props.variation === 'green' &&
    css`
      border: solid 2px #46a86e;
      background: #46a86e;
      :hover {
        background: #316153 !important;
        border: solid 2px #316153;
      }
    `}
`
