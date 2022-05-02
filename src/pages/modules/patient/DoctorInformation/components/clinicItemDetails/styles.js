import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px 0;
  margin: 0 0px 0 24px;
  > ul > * + * {
    margin: 17px 0 0 0;
  }
  > ul li {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #6a6a6a;
    display: flex;
    align-items: center;
  }
  > ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 0 24px 0;
    li:first-child {
      margin-right: 32px;
      span {
        color: #303030;
        margin: 0 8px;
      }
    }
    li:last-child {
      margin-right: 32px;
      span {
        color: #303030;
      }
    }
  }
  > ul > li > * + * {
    margin: 8px;
  }
  > ul > li > svg {
    margin-right: 8px;
  }

  > ul > li > svg + span {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    & + span {
      margin-left: 0px;
    }
    & + span + span {
      padding: 8px;
      background: ${({ theme }) => theme.main};
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      border-radius: 16px;
      margin-left: 0px;
    }
  }
  > ul > li:last-child span {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #303030;
  }
  > ul > li:last-child div {
    margin: 0 8px 0 0;
    & + span {
      margin-left: 0px;
    }
  }
  > ul > li {
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    margin-left: 0px;
    padding: 24px;
    > ul li {
      justify-content: center;
      margin-right: 0 !important;
      flex-direction: column;
      > svg {
        margin-right: 0;
        margin-bottom: 8px;
      }
    }
  }
`
