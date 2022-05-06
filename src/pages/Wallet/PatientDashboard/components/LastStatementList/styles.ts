import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.section`
  > section {
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 24px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      display: flex;
      flex-flow: row nowrap;
      gap: 24px;
    }
  }
`

export const ListNav = styled.aside<{ position: 'start' | 'end' }>`
  position: sticky;
  top: 0;

  background-color: #fff;

  display: flex;
  align-items: center;

  > button {
    color: ${({ theme }) => theme.main};
    width: 35px;
    height: 35px;
  }

  ${({ position }) =>
    position === 'start' &&
    css`
      left: 0;

      > button {
        margin-right: 20px;
      }
    `}

  ${({ position }) =>
    position === 'end' &&
    css`
      right: 0;

      > button {
        margin-left: 20px;
      }
    `}
`

export const ListItem = styled.div<{ active: boolean }>`
  flex: 1 0 260px;

  background-color: ${({ theme }) => theme.extraLight};
  border-radius: 8px;
  padding: 15px;

  display: grid;
  grid-template-columns: 30px auto auto;
  grid-template-rows: auto auto;
  align-items: center;
  gap: 10px;

  > em {
    background-color: ${({ theme }) => theme.mediumLight};
    border-radius: 100%;
    grid-row: span 2;
    align-self: start;
    color: #fff;

    width: 32px;
    height: 32px;
    padding: 6px;
  }

  > h4 {
    font-size: 14px;
  }

  > span {
    font-size: 12px;
    color: ${colors.gray.middle};
  }

  > div {
    grid-column: span 2;

    > h4 {
      font-size: 12px;
    }

    > p {
      font-size: 8px;
      text-transform: uppercase;
      margin-top: 5px;
    }
  }

  ${({ active }) =>
    active &&
    css`
      > em {
        background-color: ${({ theme }) => theme.main};
        opacity: 1;
      }

      h3 {
        color: ${({ theme }) => theme.main};
      }
    `}
`
