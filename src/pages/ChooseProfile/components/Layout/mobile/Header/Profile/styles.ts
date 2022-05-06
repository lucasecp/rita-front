import styled from 'styled-components'

export const Container = styled.button`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  min-width: 40px;
  height: 40px;
  border-radius: 50%;

  overflow: hidden;
  margin-left: 16px;
  > svg {
    transition: 0.2s;
    min-width: 8px;
    > path {
      fill: ${({ theme }) => theme.main};
    }
  }

  > img {
    min-height: 100%;
    border: solid 2px ${({ theme }) => theme.main};
    border-radius: 50px;
  }
  > span {
    background-color: ${({ theme }) => theme.main};
    border-radius: 50%;
    color: #fff;
    min-width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
  }
`
