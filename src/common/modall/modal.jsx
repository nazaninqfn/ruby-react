import Modalcontent from './modalcontent';
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Img} from './modal.style';
// import "../../button/hover.css"

export default function Modallsearch() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)} className="purplehover"> 
        بیشتر
      </Button> */}
      <div className="d-inline-block" onClick={() => setShow(true)}>
        <img
          src={"../image/loupe.png"}
          alt="search"
          style={{ width: "30px" }}
          className="my-1 mx-2"
        />
        
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          
          <Modalcontent/> 

        </Modal.Body>
      </Modal>
    </>
  );
}
