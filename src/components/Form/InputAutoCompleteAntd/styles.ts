import colors from '@/styles/colors'
import styled from 'styled-components'
import closeIcon from '@/assets/icons/close.svg'

export const Container = styled.div`
  .ant-input-group-addon {
    display: none;
  }
  .ant-select-item {
    padding: 14px 16px;
  }
  .ant-select {
    width: 100%;
    position: relative;
  }
  .ant-select-clear {
    height: fit-content !important;
    width: fit-content !important;
    position: absolute !important;
    .anticon.anticon-close-circle {
      display: none !important;
    }
    ::after {
      padding: 5px;
      margin-right: 5px;
      width: 5px;
      height: 5px;
      cursor: pointer;
      border: none;
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
  > label {
    margin-bottom: 6px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
  .ant-input {
    color: #6a6a6a;
    border-radius: 8px !important;
    padding: 14px 16px;
    display: inline-block;
    transition: all 0.3s;
    position: relative;
    border: 1px solid #eeeeee;
    box-shadow: 0px 2px 4px 0px #e5e5e5;
    font-weight: 500;
    width: 100%;
    line-height: 0;
    &::placeholder {
      color: #6a6a6a;
    }

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
      border-color: #419eff;

      ::after {
        border: 1px solid #419eff;
        border-color: #419eff;
      }
    }
    :hover:not(:focus) {
      border-color: #eeeeee;
    }
  }
`
export const Item = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 14px 16px;
  color: #6a6a6a;
  > span {
    text-align: end;
    margin-left: 10px;
  }
  > div {
    display: flex;
    align-items: center;
    overflow: hidden;
    > span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > div {
      margin-right: 10px;
      min-width: 30px;
      max-width: 30px;
    }
  }
`
export const ItemWithLink = styled.div`
  > a {
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    padding: 14px 16px;
    color: #6a6a6a;

    > span {
      text-align: end;
      margin-left: 10px;
    }
    > div {
      display: flex;
      align-items: center;
      overflow: hidden;
      > span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      > div {
        margin-right: 10px;
        min-width: 30px;
        max-width: 30px;
      }
    }
  }
`
