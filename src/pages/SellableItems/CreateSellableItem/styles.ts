import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  width: 100%;

  background: #fff;
  border-radius: 8px;

  > header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 18px 34px;

    height: 50px;

    background: ${colors.gray.light};
    border-radius: 8px 8px 0 0;

    cursor: pointer;
  }
  label {
    color: ${colors.gray.middle};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  > main {
    padding: 24px 32px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    input,
    ul {
      color: #909090;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }

    > p {
      display: flex;

      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: ${({ theme }) => theme.main};

      > span {
        flex: 1;
        border-bottom: 1px solid ${({ theme }) => theme.main};
        margin-bottom: 8px;
        margin-left: 4px;
      }
    }

    > #containerInput {
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  > footer {
    padding: 30px 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    button {
      padding: 10px 32px;
    }

    > button + button {
      margin-left: 24px;
    }
  }
`
