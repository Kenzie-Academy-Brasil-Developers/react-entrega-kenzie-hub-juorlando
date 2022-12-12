import React from "react";
import { Header } from "../../components/Header";
import { StyledUserBox } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Tecnology } from "../../components/Tecnologias/TecnologyList";

export const HomePage = () => {
  const {user, userLogout} = useContext(UserContext)
  return (
    <>
      <Header userLogout={userLogout} />
      {user && (
        <StyledUserBox>
          <h2>Olá, {user.name}</h2>
          <h3>{user.course_module}</h3>
        </StyledUserBox>
      )}
      <Tecnology></Tecnology>
    </>
  );
};
