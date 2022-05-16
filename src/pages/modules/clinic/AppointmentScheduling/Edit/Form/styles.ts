import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding: 24px 32px;
  border-radius: 8px;
  > h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 37px;
    color: #6a6a6a;
    margin-bottom: 24px;
  }
  > div {
    > section {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    > div:last-child {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 24px;
    }
  }
  > footer {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 32px 0 48px 0;
  }
  @media (max-width: 767px) {
    padding: 24px;

    > div {
      > section {
        grid-template-columns: 100%;
      }
      > div:last-child {
        grid-template-columns: 100%;
      }
    }
    > footer {
      flex-direction: column;
    }
  }
`
