import React from "react";
import { Link } from "react-router-dom";

import { Content, GlobalStyle } from "../form/formBack";
import { Button4 } from "../rigester/buttons";
import Erroranimation from "./animation/erroeanimation";

class Error extends React.Component {
render() {
    return (
        <div className="container">
            <div className="row">
                <GlobalStyle whiteColor />
                <Content>
                    <div className="container  d-flex justify-content-center ">
                        <div className="col-xl-10">
                            <div  className="  row d-flex justify-content-center">
                                
                                <div className="col-xl-8" >  <Erroranimation/></div> 
                          
                        
                                <div className=" d-flex justify-content-center"> 
                                    <div>صفحه یافت نشد</div>
                                </div>
                                <div className="d-flex justify-content-center">
                                        <Link to="/" className="link-light ">
                                        <Button4 className="my-3">صفحه اصلی</Button4>
                                        </Link>
                                    
                                </div>
                            
                            </div>
                        </div>    
                    </div>
                </Content>
            </div>
        </div>
    );}
}
export default Error;