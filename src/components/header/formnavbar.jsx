import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css";

function FormNavbar() {
  return (
    <Navbar
      bg=""
      expand="lg"
      className="fixedn"
      style={{ width: "100%", backgroundColor: "#5254FB" }}
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
        <Navbar.Collapse id="basic-navbar-nav" className="position-relative">
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
            <Nav.Link href="#home" className="text-light ">
              <span className="text-light navlink3">تماس با ما</span>
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
          </Nav>
          {/* <span className="reigesterbtn">
            <div className="d-inlineBlock">
              <img
                src={"../image/loupe.png"}
                alt="search"
                style={{ width: "30px" }}
                className="my-1 mx-2"
              />
            </div>
          </span> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FormNavbar;
