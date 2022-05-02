import styled, { css } from 'styled-components'
import colors from '@/styles/colors'
import expandedLogo from '@/assets/logo/expanded-logo.svg'
import iconLogo from '@/assets/logo/icon-logo.svg'

export const Container = styled.aside`
  position: sticky;
  /* left: 0;*/
  top: 0;
  height: 100vh;
  width: ${({ isExpanded }) => (isExpanded ? 240 : 118)}px;
  transition: 0.3s;

  > div {
    position: absolute;
    top: 64px;
    right: -20px;

    padding: 14px 5px 14px 5px;

    background: ${colors.white};
    border-radius: 0px 4px 4px 0px;

    cursor: pointer;

    > svg {
      > path {
        stroke: ${({ theme }) => theme.main};
      }
      transition: 0.3s;

      ${({ isExpanded }) =>
        !isExpanded &&
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

    background: ${({ theme }) => theme.light};
    height: inherit;
  }

  > nav {
    position: relative;
    height: inherit;
    background: ${colors.white};
    display: flex;
    flex-direction: column;

    transition: 0.3s;

    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 8px;
      background: #eeeeee;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #afafaf;
      border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    > header {
      padding: 40px 32px 52px;

      > svg {
        fill: ${({ theme }) => theme.main};
        > path {
          fill: ${({ theme }) => theme.main};
        }
      }

      /* > div {
        background-position: left center;
        background-size: contain;
        background-repeat: no-repeat;
        transition: 0.3s;

        ${({ isExpanded }) =>
        isExpanded &&
        css`
          background-image: url(${expandedLogo});
          height: 64px;
        `}
        ${({ isExpanded }) =>
        !isExpanded &&
        css`
          background-image: url(${iconLogo});
          height: 52px;
        `}
      } */
    }
  }
`
