import styled from 'styled-components'

export const Container = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 14px 32px;

  color: ${({ theme }) => theme.main};
  transition: 0.3s;
`
