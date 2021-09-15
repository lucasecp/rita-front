import ButtonPrimary from '@/components/Button/Primary'
import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 0;
  box-shadow: 0px 2px 8px 0px #DFD2FF26;
  background: #F8F5FF;
  margin-bottom: 100px;
  header {
    display: flex;
    align-items: center;
  }
  border-radius: 8px;
;
`

export const DotSteps = styled.span`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: block;
  transition: 0.3s;
  margin-bottom: 26px;
  ${({ waiting}) =>
    waiting &&
    css`
      background: #dfd2ff;
    `}
  ${({ finish }) =>
    finish &&
    css`
      background: #acffc5;
    `}
  ${({ active}) =>
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
      background-color: #EFEAFA;
      position: relative;
      left:-150%;
      top:50%
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
export const BtnNext = styled(ButtonPrimary)`
  margin-left: auto;
`
