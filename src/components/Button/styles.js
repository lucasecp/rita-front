import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.button`
  border: 1px solid #ffffff;
  border-radius: 20px;

  cursor: pointer;
  background: transparent;
  color: ${colors.text.secondary};
  padding: 8px 16px;

  font-size: 14px;
  font-size: 600;
  line-height: 16px;

  width: fit-content;
`;
