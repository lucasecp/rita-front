import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 24px;
  align-items: flex-end;
  justify-content: space-between;

  > div {
    max-width: 320px;
  }

  > footer {
    display: flex;
    flex-flow: row nowrap;
    gap: 24px;
  }
`
