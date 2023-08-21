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
import { useContext, useState } from "react";
import jwtDecode from "jwt-decode";
import { UserContext } from "../dashboardcontent/UserContext";

export default function Navbar3() {
  const usertoken = getItem("token");
  const rolstudents = JSON.parse(getItem("user"));
  const { user: userContext } = useContext(UserContext);

  const [user, setuser] = useState(usertoken ? true : false);
  const [email] = useState(user.email);

  const handlesubmit = async (e) => {
    e.preventDefault();
    let obj = { email: email };
    ////fullname///
  };
  //buy//
  // const handlebuy=async()=>{
  //   const{data}=await addtoterm(_id)
  // }

  const gopanel = () => {
    const decode = jwtDecode(usertoken);
    getItem("role", decode.role);
    if (decode.role === "student") {
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

            {/* <AllCollapseExample/> */}
          </Nav>
          <span className="reigesterbtn">
            {user ? (
              <div className="d-inline-block" onSubmit={handlesubmit}>
                <Link to="/dashboard" className="link-light ">
                  <button
                    onClick={gopanel}
                    type="button"
                    class="btn btn-sm link-light "
                  >
                    {/* <img
                      src={"../image/icons8-customer-64.png"}
                      alt="profile"
                      style={{ width: "30px" }}
                      className=" mx-2 float-start"
                    /> */}
                    {userContext?.email}
                  </button>

                  {/* <span className=" d-flex justify-content-bettwen py-2  pe-5 reigesterbtn ">
                  <div className="d-flex  searchicon me-3" onClick={gopanel}  >
                  <p className="text-light my-1 ms-3">{rolstudents.email}</p>
                    
                    <img
                      src={"../image/icons8-customer-64.png"}
                      alt="profile"
                      style={{ width: "29px" }}
                      className="my-1 mx-2"
                    />
                    
                  </div>
                </span> */}
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
                src="/image/icons8-shopping-cart-24.png"
                style={{ marginRight: "10px" }}
              />
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

////////////////////////////////////////////////////////////////////////

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// // import { Link } from "react-router-dom";
// import "./navbar.css";
// function Navbar3() {
//   return (
//     <Navbar bg="white" expand="lg" className="fixedn" style={{ width: "100%" }}>
//       <Container className="">
//         <Navbar.Brand href="#home" className="text-dark">
//           Ruby
//           <img
//             src="../image/ruby.svg"
//             height="35"
//             alt="MDB Logo"
//             loading="lazy"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <img src={"./image/more.png"} alt="=" style={{ width: "30px" }} />
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav" className="position-relative">
//           <Nav>
//             <Nav.Link href="/" className="text-dark ">
//               <span className="text-dark navlink3">خانه</span>
//             </Nav.Link>
//             <Nav.Link href="/courses" className="text-dark ">
//               <span className="text-dark navlink3">دوره ها</span>
//             </Nav.Link>
//             <Nav.Link href="/newspage" className="text-dark ">
//               <span className="text-dark navlink3">اخبار</span>
//             </Nav.Link>
//             <Nav.Link href="#home" className="text-dark ">
//               <span className="text-dark navlink3">خدمات</span>
//             </Nav.Link>
//             <Nav.Link href="#home" className="text-dark ">
//               <span className="text-dark navlink3">تماس با ما</span>
//             </Nav.Link>

//             {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">
//                                 Another action
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">
//                                 Separated link
//                             </NavDropdown.Item>
//                         </NavDropdown> */}
//           </Nav>

//           <span className=" d-flex justify-content-bettwen py-2  pe-5 reigesterbtn ">

//             <div className="d-flex  searchicon me-3">
//               <img
//                 src={"../image/icons8-customer-64.png"}
//                 alt="search"
//                 style={{ width: "29px" }}
//                 className="my-1 mx-2"
//               />
//               <p className="text-light my-1 ms-3">حساب کاربری</p>
//             </div>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbar3;
///////////////////////////////////////////////////////////////////////////////////////////////
// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     <a className="navbar-brand" href="#">Game site</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//     </button>

//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                 </a>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                 </div>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//             </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//                 <button className="btn btn-primary mr-2 my-2 my-sm-0" type="submit">Search</button>
//         </form>
//     </div>
// </nav>
// <!-- Navbar -->
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     {/* <!-- Container wrapper --> */}
//     <div className="container-fluid">
//         {/* <!-- Toggle button --> */}
//         <button
//             className="navbar-toggler"
//             type="button"
//             data-mdb-toggle="collapse"
//             data-mdb-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//         >
//             <i className="fas fa-bars"></i>
//         </button>

//         {/* <!-- Collapsible wrapper --> */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             {/* <!-- Navbar brand --> */}
//             <a className="navbar-brand mt-2 mt-lg-0" href="#">
//                 <img
//                     src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
//                     height="15"
//                     alt="MDB Logo"
//                     loading="lazy"
//                 />
//             </a>
//             {/* <!-- Left links --> */}
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Dashboard</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Team</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Projects</a>
//                 </li>
//             </ul>
//             {/* <!-- Left links --> */}
//         </div>
//         {/* <!-- Collapsible wrapper --> */}

//         {/* <!-- Right elements --> */}
//         <div className="d-flex align-items-center">
//             {/* <!-- Icon --> */}
//             <a className="text-reset me-3" href="#">
//                 <i className="fas fa-shopping-cart"></i>
//             </a>

//             {/* <!-- Notifications --> */}
//             <div className="dropdown">
//                 <a
//                     className="text-reset me-3 dropdown-toggle hidden-arrow"
//                     href="#"
//                     id="navbarDropdownMenuLink"
//                     role="button"
//                     data-mdb-toggle="dropdown"
//                     aria-expanded="false"
//                 >
//                     <i className="fas fa-bell"></i>
//                     <span className="badge rounded-pill badge-notification bg-danger">1</span>
//                 </a>
//                 <ul
//                     className="dropdown-menu dropdown-menu-end"
//                     aria-labelledby="navbarDropdownMenuLink"
//                 >
//                     <li>
//                         <a className="dropdown-item" href="#">Some news</a>
//                     </li>
//                     <li>
//                         <a className="dropdown-item" href="#">Another news</a>
//                     </li>
//                     <li>
//                         <a className="dropdown-item" href="#">Something else here</a>
//                     </li>
//                 </ul>
//             </div>
//             {/* <!-- Avatar --> */}
//             <div className="dropdown">
//                 <a
//                     className="dropdown-toggle d-flex align-items-center hidden-arrow"
//                     href="#"
//                     id="navbarDropdownMenuAvatar"
//                     role="button"
//                     data-mdb-toggle="dropdown"
//                     aria-expanded="false"
//                 >
//                     <img
//                         src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
//                         className="rounded-circle"
//                         height="25"
//                         alt="Black and White Portrait of a Man"
//                         loading="lazy"
//                     />
//                 </a>
//                 <ul
//                     className="dropdown-menu dropdown-menu-end"
//                     aria-labelledby="navbarDropdownMenuAvatar"
//                 >
//                     <li>
//                         <a className="dropdown-item" href="#">My profile</a>
//                     </li>
//                     <li>
//                         <a className="dropdown-item" href="#">Settings</a>
//                     </li>
//                     <li>
//                         <a className="dropdown-item" href="#">Logout</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//         {/* <!-- Right elements --> */}
//     </div>
//     {/* <!-- Container wrapper --> */}
// </nav>
// <!-- Navbar -->
//     );
// }
