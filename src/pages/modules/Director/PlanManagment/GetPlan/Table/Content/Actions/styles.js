import styled from 'styled-components'

export const Container = styled.li`
  > svg + svg {
    margin-left: 24px;
  }
  display: flex;
  align-items: center;
  gap: 24px;

  svg {
    cursor: pointer;
  }
`
