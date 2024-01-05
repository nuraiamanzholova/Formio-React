import { Form } from "@formio/react";
import { Col, Row } from "react-bootstrap";
import { atomOneLight, CopyBlock } from "react-code-blocks";
import 'formiojs/dist/formio.builder.min.css';
import './styles.scss';
import { useEffect, useRef, useState } from "react";

const FormioForm = () => {
  const [options, setOptions] = useState({
    i18n: {
      de: {
               'Submit': "Abschicken",
      },
      ch: {
        'Vorname': "ラベル",
        'Submit': "ラベル",
      },
      en: {
        'Vorname': "First name",
        'Submit': "Complete",
      },
      sp: {
        'Vorname': "Spanish Translation",
        'Submit': "Spanish Translation",
      },
    },
    language: "de",
  });
  const node = useRef()
  useEffect (()=>{
    if (node) { 
    // eslint-disable-next-line
    Formio.createForm(node.current,"https://forms.lhd.dev.publicplan.cloud/azubitest-adxfkcqfehdcrev/test2", options )
    
  }
  }
  )
  const setLanguage = (lang) => {
       setOptions({
      ...options,
      language: lang,
    });
    
  };

  // <Form src="https://forms.lhd.dev.publicplan.cloud/azubitest-adxfkcqfehdcrev/test2" options={options} />

  return (
    <>
      <Row>
        <Col>
          <CopyBlock
            theme={atomOneLight}
            language="jsx"
            codeBlock={false}
            showLineNumbers={true}
          />
          <div className="py-3">
          <div className={"form-mount-point"} ref={node} />
         
            <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={() => setLanguage('sp')}>
                Español
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setLanguage('en')}>
                English
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setLanguage('ch')}>
                中文
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setLanguage('de')}>
                Deutsch
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FormioForm;
