import React from "react";
import { Link } from "react-router-dom";
import { FormRegister } from "../../components/Form/FormRegister";
import { Container } from "../../stylles/container";
import { StyledRegisterBox } from "./style";

export const RegisterPage = () => {
  return (
    <Container>
      <StyledRegisterBox>
        <div>
          <h1>Kenzie Hub</h1>
          <button>
            <Link to="/">Voltar</Link>
          </button>
        </div>
        <FormRegister/>
      </StyledRegisterBox>
    </Container>
  );
};
