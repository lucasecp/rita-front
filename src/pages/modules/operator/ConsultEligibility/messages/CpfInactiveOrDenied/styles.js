import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: 32px;
  }

  > p {
    max-width: 500px;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: ${colors.gray.dark};

    > strong {
      font-weight: 900;
    }

    + p {
      margin-top: 8px;
    }
  }

  > button {
    margin-top: 32px;
  }
`
