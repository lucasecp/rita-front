import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: 24px;
  }

  > p {
    max-width: 455px;
    word-wrap: break-word;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: #6a6a6a;
  }

  > footer {
    margin-top: 24px;
    display: flex;
    align-items: center;

    > button + button {
      margin-left: 20px;
    }
  }

  @media (max-width: 539px) {
    > footer {
      flex-direction: column;
      width: 100%;

      > button + button {
        margin-top: 20px;
        margin-left: 0;
      }

      > button {
        width: 100%;
      }
    }
  }
`
export const FormGroup = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  > *:last-child {
    gap: 24px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 539px) {
    > *:last-child {
      flex-direction: column;
    }
    align-items: stretch;
    align-self: stretch;
  }
`
