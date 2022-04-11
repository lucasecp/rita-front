import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  overflow-x: auto;
  border-radius: 8px;

  > section {
    display: flex;
    > div {
      display: flex;
      flex-direction: column;
    }
  }

`
export const Footer = styled.footer`
  padding: 32px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.extraLight};
`
