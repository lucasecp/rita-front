import styled from 'styled-components'

export const Container = styled.div`
  .react-transform-wrapper {
    margin: 0 auto;
  }
`

export const ContainerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  > button {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.extraLight};
    border: 1px solid ${({ theme }) => theme.darkness};
    border-radius: 8px;
    padding: 8px;
  }
`
