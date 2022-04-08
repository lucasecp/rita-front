import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.ul<{ expanded: boolean }>`
  display: flex;
  flex-direction: column;

  > a,
  > div > a {
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

    > svg {
      width: 10px;
      color: ${colors.purple.main.middle};
      margin: 0 20px 0 -20px;
    }

    :hover {
      background: ${colors.purple.main.middle};

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

      > svg {
        color: ${colors.purple.main.light};
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

    &.active {
      /* pointer-events: none; */
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
  }

  > div {
    > div {
      background-color: ${colors.purple.background.light};
      padding: 16px 0;

      > a {
        display: block;
        padding: 10px 24px;
        font-size: 16px;
        color: ${colors.gray.dark};

        transition-property: box-shadow, color;
        transition-duration: 300ms;

        &:hover,
        &.active {
          box-shadow: 4px 0 0 0 ${colors.purple.main.darkness} inset;
          color: ${colors.purple.main.darkness};
        }
      }
    }
  }
`
