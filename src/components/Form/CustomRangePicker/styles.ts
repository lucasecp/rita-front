import colors from '@/styles/colors'
import styled from 'styled-components'
import closeIcon from '@/assets/icons/close.svg'

export const Container = styled.div<{ hasError?: boolean }>`
  /* display: flex;
   flex-direction: column;
   align-items: flex-start; */
  display: grid;
  position: relative;

  height: fit-content;

  label {
    margin-bottom: 7px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    grid-area: 1/1;
  }
  > button,
  > div {
    grid-area: 2/1;
  }
  > button {
    align-self: center;
    justify-self: end;
    position: relative;
    right: 36px;
    top: calc(75% - 21px);
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    ::after {
      height: 10px;
      width: 10px;
      box-sizing: content-box;
      display: block;
      content: '';
      background: url(${closeIcon});
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 2px;
      filter: invert(80%) sepia(0%) saturate(2969%) hue-rotate(192deg)
        brightness(1006%) contrast(30%);
      opacity: 0.6;
      transition: 0.3s;
    }
    :hover::after {
      opacity: 1;
      transition: 0.3s;
    }
  }
  .ant-picker-range-separator + div {
    margin-right: 25px;
  }

  .ant-picker {
    border: none;
    border-bottom: 2px solid
      ${({ hasError, theme }) =>
        hasError ? colors.orange.light : theme.medium} !important;
    border-radius: 0;
    padding: 0px 5px 0 5px;
    cursor: pointer;
    width: 100%;
    background-color: transparent;
  }
  .ant-picker-suffix {
    margin-bottom: 2px;
    margin-left: auto;
  }
  .ant-picker-input {
    width: fit-content;
  }
  .ant-picker-range-separator {
    padding-left: 0;
    color: #6a6a6a;
    font-weight: 500;
  }
  .ant-picker-input input {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #6a6a6a;
    cursor: pointer;
    width: 85px;
    ::placeholder {
      color: #6a6a6a;
    }
  }
  .ant-picker-focused {
    box-shadow: none;
  }
  .ant-picker-range .ant-picker-active-bar {
    margin-left: 0;
    width: 68px !important;
    background: ${({ theme }) => theme.main};
  }
  .ant-picker-input-active + .ant-picker-active-bar {
    left: calc() !important;
  }
  .ant-picker-panel {
    box-shadow: 0px 2px 4px 0px #0000001a;
    border-radius: 8px;
  }
`
