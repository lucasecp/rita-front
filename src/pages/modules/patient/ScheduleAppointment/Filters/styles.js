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
    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      color: #9146FF;

    }
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
  @media (max-width: 540px) {
    flex-direction: column;
    > button:first-child {
      margin: 0 0 24px 0;
    }
  }
`
