import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.main};
  border-radius: 8px;
  padding: 8px 10px;
  min-height: 60px;

  position: relative;
  transition: background-color 300ms;

  > svg {
    fill: currentColor;
    width: 24px;
    color: ${({ theme }) => theme.main};

    grid-row: 1 / 3;
  }

  > div {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;

    > h5 {
      font-weight: 700;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      color: ${({ theme }) => theme.main};
    }

    > p {
      font-size: 11px;
      line-height: 16px;
      color: ${({ theme }) => theme.main};
      text-transform: uppercase;

      display: flex;
      flex-flow: row wrap;
      align-items: center;
      gap: 10px;
    }
  }

  > button {
    position: absolute;
    right: 10px;
    top: -5px;

    width: 24px;
    height: 24px;

    svg {
      fill: currentColor;
      color: #fff;
      stroke: ${({ theme }) => theme.main};
      width: 100%;

      transition-property: color, stroke;
      transition-duration: 300ms;
    }

    &:hover svg {
      color: ${({ theme }) => theme.main};
      stroke: #fff;
    }
  }

  ${({ active, disabled }) =>
    !active &&
    !disabled &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.main};

        > svg {
          color: #fff;
        }

        > div {
          > h5,
          > p {
            color: #fff;
          }
        }
      }
    `}

  ${({ active }) =>
    active &&
    css`
      background: linear-gradient(
        88.69deg,
        #4d22aa 3.78%,
        #7437da 48.21%,
        #823eee 95.7%
      );
      border-color: transparent;
      border-left-color: #4d22aa;
      border-right-color: #823eee;

      > svg {
        color: #fff;
      }

      > div {
        > h5,
        > p {
          color: #fff;
        }
      }

      &:hover {
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.light};
      border-color: transparent;

      > svg {
        color: ${({ theme }) => theme.medium};
      }

      > div {
        > h5,
        > p {
          color: ${({ theme }) => theme.medium};

          strong {
            color: ${({ theme }) => theme.main};
          }
        }
      }
    `}
`
