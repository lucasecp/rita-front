import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div.attrs((props: { disabled: boolean }) => ({
  disabled: props.disabled,
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  border: 2px solid ${colors.gray.light};
  box-sizing: border-box;
  border-radius: 8px;

  & + & {
    margin-top: 24px;
  }

  > h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;

    color: ${({ theme }) => theme.main};
    /* word-break: break-all; */
    padding: 14px 0;
  }

  > svg {
    max-width: 32px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      pointer-events: none;

      background: ${colors.gray.light};

      > h4 {
        color: ${colors.gray.middle};
      }
      > button {
        > svg {
          fill: ${colors.gray.middle};
        }
      }
    `}

  @media (max-width: 767px) {
    > h3 {
      font-size: 16px;
      line-height: 1.4;
    }

    > div {
      > h4 {
        font-size: 14px;
      }
    }
  }
`
