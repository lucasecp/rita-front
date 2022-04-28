import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 32px;
  min-width: max-content;

  > ul {
    display: flex;
    padding: 25px 0;
    justify-content: space-between;
    position: relative;
    &::after {
      content: '';
      height: 1px;
      width: calc(100% + 64px);
      position: absolute;
      display: block;
      bottom: 0;
      left: -32px;

      background: ${({ theme }) => theme.extraLight};
    }
  }
  > ul li {
    color: #6a6a6a;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 24px;
    min-width: 210px;
    max-width: 210px;
    :first-child {
      min-width: 250px;
      max-width: 250px;
    }
    > div {
      width: fit-content;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  > h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: ${colors.gray.middle};
    text-align: center;
    padding: 32px 0;
  }
`
