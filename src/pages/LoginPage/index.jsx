import React from "react";
import { Container } from "../../stylles/container";
import { StyledBox } from "./style";
import { FormLogin } from "../../components/Form/FormLogin";

export const LoginPage = ({ setUser, userLogin }) => {
  return (
    <Container>
      <StyledBox>
        <h1>Kenzie Hub</h1>
        <FormLogin setUser={setUser} userLogin={userLogin} />
      </StyledBox>
    </Container>
  );
};
