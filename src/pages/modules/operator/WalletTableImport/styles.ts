import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  padding: 32px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
  border-radius: 8px;

  display: flex;
  flex-flow: column nowrap;
  gap: 40px;

  > h3 {
    font-size: 24px;
    color: ${colors.gray.middle};

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
`

export const NoRecordsWarn = styled.section`
  padding: 32px;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  box-shadow: 0px 2px 4px #e5e5e5;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 30px;

  > svg {
    color: ${({ theme }) => theme.medium};
    height: 57px;
  }

  > p {
    font-size: 24px;
    color: ${colors.gray.dark};
  }

  > div {
    margin-top: 30px;
  }
`

export const FormInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  > :last-child {
    grid-column: span 2;
  }
`

export const FormFileDetails = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 60px;

  > li {
    color: ${colors.gray.middle};

    span {
      color: ${colors.gray.dark};
    }
  }
`

export const ActionButtons = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
