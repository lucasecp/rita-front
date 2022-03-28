import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  padding: 32px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
  border-radius: 8px;

  display: flex;
  flex-flow: column nowrap;
  gap: 50px;

  > section {
    flex: 1;

    > h2 {
      font-size: 24px;
      color: ${colors.black};
    }
  }
`
