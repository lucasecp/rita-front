import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.extraLight};
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 27px;

  > * {
    margin: 17.5px;
  }
  > div:first-child {
    position: relative;
    > div {
      height: 159px;
      width: 159px;
      border-radius: 50%;
      position: relative;
      border: solid ${({ theme }) => theme.main} 2px;
      background: #fff;
      display: flex;
      align-items: end;
      justify-content: center;
      overflow: hidden;
    }
    > span {
      background: ${({ theme }) => theme.main};
      position: absolute;
      right: 0;
      bottom: 16px;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  > div:last-child {
    > div {
      margin: -12px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      > h2 {
        font-size: 28px;
        font-weight: 500;
        line-height: 35px;
        color: #6a6a6a;
      }
      > p {
        display: flex;
        flex-wrap: wrap;
        > * {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
        }
        > h6 {
          color: #6a6a6a;
          margin-right: 2px;
        }
        > span {
          color: #303030;
        }
      }
      > * {
        margin: 12px;
      }
    }
  }

  ::before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.main};
    height: 100%;
    width: 10px;
    display: block;
    left: 0;
    top: 0;
    border-radius: 8px 0px 0px 8px;
  }
`
