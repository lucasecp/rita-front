import styled from 'styled-components'

export const Container = styled.div`
  background: #f8f5ff;
  padding: 32px;
  border-radius: 8px;

  select {
    min-width: 400px;
  }

  > h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    margin-bottom: 16px;
    color: #6a6a6a;
  }
  @media (max-width: 767px) {
    padding: 24px 16px;

    select {
      min-width: unset;
    }
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 24px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;

    button {
      margin-left: 0px;
      margin-top: 24px;
    }
  }
`