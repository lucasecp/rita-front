import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > img {
    margin-bottom: 24px;
  }
  > button {
    margin-top: 24px;
  }
  > p {
    max-width: 455px;
    word-wrap: break-word;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: #6a6a6a;
    + p {
      margin-top: 10px;
    }
    a {
      display: inline-flex;
      align-items: center;
      color: #1c23bd;
      margin-left: 6px;
    }
    img {
      margin-left: 6px;
    }
  }
`
