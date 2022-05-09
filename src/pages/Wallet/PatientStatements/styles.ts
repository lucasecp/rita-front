import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  padding: 32px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
  border-radius: 8px;

  display: flex;
  flex-flow: column nowrap;
  gap: 24px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
      font-size: 24px;
      font-weight: 400;
      color: ${colors.gray.middle};
    }
  }
`

export const TableColumnDetails = styled.button`
  color: ${colors.gray.middle};
  font-size: 16px;

  > svg {
    height: 16px;
    vertical-align: text-top;
  }

  &:hover {
    color: ${colors.gray.dark};
  }
`

export const TableColumnAmount = styled.div`
  display: grid;
  grid-template-areas:
    '. arrow'
    '. arrow';
  gap: 0 10px;
  align-items: center;
  justify-content: end;

  text-align: right;

  > small {
    color: ${colors.gray.middle};
    font-size: 0.75em;

    > svg {
      height: 10px;
      vertical-align: text-top;
    }
  }

  > svg {
    grid-area: arrow;

    height: 14px;
    vertical-align: text-top;
    float: right;

    &.debit {
      color: ${colors.orange.middle};
    }

    &.credit {
      color: ${colors.green.light};
    }
  }
`
