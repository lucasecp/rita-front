import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  border: none;
  background: transparent;
  position: relative;
`

export const ButtonProfile = styled.button<{
  isActive: boolean
  color: string
}>`
  display: flex;
  flex-direction: column;
  color: ${colors.gray.dark};
  font-size: 14px;
  font-weight: 500;
  border: solid 1px ${({ color }) => color};
  border-radius: 20px 20px 0 0;
  transition: 0.2s;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 6px 6px 0 13px;
      > div {
        gap: 8px;
        display: flex;
        align-items: center;
        > svg {
          transition: 0.2s;

          > path {
            fill: ${({ color }) => color};
          }
        }
      }
      > p {
        font-size: 8px;
        font-weight: 500;
        line-height: 12px;
        color: ${({ color }) => color};
        text-align: start;
        margin-bottom: 4px;
      }
    }

    > span {
      display: flex;
      align-items: center;
      justify-content: center;

      min-width: 40px;
      min-height: 40px;
      max-width: 40px;
      max-height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 16px;

      > img {
        min-height: 100%;
        border: solid 2px ${({ color }) => color};
        border-radius: 50px;
      }

      > span {
        background-color: ${({ color }) => color};
        border-radius: 50%;
        color: #fff;
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: none;
      }
    }
  }

  ${({ isActive, color }) =>
    isActive
      ? css`
          color: #fff;
          background: ${color};

          > div {
            > div {
              > p {
                color: #fff;
              }
              > div {
                > svg {
                  transform: rotate(180deg);
                  transition: 0.2s;
                  > path {
                    fill: #fff;
                  }
                }
              }
            }
          }
        `
      : css`
          border-radius: 20px;
        `}
`
