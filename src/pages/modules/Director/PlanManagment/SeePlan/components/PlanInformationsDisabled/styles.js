import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 32px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 32px 27px;
  background: #fff;
  border-radius: 8px 8px 0 0;
  > *:nth-child(3),
  > *:nth-child(4),
  > *:nth-child(5) {
    grid-column: span 2;
  }
  > *:nth-child(4) {
    margin-top: 4px;
  }
  @media (max-width: 768px) {
    > *:nth-child(3),
    > *:nth-child(4),
    > *:nth-child(5) {
      grid-column: span 1;
    }
    grid-template-columns: 100%;

    padding: 25px 24px;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  padding: 25.5px 0;
  background: #efeafa;
  border-radius: 0px 0px 8px 8px;
  > *:first-child {
    margin-right: 24px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    padding: 25.5px;
    > *:first-child {
      margin-right: 0px;
      margin-bottom: 24px;
    }
  }
`
