// import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
// import { useState } from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import Commentinput from '../../CourseDetails/comentinput';
// import Comments from '../../CourseDetails/comments';
// import Newsdetaile from '../../newspage/newsdetaile';

// function AllCollapseExample() {
//     const [basicActive, setBasicActive] = useState('tab1');

//     const handleBasicClick = (value) => {
//         if (value === basicActive) {
//         return;
//         }

//         setBasicActive(value);
//     };
// return (
//     ///////courses accardion///////
//     <Accordion>
//     <Accordion.Item eventKey="0">
//         <Accordion.Header>دوره ها</Accordion.Header>
//         <Accordion.Body>
//             <MDBTabs style={{'padding':'0'}}>

//             <MDBTabsItem >
//                 <MDBTabsLink  onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} className="nazitabhover">
//                 لیست دوره ها

//                 </MDBTabsLink>
//             </MDBTabsItem>

//             <MDBTabsItem >
//                 <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}className="nazitabhover">
//                     دوره های من
//                 </MDBTabsLink>
//             </MDBTabsItem>
//             {/* put a tost for the users who are not signed in */}

//             <MDBTabsItem  >
//                 <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}className="nazitabhover" >
//                     خرید دوره   
//                 </MDBTabsLink>
//             </MDBTabsItem>

//             </MDBTabs>

//             <MDBTabsContent style={{'background-color': '#F3F3F3'}}>
//                 <MDBTabsPane show={basicActive === 'tab1'} className="py-5 px-3">
//                     item1
//                 </MDBTabsPane>
//                 <MDBTabsPane show={basicActive === 'tab2'} className="py-5 px-3 ">
//                     <Comments/>
//                 </MDBTabsPane>
//                 <MDBTabsPane show={basicActive === 'tab3'} style={{'background-color': '#F3F3F3'}}>
//                     <Commentinput/>
//                 </MDBTabsPane>
//             </MDBTabsContent>
//         </Accordion.Body>
//     </Accordion.Item>
    
//     </Accordion>
//     ////////courses accardion////////
// );
// }

// export default AllCollapseExample;