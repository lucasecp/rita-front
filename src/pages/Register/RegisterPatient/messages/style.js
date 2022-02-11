import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: 24px;
  }

  > button {
    margin-top: 24px;
  }

  > p {
    max-width: 455px;
    word-wrap: break-word;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: #6a6a6a;
    + p {
      margin-top: 10px;
    }

    a {
      display: inline-flex;
      align-items: center;
      color: #1c23bd;
    }

    img {
      margin-left: 6px;
    }
  }
`
export const ButtonGroup = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;

  > button + button {
    margin-left: 20px;
  }

  @media (max-width: 539px) {
    flex-direction: column;
    width: 100%;
    button + button {
      margin-top: 20px;
      margin-left: 0;
    }
    button {
      width: 100%;
    }
  }
`
