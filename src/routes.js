import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export const RoutesComponent = ({ user, setUser, userLogin, userLogout, registerUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage setUser={setUser} userLogin={userLogin} />}
      />
      <Route path="/register" element={<RegisterPage registerUser={registerUser}/>} />
      <Route path="/home" element={<ProtectedRoute user={user} />}>
        <Route
          index
          element={<HomePage user={user} userLogout={userLogout} />}
        />
      </Route>
    </Routes>
  );
};
