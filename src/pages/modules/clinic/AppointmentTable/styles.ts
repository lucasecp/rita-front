import styled from 'styled-components'

export const Content = styled.div`
  padding: 37px 32px 0 32px;
  background: #fff;
  border-radius: 8px;
  > h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    color: #6a6a6a;
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;
    &::after {
      content: '';
      height: 2px;
      background: #afafaf;
      width: 100%;
      display: block;
    }
    /* @media (max-width: 767px) {
      flex-direction: column;
    } */
  }
  > footer {
    display: flex;
    justify-content: center;
    padding: 40px;
  }
  @media (max-width: 767px) {
    padding: 29px 24px 0 24px;
    >footer{
      padding: 24px;
    }

  }
`
