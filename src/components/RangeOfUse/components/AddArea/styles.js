import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 16px;
  display: flex;

  > section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }

  > button {
    margin-left: 40px;
    margin-top: 22px;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    > section {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    > button {
      margin-left: 0px;
      margin-top: 40px;
      width: 100%;
    }
  }
`
