import styled from 'styled-components'

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  > * {
    width: 100%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const Container = styled.div<{ name: string }>`
  > h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    color: #6a6a6a;
    margin-bottom: 24px;
  }

  > section {
    margin: 24px 0;
  }

  > span {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: -5px;

    > * {
      margin: 5.5px;
    }

    > p {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: #df644b;
    }
  }
`
