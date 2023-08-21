import React from "react";

import { Container, Tr, Mycoursimg, H3, Plussicon } from "./modalcontent.style";

import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Modalcontent({ title, image, _id }) {
  // const item = [

  //     {
  //       id: 1,
  //       image: "../image/1.png",
  //       name:"ریکت",
  //       icon:"../image/plus.png",
  //     },
  //     {
  //       id: 2,
  //       image: "../image/index.png",
  //       name: "ریکت",
  //       icon:"../image/plus.png",
  //     },
  //     {
  //       id: 3,
  //       image: "../image/photo_-1.png",
  //       name: "ریکت",
  //       icon:"../image/plus.png",
  //      },
  //     {
  //       id: 4,
  //       image: "../image/photo_-2.png",
  //       name: "ریکت",
  //       icon:"../image/plus.png",
  //       },

  //   ];

  return (
    <Container className="container">
      <MDBTable>
        <MDBTableBody>
          <Tr className="bodyrow">
            <td className="cours-img">
              <Mycoursimg src={image} alt="coursitems" />
            </td>
            <td className="bodyrow">{title}</td>
            <td className="bodyrow">
              <Link to={"/coursedetailes/" + _id}>
                <Plussicon src="../image/plus.png" />
              </Link>
            </td>
          </Tr>
          {/* {item.map((item, index) => (
            <Tr className="bodyrow" key={index}>
              
                <td  className="cours-img" >
                    <Mycoursimg src={item.image} alt="coursitems"/>
                </td>
                <td className="bodyrow">
                    {item.name} 
                </td>
                <td className="bodyrow">
                <Link to="/Coursedetail">
                <Plussicon src={item.icon} />
                </Link>
                </td>
             
            </Tr >
          ))} */}
        </MDBTableBody>
      </MDBTable>
    </Container>
  );
}
