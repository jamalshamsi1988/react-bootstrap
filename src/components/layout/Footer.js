import React from "react";
import { Container, Navbar } from "react-bootstrap";


const Footer = () => {
  return (
 
    <Navbar style={{ backgroundColor: "rgb(159, 159, 159)" }}>
      <Container style={{justifyContent:"center"}}>
        <Navbar.Brand href="/" style={{ color: "white"}}>
        &copy; All Rights Reservd 2023 | Jamal Shamsi
        </Navbar.Brand>

      </Container>
    </Navbar>
  );
};

export default Footer;
