import styled from 'styled-components'

export const Container = styled.div`
  > div:first-child {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 24px;
    align-items: start;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    @media (max-width: 767px) {
      grid-template-columns: 100%;
    }
  }
`

export const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 24px 0 -16px 0;
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
