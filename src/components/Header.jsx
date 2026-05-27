import { useContext } from "react";
import logo from "../assets/logo.png";
import { PageContext } from "../store/PageContextProvider";

function Header() {
  const { setPage } = useContext(PageContext);
  return (
    <>
      <nav className="navbar custom-navbar py-3">
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <a
            className="navbar-brand text-light d-flex align-items-center gap-2"
            href=""
            onClick={() => setPage("Home")}
          >
            {/* Optional Logo */}
            {/* <img src={logo} alt="logo" width="50" height="50" /> */}

            <h1 className="display-5 fw-bold mb-0 app-title"> ⚡ QUIZZI 🎯</h1>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
