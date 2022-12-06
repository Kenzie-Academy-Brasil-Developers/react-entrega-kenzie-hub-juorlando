import React from "react";
import { Header } from "../../components/Header";
import { StyledUserBox } from "./style";

export const HomePage = ({ user, userLogout }) => {
  return (
    <>
      <Header userLogout={userLogout} />
      {user && (
        <StyledUserBox>
          <h2>Olá, {user.name}</h2>
          <h3>{user.course_module}</h3>
        </StyledUserBox>
      )}
    </>
  );
};
