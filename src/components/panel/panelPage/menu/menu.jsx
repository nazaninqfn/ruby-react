// // copied from course detaile 
// import React, { useState } from 'react';
//     import {
//     MDBTabs,
//     MDBTabsItem,
//     MDBTabsLink,
//     MDBTabsContent,
//     MDBTabsPane
//     } from 'mdb-react-ui-kit';


// import Navbar from '../../../header/navbar';
// import Footer from '../../../footer/footer';
// import AllCollapseExample from './coursepanelaccardion';



//     export default function Menu() {
//     const [basicActive, setBasicActive] = useState('tab1');

//     const handleBasicClick = (value) => {
//         if (value === basicActive) {
//         return;
//         }

//         setBasicActive(value);
//     };

//     return (
//         <>
        
//         <div className="container mt-5 ">
//         <div className="row mt-5">
//                     <div className="col-xl-3 d-fixed bg-primary mt-5">

//                         <MDBTabs style={{'padding':'0'}}>

//                             <MDBTabsItem className='col-xl-12'>
//                                 <MDBTabsLink  onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} className="nazitabhover">
//                                     داشبورد
//                                 </MDBTabsLink>
//                             </MDBTabsItem>

//                             <MDBTabsItem className='col-xl-12'>
//                                 <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}className="nazitabhover">
                                
//                                     <AllCollapseExample/>
                                
//                                 </MDBTabsLink>
//                             </MDBTabsItem>


//                             <MDBTabsItem  className='col-xl-12'>
//                                 <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}className="nazitabhover" >
//                                     ویرایش پروفایل  
//                                 </MDBTabsLink>
//                             </MDBTabsItem>

//                             <MDBTabsItem className='col-xl-12' >
//                                 <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}className="nazitabhover" >
//                                     خروج از حساب کاربری 
//                                 </MDBTabsLink>
//                             </MDBTabsItem>

//                         </MDBTabs>

                        
//                     </div>
                    
//                 </div>
            
//         </div>
        
//         </>
//     );
//     }
    





// // import React from "react";
// // import Footer from "../footer/footer";
// // import Navbar from "../header/navbar";

// // const   = () => {

// //     return (
// //         <>
// //             <Navbar/>
// //             <div className="container py-5">

// //                 {/* <!-- Tabs navs --> */}
// //                 <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
// //                 <li className="nav-item" role="presentation">
// //                     <a
// //                     className="nav-link active"
// //                     id="ex1-tab-1"
// //                     data-mdb-toggle="tab"
// //                     href="#ex1-tabs-1"
// //                     role="tab"
// //                     aria-controls="ex1-tabs-1"
// //                     aria-selected="true"
// //                     >Tab 1</a>
// //                 </li>
// //                 <li className="nav-item" role="presentation">
// //                     <a
// //                     className="nav-link"
// //                     id="ex1-tab-2"
// //                     data-mdb-toggle="tab"
// //                     href="#ex1-tabs-2"
// //                     role="tab"
// //                     aria-controls="ex1-tabs-2"
// //                     aria-selected="false"
// //                     >Tab 2</a>
// //                 </li>
// //                 <li className="nav-item" role="presentation">
// //                     <a
// //                     className="nav-link"
// //                     id="ex1-tab-3"
// //                     data-mdb-toggle="tab"
// //                     href="#ex1-tabs-3"
// //                     role="tab"
// //                     aria-controls="ex1-tabs-3"
// //                     aria-selected="false"
// //                     >Tab 3</a>
// //                 </li>
// //                 </ul>
// //                 {/* <!-- Tabs navs --> */}

// //                 {/* <!-- Tabs content --> */}
// //                 <div className="tab-content" id="ex1-content">
// //                 <div
// //                     className="tab-pane fade show active"
// //                     id="ex1-tabs-1"
// //                     role="tabpanel"
// //                     aria-labelledby="ex1-tab-1"
// //                 >
// //                     Tab 1 content
// //                 </div>
// //                 <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
// //                     Tab 2 content
// //                 </div>
// //                 <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
// //                     Tab 3 content
// //                 </div>
// //                 </div>
// //                 {/* <!-- Tabs content --> */}
// //             </div>
// //             <Footer/>
// //         </>
// //     );
// // };
// // export default CourseDetailsTab;

// // import "mdb-react-ui-kit"
// // import Navbar from '../../header/navbar';



// // const Panelpage = () => {

    
// //     return (
// //         <>
// //             <Navbar/>
// //             <div className="container">
// //                 <div className="row">
// //                     <div className="col-xl-4 d-fixed">

// //                         <div>
// //                             <p></p>
// //                             <p></p>
// //                         </div>
// //                         <div>
// //                             <div className="accordion" id="accordionExampleY">
// //                                 <div className="accordion-item">
// //                                     <h2 className="accordion-header" id="headingOneY">
// //                                         <button className="accordion-button" type="button" data-mdb-toggle="collapse"
// //                                             data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
// //                                             <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #1
// //                                         </button>
// //                                     </h2>
// //                                     <div id="collapseOneY" className="accordion-collapse collapse show" aria-labelledby="headingOneY"
// //                                         data-mdb-parent="#accordionExampleY">
// //                                         <div className="accordion-body">
// //                                             <strong>This is the first item's accordion body.</strong> It is hidden by
// //                                             default, until the collapse plugin adds the appropriate classNamees that we use to
// //                                             style each element. These classNamees control the overall appearance, as well as
// //                                             the showing and hiding via CSS transitions. You can modify any of this with
// //                                             custom CSS or overriding our default variables. It's also worth noting that
// //                                             just about any HTML can go within the <code>.accordion-body</code>, though the
// //                                             transition does limit overflow.
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                                 <div className="accordion-item">
// //                                     <h2 className="accordion-header" id="headingTwoY">
// //                                         <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
// //                                             data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
// //                                             <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #2
// //                                         </button>
// //                                     </h2>
// //                                     <div id="collapseTwoY" className="accordion-collapse collapse" aria-labelledby="headingTwoY"
// //                                         data-mdb-parent="#accordionExampleY">
// //                                         <div className="accordion-body">
// //                                             <strong>This is the second item's accordion body.</strong> It is hidden by
// //                                             default, until the collapse plugin adds the appropriate classNamees that we use to
// //                                             style each element. These classNamees control the overall appearance, as well as
// //                                             the showing and hiding via CSS transitions. You can modify any of this with
// //                                             custom CSS or overriding our default variables. It's also worth noting that
// //                                             just about any HTML can go within the <code>.accordion-body</code>, though the
// //                                             transition does limit overflow.
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                                 <div className="accordion-item">
// //                                     <h2 className="accordion-header" id="headingThreeY">
// //                                         <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
// //                                             data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
// //                                             <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #3
// //                                         </button>
// //                                     </h2>
// //                                     <div id="collapseThreeY" className="accordion-collapse collapse" aria-labelledby="headingThreeY"
// //                                         data-mdb-parent="#accordionExampleY">
// //                                         <div className="accordion-body">
// //                                             <strong>This is the third item's accordion body.</strong> It is hidden by
// //                                             default, until the collapse plugin adds the appropriate classNamees that we use to
// //                                             style each element. These classNamees control the overall appearance, as well as
// //                                             the showing and hiding via CSS transitions. You can modify any of this with
// //                                             custom CSS or overriding our default variables. It's also worth noting that
// //                                             just about any HTML can go within the <code>.accordion-body</code>, though the
// //                                             transition does limit overflow.
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="col-xl-8"></div>
// //                 </div>
// //             </div>

// //         </>
// //     );
// // }

// // export default Panelpage;