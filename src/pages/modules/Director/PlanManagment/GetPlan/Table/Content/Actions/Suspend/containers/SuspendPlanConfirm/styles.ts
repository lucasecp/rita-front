import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: ${colors.white};

  > div {
    padding: 40px 32px;

    > h1 {
      margin-bottom: 16px;
      color: ${colors.purple.main.darkness};
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
    }

    > p {
      margin-bottom: 8px;
      color: ${colors.gray.dark};
      font-weight: 400;
      font-size: 20px;
      line-height: 180%;
    }

    > span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: ${colors.purple.main.darkness};
      cursor: pointer;
    }
  }

  > footer {
    padding: 24px;
    /* overflow: hidden; */
    border-radius: 0px 0px 8px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${colors.purple.background.middle};

    > button + button {
      margin-left: 24px;
    }
  }

  @media (max-width: 767px) {
    > footer {
      /* padding: 16px; */
      flex-direction: column;

      > button {
        width: 100%;
      }

      > button + button {
        margin-left: 0px;
        margin-top: 16px;
      }
    }
  }
`
