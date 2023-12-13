import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import Startseite from '../pages/Startseite';
import Stadte from "../pages/Stadte";
import NotFound from '../pages/Notfound';
import Uberuns from "../pages/Uberuns"
import ModalF from './ModalF';
import FormioForm from '../FormioForm';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Menu() {
    return (
        <BrowserRouter>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto"
                            style={{ maxHeight: '100px'}}
                            navbarScroll
                        >
                             <ModalF />
                             
                             <h1 className='header'> Autowash </h1>
                            <Nav.Link as={Link} to={"/Startseite"}> Startseite </Nav.Link>
                            <Nav.Link  as={Link} to={"/Uberuns"}>Überuns</Nav.Link>
                            <Nav.Link  as={Link} to={"/Stadte"}>Stadte</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="Stadte">Stadte</NavDropdown.Item>
                                <NavDropdown.Item href="Uberuns">Überuns</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="Formular"> Formular ausfüllen</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                            
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="Suchen"
                                placeholder="Suchen"
                                className="me-2"
                                aria-label="Suchen"
                            />
                            <Button variant="outline-success">Suchen</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path='/' element={<Startseite />} />
                <Route path='/Startseite' element={<Startseite />} />
                <Route path='Uberuns' element={<Uberuns />} />
                <Route path='Stadte' element={<Stadte />} />
                <Route path='*' element={<NotFound />} />
                <Route path='Formular' element={<FormioForm />} />
            </Routes>
        </BrowserRouter>



    );
}

export default Menu;