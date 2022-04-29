import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.extraLight};
  padding: 32px 32px 0;
  border-radius: 8px;
  position: relative;
  @media (max-width: 767px) {
    padding: 25px 24px 0;
  }
`
