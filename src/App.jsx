import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home"; 
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/cadastro" element={<Cadastro />} />
  <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
