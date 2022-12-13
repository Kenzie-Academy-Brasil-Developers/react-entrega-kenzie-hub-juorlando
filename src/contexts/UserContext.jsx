import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [nowLoading, setNowLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    (async () => {
      if (token) {
        try {
          setNowLoading(true);
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);

          navigate("/home");
        } catch (error) {
          console.log(error);
        } finally {
          setNowLoading(false);
        }
      }
    })();
  }, []);

  const userLogin = async (data, loading) => {
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
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TECHID");

    setUser(null);

    navigate("/");
  };

  const registerUser = async (data, loading) => {
    try {
      loading(true);

      const response = await api.post("/users", data);

      console.log(response);

      toast.success("Cadastro realizado com sucesso.");

      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
      console.log(error);
    } finally {
      loading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        userLogout,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
