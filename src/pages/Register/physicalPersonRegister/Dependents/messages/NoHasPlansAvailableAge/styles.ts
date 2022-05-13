import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 56px;
  }

  > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.gray.dark};
    text-align: center;

    min-width: 450px;
  }

  > * + * {
    margin-top: 24px;
  }

  > footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`
