import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { Button3 } from "../Button";
import { Input } from "../Input";
import { TechAddSchema } from "./ModalSchema";
import { StyledModal } from "./style";

export const AddModal = ({ closeModal }) => {
  const [loading, setLoading] = useState(false);
  const { addTechs } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TechAddSchema),
  });

  const onSubmit = (data) => {
    addTechs(data);
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  return (
    <StyledModal>
      <div>
        <p>Cadastar Tecologias</p>
        <button type="button" onClick={closeModal}>
          x
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <Input
          type="text"
          placeholder="Digite o nome da Tecnologia"
          register={register("title")}
          disabled={loading}
        />
        {errors.title && <p>{errors.title.message}</p>}
        <label>Selecionar Status</label>
        <select id="status" {...register("status")} disabled={loading}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avancaçado</option>
        </select>
        {errors.status && <p>{errors.status.message}</p>}
        <Button3 type="submit"></Button3>
      </form>
    </StyledModal>
  );
};
