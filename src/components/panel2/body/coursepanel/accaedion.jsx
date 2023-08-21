import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";
import { Data } from "../../menu/data";
import BuyCoursepanel from "./buycourse";
// import Courselistpanel from './coursepanellist';
import MyCoursepanel from "./mycoursepanel";

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          {Data.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path}>
                  <img src={item.img} alt="icon" />
                  <span className="text-light"> {item.titel}</span>
                </NavLink>
              </li>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <MyCoursepanel />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          <BuyCoursepanel />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
