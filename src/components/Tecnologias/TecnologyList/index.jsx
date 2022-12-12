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
  const [techs, setTechs] = useState([]);

  const [loading, setLoading] = useState(false);

  const { removeTechs } = useContext(TechContext);

  const [modalIsOpen, setIsOpen] = useState(false);

  const { editTechs } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditSchema),
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (data) => editTechs(data);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    (async () => {
      if (token) {
        try {
          setLoading(true);
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setTechs(response.data.techs);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);

  return (
    <>
      <AddTechs />
      <StyledTechsList>
        {techs.map((element) => (
          <li
            key={element.id}
            id={element.id}
            onClick={() => localStorage.setItem("@TECHID", element.id)}
          >
            <p onClick={openModal}>{element.title}</p>
            <p>{element.status}</p>
            <button
              id={element.id}
              type="button"
              onClick={() => removeTechs(element.id)}
            >
              Remover
            </button>
          </li>
        ))}
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
                type="text"
                placeholder="Digite o nome da Tecnologia"
                register={register("title")}
                disabled={loading}
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
                <Button4 tye="button" onClick={closeModal}>
                  Excluir
                </Button4>
              </aside>
            </form>
          </StyledEditModal>
        </Modal>
      </StyledTechsList>
    </>
  );
};
