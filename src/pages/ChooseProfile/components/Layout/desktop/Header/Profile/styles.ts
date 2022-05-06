import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  border: none;
  background: transparent;
  position: relative;
`

export const ButtonProfile = styled.button`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px 20px 0 0;
  border: none;
  background: transparent !important;
  color: ${colors.gray.dark};
  cursor: default;

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
        border: solid 2px ${({ theme }) => theme.main};
        border-radius: 50px;
      }

      > span {
        background-color: ${({ theme }) => theme.main};
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
`
