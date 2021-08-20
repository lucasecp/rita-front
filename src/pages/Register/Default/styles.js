import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  > div {
    background: ${colors.background.register};
    border-radius: 16px;
    padding: 14px 16px 18px;
  }
`;
