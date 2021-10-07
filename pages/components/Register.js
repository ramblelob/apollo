import { Modal } from "react-bootstrap";

const Register = ({ show, setShow }) => {
  return (
    <>
      <>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>Create Your Account</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    </>
  );
};

export default Register;
