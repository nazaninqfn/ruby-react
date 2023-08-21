
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Img} from '../../../LandingComponents/modal/modal.style';
import Logout from './logout';




export default function Modalllogout() {
const [show, setShow] = useState(false);

return (
    <>
    <a className="me-3 py-3 col-xl-12 col-lg-12 col-md-5 col-sm-5 col-5 menuhover " variant="primary" onClick={() => setShow(true)} > 
    <a>
    <img style={{ width: "30px" }} src="./image/log-out.png" alt="icon" />
        <h5 
        className=" d-inline "
        >
        خروج از حساب 
        </h5>
    </a>
    </a>


    




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

        
        
        <Logout/> 

        </Modal.Body>
    </Modal>
    </>
);
}
