import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   label{
    margin-bottom: 9px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
   }

  .ant-picker {
    border: none;
    border-bottom: 2px solid #c0a6ff;
    border-radius: 0;
    padding: 0px 5px 0 5px;
    cursor:pointer;
    width:100%;
   background-color: transparent;
  }
  .ant-picker-suffix {
    margin-bottom: 2px;
    margin-left: auto;
  }
  .ant-picker-input{
    width: fit-content
  }
  .ant-picker-range-separator {
    padding-left: 0;
    margin-left: -10px;
    color:#6A6A6A;
    font-weight: 500;
  }
  .ant-picker-input input {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #6A6A6A;
    cursor: pointer;
    ::placeholder{
      color: #6A6A6A;
    }
  }
  .ant-picker-focused{
    box-shadow: none
  }
  .ant-picker-range .ant-picker-active-bar{
    margin-left: 0;
    width:68px !important;
    background: ${colors.purple.main.dark};
  }
  .ant-picker-input-active + .ant-picker-active-bar{
   left:calc() !important
  }
    .ant-picker-panel{
    box-shadow: 0px 2px 4px 0px #0000001A;
    border-radius: 8px;

  }
`
