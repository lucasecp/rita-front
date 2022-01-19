import ButtonPrimary from '@/components/Button/Primary'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding: 40px 32px;
  width: 100%;

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

export const BtnGroup = styled.div`
  background: ${colors.gray.extraLight};
  padding: 24px 32px;
  display: flex;
  align-items: center;
  align-self: stretch;
  > button:last-child {
    margin-left: auto;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    > button:last-child {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`
export const BtnPrev = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #9146ff;
  background-color: transparent;
  border: none;
  text-decoration: underline;
`
export const CustomBtn = styled(ButtonPrimary)`
  margin-left: auto;
`
