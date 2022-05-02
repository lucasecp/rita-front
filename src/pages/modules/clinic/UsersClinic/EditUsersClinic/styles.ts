import styled from 'styled-components'

export const Container = styled.div`
  > section {
    background: #fff;
    padding: 24px;
    border-radius: 10px;
    > section:nth-child(1) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      > h2 {
        font-size: 30px;
        color: #6A6A6A;
      }
    }
    > section:nth-child(2) {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 24px;
    }
    > section:nth-child(3) {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 24px;
    }
    > section:nth-child(4) {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 15px;
    }
    @media (max-width: 768px) {
      > section:nth-child(1),
      section:nth-child(2),
      section:nth-child(3) {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    }
  }
`
