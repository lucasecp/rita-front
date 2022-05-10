import styled from 'styled-components'
import bg from '@/assets/img/wallet-card-bg.png'

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.main};
  background-image: url(${bg});
  background-size: cover;
  border-radius: 8px;
  width: 230px;
  height: 130px;
  padding: 18px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  h4 {
    font-size: 18px;
    color: #fff;
  }

  h5 {
    font-size: 12px;
    color: #fff;

    text-transform: uppercase;
  }

  span {
    font-size: 14px;
    font-weight: 800;
    color: #fff;
  }

  svg {
    border-radius: 2px;
    width: 40px;
  }

  > div {
    display: flex;
    gap: 5px;

    &:nth-child(1) {
      flex-direction: column;
    }

    &:nth-child(2) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  > button {
    position: absolute;
    right: 10px;
    top: 0;
    transform: translateY(-50%);

    width: 24px;
    height: 24px;

    svg {
      fill: #fff;
      color: ${({ theme }) => theme.main};
      width: 100%;
      border-radius: 100%;

      transition: box-shadow 200ms;
    }

    &:hover svg {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
`
