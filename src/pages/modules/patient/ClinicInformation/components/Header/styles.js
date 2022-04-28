import styled from 'styled-components'

export const DefaultPhoto = styled.div`
  width: 320px;
  height: 188px;
  border-radius: 8px;
  background: #f5f5f5;
  margin-right: 24px;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .link-address {
    margin-left: 8px;
  }

  > div:first-child {
    margin-right: 24px;

    > img {
      width: 320px;
      height: 188px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  > div:last-child {
    > h2 {
      margin-top: 8px;
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
      color: #303030;
      margin-bottom: 8px;
    }
    > ul > li {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #6a6a6a;
      flex-wrap: wrap;
      &:first-child {
        margin: 0px 0 24px 0;
        > span {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          color: #6a6a6a;
          margin-right: 0 !important;
          margin-bottom: 0 !important;
        }
        > * {
          margin-top: 8px;
        }
      }

      > svg {
        margin: 0px 16px 0 8px;
      }
      a {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color${({ theme }) => theme.main};
        text-decoration: underline;
      }
      > span {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: #303030;
        display: flex;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 8px;
        text-decoration: none;
        &:first-child {
          margin-right: 24px;
        }
        svg {
          margin-right: 8px;
        }
      }
      &:last-child > a {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: #303030;
        display: flex;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 8px;
        > svg {
          margin-right: 8px;
        }
        text-decoration: none;
      }
    }
  }
`
