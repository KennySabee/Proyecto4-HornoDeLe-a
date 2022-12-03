import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to= "/">
          <Navbar.Brand>Horno de Leña</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to= "/contact">
              <Nav.Link >Contacto</Nav.Link>
          </LinkContainer>
          <LinkContainer to= "/dirección">
              <Nav.Link >Dirección</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};
export default Header;
