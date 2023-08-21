import React, { useState } from 'react';

import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import {Nav} from './courspagination.stayle';

export default function Courspagination({setItem,item}) {
  
  const handelpage = () => {
    const items = setItem.count/5 ;
    console.log(setItem ,item)


     
  };

  return (
    <Nav aria-label='Page navigation example' className='pagination'>
      <MDBPagination className='mb-0'>
        <MDBPaginationItem >
          <MDBPaginationLink href='#' aria-label='Previous'className='paginationtext rounded'>
            <span aria-hidden='true'>«</span>
          </MDBPaginationLink>
        </MDBPaginationItem>

        <MDBPaginationItem>
          <MDBPaginationLink href='#' className='paginationtext'>...</MDBPaginationLink>
        </MDBPaginationItem>
        
           <MDBPaginationItem>
             <MDBPaginationLink href='#' className='paginationtext' onClick={handelpage}>3</MDBPaginationLink>
           </MDBPaginationItem>
           <MDBPaginationItem>
             <MDBPaginationLink href='#' className='paginationtext' onClick={handelpage}>2</MDBPaginationLink>
           </MDBPaginationItem>
           <MDBPaginationItem>
             <MDBPaginationLink href='#' className='paginationtext' onClick={handelpage}>1</MDBPaginationLink>
           </MDBPaginationItem>
     
        <MDBPaginationItem >
          <MDBPaginationLink href='#' aria-label='Next' className='paginationtext rounded'>
            <span aria-hidden='true'>»</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </Nav>
  );
}