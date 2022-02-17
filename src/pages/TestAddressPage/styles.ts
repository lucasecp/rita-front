import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background: #eeeeee;

  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px 0;

  > div {
    width: 50%;
    padding: 24px;

    max-height: 90%;

    display: flex;
    flex-direction: column;

    background: #ffffff;
    border-radius: 8px;

    gap: 24px;

    overflow: auto;

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > h2 {
        font-weight: 700;
        font-size: 32px;
        line-height: 37px;

        color: ${colors.blue.middle};
      }

      > button {
        padding: 8px 16px;
        border: 1px solid ${colors.blue.middle};
        border-radius: 4px;

        color: ${colors.blue.middle};
        text-transform: uppercase;

        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
      }
    }

    > section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    > button {
      padding: 8px 16px;
      border: 1px solid ${colors.blue.middle};
      background: ${colors.blue.middle};

      border-radius: 4px;

      color: ${colors.white};
      text-transform: uppercase;

      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      margin-left: auto;
    }
  }

  @media (max-width: 767px) {
    > div {
      width: 90%;

      > section {
        grid-template-columns: 1fr;
      }

      > button {
        width: 100%;
      }
    }
  }
`
