import styled from 'styled-components'

export const Container = styled.header`
  padding: 16px 24px;
  border: solid 1px #eeeeee;
  max-width: 400px;
  border-radius: 4px;
  > div {
    display: flex;
    flex-wrap: wrap;
    margin: -12px;
    > * {
      font-size: 20px;
      font-weight: 500;
      line-height: 25px;
      color: #6a6a6a;
      margin: 12px;
    }
  }
  > span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #326bf6;
    margin-top: 4px;
    display: block;
  }
  /* @media (max-width: 767px) {
    max-width: 100%;
  } */
  @media (max-width: 539px) {
    > div {
      margin: -4px;
      > * {
        margin: 4px;
      }
    }
  }
`
