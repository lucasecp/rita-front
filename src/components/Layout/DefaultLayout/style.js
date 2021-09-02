import styled from 'styled-components'

export const CustomContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'aside header' 'aside main' 'aside footer';
  min-height: 100vh;
  background-color: #e5e5e5;
  > header {
    grid-area: header;
  }
  > aside {
    grid-area: aside;
  }
  > main {
    grid-area: main;
  }
  > footer {
    grid-area: footer;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
