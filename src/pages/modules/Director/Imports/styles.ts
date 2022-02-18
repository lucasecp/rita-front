import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 8px 8px 0 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  > div {
    width: 100%;
    height: fit-content;

    > label {
      color: ${colors.gray.middle};
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }

    > p.error {
      margin-top: 5px;
      color: ${colors.orange.middleDark};
      font-weight: 400;
      font-size: 14px;
      line-height: 17.5px;
    }
  }

  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`

export const BtnGroup = styled.div`
  background: ${colors.gray.light};
  padding: 24px 32px;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 786px) {
    flex-direction: column;

    > button {
      width: 100%;
    }
  }
`
export const ContentFile = styled.div`
  margin-top: 5px;

  display: grid;
  grid-template-columns: 0.7fr 0.3fr;

  @media (max-width: 767px) {
    grid-template-columns: 0.6fr 0.4fr;
  }

  > span {
    border: 1px solid ${colors.gray.light};
    padding: 14px 16px;
    border-radius: 8px 0 0 8px;

    color: ${colors.black};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;

    min-height: 50px;
  }

  > button {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.main};
    background: ${({ theme }) => theme.light};
    border-radius: 0 8px 8px 0;
  }
`
