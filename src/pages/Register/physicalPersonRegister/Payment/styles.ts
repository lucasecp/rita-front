import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px 8px 0 0;
  padding: 40px 32px 48px;

  > h3 {
    font-size: 24px;
    color: ${colors.gray.dark};
  }

  > h5 {
    font-size: 16px;
    color: ${colors.gray.middleLight};

    margin-top: 18px;
  }

  > form {
    margin-top: 24px;
  }
`
