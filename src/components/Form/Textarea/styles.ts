import styled from 'styled-components'

import colors from '@/styles/colors'

interface ContainerProps {
  hasError: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  > label {
    font-size: 16px;
    line-height: 20px;

    color: ${colors.gray.middle};
  }

  > textarea {
    resize: none;
    border: 1px solid
      ${({ hasError }) => (hasError ? colors.orange.light : colors.gray.light)};
    border-radius: 8px;
    color: ${colors.gray.dark};
    padding: 14px 16px;
    box-shadow: 0px 2px 4px 0px #e5e5e5;
    transition: all 0.3s;
    min-height: 64px;

    :disabled {
      background: ${colors.gray.light};
    }

    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      /* border: 1px solid #dcdfe6; */
    }

    :focus {
      border: 1px solid #419eff;
      border-color: ${({ hasError }) =>
        hasError ? colors.orange.light : '#419eff'};

      ::after {
        border: 1px solid #419eff;
        border-color: ${({ hasError }) =>
          hasError ? colors.orange.light : '#419eff'};
      }
    }
  }

  > label + textarea {
    margin-top: 4px;
  }

  > div {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;

    > small {
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;

      color: ${colors.orange.middleDark};
    }

    > p {
      margin-left: auto;
      font-family: Athletics;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      color: #afafaf;
    }
  }
`
