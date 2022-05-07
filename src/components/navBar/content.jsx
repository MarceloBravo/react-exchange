import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './style.css'

export const NavBarContent = (props) => {
    const { datos } = props 


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Exchange Tracker</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {datos.length > 0 && 
                        <NavDropdown title="Histórico" id="nav-dropdown">
                            {datos.map((i, key) => {
                                    return <NavDropdown.Item eventKey="4.1" key={key} href={'/history'+i.codigo}>{i.nombre}</NavDropdown.Item>
                                })
                            } 
                        </NavDropdown>
                    }
                    <Nav.Link href="#pricing">Acerca de...</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
    )
} 