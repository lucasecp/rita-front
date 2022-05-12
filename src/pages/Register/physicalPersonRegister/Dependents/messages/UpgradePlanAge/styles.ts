import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  > h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 40px;
    color: #6a6a6a;
    text-align: center;
  }

  > footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`
