import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'



const NavbarComponent = () => {
  return(
    <div>
<Navbar  className="nav" collapseOnSelect expand="lg" variant="dark" variant="dark" >
  <Container>
  <Navbar.Brand href="#home">Delice </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="/">Acceuil</Nav.Link>
      <Nav.Link href="#pricing">Nos plats</Nav.Link>

    
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    </div>
   )

 }

export default NavbarComponent