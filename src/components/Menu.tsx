import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    const menu = menuRef.current;
    if (menu?.classList.contains("show")) {
      menu.classList.remove("show");
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    }
  };

  const toggleMenu = (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const menu = menuRef.current;
    if (!menu) return;

    const willOpen = !menu.classList.contains("show");
    menu.classList.toggle("show", willOpen);
    setIsMenuOpen(willOpen);
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

  useEffect(() => {
    if (!isMenuOpen) return; // If the menu isn't open, don't add the event listeners

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])',
    );

    const firstFocusable = focusable?.[0];
    const lastFocusable = focusable?.[focusable.length - 1];

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);

    firstFocusable?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [isMenuOpen]);

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
          {/*<button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>*/}
          <button
            ref={buttonRef}
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-controls="mainMenu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="collapse navbar-collapse" id="mainMenu" ref={menuRef}>
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
