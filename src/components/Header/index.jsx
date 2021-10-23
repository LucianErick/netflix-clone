import Logo from "../../assets/netflix-logo.svg";
import "./styles.css";
import { useState } from "react";

export const Header = ({ isBlack }) => {
  const [settingsIsActive, setSettingsIsActive] = useState(false);
  function handleOpenProfileSettings() {
    setSettingsIsActive(!settingsIsActive);
  }

  return (
    <header className={isBlack ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src={Logo} alt="Netflix" />
        </a>
      </div>
      {!settingsIsActive && (
        <div className="header--user" onClick={handleOpenProfileSettings}>
          <img
            src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Perfil"
          />
        </div>
      )}
      {settingsIsActive && (
        <div
          className="header--settings"
          onMouseLeave={handleOpenProfileSettings}
        >
          <span>Olá, usuário(a)!</span>
          <span>Minha conta</span>
          <span>Categorias</span>
          <span>Configurações</span>
        </div>
      )}
    </header>
  );
};
