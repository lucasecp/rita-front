import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: 24px;
  }

  > p {
    min-width: 546px;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    line-height: 29.88px;
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
