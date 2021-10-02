import RouterApp from "./router/Router";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <RouterApp />
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
