import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.button`
  border-bottom: 2px solid ${colors.purple.main.dark};
  cursor: pointer;
  background: transparent;
  color: ${colors.purple.main.dark};
  padding: ${({ small }) => (small ? '10px 16px' : '14px 32px')};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  transition: 0.3s;


  /* ${(props) =>
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
      color: ${colors.green.light};
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
      border-color: ${colors.blue.middle} !important;
      :hover {
        background: ${colors.blue.middle} !important;
      }
    `} */
    ${(props) =>
    props.variation === 'red' &&
    css`
      color: ${colors.orange.middleDark};
      border-color: ${colors.orange.middleDark} !important;

      /* :hover {
        background: ${colors.orange.middleDark} !important;
      } */
    `}

  /* :hover {
    background-color: #7338cb;
    color: #fff;
    border-color: #7338cb;
  } */

  /* ${({ disabled }) =>
    disabled &&
    css`
      color: ${colors.purple.main.light} !important;
      border-color: ${colors.purple.main.light} !important;
      cursor: default;

      :hover {
        color: ${colors.purple.main.light} !important;
        border-color: ${colors.purple.main.light} !important;
        background-color: transparent !important;
      }
    `} */
`
