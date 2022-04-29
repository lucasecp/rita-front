import styled from 'styled-components'

export const Container = styled.div`
  min-width: 170px;
  min-height: 166px;
  padding: 4px;
  border: ${({ theme }) => theme.mediumLight} solid 0.5px;
  display: flex;
  background: #fff;

  > div {
    position: relative;
    display: flex;
    padding: 12px 4px;
    align-items: center;
    background: ${({ theme }) => theme.light};
    min-height: 95%;
    justify-content: space-between;
    width: 100%;
    > svg {
      align-self: end;
      min-width: 15px;
      cursor: pointer;
    }
    > div {
      margin-left: 4px;
      > * {
        word-break: break-word;
      }
      > h5 {
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        color: #000;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        &:first-child {
          margin-bottom: 8px;
        }
      }

      > span {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #afafaf;
        margin-top: 4px;
      }
      > p {
        margin-bottom: 0;
        dispaly: flex;
        flex-direction: column;
        > span {
          font-size: 10px;
          font-weight: 500;
          line-height: 12px;
          color: #303030;
          margin-top: 4px;
        }
      }
    }
    ::before {
      content: '';
      height: 100%;
      display: block;
      background: ${({ theme }) => theme.main};
      width: 4px;
      position: absolute;
      left: 0;
      border-radius: 1px;
      top: 0;
    }
  }
`
