import ButtonPrimary from '@/components/Button/Primary'
import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 0;
  box-shadow: 0px 2px 8px 0px #dfd2ff26;
  background: #f8f5ff;
  margin: 20px 0px 100px 0;
  border-radius: 8px;
  position: relative;
  > button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-style: normal;
    display: flex;
    align-items: center;
    line-height: 20px;
    color: #AFAFAF;
    position: absolute;
    top: -30px;
    right:0;
    padding: 0;
    img{
      width:15px;
      height: 15px;
      margin-left:8px;
    }
  }
  header {
    display: flex;
    align-items: center;
  }
`

export const DotSteps = styled.span`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: block;
  transition: 0.3s;
  margin-bottom: 26px;
  ${({ waiting }) =>
    waiting &&
    css`
      background: #dfd2ff;
    `}
  ${({ finish }) =>
    finish &&
    css`
      background: #acffc5;
    `}
  ${({ active }) =>
    active &&
    css`
      background: #9146ff;
    `}
  +span {
    margin-left: 48px;

    ::before {
      content: '';
      height: 2px;
      width: 24px;
      border-radius: 2px;
      display: block;
      background-color: #efeafa;
      position: relative;
      left: -150%;
      top: 50%;
    }
  }
`

export const BtnGroup = styled.div`
  margin-top: 24px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  align-self: stretch;
  > button:last-child {
    margin-left: auto;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    > button:last-child {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`
export const BtnPrev = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #9146ff;
  background-color: transparent;
  border: none;
  text-decoration: underline;
`
export const CustomBtn = styled(ButtonPrimary)`
  margin-left: auto;
`
