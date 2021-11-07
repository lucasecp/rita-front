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
    max-width: 410px;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: ${colors.gray.dark};
  }

  > button {
    margin-top: 32px;
  }

  > h6 {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.purple.main.dark};
  }
`