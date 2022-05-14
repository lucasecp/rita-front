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

  > div:nth-child(2) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    @media (max-width: 767px) {
      grid-template-columns: 100%;
    }
    > section:first-child {
      display: flex;
      gap: 24px;
      margin-top: 24px;
      > div:nth-child(2), div:nth-child(3) {
        > input {
          width: 80px;
        }
      }
    }
  }
`

export const BtnGroup = styled.div`
   margin-top: 31px;
   width: 340px;
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
