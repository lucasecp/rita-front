import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 784px;

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 16px;
    color: #6a6a6a;
    align-self: flex-start;
  }

  > form {
    width: 100%;
    display: grid;
    grid-template-columns: 6fr 6fr;
    gap: 24px;

    > * {
      width: 320px;
    }
  }

  > footer {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;

    > * {
      padding-right: 12px;
      padding-left: 12px;
    }
  }

  @media (max-width: 767px) {
    > form {
      grid-template-columns: 1fr;
    }

    > footer {
      flex-direction: column;
      gap: 24px;
      width: 100%;

      button {
        width: 100%;
      }
    }
  }
`
