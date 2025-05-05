// src/pages/Home.jsx
import "./Home.css";
import logoIcon from "../assets/icone-logo.png";
import menuIcon from "../assets/menu.png";
import treino1bg from "../assets/treino1-bg.png";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logoIcon} alt="Logo" className="logo-icon" />
        <img src={menuIcon} alt="Menu" className="menu-icon" />
      </header>

      <h2 className="home-title">Treino do dia</h2>

      <div className="treino-card" style={{ backgroundImage: `url(${treino1bg})` }}>
        <div className="card-overlay">
          <h3 className="treino-titulo">Treino A</h3>
          <p className="treino-progresso">Progresso 0%</p>
          <div className="progresso-barra">
            <div className="progresso-preenchido" style={{ width: "0%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
