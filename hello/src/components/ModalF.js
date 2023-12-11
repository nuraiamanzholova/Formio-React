import logo from '../components/logo.jpg'
import { useState } from 'react';
import "../Styles/modalF.css"


const ModalF = () => {
  const [modal, setModal] = useState(false);

  const ModalFensterpopt = () => {
    setModal(!modal);
  };

  return (
    <>
      <img src={logo} className="logo" alt="logo" onClick={ModalFensterpopt} />

      {modal && (
        <>
          <div id="background" className="background">
            <div id="modal" >
              <div className="modal-content">
                <span className="close" id="close" onClick={ModalFensterpopt}>
                  &times;
                </span>
                <h2 className="logotitle">Logo</h2>
                <div className="logo-container"> <img src={logo} className='logo-container'></img></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalF;





