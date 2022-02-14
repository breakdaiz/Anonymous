import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
<Navbar bg="dark" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand href="/">EShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end" >
      <Nav>
        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
        <Nav.Link href="/login"><i className='fas fa-user'></i> Sign in</Nav.Link>  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </header>
  )
}

export default Header