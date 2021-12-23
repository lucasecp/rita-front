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
      color: #6A6A6A;

      margin-right: 20px;
    }
  }
`
