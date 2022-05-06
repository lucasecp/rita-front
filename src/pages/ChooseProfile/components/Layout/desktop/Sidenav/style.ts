import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.aside`
  position: sticky;
  /* left: 0;*/
  top: 0;
  height: 100vh;
  width: 118px;
  transition: 0.3s;

  > div {
    position: absolute;
    top: 64px;
    right: -20px;

    padding: 14px 5px 14px 5px;

    background: ${colors.white};
    border-radius: 0px 4px 4px 0px;

    cursor: pointer;
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
    }
  }
`
