import { Container, Dropdown, Nav, NavLink, Navbar } from "react-bootstrap";
import NetflixLogo from "../assets/netflix_logo.png";
import { Search, Bell } from "react-bootstrap-icons";
import Avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar className="mb-2" expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <img style={{ width: "70px" }} src={NetflixLogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/showTv"} className="nav-link">
              Tv Shows
            </Link>
            <Link to={"/"} className="nav-link">
              Movies
            </Link>
            <Link to={"/"} className="nav-link">
              Recently Added
            </Link>
            <Link to={"/"} className="nav-link">
              My List
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link className="d-none d-lg-inline-block">
              <Search />
            </Nav.Link>
            <Nav.Link className="d-none d-lg-inline-block">KIDS</Nav.Link>
            <Dropdown className="d-none d-lg-inline-block" drop="start">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <Bell />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Non ci sono notifiche</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <Link to={"/profilePage"}>
                <img className="d-none d-lg-inline-block rounded" style={{ width: "40px" }} src={Avatar} alt="avatar" />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
