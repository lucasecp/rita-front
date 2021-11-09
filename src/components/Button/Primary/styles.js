import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.button`
  position: relative;
  padding: ${({ small }) => (small ? '10px 16px' : '14px 32px')};
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
      background: ${colors.purple.main.light};
      cursor: default !important;
      border-color: ${colors.purple.main.light};
      color: ${colors.purple.background.middle} !important;

      :hover {
        border-color: ${colors.purple.main.light};
        background: ${colors.purple.main.light};
        color: ${colors.purple.background.middle} ;
      }
    `}
`
