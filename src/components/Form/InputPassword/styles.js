import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: grid;
  height: fit-content;

  > label {
    color: ${colors.gray.middle};

    /* font-weight: 500; */
    font-size: 16px;
    line-height: 20px;

    margin-bottom: 4px;
  }

  > div {
    position: relative;
    height: fit-content;

    > input {
      color: #6a6a6a;
      border-radius: 8px;
      padding: 14px 56px 14px 16px;

      transition: all 0.3s;
      position: relative;
      border: 1px solid #eeeeee;
      box-shadow: 0px 2px 4px 0px #e5e5e5;
      width: 100%;
      font-weight: 500;
      line-height: 22px;

      :disabled {
        background: #eeeeee;
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

      ${({ hasError }) =>
        hasError &&
        css`
          border-color: ${colors.orange.light};
        `}
    }

    > button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;

      padding: 14px 16px;

      cursor: pointer;
      /* z-index: 1; */

      > img {
        width: 24px;
      }
    }
  }

  > small {
    margin-top: 6px;

    font-weight: 500;
    font-size: 12px;
    line-height: 20px;

    color: ${colors.orange.middleDark};
  }
`
