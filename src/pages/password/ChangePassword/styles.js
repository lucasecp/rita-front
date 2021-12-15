import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15),
    0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: 40px 32px;

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.gray.dark};

    margin-bottom: 24px;
  }

  > p {
    font-size: 16px;
    line-height: 20px;

    color: ${colors.gray.middleLight};
  }

  > form {
    margin-top: 24px;

    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 24px;

    > button {
      margin-top: 24px;
    }
  }

  @media (max-width: 815px) {
    padding: 32px 24px;

    > form {
      grid-template-columns: 1fr;
      margin-right: 0;
      gap: 16px;

      > div + div {
        margin-top: 8px;
      }

      > button {
        margin-top: 32px;
      }
    }
  }
`
