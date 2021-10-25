import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;

  > a {
    cursor: pointer;
    display: flex;

    transition: 0.3s;

    > span {
      width: 4px;

      transition: 0.3s;
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
        /* transition: none; */
        min-width: 30px;

        stroke: ${colors.purple.main.dark};
        fill: transparent;

        /* > path {
          fill: red;
        } */
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

      > span {
        background: ${colors.purple.main.light};
      }

      > div {
        > svg {
          /* filter: invert(0%) sepia(100%) saturate(12%) hue-rotate(200deg)
            brightness(153%) contrast(104%); */
          stroke: ${colors.purple.main.light};
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
          stroke: ${colors.green.light};
          /* filter: invert(90%) sepia(7%) saturate(1721%) hue-rotate(74deg)
            brightness(105%) contrast(105%); */
        }
      }
    }
  }

  [aria-current='page'] {
    background: ${colors.purple.main.dark};

    > span {
      background: ${colors.green.light};
    }

    > div {
      > svg {
        /* transition: none; */
        /* filter: invert(94%) sepia(18%) saturate(609%) hue-rotate(67deg)
        brightness(100%) contrast(104%); */

        stroke: ${colors.green.light};

        /* fill: #acffc5; */

        > path {
          /* stroke: #acffc5; */
          /* fill: #acffc5; */
        }
      }

      > span {
        color: #fff;
      }
    }

    :hover {
      background: ${colors.purple.main.dark};

      > span {
        background: ${colors.green.light};
      }

      > div {
        > svg {
          stroke: ${colors.green.light};
          /* transition: none; */
          /* filter: invert(90%) sepia(7%) saturate(1721%) hue-rotate(74deg)
            brightness(105%) contrast(105%); */
          /* fill: #acffc5; */
        }
      }
    }
  }
`
