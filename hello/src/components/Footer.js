import '../Styles/footer.css'
import logo from './logo.jpg';

const Footer = () => {
  return (
    <div className="container">
      <section ></section>
      <div className="row" style={{ textAlign: 'center' }}>

      </div>

      <footer className="footer-bs">
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft">
            <h2>  <img src={logo} alt="LOGO" className='h2' /> </h2>
            <p>
              Hier kommt der ganze Abschnitt über die Unternehmen.
            </p>
            <p>© 2023 BS3 UI Kit, All rights reserved</p>
          </div>
          <div className="col-md-2 footer-nav animated fadeInUp">
            <h4>Menu</h4>
            <div className="col-md-6">
              <ul className="pages">
                <li>
                  <a href="#">Autowash</a>
                </li>
                <li>
                  <a href="#">Express Innenreinigung</a>
                </li>
                <li>
                  <a href="#">SB-Angebot</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Karriere</a>
                </li>
              </ul>
              </div>

            </div>
            <div className="col-md-2 footer-social animated fadeInDown">
            
              <ul className="list">
                <li>
                  <a href="#">Über uns</a>
                </li>
                <li>
                  <a href="#">Kontakte </a>
                </li>
                <li>
                  <a href="#">Impressum</a>
                </li>
                <li>
                  <a href="#">Datenschutz</a>
                </li>
              </ul>
            </div>
          
          <div className="col-md-2 footer-social animated fadeInDown">
            <h4>Folge uns</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">RSS</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>Ein Rover im flauschigen Anzug macht den echten Pinguinen keine Angst</p>
            <p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Suche für..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-envelope"></span>
                  </button>
                </span>
              </div>
            </p>
          </div>
        </div>
      
      <section style={{ textAlign: 'center', margin: '10px auto' }}>
        <p className='designedby'>
          Created by <a href="https://github.com/dashboard">Nurai Amanzholova</a>
        </p>
      </section>
      </footer>
    </div>
  );
};

export default Footer;