import Modalcontent from "./modalcontent";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Img } from "./modal.style";
import "../../button/hover.css";
import getteacherapi from "../../../core/services/api/topteacherid/topteacher.api.js";
import { H3 } from "./modalcontent.style";
import getAllCourseApi from "../../../core/services/api/courseapi/course1.api";
export default function Modall() {
  const [show, setShow] = useState(false);

  const [course, setCourse] = useState([]);
  // const [like, setlike] = useState([]);

  const getCourseApi = async () => {
    const course = await getAllCourseApi();
    course.forEach(async (element) => {
      // const likeCuont = await getLikeCount(element._id);
      // element.like = likeCuont.like;
      // console.log(element.like);
    });
    const course1 = course.slice(0, 4);
    setCourse(course1);
  };

  useEffect(() => {
    getCourseApi();
  }, []);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setShow(true)}
        className="purplehover"
      >
        دوره های استاد
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Img src="../image/profile.png" />
          <div className="row">
            <H3 className="col-md-8">لیست دوره های استاد</H3>
          </div>
          {course.map((item) => (
            <Modalcontent
              title={item.title}
              image={item.lesson.image}
              _id={item._id}
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
