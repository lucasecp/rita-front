import styled from 'styled-components'

export const Container = styled.div`
  header {
    justify-content: stretch;
    > h1 {
      margin-right: 40px;
    }
    > nav {
      margin-left: auto;
    }
  }
  > * > main > h1 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Content = styled.div`
  overflow-x: hidden;
  padding: 32px 32px 0 32px;
  background: ${({ theme }) => theme.extraLight};

  @media (max-width: 767px) {
    padding: 25px 24px 0;
  }
`
