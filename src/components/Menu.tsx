import { NavLink } from "react-router-dom";

export default function Menu() {
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
          <div
            className="collapse navbar-collapse"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <ul className="navbar-nav me-auto mb-2 m-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
