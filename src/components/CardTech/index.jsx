import React, { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { FaTrash } from "react-icons/fa";

export const CardTech = ({ setIsOpen, setTitle, setCatchID }) => {
  const { techs, removeTechs } = useContext(TechContext);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {techs.map((element) => (
        <li
          key={element.id}
          id={element.id}
          onClick={() => localStorage.setItem("@TECHID", element.id)}
        >
          <div
            onClick={() => {
              openModal();
              setTitle(element.title);
            }}
          >
            <p>{element.title}</p>
            <p className="status">{element.status}</p>
          </div>
          <button
            className="remove"
            id={element.id}
            type="button"
            onClick={() => removeTechs(element.id)}
          >
            <FaTrash />
          </button>
        </li>
      ))}
    </>
  );
};
