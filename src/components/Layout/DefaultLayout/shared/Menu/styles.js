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
        transition: none;
        min-width: 30px;
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
          transition: none;
          filter:invert(94%) sepia(18%) saturate(609%) hue-rotate(67deg) brightness(100%) contrast(104%);
        }

        > a {
          color: ${colors.white};
        }
      }
    }
  }
  [aria-current="page"]{
    background: ${colors.purple.main.dark};
    div span{
      color: #fff
    }
    svg {
      transition: none;
      filter:invert(94%) sepia(18%) saturate(609%) hue-rotate(67deg) brightness(100%) contrast(104%);
    }
    > span {
      background: ${colors.green.light};

    }
    :hover{
      background: ${colors.purple.main.dark};
    }
  }

  `
