import { RoutesComponent } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TechProvider } from "./contexts/TechContext";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { nowLoading } = useContext(UserContext);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <TechProvider>
        {nowLoading ? <h1>Carregando...</h1> : <RoutesComponent />}
      </TechProvider>
    </>
  );
}

export default App;
