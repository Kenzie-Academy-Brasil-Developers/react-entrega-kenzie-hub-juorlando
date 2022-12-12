import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [addTech, setAddTech] = useState([]);

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("@TOKEN");

  const techID = localStorage.getItem("@TECHID");

  async function addTechs(data) {
    try {
      setLoading(true);

      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia adicionada.");

      setAddTech(response);

      window.location.reload();
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  async function removeTechs(id) {
    try {
      setLoading(true);

      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Removido com sucesso.");

      setAddTech(response);

      window.location.reload();
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  async function editTechs(data) {
    try {
      setLoading(true);

      const techID = localStorage.getItem("@TECHID");
      console.log(techID)
      const response = await api.put(`/users/techs/${techID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Editado com sucesso.");

      setAddTech(response.data);

      window.location.reload();
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        addTechs,
        setAddTech,
        removeTechs,
        editTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
