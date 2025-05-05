// src/pages/Cadastro.jsx
import "./Login.css";
import gymLogo from "../assets/logo-gym-power.png";
import userIcon from "../assets/user.svg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import keyIcon from "../assets/key.svg";
import googleIcon from "../assets/teste.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleCadastro = async () => {
    setErro("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "usuarios", uid), {
        nome,
        contato,
        email,
      });

      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErro("Este e-mail já está em uso.");
      } else if (error.code === "auth/invalid-email") {
        setErro("E-mail inválido.");
      } else if (error.code === "auth/weak-password") {
        setErro("A senha precisa ter pelo menos 6 caracteres.");
      } else {
        setErro("Erro: " + error.message);
      }
    }
  };

  const handleGoogleCadastro = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome: user.displayName,
        contato: "",
        email: user.email,
      });

      navigate("/dashboard");
    } catch (error) {
      setErro("Erro com Google: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <img src={gymLogo} alt="Logo" />

        <div className="input-group">
          <img src={userIcon} alt="Nome" />
          <input type="text" placeholder="Nome completo" onChange={(e) => setNome(e.target.value)} />
        </div>

        <div className="input-group">
          <img src={phoneIcon} alt="Contato" />
          <input type="text" placeholder="Telefone ou WhatsApp" onChange={(e) => setContato(e.target.value)} />
        </div>

        <div className="input-group">
          <img src={emailIcon} alt="Email" />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-group">
          <img src={keyIcon} alt="Senha" />
          <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
        </div>

        <div className="input-group">
          <img src={keyIcon} alt="Confirmar Senha" />
          <input type="password" placeholder="Confirmar Senha" onChange={(e) => setConfirmarSenha(e.target.value)} />
        </div>

        <button onClick={handleCadastro}>Criar Conta</button>
        <button onClick={handleGoogleCadastro} className="google-btn">
          <img src={googleIcon} alt="Google" />
          Criar Conta com Google
        </button>

        {erro && <p className="error-text">{erro}</p>}

        <p className="link-text" onClick={() => navigate("/")}>
          Já tem uma conta? Fazer login
        </p>
      </div>
    </div>
  );
}
