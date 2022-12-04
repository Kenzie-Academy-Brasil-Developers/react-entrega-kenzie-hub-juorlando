import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./RegisterSchema";
import { useState } from "react";
import { Input } from "../../stylles/Inputs";
import { Container } from "../../stylles/container";
import { StyledRegisterBox, StyledFormRegister } from "./style";
import { Button3 } from "../../stylles/Buttons";

export const RegisterPage = ({ registerUser }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = (data) => registerUser(data, setLoading);

  return (
    <Container>
      <StyledRegisterBox>
        <div>
          <h1>Kenzie Hub</h1>
          <button>
            <Link to="/">Voltar</Link>
          </button>
        </div>
        <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
          <label>Nome</label>
          <Input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
            disabled={loading}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <label>E-mail</label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
            disabled={loading}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label>Senha</label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
            disabled={loading}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <label>Confirmar senha</label>
          <Input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
            disabled={loading}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <label>Bio</label>
          <Input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
            disabled={loading}
          />
          {errors.bio && <p>{errors.bio.message}</p>}
          <label>Contato</label>
          <Input
            type="number"
            placeholder="Opções de contato"
            {...register("contact")}
            disabled={loading}
          />
          {errors.contact && <p>{errors.contact.message}</p>}
          <select {...register("course_module")} disabled={loading}>
            {errors.course_module && <p>{errors.course_module.message}</p>}
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
            <option value="Quarto Módulo">Quarto Módulo</option>
            <option value="Quinto Módulo">Quinto Módulo</option>
            <option value="Sexto Módulo">Sexto Módulo</option>
          </select>
          <Button3 type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button3>
        </StyledFormRegister>
      </StyledRegisterBox>
    </Container>
  );
};
