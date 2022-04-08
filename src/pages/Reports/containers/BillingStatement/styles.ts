import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 24px 32px; */

  border-radius: 8px 8px 0px 0px;
  background: ${({ theme }) => theme.extraLight};

  gap: 24px;
`
