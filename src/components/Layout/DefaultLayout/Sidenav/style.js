import styled from 'styled-components'
import colors from '../../../../styles/colors'

export const Container = styled.aside`
  position: sticky;
  /* left: 0;
  top: 0; */
  height: 100vh;
  width: 300px;

  > nav {
    position: relative;
    height: inherit;
    background: ${colors.background.sideBar};
    display: flex;
    flex-direction: column;

    ::after {
      content: '';
      width: 1px;
      position: absolute;
      right: -1px;

      background: #efeafa;
      height: inherit;
    }

    > img {
      position: absolute;
      top: 48px;
      right: -20px;

      padding: 14px 5px 14px 5px;

      background: ${colors.background.sideBar};
      border-radius: 0px 4px 4px 0px;

      cursor: pointer;
    }

    > header {
      > img {
        padding: 40px 32px 52px;
      }
    }
  }
`
