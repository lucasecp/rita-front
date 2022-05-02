import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  margin: -10px;
  > * {
    margin: 10px;
    cursor: pointer;
  }
  > div > svg {
    > path {
      fill: ${({ theme }) => theme.main};
    }
  }
`
