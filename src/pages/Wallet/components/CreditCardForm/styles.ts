import styled from 'styled-components'

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  margin-top: 24px;

  > section,
  > footer {
    grid-column: span 2;
  }

  > footer {
    text-align: right;

    button + button {
      margin-left: 24px;
    }
  }
`
