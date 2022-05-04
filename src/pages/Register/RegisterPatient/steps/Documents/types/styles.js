import styled from 'styled-components'

import { Accordion } from '@material-ui/core'
import colors from '@/styles/colors'

export const Container = styled.div`
  margin-bottom: 30px;

  .MuiAccordionSummary-root {
    padding: 0;
    border-bottom: 2px solid ${colors.gray.light};

    h2 {
      width: 100%;

      font-size: 20px;
      font-weight: 500;
      line-height: 25px;

      color: ${colors.gray.dark};

      > span {
        color: ${({ theme }) => theme.main};
      }
    }

    &.Mui-disabled {
      opacity: unset;

      > div h2 {
        color: ${colors.gray.middle};
      }
    }
  }

  .MuiAccordionDetails-root {
    padding: 0;
    display: block;
  }

  .MuiPaper-elevation1 {
    box-shadow: none;
  }

  .MuiAccordion-root::before {
    display: none;
  }

  .MuiAccordionSummary-content,
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
    padding: 4px 0;
  }

  .MuiAccordion-rounded:last-child {
    border-radius: unset;
  }

  .MuiAccordionSummary-expandIcon {
    width: 48px;
    height: 48px;

    &.Mui-expanded {
      span svg {
        fill: ${({ theme }) => theme.mediumLight};
      }
    }
  }
`

export const AccordionContainer = styled(Accordion)`
  /* > h3 {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${colors.gray.middle};
  } */

  /* > h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    color: ${({ theme }) => theme.main};
    margin-bottom: 15px;
  } */
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
    color: ${({ theme }) => theme.main};
  }
`
