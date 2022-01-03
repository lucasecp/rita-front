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

      color: ${colors.blue.middle};

      > span {
        flex: 1;
        border-bottom: 1px solid ${colors.blue.middle};
        margin-bottom: 8px;
        margin-left: 4px;
      }
    }
  }

  > button {
    margin: 30px;
  }

  /* padding: 40px 32px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 32px 27px;
  background: #fff;
  border-radius: 8px 8px 0 0;
  > *:nth-child(3),
  > *:nth-child(4),
  > *:nth-child(5) {
    grid-column: span 2;
  }
  > *:nth-child(4) {
    margin-top: 4px;
  }
  @media (max-width: 768px) {
    > *:nth-child(3),
    > *:nth-child(4),
    > *:nth-child(5) {
      grid-column: span 1;
    }
    grid-template-columns: 100%;

    padding: 25px 24px;
  } */
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
