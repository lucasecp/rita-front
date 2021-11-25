import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  > h6 {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;

    color: ${colors.purple.main.dark};

    margin-bottom: 16px;
  }
  > ul {
    li {
      > h5 {
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
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
      > span {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: ${colors.gray.dark};
        margin-left: 15px;
        > a {
          text-decoration: underline;
        }
      }
      &:last-child {
        margin-bottom: 12px;
      }
    }
    > div {
      margin: 16px 0 16px 150px;
      font-family: Athletics;
      color: ${colors.purple.main.dark};
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      @media(max-width: 540px){
        margin-left: 0;
        text-align: center
      }
    }
  }

  > p {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    color: ${colors.gray.dark};
    margin-bottom: 24px;
    margin-top: 3px;
  }
  > h5 {
    margin-top: 8px;
    margin-bottom: 16px;
    color: ${colors.orange.middleDark};

    font-size: 12px;
  }
  > section {
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

  @media (max-width: 500px) {
    > div {
      width: 100%;

      > button {
        width: 100%;
      }
    }
  }
`
