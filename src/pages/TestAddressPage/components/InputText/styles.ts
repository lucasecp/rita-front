import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

interface InputTextStylesProps {
  disabled?: boolean
}

export const Container = styled.div<InputTextStylesProps>`
  display: flex;
  flex-direction: column;

  gap: 8px;

  > label {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: ${colors.gray.middleLight};
  }

  > input {
    width: 100%;

    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(142, 142, 142, 0.1);

    border-radius: 4px;

    padding: 8px 16px;

    ${({ disabled }) =>
      disabled &&
      css`
        background: #f0f0f0;
        box-shadow: unset;
      `}
  }
`
