import Subscribe from "../components/Subscribe";
const Startseite = () => {
    return ( 
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
              <td>Programm</td>
              <td>Beschreibung</td>
              <td>30€</td>
            </tr>
            <tr>
              <td>Programm</td>
              <td>Beschreibung</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>Programm</td>
              <td>Beschreibung</td>
              <td>80€</td>
            </tr>
            <tr>
              <td>Programm</td>
              <td>Beschreibung</td>
              <td>100€</td>
            </tr>
            <tr>
              <td>Programm</td>
              <td>Beschreibung</td>
              <td>30€</td>
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
    <Subscribe/>
      </div>
   
    );
}

export default Startseite;