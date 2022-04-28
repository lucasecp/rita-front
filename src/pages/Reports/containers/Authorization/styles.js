import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.extraLight};
  padding: 32px;
  border-radius: 8px;

  @media (max-width: 767px) {
    padding: 25px 24px;
  }
`
