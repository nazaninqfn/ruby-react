import React from "react";
import {
  Container,
  Card,
  Title,
  
  Imgcard,
} from "./herosection.style";
import { Button3 } from "../../as/rigester/buttons";
import { Link } from "react-router-dom";
import "./herosection.css";
import { Arrowimage } from "../newssection/newssection.style";
import Heroanimation from "./animation/heroanimation";
import Heroriponsivemode from "./animation/responsivemod";
const Herosection = () => {
  return (
    <React.StrictMode>
      {/* <Designorg className="designorg">
        <Design1 className="designorg" src={"../image/disignorg.png"} />
      </Designorg> */}

      <section className="intro">
      {/* <Designorg>
        <Design1 src={"../image/disignorg.png"} />
      </Designorg> */}
        <Container className="container">
          <Card className="row mt-5 d-flex justify-content-between ">
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-6 herosectionmp">
                <h1 className="d-inline pajohesh">پژوهشگاه</h1>

                <Title className="sepehr"> سپهر</Title>
                <p className="my-4 col-sm-10 introtext">
                  پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و
                  همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و
                  امید داریم بتوانیم با راه کارهای نوین فرصتی برای افراد خواهان
                  پیشرفت فراهم کنیم
                </p>

                <Link to="/rigesterform" className="link-light ">
                  <Button3 className="btn3 " href="#">مشاهده بیشتر</Button3>
                </Link>

                <Link to="newsdetailetab btna">
                  <a
                    href="/"
                    className="position-absolute bottom-0 start-0 mx-3 mt-5  btna"
                  >
                    <Arrowimage className=" btna" src="image/left-arrow.png" alt="arrow"></Arrowimage>
                  </a>
                </Link>

            </div>
          <Imgcard className="col-xl-6 col-lg-6 col-md-6 col-sm-12 herosectionimgmp ">
              <div className="HIl"><Heroanimation/></div>
              <div className="HIm"><Heroriponsivemode/></div>
          </Imgcard> 
          </Card>
        </Container>
      </section>
    </React.StrictMode>
  );
};
export default Herosection;

