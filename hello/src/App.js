import logo from './logo.jpg';
import './css.css';
import { BrowserRouter, Routes, Route, NavLink, } from 'react-router-dom'
// PAGES
import stadte from './stadte'
import uberuns from './uberuns'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <stadte />
          <div id="navi">
            <h1 className='header'>Autowash</h1>
            <img src={logo} className="logo" alt="logo" />
            <div id='navbar'>
              <ul>
                <li> <NavLink to="/"> Startseite</NavLink>  </li>
                <li>  <NavLink to="stadte"> Städte</NavLink></li>
                <li> <NavLink to="uberuns"> Über uns</NavLink>  </li>
              </ul>
            </div>
          </div>


          <Routes>
            <Route path='stadte' element={<stadte />} />
            <Route path='uberuns' element={<uberuns />} />
          </Routes>
        </header>
      </div>
      <div className='inhalt'>
        <table>
          <thead>
            <tr>
              <th>Programm</th>
              <th>Beschreibung</th>
              <th>Preise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>inhalt</td>
              <td>inhalt</td>
              <td>inhalt</td>
            </tr>
            <tr>
              <td>inhalt</td>
              <td>inhalt</td>
              <td>inhalt</td>
            </tr>
            <tr>
              <td>inhalt</td>
              <td>inhalt</td>
              <td>inhalt</td>
            </tr>
            <tr>
              <td>inhalt</td>
              <td>inhalt</td>
              <td>inhalt</td>
            </tr>
            <tr>
              <td>inhalt</td>
              <td>inhalt</td>
              <td>inhalt</td>
            </tr>
          </tbody>
        </table>
        <span className="head"> Kontakt </span> <br />
    <span>0211 176417 <br />
      0211 157897<br />aurowasch@web.de
    </span>
    <br />
    <br />
    <span className="head"><em> Öffnungszeiten </em></span> <br />
    <div>
      <em>
        Montag-Samstag <br />
        08:00-13:00 14:00-17:00</em>
    </div>
    <br />
    <span className="head">Adresse: </span>
    <div>Jülicher str.7</div>
    <div>40477 Düsseldorf</div>
    <h2 className="head">Eröffnungs 50% Sonderangebot</h2>
    <h3 className="head">
      Wir haben 50% Sonderangebot für unsere Neueröffnung nur  
     bis 27.08.2023
    </h3>
      </div>
      <footer>
    <p id="footer">
      &copy; Copright 2023 <a href="#"> "Datenschutz" </a>
      <a href="#">"Impressum " </a>
    </p>
  </footer>
    </BrowserRouter>
  );
}

export default App;
