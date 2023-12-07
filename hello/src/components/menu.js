import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Startseite from '../pages/Startseite';
import Stadte from "../pages/Stadte";
import NotFound from '../pages/Notfound';
import Uberuns from "../pages/Uberuns"
import logo from './logo.jpg';
import ModalF from './ModalF';
import FormioForm from '../FormioForm';
import "../Styles/css.css"

const Menu = () => {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <div id="navi">
                        <div className='header'> <h1> Autowash</h1></div>
                        <img src={logo} className="logo" alt="logo" />
                        <div id='navbar'>
                            <ul>
                            <li><NavLink to="Formular">Link zum Formular</NavLink></li>
                                <li> <NavLink to="/"> Startseite</NavLink>  </li>
                                <li>  <NavLink to="Stadte"> Städte</NavLink></li>
                                <li> <NavLink to="Uberuns"> Über uns</NavLink>  </li>
                             
                            </ul>
                        </div>
                    </div>
                </nav>
                <ModalF />
                <Routes>
                    <Route path='/' element={<Startseite />} />
                    <Route path='Uberuns' element={<Uberuns />} />
                    <Route path='Stadte' element={<Stadte />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='Formular' element={<FormioForm />} />

                
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Menu;