import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 2px 8px 0px #0000001a;
  padding: 33px 24px;
  border-radius: 8px;
  position: relative;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
      color: #303030;
      margin-right: 60px;
    }
    > span {
      cursor: pointer;
      padding: 20px;
      display: inline-block;
      position: absolute;
      right: 24px;
      top: 16px;
    }
    @media (max-width: 539px) {
      flex-wrap: wrap;
      > h2 {
        margin-bottom: 24px;
      }
      > button {
        width: 100%;
      }
    }
  }
  > *:last-child > * + * {
    margin-top: 27px;
  }
  > *:last-child[data-expanded='1'] {
    margin-top: 27px;
  }
  @media (max-width: 767px) {
    padding: 33px 16px;
  }
`
