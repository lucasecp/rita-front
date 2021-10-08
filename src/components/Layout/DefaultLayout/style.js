import styled from 'styled-components'
import colors from '../../../styles/colors'

export const CustomContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'aside header' 'aside main' 'aside footer';
  min-height: 100vh;
  background-color: #e5e5e5;
  > header {
    padding: 40px 64px 24px 64px;
    grid-area: header;
  }
  > aside {
    grid-area: aside;
  }
  > main {
    grid-area: main;
    overflow: hidden;
    > h1 {
      font-size: 32px;
      line-height: 39px;
      font-weight: 500;
      color: ${colors.gray.dark};
      margin-bottom: 16px;
    }
  }
  > footer {
    grid-area: footer;
    padding-top: 22px;
    padding-bottom: 105px;
  }
  > header,
  > footer,
  > main {
    width: 100%;
  }
  > footer,
  > main {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    > header,
    > footer,
    > main {
      padding: 16px 24px 16px 24px;
    }
    > header {
      margin-bottom: 24px;
    }
  }
`
