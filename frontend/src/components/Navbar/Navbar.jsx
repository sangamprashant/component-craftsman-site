import React from "react";
import { LogoTwo } from "../../images";
import { Link } from "react-router-dom";
import { MyIcons } from "../../icons";
import { AppContext } from "../../AppProvider";

const navLinks = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/component",
    title: "Component",
  },
  {
    link: "/installation",
    title: "Installation",
  },
];

function Navbar() {
  const { isDark, toggleDarkMode } = React.useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isDark ? "night" : ""}`}>
        <div className="header-content responsive-wrapper">
          <div className="header-logo">
            <Link to="/">
              <div className="logo-container ">
                <img
                  height={60}
                  src={LogoTwo}
                  alt="Logo"
                  className="logo shadow-lg"
                />
              </div>
            </Link>
          </div>
          <div className="header-navigation">
            <nav className="header-navigation-links">
              {navLinks.map((data, index) => (
                <Link to={data.link} key={index}>
                  {data.title}
                </Link>
              ))}
            </nav>
            <div className="header-navigation-actions">
              <Link
                to="https://github.com/sangamprashant/component-craftsman"
                target="_blank"
                className="icon-button"
              >
                {MyIcons.GithubIcon}
              </Link>

              {/* <button className="icon-button" onClick={toggleDarkMode}>
              {isDark ? Icons.Brightness4Icon : Icons.DarkModeIcon}
            </button> */}
            </div>
          </div>
          <a className="button" onClick={toggleMenu}>
            <i className="ph-list-bold"></i>
            <span>Menu</span>
          </a>
        </div>
      </header>
      {isMenuOpen && (
        <div className="menu-overlay position-absolute d-flex justify-content-center align-items-center" onClick={toggleMenu}>
          <div className="mobile-link-option">
            {navLinks.map((data, index) => (
              <Link to={data.link} key={index}>
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
