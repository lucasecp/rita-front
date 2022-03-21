import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

interface ContainerProps {
  small?: boolean
  medium?: boolean
  disabledWithEvents?: boolean
  variation?: string
}

export const Container = styled.button<ContainerProps>`
  border: 2px solid ${colors.purple.main.dark};
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: ${colors.purple.main.dark};
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  transition: 0.3s;
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

  ${(props) =>
    props.variation === 'white' &&
    css`
      color: #fff;
      border: solid 2px #fff;
      :hover {
        background: #fff !important;
        color: ${colors.gray.dark} !important;
      }
    `}

  ${(props) =>
    props.variation === 'green' &&
    css`
      color: #46a86e;
      border: solid 2px #46a86e;
      :hover {
        color: #fff !important;
        background-color: #316153 !important;
        border-color: #316153 !important;
      }
    `}

    ${(props) =>
    props.variation === 'blue' &&
    css`
      color: ${colors.blue.middle};
      border-color: ${colors.blue.middle} !important;
      :hover {
        background: ${colors.blue.middle} !important;
      }
    `}
    ${(props) =>
    props.variation === 'red' &&
    css`
      color: ${colors.orange.middleDark};
      border-color: ${colors.orange.middleDark} !important;
      :hover {
        background: ${colors.orange.middleDark} !important;
      }
    `}

  :hover {
    background-color: #7338cb;
    color: #fff;
    border-color: #7338cb;
  }

  ${({ disabledWithEvents }) =>
    disabledWithEvents &&
    css`
      background: #afafaf;
      border-color: #afafaf;
      cursor: default !important;
      color: ${colors.purple.main.light} !important;

      :hover {
        background: #afafaf;
        border-color: #afafaf;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default !important;
      color: ${colors.gray.middleLight};
      border-color: ${colors.gray.middleLight} !important;

      :hover {
        background: unset !important;
        border-color: ${colors.gray.middleLight};
        color: ${colors.gray.middleLight};
      }
    `}
`
