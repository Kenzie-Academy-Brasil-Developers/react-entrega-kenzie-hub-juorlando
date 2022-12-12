import styled from "styled-components";

export const StyledTechs = styled.div`
  width: 775px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 30px;

  button{
    width: 22px;
    height: 22px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
  }

  button:hover{
    background-color: var(--color-grey-1);
    color: var(--color-grey-3);
  }
`;
