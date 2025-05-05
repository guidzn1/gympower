// src/pages/Login.jsx
import "./Login.css";
import gymLogo from "../assets/logo-gym-power.png";
import userIcon from "../assets/user.svg";
import keyIcon from "../assets/key.svg";
import googleIcon from "../assets/teste.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setErro("");
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErro("Usuário não encontrado.");
      } else if (error.code === "auth/wrong-password") {
        setErro("Senha incorreta.");
      } else if (error.code === "auth/invalid-email") {
        setErro("E-mail inválido.");
      } else {
        setErro("Erro ao fazer login: " + error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
      
    } catch (error) {
      setErro("Erro com Google: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <img src={gymLogo} alt="Logo" />

        <div className="input-group">
          <img src={userIcon} alt="Email" />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <img src={keyIcon} alt="Senha" />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <p className="link-text" onClick={() => alert("Funcionalidade futura")}>
          Esqueci minha senha
        </p>

        <button onClick={handleLogin}>Entrar</button>
        <button onClick={handleGoogleLogin} className="google-btn">
        <img src={googleIcon} alt="Google" />
           Entrar com o Google
        </button>



        {erro && <p className="error-text">{erro}</p>}

        <p className="link-text" onClick={() => navigate("/cadastro")}>
          Não tem uma conta? Criar conta
        </p>
      </div>
    </div>
  );
}
