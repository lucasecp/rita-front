import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 16px;

  > h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    color: ${colors.gray.dark};
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 32px;
    justify-items: center;

    gap: 64px;

    > section {
      > img {
      }
    }
    > aside {
      > h4 {
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;

        color: ${colors.purple.main.dark};
      }
      > ul {
        margin-top: 8px;
        margin-bottom: 40px;
        padding-left: 24px;

        > li {
          list-style: disc;
          font-weight: 500;
          font-size: 16px;
          line-height: 120%;
          color: ${colors.gray.middle};
        }

        > li + li {
          margin-top: 12px;
        }
      }

      > ul + div {
        margin-bottom: 8px;
      }

              > div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 12px;
      line-height: 125%;
      color: ${colors.gray.middle};
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
    }
    > span:first-child {
      color: ${colors.orange.middleDark};
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
    }
  }

      > p {
        margin-bottom: 16px;

        font-weight: 500;
        font-size: 16px;
        line-height: 150%;

        color: ${colors.orange.middleDark};
      }

      > span {
        font-size: 12px;
        line-height: 125%;
        color: ${colors.gray.middle};
      }
    }
  }

  @media (max-width: 880px) {
    > div {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 500px) {
    > div aside div {
      width: 100%;

      > button {
        width: 100%;
      }
    }
  }
`
