import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: 32px;
  }

  > p {
    max-width: 510px;
    color: #6a6a6a;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
  }
`

export const ButtonsArea = styled.div`
  display: flex;
  align-items: center;

  gap: 24px;
  margin-top: 32px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    > button {
      width: 100%;
    }
  }
`
