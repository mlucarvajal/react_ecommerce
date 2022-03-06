import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap'
import { BsBag } from "react-icons/bs";


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
  
  <Navbar.Brand href="#home">MODO GAFAS</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Armazones de receta</Nav.Link>
      <Nav.Link href="#pricing">Anteojos de sol</Nav.Link>
      <NavDropdown title="Lentes de contacto" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Lentes clasicas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Blue blockers</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Ver todos</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      
      <Nav.Link eventKey={2} href="#memes">
        <BsBag/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar