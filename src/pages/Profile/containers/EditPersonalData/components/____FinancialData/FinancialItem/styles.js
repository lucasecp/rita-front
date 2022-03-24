import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  border: 2px solid ${colors.purple.main.dark};
  border-radius: 8px;
  padding: 8px 10px;
  min-height: 60px;

  position: relative;
  transition: background-color 300ms;

  > svg {
    fill: currentColor;
    width: 24px;
    color: ${colors.purple.main.dark};

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
      color: ${colors.purple.main.dark};
    }

    > p {
      font-size: 11px;
      line-height: 16px;
      color: ${colors.purple.main.dark};
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
      stroke: ${colors.purple.main.dark};
      width: 100%;

      transition-property: color, stroke;
      transition-duration: 300ms;
    }

    &:hover svg {
      color: ${colors.purple.main.dark};
      stroke: #fff;
    }
  }

  ${({ active, disabled }) =>
    !active &&
    !disabled &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${colors.purple.main.dark};

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
      background: ${colors.purple.background.middle};
      border-color: transparent;

      > svg {
        color: ${colors.purple.main.middle};
      }

      > div {
        > h5,
        > p {
          color: ${colors.purple.main.middle};

          strong {
            color: ${colors.purple.main.dark};
          }
        }
      }
    `}
`
