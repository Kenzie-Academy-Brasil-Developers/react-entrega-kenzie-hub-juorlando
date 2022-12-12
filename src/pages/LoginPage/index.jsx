import React from "react";
import { Container } from "../../stylles/container";
import { StyledBox } from "./style";
import { FormLogin } from "../../components/Form/FormLogin";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const LoginPage = () => {
  const {setUser, userLogin} = useContext(UserContext)
  return (
    <Container>
      <StyledBox>
        <h1>Kenzie Hub</h1>
        <FormLogin setUser={setUser} userLogin={userLogin} />
      </StyledBox>
    </Container>
  );
};
