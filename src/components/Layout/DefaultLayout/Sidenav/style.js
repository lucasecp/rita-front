import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.aside`
  padding: 20px 10px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  nav{
    display: flex;
    flex-direction: column;
    > a{
      color: ${colors.text.primary};
      margin: 10px
    }
  }
`;
