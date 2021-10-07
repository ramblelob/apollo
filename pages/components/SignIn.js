import { Modal } from "react-bootstrap";

const Login = ({ show, setShow }) => {
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

export default Login;
