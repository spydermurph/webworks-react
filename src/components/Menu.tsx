import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const closeMenu = () => {
    const menu = document.getElementById("mainMenu");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  useEffect(() => {
    const menu = document.getElementById("mainMenu");

    const handleClickOutside = (e: MouseEvent) => {
      if (menu && !menu.contains(e.target as Node)) {
        closeMenu();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  });

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-primary"
        data-bs-theme="dark"
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Webworks
          </NavLink>

          {/* Hamburger button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="mainMenu"
            //style={{ display: "flex", justifyContent: "space-between" }}
          >
            <ul className="navbar-nav me-auto mb-2 m-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={closeMenu}>
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/categories"
                  onClick={closeMenu}
                >
                  Category Management
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
