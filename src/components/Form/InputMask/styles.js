import colors from '@/styles/colors'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 6px;
    color: ${colors.gray.middle};
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
    font-weight: 400;
  }

  > input {
    color: ${colors.gray.dark};
    border-radius: 8px;
    padding: 14px 22px;
    transition: all 0.3s;
    border: 1px solid ${colors.gray.light};
    box-shadow: 0px 2px 4px 0px #e5e5e5;
    font-weight: 500;
    width: 100%;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${colors.orange.light};
    `}
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
    border-color: ${({hasError}) => hasError ? colors.orange.light: '#419eff' };

    ::after {
      border: 1px solid #419eff;
      border-color: ${({hasError}) => hasError ? colors.orange.light: '#419eff' };

    }
  }
  }
`
