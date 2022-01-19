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
    max-width: 410px;
    color: #6a6a6a;

    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
`
