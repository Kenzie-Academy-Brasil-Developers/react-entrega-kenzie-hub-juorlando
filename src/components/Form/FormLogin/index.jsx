import React from "react";
import { StyledForm } from "./style";
import { Input } from "../../Input";
import { Button1, Button2 } from "../../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export const FormLogin = () => {
  const {userLogin} = useContext(UserContext);
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <label>Email</label>
      <Input
        type="email"
        placeholder="Digite seu e-mail..."
        register={register("email")}
        disabled={loading}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label>Senha</label>
      <Input
        type="password"
        placeholder="Digite sua senha..."
        register={register("password")}
        disabled={loading}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <Button1 type="submit" disabled={loading}></Button1>
      <p>Ainda não tem cadastro?</p>
      <Button2></Button2>
    </StyledForm>
  );
};
