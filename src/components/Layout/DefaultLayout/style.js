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
    background: ${colors.feedback.success};
    grid-area: header;
  }
  > aside {
    background: ${colors.background};
    grid-area: aside;
  }
  > main {
    background: ${colors.text};
    grid-area: main;
  }
  > footer {
    background: ${colors.primary};
    grid-area: footer;
  }
`
