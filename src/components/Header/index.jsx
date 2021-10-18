import Logo from "../../assets/netflix-logo.svg";
import "./styles.css";

export const Header = ({ isBlack }) => {
  return (
    <header className={isBlack ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={Logo} alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <img
          src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Perfil"
        />
      </div>
    </header>
  );
};
