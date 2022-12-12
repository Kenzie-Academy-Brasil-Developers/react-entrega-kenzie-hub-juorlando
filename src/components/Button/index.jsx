import React from "react";
import { Link } from "react-router-dom";
import { StyledButton1, StyledButton2, StyledButton3, StyledButton4 } from "./style";

export const Button1 = ({ type, disabled }) => {
  return (
    <StyledButton1 type={type} disabled={disabled}>
      {disabled ? "Entrando..." : "Entrar"}
    </StyledButton1>
  );
};

export const Button2 = () => {
  return (
    <StyledButton2>
      <Link to="/register">Cadastre-se</Link>
    </StyledButton2>
  );
};

export const Button3 = ({ type, disabled }) => {
  return (
    <StyledButton3 type={type} disabled={disabled}>
      {disabled ? "Cadastrando..." : "Cadastrar"}
    </StyledButton3>
  );
};

export const Button4 = () => {
  return (
    <StyledButton4>
      Excluir
    </StyledButton4>
  );
};
