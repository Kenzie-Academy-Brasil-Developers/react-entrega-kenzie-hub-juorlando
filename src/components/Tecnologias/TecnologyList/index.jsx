import { React, useContext, useEffect, useState } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { api } from "../../../services/api";
import { AddTechs } from "../AddTechs";
import { StyledTechsList, StyledEditModal } from "./style";
import Modal from "react-modal";
import { Input } from "../../Input";
import { Button4 } from "../../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EditSchema } from "./EditSchema";
import { CardTech } from "../../CardTech";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Tecnology = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");

  const { editTechs } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditSchema),
    defaultValues: {},
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    editTechs(data);
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  return (
    <>
      <AddTechs />
      <StyledTechsList>
        <CardTech setIsOpen={setIsOpen} setTitle={setTitle} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <StyledEditModal>
            <div>
              <p>Tecnologia detalhes</p>
              <button type="button" onClick={closeModal}>
                x
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Nome do projeto</label>
              <Input
                placeholder={title}
                register={register("title")}
                disabled
              />
              {errors.title && <p>{errors.title.message}</p>}
              <label>Status</label>
              <select id="status" {...register("status")} disabled={loading}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avancaçado</option>
              </select>
              {errors.status && <p>{errors.status.message}</p>}
              <aside>
                <button className="button" type="submit">
                  Salvar alterações
                </button>
              </aside>
            </form>
          </StyledEditModal>
        </Modal>
      </StyledTechsList>
    </>
  );
};
