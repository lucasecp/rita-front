import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.extraLight};
  padding: 56px 86px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 30px;

  > div {
    width: 160px;
  }

  > section {
    flex: 1 0 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 32px;

    > div {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 8px;

      > strong,
      > span {
        font-size: 16px;
        text-transform: uppercase;
      }

      > div {
        flex: 1 0 100%;
        background-color: ${({ theme }) => theme.mediumLight};
        border-radius: 3px;

        > div {
          background: linear-gradient(
            88.69deg,
            #4d22aa 3.78%,
            #7437da 48.21%,
            #823eee 95.7%
          );
          border-radius: 3px;
          height: 10px;
        }
      }
    }
  }

  > p {
    flex: 1 0 100%;

    color: ${({ theme }) => theme.main};
    font-size: 18px;
    text-align: center;
  }
`
