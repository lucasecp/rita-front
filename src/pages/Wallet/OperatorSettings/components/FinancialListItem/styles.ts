import styled, { css } from 'styled-components'

type ContainerProps = {
  active?: boolean
  disabled?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 10px;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.main};
  border-radius: 8px;
  padding: 8px 10px;
  min-height: 72px;

  position: relative;
  transition: background-color 300ms;

  > svg {
    flex-shrink: 0;
    fill: currentColor;
    width: 24px;
    color: ${({ theme }) => theme.main};

    grid-row: 1 / 3;
  }

  > div {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;

    > h5 {
      font-size: 18px;
      line-height: 1;
      color: ${({ theme }) => theme.main};
    }

    > p {
      font-size: 14px;
      line-height: 1;
      color: ${({ theme }) => theme.main};
      text-transform: uppercase;
      word-break: break-all;

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
      fill: #fff;
      color: ${({ theme }) => theme.main};
      width: 100%;

      transition-property: fill, color;
      transition-duration: 300ms;
    }

    &:hover svg {
      fill: none;
      color: #fff;
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
      background-color: ${({ theme }) => theme.main};
      border-color: transparent;

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
      background-color: ${({ theme }) => theme.medium};
      border-color: transparent;

      > svg {
        color: ${({ theme }) => theme.medium};
      }

      > div {
        > h5,
        > p {
          color: ${({ theme }) => theme.medium};

          strong {
            color: ${({ theme }) => theme.medium};
          }
        }
      }
    `}
`
