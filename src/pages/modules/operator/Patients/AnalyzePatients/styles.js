import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.extraLight};
  padding: 32px 32px 0;
  border-radius: 8px;
  position: relative;
  > :last-child {
    padding: 32px;
    margin: 0 -32px;
    background-color: #fff;
    border-radius: 0 0 8px 8px;
  }
  @media (max-width: 767px) {
    padding: 25px 24px 0;
    > :last-child {
      padding: 24px;
      margin: 0 -24px;
    }
  }
`
