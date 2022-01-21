import styled from 'styled-components'
import colors from '@/styles/colors'
import ButtonPrimary from '@/components/Button/Primary'

export const Container = styled.div`
  padding: 32px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
  border-radius: 8px 8px 0 0;

  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    color: ${colors.gray.dark};
    margin-bottom: 32px;
  }

  .MuiAccordionSummary-root {
    padding: 0;
    border-bottom: 2px solid ${colors.gray.light};

    h2 {
      width: 100%;

      font-size: 20px;
      font-weight: 500;
      line-height: 25px;

      color: ${colors.gray.dark};

      > span {
        color: ${colors.purple.main.dark};
      }
    }

    &.Mui-disabled {
      opacity: unset;

      > div h2 {
        color: ${colors.gray.middle};
      }
    }
  }
  .MuiAccordionDetails-root {
    padding: 0;
    display: block;
  }
  .MuiPaper-elevation1 {
    box-shadow: none;
  }
  /* .MuiAccordionSummary-content {
    flex-direction: column;
  } */

  .MuiAccordion-root::before {
    display: none;
  }

  .MuiAccordionSummary-content,
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
    padding: 4px 0;
  }

  .MuiAccordion-rounded:last-child {
    border-radius: unset;
  }

  .MuiAccordionSummary-expandIcon {
    width: 48px;
    height: 48px;

    &.Mui-expanded {
      span svg {
        fill: ${colors.purple.main.light};
      }
    }
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6a6a6a;
  gap: 24px;
  border-radius: 0 0 8px 8px;
  padding: 25px;
`

export const CustomBtn = styled(ButtonPrimary)`
  margin-left: auto;
`