import colors from '@/styles/colors'

import styled from 'styled-components'

export const Container = styled.div`
  min-width: max-content;

  > ul {
    display: flex;
    padding: 24px 32px;
    justify-content: space-between;
    position: relative;
    text-align: center;

    &::after {
      content: '';
      height: 1px;
      width: calc(100% + 32);
      position: absolute;
      display: block;
      bottom: 0;
      left: -32px;

      background: ${colors.purple.background.light};
    }
  }
  > ul li {
    color: #6a6a6a;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 24px;
    min-width: 150px;
    max-width: 150px;
    text-align: center;

    &:last-child {
      margin-right: 0;
      justify-content: center;
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