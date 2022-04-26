import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.light};
  padding: 16px 0;
  display: flex;
  min-width: fit-content;
  
`

export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  flex: 0 0 14.28%;


  h5 {
    color: ${({ theme }) => theme.darkness};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center
  }
`
