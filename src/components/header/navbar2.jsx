// import { MDBBtn } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { ButtonA, ButtonB } from "./navbar.style";
import "./navbar.css";
import { NavDropdown } from "react-bootstrap";
// import AllCollapseExample from "./acardion";
// import Modall from "../LandingComponents/modal/modal";
import Modallsearch from "../../common/modall/modal";
import { clearStorage, getItem } from "../../core/services/storage/storage";
import { useState } from "react";
import jwtDecode from "jwt-decode";

export default function Navbar2() {
  const usertoken = getItem("token");
  const rolstudents = JSON.parse(getItem("user"));
  const rolEmployee = JSON.parse(getItem("user"));
  const [user, setuser] = useState(usertoken ? true : false);
  const [email] = useState(user.email);

  const handlesubmit = async (e) => {
    e.preventDefault();
    let obj = { email: email };
    ////fullname///
  };

  const gopanel = () => {
    const decode = jwtDecode(usertoken);
    getItem("role", decode.role);
    if (decode.role !== "student") {
      window.location.href = "http://localhost:3001/auth/" + getItem("token");
    } else if (decode.role === "student") {
      window.location.href = "http://localhost:3000/dashboard";
    }
  };

  return (
    <Navbar
      bg=""
      expand="lg"
      className=" fixedn herosectionnavbar"
      style={{ width: "100%", overflow: "visible" }}
    >
      <Container className="">
        <Navbar.Brand href="#home" className="text-light">
          Ruby
          <img
            src="../image/ruby.svg"
            height="35"
            alt="MDB Logo"
            loading="lazy"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src={"./image/more.png"} alt="=" style={{ width: "30px" }} />
        </Navbar.Toggle>
        <Navbar.Collapse className="position-relative" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className="text-light ">
              <span className="text-light navlink3">خانه</span>
            </Nav.Link>
            <Nav.Link href="/courses" className="text-light ">
              <span className="text-light navlink3">دوره ها</span>
            </Nav.Link>
            <Nav.Link href="/newspage" className="text-light ">
              <span className="text-light navlink3">اخبار</span>
            </Nav.Link>
            <Nav.Link href="#home" className="text-light ">
              <span className="text-light navlink3">خدمات</span>
            </Nav.Link>
            <Nav.Link href="#home" className="text-light "></Nav.Link>

            <span className="text-light navcall">
              <NavDropdown
                title="تماس با ما"
                id="basic-nav-dropdown"
                className="text-light"
              >
                <NavDropdown.Item href="#action/3.1">
                  <p className="text-dark">
                    <img
                      src="../image/icons-1-2.png"
                      alt="fi"
                      className="ms-2 mb-1"
                      style={{ width: 20 }}
                    />
                    + 01 234 567 88
                  </p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <p className="text-dark">
                    <img
                      src="../image/icons-2 -2.png"
                      alt="fi"
                      className="ms-2 mb-1"
                      style={{ width: 20 }}
                    />
                    info@example.com
                  </p>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <div>
                    <a href="https://maps.windows.com/?form=WNAMSH&collection=point.36.597632_53.06462_Point">
                      <img
                        src="../image/location2.png"
                        alt="fi"
                        className="ms-2 mb-1"
                        style={{ width: 20 }}
                      />
                      <h6 className="flink text-dark">ادرس پژوهشگاه</h6>
                    </a>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            </span>
          </Nav>
          <span className="reigesterbtn">
            {/* <Modallsearch /> */}

            {user ? (
              <div className="d-inline-block" onSubmit={handlesubmit}>
                <Link to="/dashboard" className="link-light ">
                  <button
                    onClick={gopanel}
                    type="button"
                    class="btn btn-sm link-light "
                  >
                    {rolstudents.email || rolEmployee.email}
                  </button>
                </Link>

                {/*logout*/}
                {/* <button onClick={()=>{setuser(false);clearStorage();}} type="button" class="btn btn-default btn danger">exit</button> */}
              </div>
            ) : (
              <>
                <Link to="/login" className="link-light ">
                  <ButtonB type="button" className="btn text-light mx-2 px-4 ">
                    ورود
                  </ButtonB>
                </Link>

                <Link to="/rigester" className="link-light">
                  <ButtonA type="button" className="btn text-light px-3">
                    ثبت نام
                  </ButtonA>
                </Link>
              </>
            )}
            <Link to="/check">
              <img
                src="./image/icons8-shopping-cart-24.png"
                style={{ marginRight: "10px", marginBottom: "5px" }}
              />
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
