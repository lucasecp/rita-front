import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.light};
  position: relative;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  border-radius: 0px 8px 8px 0px;
  flex-wrap: wrap;
  > div {
    > div {
      margin-bottom: 11px;
      > h6 {
        margin-bottom: 4px;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: #909090;
      }
      > h5 {
        font-size: 25px;
        font-weight: 500;
        line-height: 31px;

        color: #6a6a6a;
      }
    }
  }
  ::before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.darkness};
    height: 100%;
    width: 10px;
    display: block;
    left: 0;
    top: 0;
    border-radius: 8px 0px 0px 8px;
  }
`
