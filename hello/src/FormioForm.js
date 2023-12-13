import { Form } from "@formio/react";
import { Col, Row } from "react-bootstrap";
import { atomOneLight, CopyBlock } from "react-code-blocks";
import 'formiojs/dist/formio.builder.min.css';
import './styles.scss';
import './Styles/formio.css';
const FormioForm = () => {
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
            <Form src="https://forms.lhd.dev.publicplan.cloud/azubitest-adxfkcqfehdcrev/test2" />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default FormioForm;