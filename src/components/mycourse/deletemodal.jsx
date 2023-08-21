import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Deletmodal({setItem, item}) {
  const [show, setShow] = useState(false);

  const handledelet = () => {
    setItem(old => old.filter(it => it.id !== item.id))
    setShow(false);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-link btn-sm" onClick={handleShow}>
        <img
          src="../image/icons8-trash-64.png"
          alt="+"
          style={{ width: "30px" }}
        ></img>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>ایا از حذف دوره اطمینان دارید؟</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handledelet}>
            حذف
          </Button>
          <Button variant="primary" onClick={handleClose}>
            انصراف
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
