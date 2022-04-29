import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 32px 0 32px;

  > h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.main};
  }
`

export const InputsArea = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  section {
    display: grid;
    gap: 24px;
  }

  section:first-of-type {
    grid-template-columns: repeat(3, 1fr);
  }

  section:last-of-type {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    section:first-of-type,
    section:last-of-type {
      grid-template-columns: 1fr;
    }
  }
`
