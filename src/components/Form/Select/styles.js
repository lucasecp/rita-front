import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

import arrowDownIcon from '@/assets/icons/arrow-down-select.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  transition: all 0.3s;

  > label {
    margin-bottom: 6px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }

  .form-select:focus {
    box-shadow: unset;
  }

  > select {
    color: ${colors.gray.dark};
    border-radius: 8px;
    padding: 14px 16px;
    position: relative;
    border: 1px solid ${colors.gray.light};
    box-shadow: 0px 2px 4px 0px #e5e5e5;
    font-weight: 500;
    outline: none;
    width: 100%;
    line-height: 1.25;

    appearance: none;
    background: transparent;
    background-image: url(${arrowDownIcon});
    background-size: 16px;
    background-repeat: no-repeat;
    background-position-x: calc(100% - 8px);
    background-position-y: 50%;

    :disabled {
      background: #eeeeee;
      box-shadow: unset;
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border: 1px solid #dcdfe6;
    }

    :focus {
      border: 1px solid;
      border-color: ${({ hasError }) =>
        hasError ? colors.orange.light : '#419eff'};
      ::after {
        border: 1px solid #419eff;
        border-color: ${({ hasError }) =>
          hasError ? colors.orange.light : '#419eff'};
      }
    }

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: ${colors.orange.light};
      `}

    ${({ variation }) =>
      variation === 'secondary' &&
      css`
        border: none;
        border-bottom: 2px solid
          ${({ hasError }) =>
            hasError ? colors.orange.light : colors.purple.main.middle};
        border-radius: 0;
        box-shadow: none;
        background-color: transparent;
        :focus,
        ::after {
          border: none;
          border-bottom: 2px solid #419eff;
          border-color: ${({ hasError }) =>
            hasError ? colors.orange.light : colors.purple.main.dark};
        }
        padding: 5px;
      `}
  }

  > small {
    margin-top: 6px;

    font-weight: 500;
    font-size: 12px;
    line-height: 20px;

    color: ${colors.orange.middleDark};
  }
`
