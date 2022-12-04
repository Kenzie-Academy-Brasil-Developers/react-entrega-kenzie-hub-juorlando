import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema";
import { useState } from "react";
import { Container } from "../../stylles/container";
import { StyledBox, StyledForm } from "./style";
import { Button1, Button2 } from "../../stylles/Buttons"
import { Input } from "../../stylles/Inputs"

export const LoginPage = ({ setUser, userLogin }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => userLogin(data, setLoading);

  return (
    <Container>
      <StyledBox>
        <h1>Kenzie Hub</h1>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <label>Email</label>
          <Input
            type="email"
            placeholder="Digite seu e-mail..."
            {...register("email")}
            disabled={loading}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label>Senha</label>
          <Input
            type="password"
            placeholder="Digite sua senha..."
            {...register("password")}
            disabled={loading}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <Button1 type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button1>
          <p>Ainda não tem cadastro?</p>
          <Button2>
            <Link to="/register">Cadastre-se</Link>
          </Button2>
        </StyledForm>
      </StyledBox>
    </Container>
  );
};
