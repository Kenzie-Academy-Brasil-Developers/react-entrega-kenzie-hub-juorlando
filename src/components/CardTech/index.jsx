import React, { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export const CardTech = ({ setIsOpen }) => {
  const { techs, removeTechs } = useContext(TechContext);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {techs.map((element) => (
        <li
          key={element.id}
          id={element.id}
          onClick={() => localStorage.setItem("@TECHID", element.id)}
        >
          <p onClick={openModal}>{element.title}</p>
          <p>{element.status}</p>
          <button
            className="remove"
            id={element.id}
            type="button"
            onClick={() => removeTechs(element.id)}
          >
            Remover
          </button>
        </li>
      ))}
    </>
  );
};
