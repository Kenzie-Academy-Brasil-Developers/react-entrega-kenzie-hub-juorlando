import styled from "styled-components";
import { lixeira } from "../../../assets/img/lixeira.png"

export const StyledTechsList = styled.ul`
  width: 780px;
  height: 416px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-3);
  gap: 12px;
  border-radius: 4px;

  li {
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-4);
    border-radius: 4px;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
  }

  li:hover {
    background-color: var(--color-grey-2);

    .remove {
      background-image: url(../../../assets/img/lixeira.png);
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;

export const StyledEditModal = styled.div`
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
    aside {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .button {
      width: 204px;
      height: 48px;
      background-color: var(--color-primary-negative);
      color: var(--color-grey-0);
      border: solid 1px var(--color-primary-negative);
      border-radius: 4px;
    }
  }
`;
