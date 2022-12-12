import styled from "styled-components";

export const StyledModal = styled.div`
  width: 369px;
  height: 342px;
  background-color: var(--color-grey-4);

  div {
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-2);

    button {
      color: var(--color-grey-1);
    }
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 22px;

    select {
      width: 100%;
      height: 48px;
      background-color: var(--color-grey-2);
      color: var(--color-grey-1);
      border: solid 1px var(--color-grey-2);
      border-radius: 4px;
      padding: 10px;
    }

    button{
        background-color: var(--color-primary);
    }
  }
`;
