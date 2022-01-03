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
  > h6 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #909090;
    &:not(h1 + h6) {
      margin-bottom: 15px;
    }
  }
  > h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: #6a6a6a;
    margin-bottom: 15px;
  }
  > p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #6a6a6a;
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
      margin-bottom: 2px;
      min-width: 20px;
    }
  }
  > div {
    padding: 16px 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
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
