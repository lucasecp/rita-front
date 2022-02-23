import colors from '@/styles/colors'
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
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        color: #6a6a6a;
      }
      > h5 {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
        color: #6a6a6a;
      }
    }
  }
  > span {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: #fff;
    padding: 7px 14px;
    display: block;
    background: #f89bff;
    border-radius: 28px;
    text-align: center
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
