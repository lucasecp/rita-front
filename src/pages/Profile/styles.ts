import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  grid-template-columns: 3fr 5fr;
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`
