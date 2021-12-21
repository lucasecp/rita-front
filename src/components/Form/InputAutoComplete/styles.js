import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  > label {
    margin-bottom: 6px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
  .MuiInput-underline:before,
  .css-1q60rmi-MuiAutocomplete-endAdornment,
  .MuiFormControl-root > label,
  .MuiInput-underline:after {
    display: none;
  }
  .css-16awh2u-MuiAutocomplete-root .MuiInput-root {
    padding-right: 0 !important;
  }
  #combo-box-demo::placeholder{
    opacity: 1;
  }

  #combo-box-demo {
    color: #6a6a6a;
    border-radius: 8px;
    opacity: 1;
    padding: 14px 16px;
    display: inline-block;
    transition: all 0.3s;
    position: relative;
    border: 1px solid #eeeeee;
    box-shadow: 0px 2px 4px 0px #e5e5e5;
    font-weight: 500;
    font-family: Athletics;
    line-height: 17px;
    background: #fff;

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
  .MuiAutocomplete-popper {
    box-shadow: 0px 1px 2px 0px #e5e5e5;
    border: none !important;
    * {
      font-size: 16px !important;
      font-weight: 500 !important;
      line-height: 20px;
    }
    h3{
      background: blue
    }
    >* {
      font-size: 50px
    }

  }
`
