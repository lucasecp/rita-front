import styled from 'styled-components'
import colors from '@/styles/colors'
import { Accordion } from '@material-ui/core'

export const Container = styled.section`
  > h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;

    margin-bottom: 24px;
    color: #6a6a6a;
  }
  h5 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    color: ${colors.gray.dark};
  }
  > section {
    /* display: flex; */
    flex-direction: column;
    margin-top: 24px;
    > h5 {
      margin-bottom: 4px;
    }
    > h5,
    > div div > h4 {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      color: #6a6a6a;

      margin-right: 20px;
    }
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 24px;
      margin-top: 24px;

      > div {
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        background: #eeeeee;
        padding: 14px 16px;

        height: 50px;
        > span {
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          color: #6a6a6a;
          margin-left: 8px;
          > svg {
            width: 21px;
            height: 22px;
          }
        }
      }
    }
    @media (max-width: 991px) {
      > div {
        grid-template-columns: 100%;
      }
    }
  }
  > div {
    background: #eeeeee;
    padding: 14px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;

    min-height: 50px;
    & + div {
      margin-top: 24px;
    }
    > h4 {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      color: #6a6a6a;

      margin-right: 20px;
    }
  }
`

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
