import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  span + span {
    font-size: 16px;
    line-height: 20px;
    color: ${({ colorLight }) =>
      colorLight ? colors.gray.middleLight : colors.gray.middle};

    ${({ checked }) =>
      checked &&
      css`
        color: ${colors.purple.main.dark};
      `}
  }

  > small {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: ${colors.orange.middleDark};
    display: block;
    margin-left: 32px;
  }

  .MuiCheckbox-colorPrimary.Mui-checked {
    color: ${colors.purple.main.dark};
  }

  .MuiCheckbox-colorPrimary.Mui-disabled {
    color: ${colors.gray.middle};
  }

  .MuiTypography-body1 {
    font-family: Athletics;
  }
  .MuiTypography-body1.Mui-disabled {
    color: ${colors.gray.middle};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      .MuiSvgIcon-root {
        fill: #df644b;
      }
    `}
`
