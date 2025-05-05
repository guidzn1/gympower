// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setLogado(!!usuario);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return logado ? children : <Navigate to="/" />;
}
