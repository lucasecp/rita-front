import styled from "styled-components";
import colors from "../../../../styles/colors";

export const Container = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h6 {
    color: ${colors.text.secondary};
    font-size: 12px;

    display: flex;
    align-items: center;
    font-weight: bold;

    > img {
      margin-left: 8px;
    }

    :not(:first-child) {
      margin-top: 16px;
    }
  }
  > h5 {
    color: ${colors.text.tertiary};
    font-size: 12px;

    > button {
      color: ${colors.text.link};
      cursor: pointer;
      background: none;
      border: 0;
      padding: 0;
      text-decoration: underline;
      font-weight: bold;
    }
  }

  > select {
  }
  > small {
  }
  > div {
  }
  > footer {
    margin-top: 24px;

    display: flex;
    justify-content: center;
  }
  > span {
  }
`;
