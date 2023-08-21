import { NavDropdown } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
return (
    <Accordion  className="navacardion col-4">
    <Accordion.Item eventKey="0" >
        <Accordion.Header className='tamas btn-link'>تماس با ما</Accordion.Header>
        <Accordion.Body className='acardionpadding'>
            <NavDropdown.Item href="#action/3.1"className='p-0'>
            <p className="text-dark">
                <img
                src="../image/icons-1-2.png"
                alt="fi"
                className="ms-2 mb-1"
                style={{ width: 20 }}
                />
                + 01 234 567 88
            </p>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <p className="text-dark">
            <img
                src="../image/icons-2 -2.png"
                alt="fi"
                className="ms-2 mb-1"
                style={{ width: 20 }}
            />
            info@example.com
            </p>
            </NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                <div >
                <a href="https://maps.windows.com/?form=WNAMSH&collection=point.36.597632_53.06462_Point">
                    <img
                    src="../image/location2.png"
                    alt="fi"
                    className="ms-2 mb-1"
                    style={{ width: 20 }}
                    />
                    <h6 className="flink text-dark">
                    ادرس پژوهشگاه 
                    </h6>
                </a>
                </div>
            
            </NavDropdown.Item>
        </Accordion.Body>
    </Accordion.Item>
    
    </Accordion>
);
}

export default AllCollapseExample;