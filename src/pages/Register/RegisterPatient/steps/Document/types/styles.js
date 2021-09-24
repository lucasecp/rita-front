import styled from 'styled-components'

import { Accordion } from '@material-ui/core'
import colors from '@/styles/colors'

export const AccordionContainer = styled(Accordion)`
  margin-bottom: 30px;

  > h3 {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${colors.gray.middle};
  }
  
  > h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    color: ${colors.purple.main.dark};
    margin-bottom: 15px;
  }
`
export const Content = styled.div`
  display: flex;
  margin-top: 24px;
  > div:first-child {
    margin-right: 100px;
  }
  > ul {
    margin-bottom: 45px;
    > li + li {
      margin-top: 15px;
    }
    > li {
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #6a6a6a;
      display: flex;
      align-items: center;
    }
    li::before {
      content: '';
      height: 5px;
      width: 5px;
      min-width: 5px;
      border-radius: 50%;
      background: #6a6a6a;
      display: inline-block;
      margin-right: 8px;
      align-self: center;
    }
  }
  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #909090;
    margin-top: 20px;
    display: inline-block;
  }
`

export const ContentFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
    color: #df644b;
    img {
      margin-right: 5px;
    }
  }
  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #9146ff;
  }
`
