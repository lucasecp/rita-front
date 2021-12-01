import styled from 'styled-components'

export const Container = styled.header`
  overflow-x: hidden;
  margin-bottom: 32px;
  form > div:first-child {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: end;
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
  display: flex;
  justify-content:flex-end ;
  grid-column: span 2;
  button:first-child{
    margin-right: 24px;
  }
  @media (max-width: 1200px) {
    grid-column: span 3;

    }
  @media (max-width: 991px) {
    grid-column: span 2;

    }
  @media (max-width: 768px) {
    grid-column: 1;

    }
  @media(max-width: 540px){
    flex-direction: column;
    button:first-child{
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`
