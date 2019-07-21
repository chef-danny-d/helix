import React from 'react'
import {Nav, Navbar, Form, FormControl, NavDropdown} from 'react-bootstrap'
import styled from 'styled-components'
import Btn from './Button'
import { Link } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'

const NavStyle = styled.div`
    .search{
            display: flex;
            width: 100%;
        &--input{
            flex: 3;
            border-radius: 0;
        }
        &--button{
            flex: 1;
        }
    }
    .navbar-nav{
      display: flex;
      align-items: center;
      a{
        color: cornflowerblue;
        padding: 0.25em 0.5em;
      }
    }
    .dropdown{
        align-items: center;
        display: flex;
        flex-direction: column;
        &-menu{
            flex-direction: column;
            a{
                display: inline-block;
                &:active{
                  background-color: lightgray;
                }
            }
        }
        &-menu.show{
          display: flex;
        }
    }
`

const NavigationBar = () => (
    <React.Fragment>
        <NavStyle>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Brand>Helix</Navbar.Brand>
                    <Nav className="mr-5">
                        <Link to="/upload">Upload</Link>
                        <Link to="/">Files</Link>
                        <Link to="/trash">Trash</Link>
                        <Link to="/shared">Shared</Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <Link to="/account">Account Settings</Link>
                            <Link to="/profile">Profile Settings</Link>
                            <Link to="/billing">Billing Settings</Link>
                            <Link to="/privacy">Privacy Settings</Link>
                            <NavDropdown.Divider />
                            <Link to="/logout">Logout</Link>
                        </NavDropdown>
                    </Nav>
                    <Form inline className="search">
                        <FormControl type="text" placeholder="Search" className="search--input" />
                        <Btn variant="primary" search className="button">Search</Btn>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </NavStyle>
    </React.Fragment>
)

export default NavigationBar