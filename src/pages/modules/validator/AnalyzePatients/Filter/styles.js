import styled from 'styled-components'

export const Container = styled.header`
  overflow-x: hidden;
  margin-bottom: 32px;
  form > div:first-child {
    display: grid;
    grid-template-columns: repeat(3, auto) repeat(2, 120px);
    align-items: start;
    gap: 24px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, auto);
    }
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, auto);
    }
    @media (max-width: 767px) {
      grid-template-columns: 100%;
    }
  }
`

export const BtnGroup = styled.div`
  margin: 24px 24px 24px auto;
`
