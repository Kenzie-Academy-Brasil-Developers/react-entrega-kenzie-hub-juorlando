import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export const RoutesComponent = () => {
  const { nowLoading } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {nowLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <Route path="/home" element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
        </Route>
      )}
    </Routes>
  );
};
