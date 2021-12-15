import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 2px 8px 0px #0000001a;
  padding: 33px 24px;
  border-radius: 8px;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
      color: #303030;
    }
    > svg {
      cursor: pointer;
    }
  }
  > *:last-child > * + * {
    margin-top: 27px
  }
  > *:last-child{
    margin-top: 27px
  }
`
