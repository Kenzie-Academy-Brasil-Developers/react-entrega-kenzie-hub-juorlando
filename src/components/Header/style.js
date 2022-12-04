import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1440px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: solid 1px var(--color-grey-1);
  h1 {
    font-size: larger;
    color: var(--color-primary);
  }

  button {
    width: 67px;
    height: 40px;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    font-size: small;
    border: solid 1px var(--color-grey-3);
    border-radius: 4px;
  }
`;
