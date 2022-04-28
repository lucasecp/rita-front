import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 32px 0 32px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.mediumLight}26;
  border-radius: 8px;
  > div {
    > *:not(:last-child):after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #eeeeee;
      margin: 32px 0;
    }
  }
  @media (max-width: 768px) {
    padding: 24px 24px 0 24px;
  }
`
export const ButtonGroup = styled.footer`
  display: flex;
  justify-content: center;
  padding: 24px;
  background: #eeeeee;
  margin: 32px -32px 0 -32px;
  border-radius: 0 0 8px 8px;

  @media (max-width: 767px) {
    margin: 32px -24px 0 -24px;
    flex-direction: column;
    > * + * {
      margin: 24px 0 0 0 !important;
    }
  }
  > * + * {
    margin-left: 24px;
  }
`
