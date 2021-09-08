import styled, { css } from 'styled-components'
import colors from '../../../../../styles/colors'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    cursor: pointer;
    display: flex;

    transition: 0.3s;

    > span {
      width: 4px;
      color: red;

      transition: 0.3s;
    }
    > div {
      display: flex;
      align-items: center;
      ${({ expanded }) =>
        !expanded &&
        css`
          justify-content: center;
          margin-right: 2px;
        `}

      flex: 1;

      padding: 18px 32px;

      > svg {
        transition: 0.3s;
      }

      > a {
        margin-left: 12px;
        color: ${colors.gray.dark};
        font-weight: 700;
        line-height: 20px;
        transition: 0.3s;
      }
    }

    :hover {
      background: ${colors.purple.main.middle};

      > span {
        background: ${colors.purple.main.light};
      }

      > div {
        > a {
          color: ${colors.text.secondary};
        }
      }
    }

    :active {
      background: ${colors.purple.main.dark};

      > span {
        background: ${colors.green.light};
      }

      > div {
        > svg {
          fill: ${colors.green.light};
        }

        > a {
          color: ${colors.text.secondary};
        }
      }
    }
  }
`
