import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding: 40px 32px;
  border-radius: 8px 8px 0 0;

  > h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    color: ${colors.gray.dark};
    margin-bottom: 32px;
  }

  > footer {
    background: ${colors.gray.light};
    border-radius: 0 0 8px 8px;
    padding: 24px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 539px) {
    > footer {
      flex-direction: column;

      > button {
        width: 100%;
      }

      > button:last-child {
        margin-left: 0;
      }
    }
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
        color: ${({ theme }) => theme.main};
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
        fill: ${({ theme }) => theme.mediumLight};
      }
    }
  }
`