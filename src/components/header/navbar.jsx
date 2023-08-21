import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navitem,
  Navli,
  Serchpic,
  ButtonA,
  ButtonB,
} from "./navbar.style";

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg bg-none">
      <div className="container-fluid mt-2">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0 text-light" href="#">
            <img
              src="../image/ruby.svg"
              height="35"
              alt="MDB Logo"
              loading="lazy"
            />
            Ruby
          </a>

          <Navitem className="navbar-nav me-right mb-2 mb-lg-0">
            <Navli className="nav-item">
              <Link to="/">
                <a className="nav-link text-light" href="#">
                  خانه
                </a>
              </Link>
            </Navli>
            <Navli className="nav-item">
              <a className="nav-link text-light" href="#">
                دوره ها
              </a>
            </Navli>
            <Navli className="nav-item">
              <a className="nav-link text-light" href="#">
                اخبار
              </a>
            </Navli>
            <Navli className="nav-item">
              <a className="nav-link text-light" href="#">
                خدمات
              </a>
            </Navli>
            <Navli className="nav-item">
              <a className="nav-link text-light" href="#">
                تماس با ما
              </a>
            </Navli>
          </Navitem>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown me-right">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <Serchpic
                src="./image/loupe.png"
                className="rounded-circle"
                height="25"
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>

          <Link to="/login" className="link-light text-danger">
            <ButtonB type="button" className="btn btn-light ">
              ورود
            </ButtonB>
          </Link>

          <Link to="/rigester" className="link-light">
            <ButtonA type="button" className="btn text-light">
              نام ثبت
            </ButtonA>
          </Link>
        </div>
      </div>
    </Nav>
  );
}
