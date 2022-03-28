import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  > footer {
    text-align: right;

    button + button {
      margin-left: 24px;
    }
  }
`
