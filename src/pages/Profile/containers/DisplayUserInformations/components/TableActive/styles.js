import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  width: 100%;

  display: flex;
  align-items: center;

  padding-right: 16px;

  > img {
  }

  > p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: ${colors.gray.dark};

    > span {
      color: ${colors.orange.middleDark};
    }
  }

  // Special
  > div {
    padding: 16px 0;

    font-size: 16px;
    line-height: 20px;
    font-weight: 700;

    color: ${colors.purple.main.dark};
    text-align: left;

    > p {
      margin-top: 8px;

      font-weight: 500;
      font-size: 11px; // trocar para 12 depois
      line-height: 15px;

      color: ${colors.gray.dark};

      > span {
        color: ${colors.purple.main.dark};
      }
    }
  }
`
