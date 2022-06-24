import "./Header.scss";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__holder">
            <Link to="https://www.bmo.com">
              <img className="header__logo" alt="BMO logo" src={logo} />
            </Link>
          </div>

          <div className="header__container">
            <h2 className="header__text">Français</h2>
            <div className="header__hamburger">
              <div className="header__hamburger"></div>
              <div className="header__hamburger"></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
