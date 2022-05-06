import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  > #box-information {
    padding: 16px;
    margin: 24px 0;
    background-color: ${colors.gray.extraLight};
    border-radius: 8px;

    > h6 {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;

      color: ${({ theme }) => theme.main};
    }
    > ul {
      margin-top: 16px;

      li {
        > h5 {
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          color: ${colors.gray.dark};

          &::before {
            content: '';
            height: 4px;
            width: 4px;
            border-radius: 50%;
            display: inline-block;
            background: ${colors.gray.dark};
            margin-right: 8px;
            margin-bottom: 3px;
          }
        }
        > p {
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          color: ${colors.gray.dark};
          margin-left: 10px;
          margin-top: 4px;
          text-align: start;

          > a {
            text-decoration: underline;
          }
        }
      }

      > div {
        margin: 8px 0;
        font-family: Athletics;
        color: ${({ theme }) => theme.main};
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        @media (max-width: 540px) {
          margin-left: 0;
          text-align: center;
        }
      }
    }
  }

  > section {
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    > span {
      color: ${colors.gray.middle};
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
    }

    > span:first-child {
      color: ${colors.gray.dark};
      font-weight: 700;
    }
  }

  @media (max-width: 500px) {
    > div {
      width: 100%;

      > button {
        width: 100%;
      }
    }
  }
`
