import styled from 'styled-components'

import colors from '@/styles/colors'

import ArrowLeftIcon from '@/assets/icons/arrow-left2.svg'

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

  > main {
    padding: 24px 32px;

    display: flex;
    flex-direction: column;
    gap: 24px;

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
      grid-template-columns: repeat(3, 1fr);

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
  }
`
export const ArrowLeft = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;

  &:after {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url(${ArrowLeftIcon});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
  }
`
