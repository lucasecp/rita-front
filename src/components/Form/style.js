import colors from '@/styles/colors'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin-bottom: 6px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
    font-weight: 400;
  }
`
export const Input = styled.input`
  color: #6a6a6a;
  border-radius: 8px;
  padding: 14px;
  display: inline-block;
  transition: all 0.3s;
  position: relative;
  border: 1px solid #eeeeee;
  box-shadow: 0px 2px 4px 0px #e5e5e5;
  font-weight: 500;
  width: 100%;
  :disabled{
    background: #EEEEEE;
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
    border-color: ${({hasError}) => hasError ? colors.orange.light: '#419eff' };

    ::after {
      border: 1px solid #419eff;
      border-color: ${({hasError}) => hasError ? colors.orange.light: '#419eff' };

    }
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${colors.orange.light};
    `}
`
export const Select = styled.select`
  color: #6a6a6a;
  border-radius: 8px;
  padding: 14px;
  display: inline-block;
  transition: all 0.3s;
  position: relative;
  border: 1px solid #eeeeee;
  box-shadow: 0px 2px 4px 0px #e5e5e5;
  font-weight: 500;
  outline: none;
  width:100%;
  :disabled{
    background: #EEEEEE;
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
    border: 1px solid ;
    border-color: ${({hasError}) => hasError ? colors.orange.light: '#419eff' };
    ::after {
      border: 1px solid #419eff;
      border-color: ${({hasError}) => hasError ? colors.orange.light: '#419eff' };

    }
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${colors.orange.light};
    `}
`
