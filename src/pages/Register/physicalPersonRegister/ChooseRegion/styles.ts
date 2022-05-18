import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.gray.light};

  > div {
    border-radius: 8px;
    background: ${colors.white};
    height: fit-content;
    overflow: hidden;

    margin: 32px 16px;

    > div {
      padding: 32px;

      display: flex;
      flex-direction: column;

      align-items: center;

      > h2 {
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;

        color: ${colors.gray.dark};
        text-align: center;

        margin-bottom: 16px;
      }

      > h3 {
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;

        color: ${colors.gray.dark};
        text-align: center;

        margin-bottom: 40px;
      }

      > section {
        display: flex;
        width: 100%;

        padding: 32px 0;

        > hr {
          width: 100%;

          background: ${colors.gray.middle};
        }

        > h3 {
          font-weight: 400;
          font-size: 24px;
          line-height: 30px;

          color: ${colors.gray.dark};

          padding: 0 16px;
        }
      }

      > h5 {
        font-size: 20px;
        margin-top: 40px;

        color: ${colors.gray.middle};

        > span {
          font-weight: 900;
        }
      }
    }

    > footer {
      display: flex;
      justify-content: center;
      gap: 24px;

      padding: 24px;
      background: ${colors.purple.background.light};
    }
  }

  @media (max-width: 767px) {
    > div {
      margin: 32px 16px;

      > div {
        padding: 40px 16px 0px;

        > h2 {
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;

          margin-bottom: 16px;
        }

        > h3 {
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;

          margin-bottom: 40px;
        }

        > section {
          padding: 40px 0;

          > h3 {
            font-weight: 400;
            font-size: 22px;
            line-height: 27px;

            color: ${colors.gray.dark};

            padding: 0 16px;
          }
        }
      }

      > footer {
        padding: 32px 0 42px;
        background: unset;
      }
    }
  }

  @media (max-width: 400px) {
    > div {
      > footer {
        padding: 32px 16px 42px;
        flex-direction: column;
        background: ${colors.purple.main.light};
      }
    }
  }
`
