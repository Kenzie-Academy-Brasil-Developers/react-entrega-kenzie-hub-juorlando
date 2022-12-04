import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RoutesComponent } from "./routes";
import { api } from "./services/api";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  async function userLogin(data, loading) {
    try {
      loading(true);

      const response = await api.post("/sessions", data);

      localStorage.setItem("@TOKEN", response.data.token);

      localStorage.setItem("@USERID", response.data.user.id);

      toast.success("Login realizado com sucesso.");

      setUser(response.data.user);

      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      loading(false);
    }
  }

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

    setUser(null);

    navigate("/");
  }

  async function registerUser(data, loading) {
    try {
      loading(true);

      console.log(data);

      const response = await api.post("/users", data);

      toast.success("Cadastro realizado com sucesso.");

      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
    } finally {
      loading(false);
    }
  }

  return (
    <>
      <RoutesComponent
        user={user}
        setUser={setUser}
        userLogin={userLogin}
        userLogout={userLogout}
        registerUser={registerUser}
      />
    </>
  );
}

export default App;
