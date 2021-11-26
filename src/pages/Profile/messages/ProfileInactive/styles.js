import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: 24px;
  }

  > h6 {
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.gray.dark};
  }

  > p {
    max-width: 420px;

    text-align: center;

    font-size: 18px;
    font-weight: 500;
    line-height: 22px;

    color: ${colors.gray.dark};
  }

  > button {
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    > p {
      min-width: unset;
    }
  }
`
