import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 500px;

  > img {
    margin-bottom: 32px;

    max-width: 30%;
  }

  > p {
    color: #6a6a6a;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
  }
`
