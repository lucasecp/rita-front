import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;

  > a {
    display: flex;

    transition: 0.3s;

    > span {
      width: 4px;
    }

    > div {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 18px 32px;

      ${({ expanded }) =>
        !expanded &&
        css`
          justify-content: center;
          margin-right: 2px;
        `}

      > svg {
        width: 30px;

        color: ${colors.purple.main.dark};

        fill: currentColor;
      }

      > span {
        margin-left: 12px;
        color: ${colors.gray.dark};
        font-weight: 700;
        line-height: 20px;
        transition: 0.3s;
      }
    }

    :hover {
      background: ${colors.purple.main.middle};
      /* background: ${({ theme }) => theme.primary}; */

      > span {
        background: ${colors.purple.main.light};
      }

      > div {
        > svg {
          color: ${colors.purple.main.light};
        }

        > span {
          color: ${colors.white};
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
          color: ${colors.green.light};
        }
      }
    }
  }

  [aria-current='page'] {
    pointer-events: none;
    background: ${colors.purple.main.dark};

    > span {
      background: ${colors.green.light};
    }

    > div {
      > svg {
        color: ${colors.green.light};
      }

      > span {
        color: #fff;
      }
    }
  }
`
