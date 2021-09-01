import styled from 'styled-components'
import colors from '../../../styles/colors'
export const Container = styled.div`
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
`
