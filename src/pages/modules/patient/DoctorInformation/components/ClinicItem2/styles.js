import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 2px 8px #0000001a;
  border-radius: 8px;
  > *:first-child {
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    > div > h2 {
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
    }
    > div > ul {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #6a6a6a;
      display: flex;
      align-items: center;
      > li {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        @media (max-width: 767px) {
          justify-content: center;
          flex-direction: column;
          text-align: center;
        }
        > a {
          text-decoration-line: underline;
        }
        > span {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          color: #6a6a6a;
          display: flex;
          align-items: center;
        }
      }
      > li > svg {
        margin: 0 16px 0 8px;
      }
    }
    > svg {
      cursor: pointer;
      position: absolute;
      right: 24px;
      top: 24px;
    }
    > div > ul > li > * {
      margin: 8px 0 0 0;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      > div > h2 {
        margin: 0 26px 8px 0;
      }
      > div > ul {
        margin-bottom: 8px;
      }
      > button {
        width: 100%;
      }
    }
  }
`
