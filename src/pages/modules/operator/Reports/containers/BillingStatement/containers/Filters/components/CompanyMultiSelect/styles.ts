import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 100%;
    justify-content: space-between;

    > label {
      margin-bottom: 6px;
    }
  }
`
