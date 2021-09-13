import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.button`
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

  ${(props) =>
    props.variation === 'white' &&
    css`
      color: #fff;
      border: solid 2px #fff;
      padding: 10px 16px !important;
      :hover {
        background: #fff !important;
        color: ${colors.gray.dark} !important;
      }
    `}

  ${(props) =>
    props.variation === 'green' &&
    css`
      color: ${colors.green.light};
      padding: 10px 16px !important;
      border: solid 2px ${colors.green.light};
      :hover {
        color: ${colors.green.dark} !important;
        background: ${colors.green.light} !important;
      }
    `}

    ${(props) =>
    props.variation === 'blue' &&
    css`
      color: ${colors.blue.middle};
      padding: 10px 16px !important;
      border-color: ${colors.blue.middle} !important;
      :hover {
        background: ${colors.blue.middle} !important;
      }
    `}

  :hover {
    background-color: #7338cb;
    color: #fff;
    border-color: #7338cb;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${colors.purple.main.light};
      border-color: ${colors.purple.main.light};
      cursor: default;

      :hover {
        color: ${colors.purple.main.light};
        border-color: ${colors.purple.main.light};
        background-color: transparent;
      }
    `}
`
