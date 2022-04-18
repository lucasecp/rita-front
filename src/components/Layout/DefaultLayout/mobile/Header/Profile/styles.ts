import styled from 'styled-components'

export const Container = styled.button<{
  isActive: boolean
  color: string
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;

  overflow: hidden;
  margin-left: 16px;

  > img {
    min-height: 100%;
    border: solid 2px ${({ color }) => color};
    border-radius: 50px;
  }
  > span {
    background-color: ${({ color }) => color};
    border-radius: 50%;
    color: #fff;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
  }
`
