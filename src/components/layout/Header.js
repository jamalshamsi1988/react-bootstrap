import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assest/Logo.jfif";
function Header() {
  return (
    <Navbar style={{ backgroundColor: "rgb(159, 159, 159)" }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          Home Page
        </Navbar.Brand>
        <img
          alt="logo"
          src={logo}
          width="60"
        
          className="d-inline-block align-top"
        />
      </Container>
    </Navbar>
  );
}

export default Header;
