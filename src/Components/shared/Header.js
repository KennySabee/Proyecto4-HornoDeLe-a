import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <Navbar bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="/">Horno de Leña</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>      
            <Nav.Link href="contact">Contacto</Nav.Link> 
            <Nav.Link href="dirección">Dirección</Nav.Link>                    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  };
  export default Header;
  