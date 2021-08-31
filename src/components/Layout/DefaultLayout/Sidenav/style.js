import styled, { css } from 'styled-components'
import colors from '../../../../styles/colors'

export const Container = styled.aside`
  position: sticky;
  /* left: 0;*/
  top: 0;
  height: 100vh;
  width: ${({ mode }) => (mode === 'expanded' ? 300 : 118)}px;
  transition: 0.3s;

  > div {
    position: absolute;
    top: 64px;
    right: -20px;

    padding: 14px 5px 14px 5px;

    background: ${colors.background.sideBar};
    border-radius: 0px 4px 4px 0px;

    cursor: pointer;

    > img {
      transition: 0.3s;

      ${({ mode }) =>
        mode === 'short' &&
        css`
          transform: rotateY(180deg);
        `}
    }
  }

  ::before {
    content: '';
    width: 1px;
    position: absolute;
    top: 0;
    right: -1px;

    background: #efeafa;
    height: inherit;
  }

  > nav {
    position: relative;
    height: inherit;
    background: ${colors.background.sideBar};
    display: flex;
    flex-direction: column;

    overflow: hidden;

    > header {
      > img {
        min-width: ${({ mode }) => (mode === 'expanded' ? '212px' : 'unset')};

        padding: 40px 32px 52px;
      }
    }
  }
`
