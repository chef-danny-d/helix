import React from 'react'
import {Nav, Navbar, Form, FormControl, NavDropdown} from 'react-bootstrap'
import styled from 'styled-components'
import Btn from './Button'
import { Link } from 'react-router-dom'

const NavStyle = styled.div`
    
`

const NavigationBar = () => (
    <React.Fragment>
        <NavStyle>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/upload">Upload</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/">Files</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/trash">Trash</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/shared">Shared</Link>
                    </Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/settings">Account Settings</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/profile">Profile Settings</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/billing">Billing Settings</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/privacy">Privacy Settings</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Btn variant="primary" big className="button">Search</Btn>
                </Form>
            </Navbar>
        </NavStyle>
    </React.Fragment>
)

export default NavigationBar