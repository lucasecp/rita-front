import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 32px 16px 32px;
  background: #fff;
  gap: 26px;
  border-radius: 8px;
  > header {
    background: #f8f5ff;
    padding: 30px 32px;
    grid-column: span 3;
    margin: 0 -32px;
    box-shadow: 0px 2px 8px 0px #dfd2ff26;
    border-radius: 8px 8px 0px 0px;
    @media (max-width: 767px) {
      margin: 0 -24px;
      padding: 30px 24px;
    }
    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      color: #9146ff;
    }
  }
  @media (max-width: 1200px) {
    > header {
      grid-column: span 2;
    }
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    padding: 0 24px 16px 24px;

    > header {
      grid-column: span 1;
    }
    grid-template-columns: 100%;
  }
`
export const BtnGroup = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  > button:first-child {
    margin-right: 24px;
  }
  @media (max-width: 1200px) {
    grid-column: span 2;
  }
  @media (max-width: 767px) {
    grid-column: span 1;
  }
  @media (max-width: 540px) {
    flex-direction: column;
    > button:first-child {
      margin: 0 0 24px 0;
    }
  }
`
