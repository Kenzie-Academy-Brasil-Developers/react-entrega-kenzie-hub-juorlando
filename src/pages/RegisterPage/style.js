import styled from "styled-components";

export const StyledRegisterBox = styled.div`
  width: 369px;
  height: 971px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 22px;

  div {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    h1 {
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
  }

  select {
    width: 100%;
    height: 48px;
    background-color: var(--color-grey-2);
    color: var(--color-grey-1);
    border: solid 1px var(--color-grey-2);
    border-radius: 4px;
    padding: 10px;

    :focus {
      color: var(--color-grey-0);
      border: solid 1px var(--color-grey-0);
    }
    option {
      width: 100%;
      height: 48px;
      background-color: var(--color-grey-2);
      color: var(--color-grey-1);
      border: solid 1px var(--color-grey-2);
      border-radius: 4px;
      padding: 10px;
    }
  }
`;
