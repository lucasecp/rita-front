import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.button`
  position: relative;
  padding: 14px 32px;
  cursor: pointer;
  font-weight: 400;
  color: ${colors.white};
  font-size: 16px;
  background: ${colors.secondary};
  transition: 0.3s;
  border-radius: 8px;
  line-height: 20px;
  border: 2px solid ${colors.secondary};
  height: fit-content;

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${colors.purple.main.light};
      border-color: ${colors.purple.main.light};
      cursor: default;
    `}

  :hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        background-color: #7338cb;
        border-color: #7338cb;
      `}
  }
`
