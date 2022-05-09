import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 400px;

    > div {
      > input {
        box-shadow: 0px 2px 4px 0px #e5e5e5 !important;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    > div {
      width: 100%;
    }
  }
`
