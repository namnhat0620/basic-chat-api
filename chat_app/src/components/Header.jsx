import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Stack, Image, Dropdown, Button, NavDropdown, Navbar, Container, Nav } from 'react-bootstrap'
import Logo from './../assets/images/logo.png'
import Avatar from './../assets/images/avatar.jpg'
import { useAuth } from '../context/AuthContext'

function Header() {
    const auth = useAuth()
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout()
        navigate('/login')
    }
    return (
        <>
    <Navbar variant="dark"  expand="lg" style={{backgroundColor: "#1687A7", marginLeft: "5%"}} className='fixed-top overflow-hidden d-flex justify-content-between p-0'>
      <Container fluid>
        
        <Navbar.Brand href="#chatapp" className="d-flex align-items-center">
        <Image src={Logo} width={40} height={40}/>
                <div className='h2 ms-4'>CHAT APP</div>
                
        </Navbar.Brand>

        <Navbar.Collapse id="navbar-dark-example" className='d-flex flex-row-reverse'>
            
      
          <Nav>
          <Navbar.Toggle aria-controls="navbar-dark-example"  data-toggle="dropdown"/>
            <NavDropdown
              id="nav-dropdown-dark-example"
              menuVariant="dark"
              title={
                <Image src={Avatar} roundedCircle width={50} height={50} style={{ marginRight:'60px', backgroundColor: 'transparent'}}/>
              }
            >
              <Navbar.Toggle aria-controls="navbar-dark-example"  data-toggle="dropdown"/>
                
              

              <NavDropdown.Item  onClick={handleLogout}>
                Logout
              </NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Outlet/>
        </>
    )
}

export default Header
