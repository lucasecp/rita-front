import styled from 'styled-components'

export const Container = styled.div`
    background: ${({ theme }) => theme.extraLight};
  overflow-x: auto;
  border-radius: 8px;

  > section {
    display: flex;
    > div {
      display: flex;
      flex-direction: column;
      flex: 0 0 14.28%
    }
  }

`