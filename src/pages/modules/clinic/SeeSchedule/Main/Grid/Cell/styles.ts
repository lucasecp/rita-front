import styled from 'styled-components'

export const Container = styled.div`
  min-width: 166px;
  min-height: 166px;
  padding: 4px;
  border: ${({ theme }) => theme.mediumLight} solid 0.5px;
  display: flex;
  align-items: center;

  > div {
    position: relative;
    display: flex;
    padding: 12px 4px;
    align-items: center;
    background: ${({ theme }) => theme.light};
    > svg {
      align-self: end;
      min-width: 15px;
      cursor: pointer
    }
    > div {
      >*{
        word-break: break-word;
      }
      > h5 {
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        color: #303030;
      }

      > span {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #6a6a6a;
      }
      > p {
        margin-bottom: 0;
        dispaly: flex;
      flex-direction: column;
        > span {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          color: #6a6a6a;
        }
      }
    }
    ::before {
      content: '';
      height: 100%;
      display: block;
      background: ${({ theme }) => theme.main};
      width: 2px;
      position: absolute;
      left: 0;
      border-radius: 1px;
      top: 0;
    }
  }
`
