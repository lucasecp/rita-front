import styled from 'styled-components'

export const Container = styled.section`
  > h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;

    margin-bottom: 24px;
    color: #6a6a6a;
  }
  > section {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
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
      gap: 24px;
      > div {
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #eeeeee;
        padding: 14px 16px;
        > span {
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;

          color: #6a6a6a;
          margin-left: 8px;
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
