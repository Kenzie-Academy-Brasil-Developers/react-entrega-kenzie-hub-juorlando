import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("@TOKEN");

  const techID = localStorage.getItem("@TECHID");

  const addTechs = async (data) => {
    try {
      setLoading(true);

      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia adicionada.");

      setTechs([...techs, response.data]);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const removeTechs = async (id) => {
    try {
      setLoading(true);

      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newList = techs.filter((element) => element.id !== id);

      setTechs(newList);

      toast.success("Removido com sucesso.");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const editTechs = async (data) => {
    try {
      setLoading(true);

      const techID = localStorage.getItem("@TECHID");

      const response = await api.put(`/users/techs/${techID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      toast.success("Editado com sucesso.");

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
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

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
    <TechContext.Provider
      value={{
        addTechs,
        removeTechs,
        editTechs,
        techs,
        setTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
