import styled from 'styled-components'

export const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  > svg {
    > path {
      fill: ${({ theme }) => theme.main};
    }
  }

  h6 {
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    color: #909090;

    place-self: center;
  }
`
export const Time = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #909090;

  align-self: center;
`
