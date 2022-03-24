import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.section`
  background-color: ${colors.purple.background.light};
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
        background-color: ${colors.purple.main.light};
        border-radius: 3px;

        > div {
          background: linear-gradient(
            88.69deg,
            #4D22AA 3.78%,
            #7437DA 48.21%,
            #823EEE 95.7%
          );
          border-radius: 3px;
          height: 10px;
        }
      }
    }
  }
`
